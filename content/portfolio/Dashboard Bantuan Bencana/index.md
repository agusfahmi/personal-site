---
title: 'Dashboard Bantuan Bencana'
description: 'Berikut merupakan visualisasi data dari data Bantuan Bencana, simak penjelasannya'
date: ""
categories: [Portfolio]
keywords: [python, data visualization, data analysis, eda]
tags: [Data Analyst]
summary: Berikut merupakan visualisasi data dari data Bantuan Bencana, simak penjelasannya
draft : false
cover:
    image: 'data.jpg'
    hidden: false
    alt: image of an multiple books, most closed and some open
---
# "DASHBOARD BANTUAN BENCANA"

Dashboard ini merupakan **dashboard monitoring distribusi bantuan bencana** yang menampilkan alur bantuan mulai dari masuk (donasi/pengumpulan) hingga keluar (distribusi ke wilayah terdampak). Dashboard ini kemungkinan dibuat menggunakan tool BI seperti **Power BI** atau **Tableau**, dengan dominasi warna biru sebagai tema utama.

---

## 1. Panel Filter (Kiri)
Terdapat beberapa filter untuk menyaring data yang ditampilkan:
- **Wilayah** — dropdown untuk memilih wilayah tertentu
- **Kategori** — dropdown untuk memilih kategori bantuan (misal: Makanan, Non Food, Peralatan, Obat-obatan)
- **Rentang Tanggal (From–To)** — filter periode, contoh: dari **25/11/2025** sampai **17/12/2025**

Filter ini memungkinkan pengguna menganalisis data bantuan pada periode dan wilayah/kategori spesifik.

---

## 2. Kartu Ringkasan / KPI Cards (Baris Atas)
Lima kartu metrik menampilkan ringkasan utama data bantuan bencana:

| Metrik | Nilai |
|---|---|
| Total Bantuan (Data) | 2,988 |
| Bantuan Masuk (Paket) | 142,248 |
| Bantuan Keluar (Paket) | 177,326 |
| Jumlah Donatur | 60 |
| Wilayah Distribusi | 3 |

**Insight:** Jumlah bantuan keluar (177,326) lebih besar dari bantuan masuk (142,248), yang bisa mengindikasikan adanya stok sebelumnya yang ikut didistribusikan, atau satuan/periode perhitungan yang berbeda antara data masuk dan keluar.

---

## 3. Proporsi Setiap Bantuan (Pie Chart, Kiri Tengah)
Menampilkan distribusi kategori bantuan dalam bentuk **pie chart**:

| Kategori | Persentase |
|---|---|
| Makanan | 46.26% |
| Peralatan | 33.74% |
| Non Food | 19.34% |
| Obat-obatan | 0.66% |

**Insight:** Bantuan makanan mendominasi hampir separuh dari total bantuan, diikuti peralatan. Bantuan obat-obatan porsinya sangat kecil — bisa menjadi perhatian jika kebutuhan medis di lapangan cukup tinggi.

---

## 4. Trend Bantuan Bencana (Area/Line Chart, Kanan Tengah)
Menampilkan **tren jumlah bantuan kategori "Makanan"** dari waktu ke waktu (25/11/2025 – 17/12/2025):

- Nilai harian berfluktuasi relatif rendah (5 hingga sekitar 2,818) di sebagian besar hari.
- Terjadi **lonjakan tajam pada 14/12/2025** dengan nilai **12,656**, jauh di atas hari-hari lain.
- Setelah lonjakan, nilai kembali turun ke kisaran normal (275, 228, 479, dst).

**Insight:** Lonjakan pada 14/12/2025 kemungkinan menandakan adanya pengiriman/distribusi bantuan makanan dalam jumlah besar pada tanggal tersebut — bisa jadi respons terhadap kejadian bencana besar atau pengiriman logistik besar dari donatur tertentu.

---

## 5. Asal Bantuan (Bar Chart Horizontal, Kiri Bawah)
Menampilkan sumber/asal bantuan berdasarkan **berat satuan (num)**, diurutkan dari terbesar ke terkecil:

| Asal Bantuan | Berat Satuan |
|---|---|
| BAPAK AMIN | 10,835 |
| DONASI | 8,702 |
| Donasi | 5,146 |
| HALIM SORTIE 6 | 1,107 |
| Banpres | 836 |
| HALIM SORTIE 4 | 778 |
| HALIM SORTI 2 | 768 |
| HALIM SORTIE 7 | 682 |
| PEMKAB TOBA (BUPATI) | 660 |
| BNPB | 592 |

**Insight:** Donatur individu ("BAPAK AMIN") dan kategori umum "Donasi" menjadi kontributor terbesar, melebihi kontribusi dari lembaga pemerintah seperti BNPB atau Pemkab. Perlu dicek apakah "Donasi" dan "DONASI" seharusnya digabung sebagai satu kategori (potensi duplikasi data akibat perbedaan kapitalisasi).

---

## 6. Daftar Bantuan Pokok (Tabel, Tengah Bawah)
Tabel berisi rincian jenis barang bantuan beserta berat/jumlah satuannya:

| Nama Barang | Berat Satuan |
|---|---|
| Air Mineral | 2,615 |
| Mie Instan | 1,525 |
| Sarden | 1,417 |
| Minyak Goreng | 1,249 |
| Beras | 894 |
| Beras @ 5 Kg | 725 |
| Makanan Siap Saji | 377 |
| Makanan Siap Saji Dsp | 104 |
| Masaji | 64 |
| Beras Bulog | 19 |

**Insight:** Kebutuhan pokok seperti air mineral dan mie instan menjadi barang bantuan dengan volume tertinggi — sejalan dengan dominasi kategori "Makanan" pada pie chart.

---

## 7. Wilayah Distribusi Bantuan (Bar Chart + Legenda Gradasi, Kanan Bawah)
Menampilkan **jumlah donatur** berdasarkan **provinsi asal gudang**:

| Provinsi | Jumlah Donatur (perkiraan) |
|---|---|
| Aceh | ± 8 |
| Sumatera Barat | ± 3 |
| Sumatera Utara | ± 40 |

Legenda warna menunjukkan skala persentase (0%–20% hingga 80%–100%) untuk merepresentasikan intensitas donatur per wilayah.

**Insight:** Sumatera Utara menjadi pusat gudang/distribusi dengan jumlah donatur jauh lebih tinggi dibanding dua provinsi lainnya, menunjukkan wilayah ini sebagai basis logistik utama.

---

## Ringkasan Fungsi Dashboard
Dashboard ini dirancang untuk membantu tim manajemen bencana (BNPB, relawan, atau koordinator logistik) untuk:
1. **Memantau arus bantuan** secara real-time — dari masuk hingga keluar.
2. **Menganalisis komposisi jenis bantuan** yang paling banyak dibutuhkan/didistribusikan.
3. **Melacak tren waktu** untuk mendeteksi lonjakan kebutuhan atau pengiriman.
4. **Mengidentifikasi kontributor/donatur utama** demi transparansi dan apresiasi.
5. **Mengelola logistik antar wilayah** dengan mengetahui gudang mana yang paling aktif mendistribusikan bantuan.

> **Catatan:** Interpretasi di atas didasarkan pada elemen visual yang terlihat pada gambar. Angka dan tren pasti dapat berubah tergantung data sumber dan filter yang diterapkan.