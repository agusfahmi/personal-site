---
title: 'Pegadaian Data Visualization'
summary: 'Pegadaian Data Visualization'
description: 'Berikut merupakan visualisasi data dari data Pegadian menggunakan Looker Studio, simak penjelasannya'
date: '2026-03-08'
draft: true
categories: [Portfolio]
keywords: [Data Analyst, Exam, Data Science]
tags: [Data Analyst]
summary: 'Berikut merupakan visualisasi data dari data Pegadian menggunakan Looker Studio, simak penjelasannya'
draft : false
cover:
    image: 'data.jpg'
    hidden: false
    alt: data visualization
---
# Analisis Dashboard Transaksi Pegadaian

## 1. Ringkasan KPI
- **Total of Data:** 100 → total transaksi tercatat.  
- **Total of Product:** 11 → jumlah produk Pegadaian yang terlibat.  
- **Total of Region:** 12 → wilayah operasional yang tercatat.  
- **Total of Area:** 47 → pembagian area atau subwilayah di dalam region.  
- **Total of Branch:** 100 → total cabang yang berpartisipasi.

**Interpretasi:**  
Dashboard memberikan snapshot instan performa dan coverage Pegadaian. Tingginya jumlah cabang dan area menunjukkan jaringan distribusi yang luas, sementara jumlah produk relatif sedikit menunjukkan fokus pada produk tertentu.  

---

## 2. Analisis Tabel Transaksi
Contoh 4 baris pertama tabel:

| Product        | Channel            | Product Count | Jenis Transaksi | Total Transaksi |
|----------------|------------------|---------------|-----------------|----------------|
| GADAI KCA      | PEGADAIAN DIGITAL | 1             | Minta Tambah     | 412,900        |
| TABUNGAN EMAS  | PEGADAIAN DIGITAL | 62            | Sale (TE)        | 650,000        |
| GADAI TAB EMAS | PEGADAIAN DIGITAL | 32            | Open Kredit      | 498,000        |
| TABUNGAN EMAS  | PEGADAIAN DIGITAL | 62            | Open Kredit      | 52,500         |

**Interpretasi:**  
- Produk **TABUNGAN EMAS** dominan dari segi jumlah transaksi (product_count tinggi).  
- Transaksi terbesar secara nominal adalah **Sale (TE)** untuk Tabungan Emas.  
- Distribusi transaksi sebagian besar terjadi melalui **Pegadaian Digital**, menunjukkan adopsi kanal digital yang kuat.  

---

## 3. Visualisasi
- **Treemap:** Menunjukkan distribusi jenis transaksi.  
  - Cicil, Open Kredit, Tebus, Sale (TE) adalah kategori utama.  
  - Ukuran blok merepresentasikan volume transaksi.  

- **Bar Chart per Kota:**  
  - Medan tertinggi, diikuti Bandung, Surabaya, Balikpapan, dan Jakarta 1.  
  - Mengindikasikan konsentrasi transaksi di kota-kota besar.  

- **Line Chart per Produk:**  
  - Menunjukkan total transaksi per singkatan produk (TB, SL, CC, dll.)  
  - TB paling tinggi, TR paling rendah → distribusi tidak merata antar produk.  

---

## 4. Sidebar Filter
- Pengguna bisa filter berdasarkan produk, mempermudah analisis granular.  
- Search bar mempermudah menemukan produk spesifik.  

---

## 5. Insight dan Rekomendasi
1. **Produk populer:** TABUNGAN EMAS dan GADAI KCA → fokus promosi & optimasi.  
2. **Kanal digital:** Dominasi transaksi digital → bisa tingkatkan layanan online.  
3. **Kota dengan transaksi tinggi:** Medan → evaluasi kapasitas cabang, layanan pelanggan.  
4. **Distribusi produk:** Beberapa produk rendah transaksinya → perlu strategi pemasaran atau bundle produk.  
5. **Visualisasi:** Sudah cukup intuitif, tapi line chart bisa ditambahkan label nominal agar lebih jelas.