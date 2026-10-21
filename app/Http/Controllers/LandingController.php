<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Landing/Index', [
            'popular' => ['Jepang', 'Korea', 'Thailand', 'Singapura', 'USA'],
            'destinations' => [
                ['code' => 'JP', 'name' => 'Jepang', 'spec' => '5 GB · 7 Hari · 4G LTE', 'price' => 'Rp 89.000', 'discount' => '30%'],
                ['code' => 'KR', 'name' => 'Korea Selatan', 'spec' => '3 GB · 5 Hari · 4G LTE', 'price' => 'Rp 75.000', 'discount' => '25%'],
                ['code' => 'TH', 'name' => 'Thailand', 'spec' => '10 GB · 10 Hari · 4G LTE', 'price' => 'Rp 65.000', 'discount' => '40%'],
                ['code' => 'SG', 'name' => 'Singapura', 'spec' => '3 GB · 7 Hari · 5G', 'price' => 'Rp 55.000', 'discount' => '20%'],
                ['code' => 'US', 'name' => 'Amerika Serikat', 'spec' => '10 GB · 14 Hari · 5G', 'price' => 'Rp 150.000', 'discount' => '35%'],
                ['code' => 'GB', 'name' => 'Inggris', 'spec' => '5 GB · 7 Hari · 4G LTE', 'price' => 'Rp 120.000', 'discount' => '15%'],
                ['code' => 'TR', 'name' => 'Turki', 'spec' => '8 GB · 10 Hari · 4G LTE', 'price' => 'Rp 95.000', 'discount' => '20%'],
                ['code' => 'AU', 'name' => 'Australia', 'spec' => '7 GB · 10 Hari · 4G LTE', 'price' => 'Rp 110.000', 'discount' => '30%'],
                ['code' => 'MY', 'name' => 'Malaysia', 'spec' => '5 GB · 7 Hari · 4G LTE', 'price' => 'Rp 60.000', 'discount' => '25%'],
                ['code' => 'VN', 'name' => 'Vietnam', 'spec' => '5 GB · 7 Hari · 4G LTE', 'price' => 'Rp 55.000', 'discount' => '20%'],
                ['code' => 'FR', 'name' => 'Prancis', 'spec' => '5 GB · 7 Hari · 4G LTE', 'price' => 'Rp 130.000', 'discount' => '15%'],
                ['code' => 'DE', 'name' => 'Jerman', 'spec' => '5 GB · 7 Hari · 4G LTE', 'price' => 'Rp 125.000', 'discount' => '20%'],
            ],
            'ticker' => [
                ['code' => 'jp', 'name' => 'Jepang'],
                ['code' => 'kr', 'name' => 'Korea Selatan'],
                ['code' => 'th', 'name' => 'Thailand'],
                ['code' => 'sg', 'name' => 'Singapura'],
                ['code' => 'us', 'name' => 'Amerika Serikat'],
                ['code' => 'gb', 'name' => 'Inggris'],
                ['code' => 'tr', 'name' => 'Turki'],
                ['code' => 'au', 'name' => 'Australia'],
                ['code' => 'my', 'name' => 'Malaysia'],
                ['code' => 'vn', 'name' => 'Vietnam'],
                ['code' => 'fr', 'name' => 'Prancis'],
                ['code' => 'de', 'name' => 'Jerman'],
                ['code' => 'it', 'name' => 'Italia'],
                ['code' => 'es', 'name' => 'Spanyol'],
                ['code' => 'ca', 'name' => 'Kanada'],
            ],
            'packages' => [
                ['id' => 'my', 'label' => 'Malaysia', 'codes' => ['my'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '9.000'],
                ['id' => 'my-sg-th', 'label' => 'Malaysia, Singapura, Thailand', 'codes' => ['my', 'sg', 'th'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '11.000'],
                ['id' => 'jp', 'label' => 'Jepang', 'codes' => ['jp'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '13.000'],
                ['id' => 'kr', 'label' => 'Korea Selatan', 'codes' => ['kr'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '12.000'],
                ['id' => 'sg', 'label' => 'Singapura', 'codes' => ['sg'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '10.000'],
                ['id' => 'th', 'label' => 'Thailand', 'codes' => ['th'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '9.000'],
                ['id' => 'cn', 'label' => 'China', 'codes' => ['cn'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '15.000'],
                ['id' => 'vn', 'label' => 'Vietnam', 'codes' => ['vn'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '9.000'],
                ['id' => 'in', 'label' => 'India', 'codes' => ['in'], 'region' => 'asia', 'type' => 'eSIM', 'start' => '11.000'],
                ['id' => 'asia-8', 'label' => 'Asia 8 Negara', 'codes' => ['my', 'sg', 'th', 'jp', 'kr', 'vn', 'cn', 'in'], 'region' => 'asia', 'type' => 'eSIM Regional', 'start' => '25.000'],
                ['id' => 'gb', 'label' => 'Inggris', 'codes' => ['gb'], 'region' => 'eropa', 'type' => 'eSIM', 'start' => '18.000'],
                ['id' => 'fr', 'label' => 'Prancis', 'codes' => ['fr'], 'region' => 'eropa', 'type' => 'eSIM', 'start' => '18.000'],
                ['id' => 'de', 'label' => 'Jerman', 'codes' => ['de'], 'region' => 'eropa', 'type' => 'eSIM', 'start' => '19.000'],
                ['id' => 'it', 'label' => 'Italia', 'codes' => ['it'], 'region' => 'eropa', 'type' => 'eSIM', 'start' => '17.000'],
                ['id' => 'es', 'label' => 'Spanyol', 'codes' => ['es'], 'region' => 'eropa', 'type' => 'eSIM', 'start' => '17.000'],
                ['id' => 'tr', 'label' => 'Turki', 'codes' => ['tr'], 'region' => 'eropa', 'type' => 'eSIM', 'start' => '14.000'],
                ['id' => 'eu-west', 'label' => 'Eropa Barat 6 Negara', 'codes' => ['gb', 'fr', 'de', 'it', 'es', 'nl'], 'region' => 'eropa', 'type' => 'eSIM Regional', 'start' => '30.000'],
                ['id' => 'eu-all', 'label' => 'Eropa 30+ Negara', 'codes' => ['gb', 'fr', 'de', 'it', 'es', 'nl', 'ch', 'at'], 'region' => 'eropa', 'type' => 'eSIM Regional', 'start' => '45.000'],
                ['id' => 'us', 'label' => 'Amerika Serikat', 'codes' => ['us'], 'region' => 'amerika', 'type' => 'eSIM', 'start' => '15.000'],
                ['id' => 'ca', 'label' => 'Kanada', 'codes' => ['ca'], 'region' => 'amerika', 'type' => 'eSIM', 'start' => '18.000'],
                ['id' => 'mx', 'label' => 'Meksiko', 'codes' => ['mx'], 'region' => 'amerika', 'type' => 'eSIM', 'start' => '13.000'],
                ['id' => 'br', 'label' => 'Brasil', 'codes' => ['br'], 'region' => 'amerika', 'type' => 'eSIM', 'start' => '16.000'],
                ['id' => 'us-ca', 'label' => 'Amerika Serikat, Kanada', 'codes' => ['us', 'ca'], 'region' => 'amerika', 'type' => 'eSIM', 'start' => '22.000'],
                ['id' => 'latam', 'label' => 'Amerika Latin 5 Negara', 'codes' => ['mx', 'br', 'ar', 'cl', 'co'], 'region' => 'amerika', 'type' => 'eSIM Regional', 'start' => '28.000'],
            ],
            'testimonials' => [
                ['code' => 'jp', 'country' => 'Jepang', 'quote' => 'Internet lancar banget di Tokyo, streaming & maps jalan terus!', 'name' => 'Andi Rahmat', 'initials' => 'AR', 'plan' => 'eSIM Jepang 5GB', 'gradient' => 'from-sky-400 to-blue-600'],
                ['code' => 'kr', 'country' => 'Korea', 'quote' => 'Aktivasi cuma 2 menit! Sampai Incheon langsung bisa pakai.', 'name' => 'Dina Safira', 'initials' => 'DS', 'plan' => 'eSIM Korea 3GB', 'gradient' => 'from-rose-400 to-pink-600'],
                ['code' => 'th', 'country' => 'Thailand', 'quote' => 'Dari Bangkok sampe Chiang Mai sinyal stabil. Recommended!', 'name' => 'Bayu Wicaksono', 'initials' => 'BW', 'plan' => 'eSIM Thailand 10GB', 'gradient' => 'from-amber-400 to-orange-600'],
                ['code' => 'sg', 'country' => 'Singapura', 'quote' => 'Harga paling murah dibanding beli SIM di bandara. Worth it!', 'name' => 'Nadia Putri', 'initials' => 'NP', 'plan' => 'eSIM Singapura 3GB', 'gradient' => 'from-emerald-400 to-teal-600'],
            ],
            'faqs' => [
                ['q' => 'Apa itu Roamer.id dan bagaimana cara kerjanya?', 'a' => 'Roamer.id adalah platform penjualan paket data internasional (eSIM) yang memungkinkan Anda tetap terhubung ke internet saat bepergian ke luar negeri. Cukup pilih negara tujuan, beli paket, dan scan QR code untuk mengaktifkan eSIM — tanpa perlu ganti kartu SIM fisik!'],
                ['q' => 'Negara apa saja yang tersedia?', 'a' => 'Roamer.id menyediakan paket data untuk lebih dari 100 negara di seluruh dunia, termasuk Jepang, Korea Selatan, Thailand, Singapura, Amerika Serikat, Inggris, Turki, Australia, dan banyak lagi. Khusus untuk Arab Saudi, silakan kunjungi', 'link' => ['label' => 'kuotaumroh.id', 'href' => 'https://kuotaumroh.id']],
                ['q' => 'Berapa lama proses aktivasi eSIM?', 'a' => 'Proses aktivasi eSIM sangat cepat! Setelah pembayaran berhasil, Anda akan langsung menerima QR code melalui email dan WhatsApp. Scan QR code tersebut di pengaturan HP Anda, dan eSIM akan aktif dalam hitungan menit.'],
                ['q' => 'Apakah HP saya mendukung eSIM?', 'a' => 'Sebagian besar smartphone keluaran terbaru sudah mendukung eSIM, termasuk iPhone XS ke atas, Samsung Galaxy S20 ke atas, Google Pixel 3 ke atas, dan banyak lagi. Pastikan HP Anda tidak dalam status carrier-locked.'],
                ['q' => 'Bagaimana jika kuota habis sebelum masa aktif berakhir?', 'a' => 'Tidak perlu khawatir! Anda bisa membeli paket top-up tambahan langsung melalui website atau aplikasi Roamer.id. Paket top-up akan langsung aktif dan kuota Anda bertambah secara instan.'],
                ['q' => 'Metode pembayaran apa saja yang tersedia?', 'a' => 'Roamer.id menerima berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, Dana, ShopeePay), kartu kredit/debit, dan QRIS. Semua transaksi aman dan terenkripsi.'],
            ],
        ]);
    }
}
