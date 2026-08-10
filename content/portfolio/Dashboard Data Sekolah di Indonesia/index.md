---
title: 'Dashboard Data Sekolah Di Indonesia'
description: 'Berikut merupakan visualisasi data dari data Data Sekolah Di Indonesia, simak penjelasannya'
date: ""
categories: [Portfolio]
keywords: [python, data visualization, data analysis, eda]
tags: [Data Analyst]
summary: Berikut merupakan visualisasi data dari data Data Sekolah Di Indonesia, simak penjelasannya
draft : false
cover:
    image: 'data.jpg'
    hidden: false
    alt: image of an multiple books, most closed and some open
---
# "Statistik Sekolah di Indonesia"

Dashboard ini merupakan **dashboard statistik pendidikan nasional** yang menampilkan data siswa, tenaga pendidik, sarana sekolah, tingkat putus sekolah, serta sebaran data pendidikan di seluruh provinsi Indonesia. Dashboard ini kemungkinan dibuat menggunakan tool BI seperti **Power BI**, dengan tema warna merah marun (maroon) dan navy sebagai identitas visual.

---

## 1. Header
**Judul:** "Statistik Sekolah di Indonesia"

Header sederhana berwarna ungu tua/maroon sebagai identitas dashboard, tanpa filter interaktif yang terlihat pada bagian ini.

---

## 2. Kartu Ringkasan / KPI Cards (Baris Atas)
Enam kartu metrik menampilkan angka agregat nasional:

| Metrik | Nilai |
|---|---|
| Siswa | 90,274,127 |
| Kepala Sekolah dan Guru | 24,346,900 |
| Tenaga Kependidikan | 3,157,367 |
| Sekolah | 2,507,111 |
| Ruang Kelas | 18,160,044 |
| Rombel (Rombongan Belajar) | 3,102,041 |

**Insight:** Rasio siswa terhadap ruang kelas sekitar 5:1, sementara rasio siswa terhadap kepala sekolah & guru sekitar 3,7:1 — angka-angka ini memberi gambaran kapasitas dan beban sistem pendidikan secara nasional.

---

## 3. Perbandingan Siswa Negeri dan Swasta (Pie Chart, Kiri)
Menampilkan proporsi siswa berdasarkan status sekolah:

| Status | Persentase |
|---|---|
| Negeri | 59.35% |
| Swasta | 40.65% |

**Insight:** Mayoritas siswa bersekolah di sekolah negeri, namun porsi sekolah swasta juga cukup signifikan (lebih dari 40%), menunjukkan peran besar sektor swasta dalam pendidikan nasional.

---

## 4. Tingkat Siswa yang Putus Sekolah dan Mengulang (Line Chart, Tengah)
**Judul:** "Tingkat Siswa yang Putus Sekolah dan Mengulang (Tahun)"

Menampilkan dua garis tren dari tahun 2016–2024:
- **Putus Sekolah** (garis merah tua): 16,299 (2016) → naik ke puncak **139,184** (2019) → turun drastis ke **0** (2021 & 2022) → naik kembali ke **23,155** (2023) dan **22,141** (2024)
- **Mengulang** (garis oranye muda): 12,902 (2016) → naik tajam ke puncak **156,244** (2018) → turun ke **57,447** (2019) → terus menurun hingga **16,101** (2024)

**Insight:** 
- Kedua tren memuncak sekitar tahun 2018–2019, kemungkinan terkait perubahan kebijakan pendataan atau kondisi tertentu.
- Penurunan drastis ke angka 0 pada 2021–2022 kemungkinan berkaitan dengan **kebijakan kenaikan kelas otomatis selama pandemi COVID-19**, sebelum kembali normal di 2023–2024.

---

## 5. Jumlah Ruang Kelas Berdasarkan Kota (Bar Chart Horizontal, Kanan Atas)
**Judul:** "Jumlah Ruang Kelas Berdasarkan Kota"

Menampilkan 9 kota/kabupaten dengan jumlah ruang kelas terbanyak, dipecah berdasarkan status sekolah (**Swasta** vs **Negeri**):

| Kota/Kab | Keterangan |
|---|---|
| Kab. Bogor | Tertinggi, dengan porsi swasta besar |
| Kota Medan | |
| Kab. Garut | |
| Kab. Cianjur | |
| Kota Surabaya | |
| Kab. Bandung | |
| Kab. Sukabumi | |
| Kota Bekasi | |
| Kab. Tangerang | |

