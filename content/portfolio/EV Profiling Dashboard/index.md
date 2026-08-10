---
title: 'Ev Profiling Dashboard'
description: 'Berikut merupakan visualisasi data dari profiling mobil EV, simak penjelasannya'
date: ""
categories: [Portfolio]
keywords: [python, data visualization, data analysis, eda]
tags: [Data Analyst]
summary: Berikut merupakan visualisasi data dari data Rumah Sakit menggunakan Looker Studio, simak penjelasannya
draft : false
cover:
    image: 'data.jpg'
    hidden: false
    alt: data visualization
---


Dashboard ini merupakan **dashboard interaktif profiling mobil listrik (Electric Vehicle/EV)** yang menampilkan berbagai metrik performa, spesifikasi teknis, rating pelanggan, dan tren penjualan. Dashboard ini kemungkinan besar dibuat menggunakan tool BI seperti **Power BI** atau **Tableau**.

---

## 1. Header / Panel Filter
**Judul:** "FIND YOUR CAR MODELS"

Terdapat 3 filter dropdown di bagian atas untuk menyaring data:
- **Merk** — memilih merek/brand mobil
- **Model** — memilih model mobil spesifik
- **Tahun** (contoh: 2020) — memilih tahun produksi/data

Filter ini memungkinkan pengguna mempersempit tampilan data sesuai mobil yang ingin dianalisis.

---

## 2. Panel Detail Mobil (Kiri Atas)
Berisi kartu informasi ringkas mobil yang sedang dipilih:

| Field | Contoh Nilai |
|---|---|
| Brand | Toyota |
| Model | bZ Compact SUV |
| Year | 2020 |
| Avg of Customer Rating | 3.48 |

Ada juga area kosong/kotak abu-abu di atasnya — kemungkinan tempat untuk menampilkan **gambar/foto mobil** yang belum terisi (icon "no image" terlihat di pojok kiri atas kotak tersebut).

---

## 3. Persentase Rating (Donut Chart, Kiri Bawah)
**Judul:** "Presentage of Rating"

Menampilkan distribusi rating pelanggan dalam bentuk **donut chart**:
- Rating **4** → 94.87% (warna kuning/mustard) — mayoritas mobil mendapat rating 4
- Rating **5** → 5.13% (warna teal/hijau tosca) — sebagian kecil mendapat rating sempurna

Insight: Sebagian besar pelanggan memberikan rating cukup tinggi (4 dari 5), namun rating 5 masih jarang.

---

## 4. Kartu Metrik / KPI Cards (Baris Tengah Atas)
Sepuluh kartu metrik menampilkan **rata-rata (average)** dari berbagai spesifikasi EV:

| Metrik | Nilai |
|---|---|
| ⭐ Rating Customer (Avg) | 3.55 |
| 🛣️ Range Miles (Avg) | 267.97 |
| ⏱️ Top Speed (Avg) | 165.64 |
| ⚙️ Avg Torque (Nm) | 517.13 |
| 🐎 Avg Horsepower | 563.95 |
| ⚡ Charging Speed (Kw, Avg) | 125.83 |
| ⚖️ Avg Weight (Kg) | 1,891.54 |
| 🚀 Avg Acceleration (0–60 Mph) | 5.6 detik |
| 🔋 Avg Battery Capacity (Kwh) | 77.22 |
| 🚚 Avg Cargo Volume (Cubic Ft) | 50.3 |

Kartu-kartu ini memberi **gambaran cepat (overview)** performa rata-rata seluruh mobil listrik dalam dataset (atau sesuai filter yang dipilih).

---

## 5. Sales Trend (Line/Area Chart, Tengah Bawah)
**Judul:** "Sales Trend"

- Sumbu X: Tahun (2020–2026)
- Sumbu Y: Jumlah penjualan (angka besar, misal 13.701.379,00 di puncak tahun 2025)
- Terdapat **garis utama** (teal, dengan label angka) yang menunjukkan **tren total penjualan gabungan**, naik tajam dari 2020 hingga puncaknya di 2025, lalu turun drastis di 2026.
- Terdapat juga banyak **garis tipis berwarna-warni** di belakangnya — kemungkinan merepresentasikan **tren penjualan per model/brand individual**, menunjukkan variasi performa antar model.

Insight: Penjualan EV secara umum mengalami pertumbuhan pesat hingga 2025, kemudian menurun tajam (bisa jadi karena data 2026 belum lengkap/masih berjalan).

---

## 6. Range Miles by Battery (Bar Chart, Kanan Bawah)
**Judul:** "Range Miles by Battery"

- Sumbu X: Nama model mobil (EV6, ID.3, Qin, Dolphin, bZ Compact SUV, Ronin, RIT, Picanto EV, Model Y, dll.)
- Sumbu Y: "Range per Baterai" (skala 0–3,5+)
- Semua model menunjukkan nilai yang **relatif seragam** (sekitar 3.5), menandakan efisiensi jarak tempuh per unit baterai cukup konsisten antar model.

---

## Ringkasan Fungsi Dashboard
Dashboard ini dirancang untuk membantu pengguna (misalnya calon pembeli, analis pasar, atau tim produk):
1. **Mencari & memfilter** mobil listrik berdasarkan merk, model, dan tahun.
2. **Membandingkan spesifikasi teknis** (kecepatan, torsi, tenaga, baterai, dll.) secara cepat lewat KPI card.
3. **Melihat kepuasan pelanggan** lewat rating dan distribusinya.
4. **Menganalisis tren penjualan** dari waktu ke waktu.
5. **Mengevaluasi efisiensi jarak tempuh** (range) relatif terhadap kapasitas baterai antar model.

> **Catatan:** Interpretasi di atas didasarkan pada elemen visual yang terlihat pada gambar. Angka dan tren pasti dapat berubah tergantung data sumber dan filter yang diterapkan.
