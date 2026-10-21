import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../../lib/useInView';

// Two or three satin ribbons that twist and drift slowly. Each is a 2D band whose width follows a
// rotation angle, shaded with a tiny studio environment so it reads as polished chrome. No libraries.
const VERT = 'attribute vec2 a; void main() { gl_Position = vec4(a, 0.0, 1.0); }';

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

const vec3 ORANGE = vec3(1.0, 0.31, 0.0);

vec4 ribbon(vec2 p, float seed, float t, float yOff, float widthScale, float accent, out float outShadow) {
    float ph = seed * 6.2831;
    float c = yOff
        + 0.36 * sin(p.x * 0.95 + t * 0.22 + ph)
        + 0.15 * sin(p.x * 2.10 - t * 0.31 + ph * 1.7)
        + 0.04 * sin(p.x * 4.30 + t * 0.40 + ph * 0.6);

    float twist = p.x * 1.30 + t * 0.34 + ph * 2.0;
    float w = widthScale * (0.04 + 0.21 * abs(cos(twist)));
    float dist = abs(p.y - c);
    float px = 2.0 / u_res.y;
    float cover = 1.0 - smoothstep(w - px, w + px, dist);

    float d = clamp((p.y - c) / max(w, 0.0001), -1.0, 1.0);
    float phi = twist + 0.85 * d;
    float a = 2.0 * phi;

    float env = 0.52 + 0.30 * sin(a + 0.6);
    env += 0.85 * pow(max(cos(a - 0.9), 0.0), 18.0);
    env += 0.55 * pow(max(cos(a + 2.2), 0.0), 12.0);
    env = clamp(env, 0.0, 1.0);

    vec3 low = vec3(0.60, 0.68, 0.78);
    vec3 mid = vec3(0.84, 0.89, 0.94);
    vec3 col = mix(low, mid, smoothstep(0.05, 0.62, env));
    col = mix(col, vec3(1.0), smoothstep(0.62, 1.0, env));

    float warm = pow(max(cos(a - 3.5), 0.0), 20.0) * accent;
    col = mix(col, ORANGE, clamp(warm * 0.85, 0.0, 0.85));

    float rim = smoothstep(0.86, 1.0, abs(d));
    col = mix(col, vec3(1.0), rim * 0.35);

    outShadow = exp(-pow(max(dist - w, 0.0) / 0.07, 2.0)) * (1.0 - cover);
    return vec4(col, cover);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_res;
    float aspect = u_res.x / u_res.y;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 2.0;
    p.x += u_mouse.x * 0.10;
    float t = u_time * 0.42 + u_mouse.x * 0.4;

    // the middle, where the slogan sits, stays gently ghosted so text is always easy to read
    float veil = smoothstep(0.2, 1.0, length((p - vec2(0.0, -0.1)) * vec2(0.5, 0.62)));
    float vis = mix(0.28, 1.0, veil);

    vec3 bg = vec3(1.0);
    vec3 shade = vec3(0.55, 0.63, 0.74);
    float sh;
    vec4 r;

    r = ribbon(p, 0.71, t, 0.42, 0.55, 0.4, sh);
    bg = mix(bg, shade, sh * 0.10 * vis);
    bg = mix(bg, r.rgb, r.a * vis * 0.9);

    r = ribbon(p, 0.37, t, -0.30, 0.78, 1.0, sh);
    bg = mix(bg, shade, sh * 0.12 * vis);
    bg = mix(bg, r.rgb, r.a * vis);

    r = ribbon(p, 0.0, t, 0.06, 1.0, 0.6, sh);
    bg = mix(bg, shade, sh * 0.14 * vis);
    bg = mix(bg, r.rgb, r.a * vis);

    gl_FragColor = vec4(bg, 1.0);
}`;

function compile(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
}

export default function Ribbon({ className = '' }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
        if (!gl) return undefined;

        const vert = compile(gl, gl.VERTEX_SHADER, VERT);
        const frag = compile(gl, gl.FRAGMENT_SHADER, FRAG);
        if (!vert || !frag) return undefined;

        const program = gl.createProgram();
        gl.attachShader(program, vert);
        gl.attachShader(program, frag);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined;
        gl.useProgram(program);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
        const location = gl.getAttribLocation(program, 'a');
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);

        const uRes = gl.getUniformLocation(program, 'u_res');
        const uTime = gl.getUniformLocation(program, 'u_time');
        const uMouse = gl.getUniformLocation(program, 'u_mouse');

        const reduced = prefersReducedMotion();
        let clock = 6; // seconds of animation so far; a pleasant starting pose
        let last = 0;
        let frame = 0;
        let running = false;
        let visible = true;
        const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

        const draw = () => {
            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, clock);
            gl.uniform2f(uMouse, mouse.x, mouse.y);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        };

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            // big canvases render a little smaller; the shapes are soft so it is not noticeable
            const scale = rect.width * rect.height * dpr * dpr > 1.8e6 ? 0.75 : 1;
            canvas.width = Math.max(1, Math.round(rect.width * dpr * scale));
            canvas.height = Math.max(1, Math.round(rect.height * dpr * scale));
            gl.viewport(0, 0, canvas.width, canvas.height);
            draw();
        };

        const loop = (now) => {
            if (!running) return;
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            clock += dt;
            mouse.x += (mouse.tx - mouse.x) * 0.05;
            mouse.y += (mouse.ty - mouse.y) * 0.05;
            draw();
            frame = requestAnimationFrame(loop);
        };
        const start = () => {
            if (running || reduced || !visible || document.hidden) return;
            running = true;
            last = performance.now();
            frame = requestAnimationFrame(loop);
        };
        const stop = () => {
            running = false;
            cancelAnimationFrame(frame);
        };

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        resize();

        const cleanups = [() => ro.disconnect()];

        if (!reduced) {
            const host = canvas.parentElement;
            const onMove = (event) => {
                if (event.pointerType !== 'mouse') return;
                const rect = host.getBoundingClientRect();
                mouse.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
                mouse.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
            };
            host.addEventListener('pointermove', onMove);

            const io = new IntersectionObserver(([entry]) => {
                visible = entry.isIntersecting;
                if (visible) start();
                else stop();
            });
            io.observe(canvas);

            const onVisibility = () => (document.hidden ? stop() : start());
            document.addEventListener('visibilitychange', onVisibility);

            cleanups.push(() => {
                host.removeEventListener('pointermove', onMove);
                io.disconnect();
                document.removeEventListener('visibilitychange', onVisibility);
                stop();
            });
            start();
        }

        return () => {
            cleanups.forEach((fn) => fn());
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, []);

    return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
