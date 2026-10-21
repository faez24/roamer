<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Paket eSIM data internasional untuk 100+ negara. Pilih tujuan, bayar, scan QR code, langsung online tanpa ganti SIM.">
    <meta name="theme-color" content="#FFFFFF">
    <meta property="og:title" content="Roamer.id - Paket Data Internasional">
    <meta property="og:description" content="Internet cepat di 100+ negara, tanpa ganti SIM.">
    <meta property="og:type" content="website">

    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://flagcdn.com" crossorigin>

    <script>
        (function () {
            var el = document.documentElement;
            try {
                var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                var seen = sessionStorage.getItem('roamer-intro') === '1' && location.search.indexOf('intro') === -1;
                if (!reduced && !seen) {
                    el.dataset.intro = 'playing';
                    // safety net: never leave the page locked if the intro script fails
                    setTimeout(function () { if (el.dataset.intro !== 'done') el.dataset.intro = 'done'; }, 8000);
                }
            } catch (e) {}
        })();
    </script>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>
<body class="font-sans antialiased bg-white text-midnight">
    @inertia
</body>
</html>
