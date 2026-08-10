---
title: 'Dashboard Bencana'
description: 'Berikut merupakan visualisasi data dari data Bencana, simak penjelasannya'
date: ""
categories: [Portfolio]
keywords: [python, data visualization, data analysis, eda]
tags: [Data Analyst]
summary: Berikut merupakan visualisasi data Bencana, simak penjelasannya
draft : false
cover:
    image: 'data.png'
    hidden: false
    alt: image of an multiple books, most closed and some open
---
# Penjelasan Dashboard "Dashboard Bencana"

Dashboard ini merupakan **dashboard monitoring dampak bencana alam** di Indonesia yang menampilkan jumlah korban, kerusakan infrastruktur, sebaran lokasi bencana, serta tren jenis bencana dari waktu ke waktu. Dashboard ini kemungkinan dibuat menggunakan tool BI seperti **Power BI**, dengan tema warna biru dan oranye sebagai aksen.

---

## 1. Header & Filter (Atas)
**Judul:** "Dashboard Bencara Example" *(catatan: kemungkinan salah ketik dari "Bencana")*

Terdapat filter untuk menyaring data:
- **Provinsi** — dropdown pemilihan provinsi
- **Kabupaten/Kota** — dropdown pemilihan kabupaten/kota
- **Rentang Tanggal (From–To)** — periode data, contoh: **1/1/2025 00:00:00** sampai **7/31/2025 23:59:59** (data mencakup 7 bulan pertama 2025)

---

## 2. Kartu Ringkasan Korban (Kiri Atas)
Empat kartu metrik menampilkan jumlah korban akibat bencana:

| Metrik | Nilai |
|---|---|
| Meninggal | 294 |
| Terluka | 476 |
| Hilang | 28 |
| Terdampak | 4,440,002 |

**Insight:** Jumlah masyarakat yang terdampak sangat besar (lebih dari 4,4 juta jiwa) dibanding jumlah korban jiwa langsung, menunjukkan bencana berskala luas namun dengan tingkat fatalitas relatif terkendali.

---

## 3. Kartu Kerusakan Infrastruktur (Kanan)
Tiga kartu menampilkan jumlah bangunan yang rusak:

| Jenis Bangunan | Jumlah Rusak |
|---|---|
| Rumah Rusak Berat | 2,946 |
| Sekolah Rusak | 271 |
| Kantor Rusak | 17 |

**Insight:** Rumah tinggal menjadi infrastruktur yang paling banyak mengalami kerusakan berat, jauh melebihi fasilitas pendidikan dan perkantoran — mengindikasikan dampak signifikan terhadap permukiman warga.

---

## 4. Intensitas Setiap Bencana (Bar/Treemap, Kiri Tengah)
**Judul:** "Intensitas Setiap Bencana"

Menampilkan perbandingan jumlah kejadian berdasarkan jenis bencana:
- **Banjir**: 1,334 kejadian (dominan, warna biru)
- **Longsor**: 223 kejadian (warna oranye/merah)
- Terdapat kategori lain dengan proporsi kecil (warna hijau di bagian bawah, tidak berlabel jelas)

**Insight:** Banjir merupakan jenis bencana dengan intensitas kejadian jauh tertinggi dibanding jenis bencana lainnya, menjadikannya prioritas utama dalam mitigasi.

---

## 5. Peta Sebaran Bencana (Tengah)
Peta interaktif yang menampilkan sebaran lokasi bencana di wilayah Indonesia (dengan tampilan peta yang mencakup Asia hingga Timur Tengah, namun fokus data di Indonesia — terlihat titik-titik di Kabupaten Pelalawan, Kabupaten Berau, Kabupaten Bone, Kabupaten Sumba Timur, dll).

Terdapat tombol toggle untuk mengganti tampilan data pada peta:
- **Terdampak**
- **Meninggal** *(sedang aktif/dipilih)*
- **Hilang**
- **Terluka**

Fitur ini memungkinkan pengguna melihat sebaran geografis untuk masing-masing kategori dampak secara terpisah.

---

## 6. Tingkat Kematian Tertinggi di 10 Provinsi (Bar Chart Horizontal, Kiri Bawah)
Menampilkan jumlah korban meninggal berdasarkan provinsi, diurutkan dari tertinggi:

| Provinsi | Jumlah Meninggal |
|---|---|
| Jawa Barat | 49 |
| Jawa Tengah | 35 |
| Jawa Timur | 35 |
| Bali | 23 |
| Papua Barat | 16 |
| Lampung | 14 |
| Nusa Tenggara Barat | 12 |
| Nusa Tenggara Timur | 12 |
| Kalimantan Timur | 11 |
| Sulawesi Tengah | 11 |

**Insight:** Provinsi-provinsi di Pulau Jawa (Jawa Barat, Jawa Tengah, Jawa Timur) mendominasi jumlah korban jiwa tertinggi, kemungkinan karena kepadatan penduduk yang tinggi di wilayah tersebut.

---

## 7. Trend Jenis Bencana Setiap Bulan (Area Chart, Kanan Bawah)
**Judul:** "Trend Jenis Bencana Setiap Bulan"

- Sumbu X: Bulan (Jan 2025 – Jul 2025)
- Sumbu Y: Jumlah korban meninggal
- Menampilkan tren untuk berbagai jenis bencana (legenda "Event Type Name"): Abrasi Pantai, Angin Kencang, Banjir, Banjir Bandang, Banjir dan Tanah Longsor, Banjir Genangan, Banjir Rob, Banjir Waduk, Cuaca Ekstrem, Erupsi Gunung Api, dll.

Pola yang terlihat:
- **Januari 2025**: lonjakan tertinggi (~57 korban meninggal), didominasi warna oranye (**Banjir Bandang**)
- **Februari 2025**: turun drastis ke titik terendah (~5-10)
- **Mei 2025**: terjadi puncak kedua (~32), kembali didominasi Banjir Bandang
- Bulan-bulan lain menunjukkan fluktuasi sedang di kisaran 10-20

**Insight:** **Banjir Bandang** tampak sebagai kontributor utama korban jiwa di sepanjang periode, dengan dua puncak signifikan di Januari dan Mei 2025 — kemungkinan berkaitan dengan musim hujan/curah hujan tinggi pada bulan-bulan tersebut.

---

## Ringkasan Fungsi Dashboard
Dashboard ini dirancang untuk membantu pihak berwenang (BNPB, pemerintah daerah, atau lembaga kemanusiaan) untuk:
1. **Memantau jumlah korban** (meninggal, terluka, hilang, terdampak) secara real-time.
2. **Mengevaluasi kerusakan infrastruktur** akibat bencana (rumah, sekolah, kantor).
3. **Mengidentifikasi jenis bencana paling sering terjadi** untuk prioritas mitigasi (banjir menjadi perhatian utama).
4. **Melihat sebaran geografis bencana** melalui peta interaktif.
5. **Mengetahui provinsi dengan risiko kematian tertinggi** guna alokasi sumber daya yang tepat sasaran.
6. **Menganalisis tren musiman** jenis bencana untuk kesiapsiagaan di bulan-bulan rawan.

> **Catatan:** Interpretasi di atas didasarkan pada elemen visual yang terlihat pada gambar. Angka dan tren pasti dapat berubah tergantung data sumber dan filter yang diterapkan.