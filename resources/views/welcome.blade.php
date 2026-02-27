<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Roamer.id — Paket Data Internasional</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=plus-jakarta-sans:400,500,600,700,800&display=swap" rel="stylesheet" />

    {{-- Tailwind CSS via CDN --}}
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                    },
                    colors: {
                        primary: {
                            DEFAULT: '#FF4F00',
                            light: '#FF7A33',
                            dark: '#D94300',
                        },
                    },
                },
            },
        }
    </script>

    <style>
        /* Safe area for notched devices */
        .safe-area-bottom {
            padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
        }

        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
            -webkit-tap-highlight-color: transparent;
        }

        /* Better touch targets on mobile */
        @media (max-width: 640px) {
            button, a {
                -webkit-touch-callout: none;
            }
        }

        /* Infinite ticker animation */
        @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .ticker-track {
            animation: ticker 40s linear infinite;
        }

        .ticker-track:hover {
            animation-play-state: paused;
        }

        /* Hide scrollbar for horizontal scroll */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
    </style>

    <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="font-sans antialiased bg-white text-gray-900">

    {{-- ========== NAVBAR ========== --}}
    <nav class="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300" id="mainNav">
        <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <a href="#" class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <svg class="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 16.5a11.978 11.978 0 01-8.716-3.747" />
                        </svg>
                    </div>
                    <span class="text-lg font-bold tracking-tight">Roamer<span class="text-primary">.id</span></span>
                </a>

                <div class="hidden md:flex items-center gap-8">
                    <a href="#paket" class="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Paket Data</a>
                    <a href="#faq" class="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
                    <a href="#paket" class="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-[13px] font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                        Beli Sekarang
                    </a>
                </div>

                <button id="mobileMenuBtn" class="md:hidden p-2 -mr-2" aria-label="Menu">
                    <svg id="menuIconOpen" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    <svg id="menuIconClose" class="w-5 h-5 text-gray-700 hidden" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>

        <div id="mobileMenu" class="hidden md:hidden border-t border-gray-100 bg-white">
            <div class="px-5 py-4 space-y-1">
                <a href="#paket" class="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">Paket Data</a>
                <a href="#faq" class="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">FAQ</a>
                <div class="pt-2">
                    <a href="#paket" class="block text-center px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg">Beli Sekarang</a>
                </div>
            </div>
        </div>
    </nav>

    {{-- ========== SECTION 1 — HERO ========== --}}
    <section class="pt-28 pb-10 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50/50 to-white">
        {{-- Decorative globe SVG on the right --}}
        <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] sm:translate-x-1/6 lg:translate-x-0 opacity-[0.18] pointer-events-none">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]">
                <circle cx="300" cy="300" r="280" stroke="#FF4F00" stroke-width="1.5"/>
                <ellipse cx="300" cy="300" rx="180" ry="280" stroke="#FF4F00" stroke-width="1"/>
                <ellipse cx="300" cy="300" rx="90" ry="280" stroke="#FF4F00" stroke-width="0.75"/>
                <path d="M20 300h560" stroke="#FF4F00" stroke-width="1"/>
                <path d="M60 180h480" stroke="#FF4F00" stroke-width="0.75"/>
                <path d="M60 420h480" stroke="#FF4F00" stroke-width="0.75"/>
                <path d="M110 100h380" stroke="#FF4F00" stroke-width="0.5"/>
                <path d="M110 500h380" stroke="#FF4F00" stroke-width="0.5"/>
                {{-- Dotted route paths --}}
                <path d="M180 200 Q300 150 400 220 Q450 280 380 350" stroke="#FF4F00" stroke-width="1.5" stroke-dasharray="6 4" fill="none"/>
                <circle cx="180" cy="200" r="5" fill="#FF4F00"/>
                <circle cx="380" cy="350" r="5" fill="#FF4F00"/>
                <circle cx="400" cy="220" r="3" fill="#FF4F00"/>
            </svg>
        </div>

        <div class="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div class="max-w-3xl">
                <p class="text-sm font-semibold text-primary tracking-wide uppercase">eSIM Data Internasional</p>

                <h1 class="mt-4 text-[2rem] leading-[1.15] sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-gray-900">
                    Internet cepat<br class="hidden sm:block"> di 100+ negara,<br>
                    <span class="text-primary">tanpa ganti SIM.</span>
                </h1>

                <p class="mt-5 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                    Beli paket data, scan QR code, langsung online. Tanpa ribet, tanpa antri, tanpa kartu SIM fisik.
                </p>
            </div>

            {{-- Interactive destination search --}}
            <div class="mt-8 sm:mt-10 max-w-xl" x-data="destinationSearch()">
                <div class="relative">
                    <div class="flex items-center bg-gray-50 border border-gray-200 rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                        <div class="pl-4 pr-2 text-gray-400">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                        </div>
                        <input
                            type="text"
                            x-model="query"
                            @focus="open = true"
                            @click.away="open = false"
                            @keydown.escape="open = false"
                            placeholder="Mau ke mana? Cari negara tujuan..."
                            class="w-full py-3.5 sm:py-4 pr-4 bg-transparent text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none"
                        >
                        <a href="#paket" class="hidden sm:inline-flex items-center gap-1.5 mr-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shrink-0">
                            Cari Paket
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </a>
                    </div>

                    {{-- Dropdown results --}}
                    <div
                        x-show="open && filtered.length > 0"
                        x-transition:enter="transition ease-out duration-150"
                        x-transition:enter-start="opacity-0 -translate-y-1"
                        x-transition:enter-end="opacity-100 translate-y-0"
                        x-transition:leave="transition ease-in duration-100"
                        x-transition:leave-start="opacity-100 translate-y-0"
                        x-transition:leave-end="opacity-0 -translate-y-1"
                        class="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl shadow-gray-200/50 z-40 overflow-hidden max-h-72 overflow-y-auto"
                    >
                        <template x-for="item in filtered" :key="item.code">
                            <a href="#paket" @click="open = false" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                                        <img :src="'https://flagcdn.com/w80/' + item.code.toLowerCase() + '.png'" :alt="item.name" class="w-full h-full object-cover">
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold text-gray-900" x-text="item.name"></p>
                                        <p class="text-xs text-gray-400" x-text="item.spec"></p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="text-sm font-bold text-gray-900" x-text="item.price"></p>
                                    <p class="text-[10px] text-primary font-semibold" x-text="'Hemat ' + item.discount"></p>
                                </div>
                            </a>
                        </template>
                    </div>
                </div>

                {{-- Quick destination chips --}}
                <div class="mt-4 flex flex-wrap gap-2">
                    <span class="text-xs text-gray-400 py-1">Populer:</span>
                    <template x-for="tag in popular" :key="tag">
                        <button
                            @click="query = tag; open = true"
                            class="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                            x-text="tag"
                        ></button>
                    </template>
                </div>
            </div>
        </div>
    </section>

    {{-- Destination ticker --}}
    <div class="border-y border-orange-100/60 bg-gradient-to-r from-orange-50/40 via-white to-orange-50/40 py-3.5 sm:py-4">
        <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 overflow-hidden">
            <div class="ticker-track flex items-center gap-8 sm:gap-12 whitespace-nowrap">
            <template x-for="i in 2" x-data>
                <div class="flex items-center gap-6 sm:gap-10 shrink-0">
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/jp.png" alt="JP" class="w-5 h-3.5 rounded-[2px] object-cover"> Jepang</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/kr.png" alt="KR" class="w-5 h-3.5 rounded-[2px] object-cover"> Korea Selatan</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/th.png" alt="TH" class="w-5 h-3.5 rounded-[2px] object-cover"> Thailand</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/sg.png" alt="SG" class="w-5 h-3.5 rounded-[2px] object-cover"> Singapura</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/us.png" alt="US" class="w-5 h-3.5 rounded-[2px] object-cover"> Amerika Serikat</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/gb.png" alt="GB" class="w-5 h-3.5 rounded-[2px] object-cover"> Inggris</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/tr.png" alt="TR" class="w-5 h-3.5 rounded-[2px] object-cover"> Turki</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/au.png" alt="AU" class="w-5 h-3.5 rounded-[2px] object-cover"> Australia</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/my.png" alt="MY" class="w-5 h-3.5 rounded-[2px] object-cover"> Malaysia</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/vn.png" alt="VN" class="w-5 h-3.5 rounded-[2px] object-cover"> Vietnam</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/fr.png" alt="FR" class="w-5 h-3.5 rounded-[2px] object-cover"> Prancis</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/de.png" alt="DE" class="w-5 h-3.5 rounded-[2px] object-cover"> Jerman</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/it.png" alt="IT" class="w-5 h-3.5 rounded-[2px] object-cover"> Italia</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/es.png" alt="ES" class="w-5 h-3.5 rounded-[2px] object-cover"> Spanyol</span>
                    <span class="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium"><img src="https://flagcdn.com/w40/ca.png" alt="CA" class="w-5 h-3.5 rounded-[2px] object-cover"> Kanada</span>
                </div>
            </template>
            </div>
        </div>
    </div>

    {{-- ========== SECTION 2 — PAKET DATA ========== --}}
    <section id="paket" class="py-16 sm:py-24 lg:py-28 bg-gray-50 relative overflow-hidden"
        x-data="{
            tab: 'asia',
            limit: 5,
            labels: { all: 'Semua Destinasi', asia: 'Asia', eropa: 'Eropa', amerika: 'Amerika' },
            packages: [
                { id: 'my',       label: 'Malaysia',                       codes: ['my'],             region: 'asia',    type: 'eSIM',          start: '9.000' },
                { id: 'my-sg-th', label: 'Malaysia, Singapura, Thailand',  codes: ['my','sg','th'],   region: 'asia',    type: 'eSIM',          start: '11.000' },
                { id: 'jp',       label: 'Jepang',                         codes: ['jp'],             region: 'asia',    type: 'eSIM',          start: '13.000' },
                { id: 'kr',       label: 'Korea Selatan',                  codes: ['kr'],             region: 'asia',    type: 'eSIM',          start: '12.000' },
                { id: 'sg',       label: 'Singapura',                      codes: ['sg'],             region: 'asia',    type: 'eSIM',          start: '10.000' },
                { id: 'th',       label: 'Thailand',                       codes: ['th'],             region: 'asia',    type: 'eSIM',          start: '9.000' },
                { id: 'cn',       label: 'China',                          codes: ['cn'],             region: 'asia',    type: 'eSIM',          start: '15.000' },
                { id: 'vn',       label: 'Vietnam',                        codes: ['vn'],             region: 'asia',    type: 'eSIM',          start: '9.000' },
                { id: 'in',       label: 'India',                          codes: ['in'],             region: 'asia',    type: 'eSIM',          start: '11.000' },
                { id: 'asia-8',   label: 'Asia 8 Negara',                  codes: ['my','sg','th','jp','kr','vn','cn','in'], region: 'asia', type: 'eSIM Regional', start: '25.000' },
                { id: 'gb',       label: 'Inggris',                        codes: ['gb'],             region: 'eropa',   type: 'eSIM',          start: '18.000' },
                { id: 'fr',       label: 'Prancis',                        codes: ['fr'],             region: 'eropa',   type: 'eSIM',          start: '18.000' },
                { id: 'de',       label: 'Jerman',                         codes: ['de'],             region: 'eropa',   type: 'eSIM',          start: '19.000' },
                { id: 'it',       label: 'Italia',                         codes: ['it'],             region: 'eropa',   type: 'eSIM',          start: '17.000' },
                { id: 'es',       label: 'Spanyol',                        codes: ['es'],             region: 'eropa',   type: 'eSIM',          start: '17.000' },
                { id: 'tr',       label: 'Turki',                          codes: ['tr'],             region: 'eropa',   type: 'eSIM',          start: '14.000' },
                { id: 'eu-west',  label: 'Eropa Barat 6 Negara',          codes: ['gb','fr','de','it','es','nl'], region: 'eropa', type: 'eSIM Regional', start: '30.000' },
                { id: 'eu-all',   label: 'Eropa 30+ Negara',              codes: ['gb','fr','de','it','es','nl','ch','at'], region: 'eropa', type: 'eSIM Regional', start: '45.000' },
                { id: 'us',       label: 'Amerika Serikat',                codes: ['us'],             region: 'amerika', type: 'eSIM',          start: '15.000' },
                { id: 'ca',       label: 'Kanada',                         codes: ['ca'],             region: 'amerika', type: 'eSIM',          start: '18.000' },
                { id: 'mx',       label: 'Meksiko',                        codes: ['mx'],             region: 'amerika', type: 'eSIM',          start: '13.000' },
                { id: 'br',       label: 'Brasil',                         codes: ['br'],             region: 'amerika', type: 'eSIM',          start: '16.000' },
                { id: 'us-ca',    label: 'Amerika Serikat, Kanada',        codes: ['us','ca'],        region: 'amerika', type: 'eSIM',          start: '22.000' },
                { id: 'latam',    label: 'Amerika Latin 5 Negara',         codes: ['mx','br','ar','cl','co'], region: 'amerika', type: 'eSIM Regional', start: '28.000' },
            ],
            get allFiltered() {
                return this.tab === 'all' ? this.packages : this.packages.filter(p => p.region === this.tab);
            },
            get filtered() {
                return this.allFiltered.slice(0, this.limit);
            },
            get hasMore() {
                return this.allFiltered.length > this.limit;
            },
            get remaining() {
                return this.allFiltered.length - this.limit;
            },
            get ctaLabel() {
                return this.tab === 'all' ? 'Lihat semua destinasi' : 'Lihat paket ' + this.labels[this.tab];
            },
            switchTab(key) { this.tab = key; this.limit = 5; },
            showMore() { this.limit += 5; }
        }"
    >
        <div class="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

            {{-- Header --}}
            <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-14">
                <div>
                    <div class="flex items-center gap-2.5 mb-3">
                        <div class="w-1.5 h-6 rounded-full bg-primary"></div>
                        <span class="text-xs font-bold text-primary uppercase tracking-widest">Paket Data</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">Destinasi populer</h2>
                    <p class="mt-2.5 text-sm sm:text-base text-gray-500 max-w-md">Pilih negara tujuan, bayar, dan langsung online. Semudah itu.</p>
                </div>

                {{-- Filter tabs --}}
                <div class="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1 shrink-0 self-start sm:self-auto shadow-sm">
                    <template x-for="key in ['all','asia','eropa','amerika']" :key="key">
                        <button @click="switchTab(key)" :class="tab === key ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'" class="px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer" x-text="labels[key]"></button>
                    </template>
                </div>
            </div>

            {{-- Cards grid --}}
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                <template x-for="pkg in filtered" :key="pkg.id">
                    <a href="#" class="group block relative">
                        {{-- Flag banner --}}
                        <div class="relative overflow-hidden rounded-t-2xl h-24 sm:h-28">
                            {{-- Single country: full flag --}}
                            <template x-if="pkg.codes.length === 1">
                                <img :src="'https://flagcdn.com/w320/' + pkg.codes[0] + '.png'" :alt="pkg.label" class="w-full h-full object-cover">
                            </template>
                            {{-- Multi country: dark bg with overlapping flag circles --}}
                            <template x-if="pkg.codes.length > 1">
                                <div class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                    <div class="flex items-center -space-x-2">
                                        <template x-for="(c, i) in pkg.codes.slice(0, 5)" :key="c">
                                            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-lg ring-1 ring-black/10 relative" :style="'z-index:' + (10 - i)">
                                                <img :src="'https://flagcdn.com/w80/' + c + '.png'" :alt="c" class="w-full h-full object-cover">
                                            </div>
                                        </template>
                                        <template x-if="pkg.codes.length > 5">
                                            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center relative" style="z-index:1">
                                                <span class="text-[10px] font-bold text-white" x-text="'+' + (pkg.codes.length - 5)"></span>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </template>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                            {{-- Type badge --}}
                            <span class="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wide text-white"
                                  :class="pkg.type === 'eSIM Regional' ? 'bg-violet-500/90' : 'bg-emerald-500/90'"
                                  x-text="pkg.type"></span>
                            {{-- Label on flag --}}
                            <h3 class="absolute bottom-2.5 left-3 right-3 text-sm sm:text-base font-bold text-white drop-shadow-md truncate" x-text="pkg.label"></h3>
                        </div>
                        {{-- Card body --}}
                        <div class="bg-white border border-t-0 border-gray-200/80 rounded-b-2xl px-3.5 py-3 sm:px-4 sm:py-3.5 group-hover:border-primary/30 transition-colors">
                            <p class="text-[10px] sm:text-[11px] text-gray-400 mb-0.5">Mulai dari</p>
                            <div class="flex items-baseline justify-between">
                                <span class="text-base sm:text-lg font-extrabold text-gray-900">Rp <span x-text="pkg.start"></span></span>
                                <span class="text-primary text-xs font-semibold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex items-center gap-0.5">
                                    Lihat
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                                </span>
                            </div>
                        </div>
                    </a>
                </template>
            </div>

            {{-- Load more button --}}
            <div x-show="hasMore" class="mt-6 sm:mt-8 text-center">
                <button @click="showMore()" class="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-sm font-semibold text-gray-700 rounded-xl hover:border-primary/30 hover:text-primary transition-all cursor-pointer shadow-sm">
                    <span>Lihat lainnya</span>
                    <span class="text-xs text-gray-400 font-normal" x-text="'(' + remaining + ' lagi)'"></span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
            </div>

            {{-- Bottom CTA --}}
            <div class="mt-10 sm:mt-14 text-center">
                <button class="inline-flex items-center gap-2.5 px-7 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-lg shadow-primary/20">
                    <span x-text="ctaLabel"></span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
            </div>
        </div>
    </section>

    {{-- ========== SECTION 3 — TESTIMONI VIDEO ========== --}}
    <section class="py-16 sm:py-24 lg:py-28 bg-gray-50 overflow-hidden">
        <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

            {{-- Header --}}
            <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
                <div>
                    <div class="flex items-center gap-2.5 mb-3">
                        <div class="w-1.5 h-6 rounded-full bg-primary"></div>
                        <span class="text-xs font-bold text-primary uppercase tracking-widest">Testimoni</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">Cerita mereka pakai Roamer.id</h2>
                    <p class="mt-2.5 text-sm sm:text-base text-gray-500 max-w-md">Pengalaman nyata dari traveler yang sudah merasakan kemudahan eSIM Roamer.id.</p>
                </div>
                <a href="#" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors shrink-0">
                    Lihat semua
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                </a>
            </div>

            {{-- Video cards — horizontal scroll on mobile, grid on desktop --}}
            <div class="flex gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory scrollbar-hide"
                 style="-webkit-overflow-scrolling: touch; scrollbar-width: none; -ms-overflow-style: none;">

                {{-- Card 1 --}}
                <a href="https://youtube.com/shorts/" target="_blank" rel="noopener noreferrer"
                   class="group relative shrink-0 w-[200px] sm:w-auto aspect-[9/14] rounded-2xl overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600 snap-start cursor-pointer">
                    {{-- Thumbnail placeholder --}}
                    <div class="absolute inset-0 bg-[url('https://flagcdn.com/w640/jp.png')] bg-cover bg-center opacity-30"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {{-- Play button --}}
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200">
                            <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>

                    {{-- Shorts badge --}}
                    <div class="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-red-500 rounded-md">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22.97.22 1.49V12c0 .52-.09 1.02-.22 1.49-.22.82-.79 1.46-1.57 1.71-.47.16-.97.22-1.49.22H5.5c-.52 0-1.02-.06-1.49-.22-.78-.25-1.35-.89-1.57-1.71C2.31 13.02 2.22 12.52 2.22 12V9.66c0-.52.09-1.02.22-1.49.22-.82.79-1.46 1.57-1.71C4.48 6.3 4.98 6.22 5.5 6.22h13c.52 0 1.02.08 1.49.24.78.25 1.35.89 1.57 1.71z"/></svg>
                        <span class="text-[10px] font-bold text-white">Shorts</span>
                    </div>

                    {{-- Country badge --}}
                    <div class="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
                        <img src="https://flagcdn.com/w40/jp.png" alt="JP" class="w-4 h-3 rounded-[1px] object-cover">
                        <span class="text-[10px] font-semibold text-white">Jepang</span>
                    </div>

                    {{-- Info --}}
                    <div class="absolute bottom-0 left-0 right-0 p-3.5">
                        <p class="text-[11px] text-white/60 leading-snug mb-1.5 line-clamp-2">"Internet lancar banget di Tokyo, streaming & maps jalan terus!"</p>
                        <div class="flex items-center gap-2">
                            <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white">AR</div>
                            <div>
                                <p class="text-xs font-semibold text-white leading-tight">Andi Rahmat</p>
                                <p class="text-[10px] text-white/50">eSIM Jepang 5GB</p>
                            </div>
                        </div>
                    </div>
                </a>

                {{-- Card 2 --}}
                <a href="https://youtube.com/shorts/" target="_blank" rel="noopener noreferrer"
                   class="group relative shrink-0 w-[200px] sm:w-auto aspect-[9/14] rounded-2xl overflow-hidden bg-gradient-to-br from-rose-400 to-pink-600 snap-start cursor-pointer">
                    <div class="absolute inset-0 bg-[url('https://flagcdn.com/w640/kr.png')] bg-cover bg-center opacity-30"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200">
                            <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>

                    <div class="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-red-500 rounded-md">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22.97.22 1.49V12c0 .52-.09 1.02-.22 1.49-.22.82-.79 1.46-1.57 1.71-.47.16-.97.22-1.49.22H5.5c-.52 0-1.02-.06-1.49-.22-.78-.25-1.35-.89-1.57-1.71C2.31 13.02 2.22 12.52 2.22 12V9.66c0-.52.09-1.02.22-1.49.22-.82.79-1.46 1.57-1.71C4.48 6.3 4.98 6.22 5.5 6.22h13c.52 0 1.02.08 1.49.24.78.25 1.35.89 1.57 1.71z"/></svg>
                        <span class="text-[10px] font-bold text-white">Shorts</span>
                    </div>

                    <div class="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
                        <img src="https://flagcdn.com/w40/kr.png" alt="KR" class="w-4 h-3 rounded-[1px] object-cover">
                        <span class="text-[10px] font-semibold text-white">Korea</span>
                    </div>

                    <div class="absolute bottom-0 left-0 right-0 p-3.5">
                        <p class="text-[11px] text-white/60 leading-snug mb-1.5 line-clamp-2">"Aktivasi cuma 2 menit! Sampai Incheon langsung bisa pakai."</p>
                        <div class="flex items-center gap-2">
                            <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white">DS</div>
                            <div>
                                <p class="text-xs font-semibold text-white leading-tight">Dina Safira</p>
                                <p class="text-[10px] text-white/50">eSIM Korea 3GB</p>
                            </div>
                        </div>
                    </div>
                </a>

                {{-- Card 3 --}}
                <a href="https://youtube.com/shorts/" target="_blank" rel="noopener noreferrer"
                   class="group relative shrink-0 w-[200px] sm:w-auto aspect-[9/14] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-400 to-orange-600 snap-start cursor-pointer">
                    <div class="absolute inset-0 bg-[url('https://flagcdn.com/w640/th.png')] bg-cover bg-center opacity-30"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200">
                            <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>

                    <div class="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-red-500 rounded-md">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22.97.22 1.49V12c0 .52-.09 1.02-.22 1.49-.22.82-.79 1.46-1.57 1.71-.47.16-.97.22-1.49.22H5.5c-.52 0-1.02-.06-1.49-.22-.78-.25-1.35-.89-1.57-1.71C2.31 13.02 2.22 12.52 2.22 12V9.66c0-.52.09-1.02.22-1.49.22-.82.79-1.46 1.57-1.71C4.48 6.3 4.98 6.22 5.5 6.22h13c.52 0 1.02.08 1.49.24.78.25 1.35.89 1.57 1.71z"/></svg>
                        <span class="text-[10px] font-bold text-white">Shorts</span>
                    </div>

                    <div class="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
                        <img src="https://flagcdn.com/w40/th.png" alt="TH" class="w-4 h-3 rounded-[1px] object-cover">
                        <span class="text-[10px] font-semibold text-white">Thailand</span>
                    </div>

                    <div class="absolute bottom-0 left-0 right-0 p-3.5">
                        <p class="text-[11px] text-white/60 leading-snug mb-1.5 line-clamp-2">"Dari Bangkok sampe Chiang Mai sinyal stabil. Recommended!"</p>
                        <div class="flex items-center gap-2">
                            <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white">BW</div>
                            <div>
                                <p class="text-xs font-semibold text-white leading-tight">Bayu Wicaksono</p>
                                <p class="text-[10px] text-white/50">eSIM Thailand 10GB</p>
                            </div>
                        </div>
                    </div>
                </a>

                {{-- Card 4 --}}
                <a href="https://youtube.com/shorts/" target="_blank" rel="noopener noreferrer"
                   class="group relative shrink-0 w-[200px] sm:w-auto aspect-[9/14] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-600 snap-start cursor-pointer">
                    <div class="absolute inset-0 bg-[url('https://flagcdn.com/w640/sg.png')] bg-cover bg-center opacity-30"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200">
                            <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>

                    <div class="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-red-500 rounded-md">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22.97.22 1.49V12c0 .52-.09 1.02-.22 1.49-.22.82-.79 1.46-1.57 1.71-.47.16-.97.22-1.49.22H5.5c-.52 0-1.02-.06-1.49-.22-.78-.25-1.35-.89-1.57-1.71C2.31 13.02 2.22 12.52 2.22 12V9.66c0-.52.09-1.02.22-1.49.22-.82.79-1.46 1.57-1.71C4.48 6.3 4.98 6.22 5.5 6.22h13c.52 0 1.02.08 1.49.24.78.25 1.35.89 1.57 1.71z"/></svg>
                        <span class="text-[10px] font-bold text-white">Shorts</span>
                    </div>

                    <div class="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
                        <img src="https://flagcdn.com/w40/sg.png" alt="SG" class="w-4 h-3 rounded-[1px] object-cover">
                        <span class="text-[10px] font-semibold text-white">Singapura</span>
                    </div>

                    <div class="absolute bottom-0 left-0 right-0 p-3.5">
                        <p class="text-[11px] text-white/60 leading-snug mb-1.5 line-clamp-2">"Harga paling murah dibanding beli SIM di bandara. Worth it!"</p>
                        <div class="flex items-center gap-2">
                            <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white">NP</div>
                            <div>
                                <p class="text-xs font-semibold text-white leading-tight">Nadia Putri</p>
                                <p class="text-[10px] text-white/50">eSIM Singapura 3GB</p>
                            </div>
                        </div>
                    </div>
                </a>

            </div>

            {{-- Mobile "Lihat semua" link --}}
            <div class="mt-6 text-center sm:hidden">
                <a href="#" class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Lihat semua testimoni
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                </a>
            </div>
        </div>
    </section>

    {{-- ========== KUOTAUMROH CTA ========== --}}
    <section class="relative bg-cover bg-[center_60%] lg:bg-[center_40%] bg-no-repeat" style="background-image: url('/images/kuotaumroh.png');">
        {{-- Dark overlay with gradient for better text readability --}}
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-950/70 to-emerald-950/50 lg:from-emerald-950/80 lg:via-emerald-950/55 lg:to-emerald-950/30"></div>

        {{-- Wave top --}}
        <div class="relative z-10">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-[40px] sm:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
                <path d="M0 0H1440V60C1200 110 960 30 720 60C480 90 240 20 0 70V0Z" class="fill-gray-50"/>
            </svg>
        </div>

        <div class="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
            <div class="max-w-xl lg:max-w-2xl">
                <p class="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Paket Umroh & Haji</p>

                <h2 class="mt-4 sm:mt-5 text-[1.75rem] sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                    Pergi umroh?<br>
                    Paket data Arab Saudi<br>
                    ada di <span class="text-emerald-300">kuotaumroh.id</span>
                </h2>

                <p class="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-md lg:max-w-lg">
                    Paket data khusus jamaah dengan coverage Makkah & Madinah. Harga terjangkau, aktivasi mudah.
                </p>

                <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start gap-3">
                    <a href="https://kuotaumroh.id" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-emerald-900 text-sm sm:text-base font-bold rounded-xl hover:bg-emerald-50 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5">
                        Kunjungi kuotaumroh.id
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                </div>
            </div>
        </div>

        {{-- Wave bottom --}}
        <div class="relative z-10">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-[40px] sm:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
                <path d="M0 120H1440V60C1200 10 960 90 720 60C480 30 240 100 0 50V120Z" class="fill-white"/>
            </svg>
        </div>
    </section>

    {{-- ========== SECTION 4 — FAQ ========== --}}
    <section id="faq" class="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
        {{-- Subtle decorative dot pattern --}}
        <div class="absolute top-0 right-0 w-72 h-72 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(circle, #FF4F00 1px, transparent 1px); background-size: 24px 24px;"></div>
        <div class="absolute bottom-0 left-0 w-72 h-72 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(circle, #FF4F00 1px, transparent 1px); background-size: 24px 24px;"></div>

        <div class="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            {{-- 2-column layout: Left sticky header, Right accordion --}}
            <div class="lg:grid lg:grid-cols-5 lg:gap-16 xl:gap-20">

                {{-- Left column — Sticky header --}}
                <div class="lg:col-span-2 lg:sticky lg:top-28 lg:self-start mb-10 sm:mb-14 lg:mb-0">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full mb-5">
                        <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                        <span class="text-xs font-semibold text-primary">FAQ</span>
                    </div>

                    <h2 class="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-tight leading-tight text-gray-900">
                        Punya<br class="hidden lg:block"> pertanyaan?
                    </h2>
                    <p class="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm">
                        Temukan jawaban untuk pertanyaan yang paling sering diajukan tentang layanan eSIM Roamer.id.
                    </p>

                    {{-- Contact CTA card --}}
                    <div class="mt-6 lg:mt-8 p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-100">
                        <p class="text-[13px] font-medium text-gray-900">Masih ada pertanyaan?</p>
                        <p class="mt-1 text-xs text-gray-400 leading-relaxed">Tim kami siap membantu lewat WhatsApp kapan saja.</p>
                        <a href="#" class="mt-3 inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.764-6.326-2.057l-.161-.121-3.35 1.123 1.123-3.35-.121-.161A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </div>

                {{-- Right column — FAQ cards --}}
                <div class="lg:col-span-3 space-y-3" x-data="{ openFaq: 1 }">

                    {{-- FAQ Item 1 --}}
                    <div class="group rounded-2xl border transition-all duration-300 cursor-pointer"
                         :class="openFaq === 1 ? 'bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/10' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'"
                         @click="openFaq = openFaq === 1 ? null : 1">
                        <div class="px-5 sm:px-6 py-4 sm:py-5">
                            <div class="flex items-start gap-4">
                                <span class="shrink-0 w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center mt-0.5 transition-colors duration-300"
                                      :class="openFaq === 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'">01</span>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-3">
                                        <h3 class="font-semibold text-sm sm:text-[15px] transition-colors duration-300 pr-2"
                                            :class="openFaq === 1 ? 'text-white' : 'text-gray-900'">Apa itu Roamer.id dan bagaimana cara kerjanya?</h3>
                                        <div class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                                             :class="openFaq === 1 ? 'bg-white/10 rotate-180' : 'bg-gray-100'">
                                            <svg class="w-3.5 h-3.5 transition-colors duration-300" :class="openFaq === 1 ? 'text-white' : 'text-gray-400'" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    <div x-show="openFaq === 1" x-collapse>
                                        <p class="mt-3 text-sm text-gray-400 leading-relaxed">Roamer.id adalah platform penjualan paket data internasional (eSIM) yang memungkinkan Anda tetap terhubung ke internet saat bepergian ke luar negeri. Cukup pilih negara tujuan, beli paket, dan scan QR code untuk mengaktifkan eSIM — tanpa perlu ganti kartu SIM fisik!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- FAQ Item 2 --}}
                    <div class="group rounded-2xl border transition-all duration-300 cursor-pointer"
                         :class="openFaq === 2 ? 'bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/10' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'"
                         @click="openFaq = openFaq === 2 ? null : 2">
                        <div class="px-5 sm:px-6 py-4 sm:py-5">
                            <div class="flex items-start gap-4">
                                <span class="shrink-0 w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center mt-0.5 transition-colors duration-300"
                                      :class="openFaq === 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'">02</span>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-3">
                                        <h3 class="font-semibold text-sm sm:text-[15px] transition-colors duration-300 pr-2"
                                            :class="openFaq === 2 ? 'text-white' : 'text-gray-900'">Negara apa saja yang tersedia?</h3>
                                        <div class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                                             :class="openFaq === 2 ? 'bg-white/10 rotate-180' : 'bg-gray-100'">
                                            <svg class="w-3.5 h-3.5 transition-colors duration-300" :class="openFaq === 2 ? 'text-white' : 'text-gray-400'" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    <div x-show="openFaq === 2" x-collapse>
                                        <p class="mt-3 text-sm text-gray-400 leading-relaxed">Roamer.id menyediakan paket data untuk lebih dari 100 negara di seluruh dunia, termasuk Jepang, Korea Selatan, Thailand, Singapura, Amerika Serikat, Inggris, Turki, Australia, dan banyak lagi. Khusus untuk Arab Saudi, silakan kunjungi <a href="https://kuotaumroh.id" target="_blank" class="text-primary hover:underline font-medium">kuotaumroh.id</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- FAQ Item 3 --}}
                    <div class="group rounded-2xl border transition-all duration-300 cursor-pointer"
                         :class="openFaq === 3 ? 'bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/10' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'"
                         @click="openFaq = openFaq === 3 ? null : 3">
                        <div class="px-5 sm:px-6 py-4 sm:py-5">
                            <div class="flex items-start gap-4">
                                <span class="shrink-0 w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center mt-0.5 transition-colors duration-300"
                                      :class="openFaq === 3 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'">03</span>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-3">
                                        <h3 class="font-semibold text-sm sm:text-[15px] transition-colors duration-300 pr-2"
                                            :class="openFaq === 3 ? 'text-white' : 'text-gray-900'">Berapa lama proses aktivasi eSIM?</h3>
                                        <div class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                                             :class="openFaq === 3 ? 'bg-white/10 rotate-180' : 'bg-gray-100'">
                                            <svg class="w-3.5 h-3.5 transition-colors duration-300" :class="openFaq === 3 ? 'text-white' : 'text-gray-400'" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    <div x-show="openFaq === 3" x-collapse>
                                        <p class="mt-3 text-sm text-gray-400 leading-relaxed">Proses aktivasi eSIM sangat cepat! Setelah pembayaran berhasil, Anda akan langsung menerima QR code melalui email dan WhatsApp. Scan QR code tersebut di pengaturan HP Anda, dan eSIM akan aktif dalam hitungan menit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- FAQ Item 4 --}}
                    <div class="group rounded-2xl border transition-all duration-300 cursor-pointer"
                         :class="openFaq === 4 ? 'bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/10' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'"
                         @click="openFaq = openFaq === 4 ? null : 4">
                        <div class="px-5 sm:px-6 py-4 sm:py-5">
                            <div class="flex items-start gap-4">
                                <span class="shrink-0 w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center mt-0.5 transition-colors duration-300"
                                      :class="openFaq === 4 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'">04</span>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-3">
                                        <h3 class="font-semibold text-sm sm:text-[15px] transition-colors duration-300 pr-2"
                                            :class="openFaq === 4 ? 'text-white' : 'text-gray-900'">Apakah HP saya mendukung eSIM?</h3>
                                        <div class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                                             :class="openFaq === 4 ? 'bg-white/10 rotate-180' : 'bg-gray-100'">
                                            <svg class="w-3.5 h-3.5 transition-colors duration-300" :class="openFaq === 4 ? 'text-white' : 'text-gray-400'" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    <div x-show="openFaq === 4" x-collapse>
                                        <p class="mt-3 text-sm text-gray-400 leading-relaxed">Sebagian besar smartphone keluaran terbaru sudah mendukung eSIM, termasuk iPhone XS ke atas, Samsung Galaxy S20 ke atas, Google Pixel 3 ke atas, dan banyak lagi. Pastikan HP Anda tidak dalam status carrier-locked.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- FAQ Item 5 --}}
                    <div class="group rounded-2xl border transition-all duration-300 cursor-pointer"
                         :class="openFaq === 5 ? 'bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/10' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'"
                         @click="openFaq = openFaq === 5 ? null : 5">
                        <div class="px-5 sm:px-6 py-4 sm:py-5">
                            <div class="flex items-start gap-4">
                                <span class="shrink-0 w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center mt-0.5 transition-colors duration-300"
                                      :class="openFaq === 5 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'">05</span>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-3">
                                        <h3 class="font-semibold text-sm sm:text-[15px] transition-colors duration-300 pr-2"
                                            :class="openFaq === 5 ? 'text-white' : 'text-gray-900'">Bagaimana jika kuota habis sebelum masa aktif berakhir?</h3>
                                        <div class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                                             :class="openFaq === 5 ? 'bg-white/10 rotate-180' : 'bg-gray-100'">
                                            <svg class="w-3.5 h-3.5 transition-colors duration-300" :class="openFaq === 5 ? 'text-white' : 'text-gray-400'" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    <div x-show="openFaq === 5" x-collapse>
                                        <p class="mt-3 text-sm text-gray-400 leading-relaxed">Tidak perlu khawatir! Anda bisa membeli paket top-up tambahan langsung melalui website atau aplikasi Roamer.id. Paket top-up akan langsung aktif dan kuota Anda bertambah secara instan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- FAQ Item 6 --}}
                    <div class="group rounded-2xl border transition-all duration-300 cursor-pointer"
                         :class="openFaq === 6 ? 'bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/10' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'"
                         @click="openFaq = openFaq === 6 ? null : 6">
                        <div class="px-5 sm:px-6 py-4 sm:py-5">
                            <div class="flex items-start gap-4">
                                <span class="shrink-0 w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center mt-0.5 transition-colors duration-300"
                                      :class="openFaq === 6 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'">06</span>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-3">
                                        <h3 class="font-semibold text-sm sm:text-[15px] transition-colors duration-300 pr-2"
                                            :class="openFaq === 6 ? 'text-white' : 'text-gray-900'">Metode pembayaran apa saja yang tersedia?</h3>
                                        <div class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                                             :class="openFaq === 6 ? 'bg-white/10 rotate-180' : 'bg-gray-100'">
                                            <svg class="w-3.5 h-3.5 transition-colors duration-300" :class="openFaq === 6 ? 'text-white' : 'text-gray-400'" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    <div x-show="openFaq === 6" x-collapse>
                                        <p class="mt-3 text-sm text-gray-400 leading-relaxed">Roamer.id menerima berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, Dana, ShopeePay), kartu kredit/debit, dan QRIS. Semua transaksi aman dan terenkripsi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    {{-- ========== FOOTER ========== --}}
    <footer class="bg-gray-900 text-gray-400 pb-20 sm:pb-0">
        <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

                <div class="col-span-2 lg:col-span-1">
                    <a href="#" class="flex items-center gap-2.5 mb-4">
                        <div class="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 16.5a11.978 11.978 0 01-8.716-3.747" />
                            </svg>
                        </div>
                        <span class="text-base font-bold text-white">Roamer<span class="text-primary">.id</span></span>
                    </a>
                    <p class="text-xs sm:text-sm leading-relaxed text-gray-500">Paket data internasional terjangkau. Tetap terhubung di mana pun Anda berada.</p>
                </div>

                <div>
                    <h4 class="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Navigasi</h4>
                    <ul class="space-y-2.5">
                        <li><a href="#" class="text-sm text-gray-500 hover:text-white transition-colors">Beranda</a></li>
                        <li><a href="#paket" class="text-sm text-gray-500 hover:text-white transition-colors">Paket Data</a></li>
                        <li><a href="#faq" class="text-sm text-gray-500 hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" class="text-sm text-gray-500 hover:text-white transition-colors">Tentang Kami</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Destinasi</h4>
                    <ul class="space-y-2.5">
                        <li><a href="#" class="text-sm text-gray-500 hover:text-white transition-colors">Jepang</a></li>
                        <li><a href="#" class="text-sm text-gray-500 hover:text-white transition-colors">Korea Selatan</a></li>
                        <li><a href="#" class="text-sm text-gray-500 hover:text-white transition-colors">Thailand</a></li>
                        <li><a href="#" class="text-sm text-gray-500 hover:text-white transition-colors">Singapura</a></li>
                        <li><a href="#" class="text-sm text-gray-500 hover:text-white transition-colors">Amerika Serikat</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Kontak</h4>
                    <ul class="space-y-2.5">
                        <li class="text-sm text-gray-500">hello@roamer.id</li>
                        <li class="text-sm text-gray-500">+62 812 3456 7890</li>
                        <li class="text-sm text-gray-500">Jakarta, Indonesia</li>
                    </ul>
                </div>

            </div>

            <div class="border-t border-gray-800 mt-10 pt-6">
                <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p class="text-xs text-gray-600">&copy; {{ date('Y') }} Roamer.id. Semua hak dilindungi.</p>
                    <div class="flex items-center gap-5">
                        <a href="#" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">Kebijakan Privasi</a>
                        <a href="#" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    {{-- ========== STICKY MOBILE CTA BAR ========== --}}
    <div id="mobileCTA" class="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 px-4 py-3 safe-area-bottom transition-transform duration-300 translate-y-full">
        <div class="flex items-center justify-between gap-3">
            <div class="flex-1 min-w-0">
                <p class="text-[11px] text-gray-400">Mulai dari</p>
                <p class="text-base font-extrabold text-gray-900">Rp 55.000</p>
            </div>
            <a href="#paket" class="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg active:scale-[0.97] transition-transform">
                Beli Sekarang
            </a>
        </div>
    </div>

    <script>
        // Destination search component
        function destinationSearch() {
            return {
                query: '',
                open: false,
                popular: ['Jepang', 'Korea', 'Thailand', 'Singapura', 'USA'],
                destinations: [
                    { code: 'JP', name: 'Jepang', spec: '5 GB · 7 Hari · 4G LTE', price: 'Rp 89.000', discount: '30%' },
                    { code: 'KR', name: 'Korea Selatan', spec: '3 GB · 5 Hari · 4G LTE', price: 'Rp 75.000', discount: '25%' },
                    { code: 'TH', name: 'Thailand', spec: '10 GB · 10 Hari · 4G LTE', price: 'Rp 65.000', discount: '40%' },
                    { code: 'SG', name: 'Singapura', spec: '3 GB · 7 Hari · 5G', price: 'Rp 55.000', discount: '20%' },
                    { code: 'US', name: 'Amerika Serikat', spec: '10 GB · 14 Hari · 5G', price: 'Rp 150.000', discount: '35%' },
                    { code: 'GB', name: 'Inggris', spec: '5 GB · 7 Hari · 4G LTE', price: 'Rp 120.000', discount: '15%' },
                    { code: 'TR', name: 'Turki', spec: '8 GB · 10 Hari · 4G LTE', price: 'Rp 95.000', discount: '20%' },
                    { code: 'AU', name: 'Australia', spec: '7 GB · 10 Hari · 4G LTE', price: 'Rp 110.000', discount: '30%' },
                    { code: 'MY', name: 'Malaysia', spec: '5 GB · 7 Hari · 4G LTE', price: 'Rp 60.000', discount: '25%' },
                    { code: 'VN', name: 'Vietnam', spec: '5 GB · 7 Hari · 4G LTE', price: 'Rp 55.000', discount: '20%' },
                    { code: 'FR', name: 'Prancis', spec: '5 GB · 7 Hari · 4G LTE', price: 'Rp 130.000', discount: '15%' },
                    { code: 'DE', name: 'Jerman', spec: '5 GB · 7 Hari · 4G LTE', price: 'Rp 125.000', discount: '20%' },
                ],
                get filtered() {
                    if (!this.query) return this.destinations.slice(0, 5);
                    const q = this.query.toLowerCase();
                    return this.destinations.filter(d =>
                        d.name.toLowerCase().includes(q) || d.code.toLowerCase().includes(q)
                    );
                }
            }
        }

        // Mobile menu toggle
        const menuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIconOpen = document.getElementById('menuIconOpen');
        const menuIconClose = document.getElementById('menuIconClose');
        let isMenuOpen = false;

        menuBtn?.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            mobileMenu?.classList.toggle('hidden');
            menuIconOpen?.classList.toggle('hidden');
            menuIconClose?.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu?.classList.add('hidden');
                menuIconOpen?.classList.remove('hidden');
                menuIconClose?.classList.add('hidden');
            });
        });

        // Sticky mobile CTA bar
        const mobileCTA = document.getElementById('mobileCTA');

        // Navbar scroll effect
        const mainNav = document.getElementById('mainNav');
        function handleScroll() {
            if (window.scrollY > 60) {
                mainNav?.classList.add('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-gray-100', 'shadow-sm');
                mainNav?.classList.remove('bg-transparent');
            } else {
                mainNav?.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-gray-100', 'shadow-sm');
                mainNav?.classList.add('bg-transparent');
            }

            // Sticky mobile CTA bar
            if (window.scrollY > 400) {
                mobileCTA?.classList.remove('translate-y-full');
                mobileCTA?.classList.add('translate-y-0');
            } else {
                mobileCTA?.classList.add('translate-y-full');
                mobileCTA?.classList.remove('translate-y-0');
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
    </script>
</body>
</html>