**Insight:** Kabupaten Bogor menempati posisi tertinggi dalam jumlah ruang kelas, dan sebagian besar wilayah top-list berasal dari Pulau Jawa — konsisten dengan tingginya populasi penduduk di wilayah tersebut.

---

## 6. Siswa Putus Sekolah Berdasarkan Status Sekolah (Bar Chart, Kiri Bawah)
**Judul:** "Siswa Putus Sekolah Berdasarkan Status Sekolah"

Menampilkan perbandingan jumlah siswa putus sekolah antara sekolah **Negeri** dan **Swasta**, dengan dua sub-kategori per status (kemungkinan per jenjang atau tahun), skala sumbu Y hingga 280,000.

**Insight:** Baik sekolah negeri maupun swasta menunjukkan pola yang mirip: kategori pertama (kolom kiri per grup) lebih rendah dari kategori kedua, dengan siswa swasta menunjukkan angka tertinggi mendekati 260,000.

---

## 7. Total Siswa Tiap Daerah (Treemap, Tengah Bawah)
**Judul:** "Total Siswa Tiap Daerah"

Menampilkan jumlah total siswa per provinsi dalam bentuk **treemap** (ukuran kotak proporsional terhadap jumlah siswa):

| Provinsi | Jumlah Siswa |
|---|---|
| Prov. Jawa Barat | 16,372,783 |
| Prov. Jawa Timur | 11,751,647 |
| Prov. Jawa Tengah | 10,962,989 |
| Prov. Sumatera Utara | 6,186,532 |
| Prov. Banten | 4,108,146 |
| Prov. D.K.I. Jakarta | 3,497,292 |
| Prov. Sulawesi (Sulawesi Selatan?) | 3,248,252 |
| Prov. Sumatera Selatan | 2,982,089 |
| Prov. Lampung | 2,774,816 |
| Prov. Nusa Tenggara Timur | 2,803,017 |

**Insight:** Tiga provinsi di Pulau Jawa (Jawa Barat, Jawa Timur, Jawa Tengah) mendominasi jumlah siswa secara nasional, mencerminkan kepadatan penduduk yang tinggi di pulau tersebut.

---

## 8. Tabel Wilayah — Rombel & Tenaga Kependidikan (Kanan Bawah)
Tabel rinci menampilkan data per provinsi (diurutkan dari Rombel tertinggi):

| Wilayah | Rombel | Tenaga Kependidikan |
|---|---|---|
| Prov. Jawa Barat | 537,921 | 440,497 |
| Prov. Jawa Timur | 400,016 | 387,963 |
| Prov. Jawa Tengah | 357,740 | 386,873 |
| Prov. Sulawesi Selatan | 116,836 | 143,247 |
| Prov. Sumatera Utara | 208,074 | 137,914 |
| Prov. Sumatera Selatan | 98,186 | 122,539 |
| Prov. Aceh | 68,740 | 110,628 |
| Prov. D.K.I. Jakarta | 114,869 | 109,819 |
| Prov. Sumatera Barat | 75,435 | 101,077 |
| Prov. Banten | 133,754 | 99,626 |
| Prov. Lampung | 97,259 | 91,887 |
| Prov. Nusa Tenggara Timur | 95,308 | 90,472 |
| Prov. Riau | 83,942 | 88,019 |

**Insight:** Jawa Barat konsisten menempati posisi teratas di hampir semua metrik (siswa, rombel, tenaga kependidikan), menegaskan posisinya sebagai provinsi dengan sistem pendidikan terbesar di Indonesia.

---

## Ringkasan Fungsi Dashboard
Dashboard ini dirancang untuk membantu **Kementerian Pendidikan, dinas pendidikan daerah, atau peneliti kebijakan pendidikan** untuk:
1. **Memantau skala nasional** pendidikan Indonesia (jumlah siswa, guru, sekolah, ruang kelas).
2. **Membandingkan proporsi sekolah negeri vs swasta** dalam menampung siswa.
3. **Menganalisis tren putus sekolah dan mengulang kelas** dari tahun ke tahun, termasuk dampak kebijakan seperti pandemi.
4. **Mengidentifikasi wilayah dengan sarana kelas terbanyak** untuk perencanaan infrastruktur.
5. **Melihat distribusi siswa dan sumber daya pendidikan antar provinsi** guna pemerataan kebijakan dan anggaran.

> **Catatan:** Interpretasi di atas didasarkan pada elemen visual yang terlihat pada gambar. Angka dan tren pasti dapat berubah tergantung data sumber dan filter yang diterapkan.