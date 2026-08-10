---
title: 'Toserba Data Online Shop'
description: 'Berikut merupakan visualisasi data dari data Online Shop Sales, simak penjelasannya'
date: ""
categories: [Portfolio]
keywords: [python, data visualization, data analysis, eda]
tags: [Data Analyst]
summary: Berikut merupakan visualisasi data dari data Online Shop Sales, simak penjelasannya
draft : false
cover:
    image: 'data.jpg'
    hidden: false
    alt: image of an multiple books, most closed and some open
---
#"DASHBOARD ONLINE SHOP"

Dashboard ini merupakan **dashboard analisis penjualan toko online (e-commerce)** yang menampilkan performa revenue, kategori produk, tren penjualan, metode pembayaran, dan dampak diskon terhadap penjualan. Dashboard ini kemungkinan dibuat menggunakan tool BI seperti **Power BI**, dengan tema warna teal (hijau kebiruan) dan navy sebagai identitas visual.

---

## 1. Header
**Judul:** "DASHBOARD ONLINE SHOP"

Header berwarna teal sebagai identitas dashboard.

---

## 2. Kartu Ringkasan / KPI Cards (Kiri Atas)
Empat kartu metrik menampilkan ringkasan utama:

| Metrik | Nilai |
|---|---|
| Revenue | 5,109,776 |
| Avg (Unit Price) | 308.42 |
| Avg (Customer Rating) | 2.97 |
| Total of Data | 5,000 |

**Insight:** Rata-rata rating pelanggan berada di angka 2.97 dari skala umum 1-5, tergolong **cukup rendah/menengah** — ini bisa menjadi perhatian khusus terkait kepuasan pelanggan meski revenue yang dihasilkan cukup besar.

---

## 3. Sales Trend by Month — Bar per Kategori (Kanan Atas)
**Judul:** "Sales Trend by Month" *(bar chart horizontal berdasarkan kategori produk)*

Menampilkan **Row Count | Revenue** per kategori produk:

| Kategori | Perkiraan Nilai |
|---|---|
| Electronics | Tertinggi (~1.7M) |
| Clothing | ~1.6M |
| Beauty | ~1.0M |
| Home | ~1.1M |

**Insight:** Kategori **Electronics** dan **Clothing** menjadi kontributor revenue terbesar, sedangkan **Beauty** memberikan kontribusi terendah di antara keempat kategori.

---

## 4. Sales Trend by Month — Line Chart (Tengah)
**Judul:** "Sales Trend by Month"

- Sumbu X: Periode bulan (Jun 2022 – May 2035) — rentang waktu yang **sangat panjang/tidak biasa**, kemungkinan data dummy/simulasi atau ada anomali pada format tanggal di sumber data
- Sumbu Y: Revenue (3,850 – 4,100)

Pola pergerakan:
- Stabil di kisaran 3,870–3,920 pada awal periode (Jun 2022 – Okt 2023)
- **Naik tajam** ke puncak **~4,110** pada Mar 2024
- Menurun bertahap hingga mencapai titik terendah **~3,850** pada Okt 2033
- **Melonjak kembali** ke ~4,080 pada Mei 2035

**Insight:** Fluktuasi revenue relatif kecil (dalam rentang ratusan), namun rentang tahun pada sumbu X (hingga 2035) tampak tidak wajar untuk data riil — perlu dicek kembali apakah ini merupakan data sampel/simulasi atau ada kesalahan format tanggal.

---

## 5. Quantity of Product (Bar Chart, Kanan Tengah)
**Judul:** "Quantity of Product"

Menampilkan jumlah kuantitas terjual per kategori produk:

| Kategori | Kuantitas (perkiraan) |
|---|---|
| Electronics | ~7,000 |
| Clothing | ~6,000 |
| Home | ~4,000 |
| Beauty | ~3,000 |

**Insight:** Electronics unggul baik dari sisi revenue maupun kuantitas terjual, menjadikannya kategori produk paling laris di toko online ini.

---

## 6. Payment Method (Pie Chart, Kiri Bawah)
**Judul:** "Payment Method"

Menampilkan proporsi metode pembayaran yang digunakan pelanggan:

| Metode | Persentase |
|---|---|
| Card | 45.40% |
| COD (Cash on Delivery) | 35.48% |
| Wallet | 19.12% |

**Insight:** Pembayaran dengan **kartu (Card)** menjadi metode paling populer, namun COD masih memiliki porsi cukup besar (lebih dari sepertiga transaksi), menandakan sebagian pelanggan masih mengandalkan pembayaran tunai saat barang diterima.

---

## 7. Product Category Based on Discount (Bar Chart, Tengah Bawah)
**Judul:** "Product Category Based on Discount"

Menampilkan revenue per kategori produk yang **menggunakan diskon**:

| Kategori | Revenue dengan Diskon (perkiraan) |
|---|---|
| Beauty | Sangat rendah (mendekati 0) |
| Clothing | ~1.4M |
| Electronics | ~1.7M (tertinggi) |
| Home | ~900K |

**Insight:** Diskon pada kategori **Electronics** dan **Clothing** memberikan kontribusi revenue signifikan, sementara diskon pada kategori **Beauty** hampir tidak menghasilkan revenue — mengindikasikan strategi diskon di kategori Beauty kurang efektif atau minim penerapan.

---

## 8. Revenue by Discount (Bar Chart Horizontal, Kanan Bawah)
**Judul:** "Revenue by Discount"

Menampilkan revenue dari transaksi berdiskon berdasarkan wilayah (**Region**):

| Wilayah | Revenue (perkiraan) |
|---|---|
| West | Tertinggi (~1.3M) |
| East | ~1.15M |
| North | ~1.25M |
| South | ~1.2M |

**Insight:** Revenue dari transaksi berdiskon relatif **merata di semua wilayah** dengan **West** sedikit unggul, menunjukkan strategi diskon diterapkan secara konsisten secara nasional tanpa kesenjangan besar antar wilayah.

---

## Ringkasan Fungsi Dashboard
Dashboard ini dirancang untuk membantu tim manajemen/pemasaran toko online untuk:
1. **Memantau performa revenue** secara keseluruhan dan rata-rata harga per unit.
2. **Mengevaluasi kepuasan pelanggan** melalui rating rata-rata.
3. **Mengidentifikasi kategori produk terlaris** (dari sisi revenue maupun kuantitas) untuk fokus strategi bisnis.
4. **Menganalisis tren penjualan** dari waktu ke waktu guna mendeteksi pola musiman.
5. **Memahami preferensi metode pembayaran** pelanggan.
6. **Mengevaluasi efektivitas strategi diskon** per kategori produk dan wilayah, guna optimasi promosi di masa mendatang.

> **Catatan:** Interpretasi di atas didasarkan pada elemen visual yang terlihat pada gambar. Beberapa nilai numerik pada grafik diperkirakan (approx.) karena keterbatasan resolusi gambar. Angka dan tren pasti dapat berubah tergantung data sumber dan filter yang diterapkan.