---
title: 'FMCG 2022-2024 Data Visualization'
summary: 'FMCG 2022-2024 Data Visualization'
description: 'FMCG 2022-2024'
date: '2026-03-22'
showReadingTime: false
showDate: false
hideMeta: true
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
# Dashboard FMCG 2022–2024: Analisis Kinerja Penjualan dan Operasional

## 1. Ringkasan KPI (Key Performance Indicators)
Bagian ini menampilkan indikator utama:
- **Total Data: 190,8 rb** → jumlah keseluruhan data transaksi yang dianalisis  
- **Units Sold: 3,8 jt** → total unit produk terjual  
- **Price per Unit: 190.757** → rata-rata harga per unit  
- **Promotion Flag: 0,1** → proporsi produk yang dipromosikan (±10%)  
- **Stock Available: 30,1 jt** → total stok tersedia  
- **Fulfillment Rate: 2,0 jt** → jumlah pesanan yang berhasil dipenuhi  

**Interpretasi:**  
Volume stok jauh lebih besar dibanding penjualan, yang mengindikasikan potensi overstock atau distribusi belum optimal.

---

## 2. Distribusi Channel Penjualan
Diagram donat menunjukkan:
- **Retail: 33,4%**
- **E-commerce: 33,4%**
- **Discount: 33,3%**

**Interpretasi:**  
Distribusi channel sangat seimbang. Tidak ada dominasi channel tertentu, sehingga strategi omnichannel berjalan relatif merata.

---

## 3. Tren Penjualan per Kategori (Time Series)
Grafik garis (2022–2024) menunjukkan:
- **Yogurt** → kategori paling dominan dan fluktuatif (puncak sekitar 70 rb)
- **Milk & SnackBar** → tren naik stabil, terutama tahun 2023
- **ReadyMeal** → relatif stabil di kisaran menengah
- **Juice** → paling rendah dan stagnan

**Interpretasi:**
- Yogurt menjadi **driver utama revenue**
- Juice memiliki **performa rendah**, perlu evaluasi produk atau pemasaran

---

## 4. Distribusi Wilayah (Treemap)
- **PL-North** → kontribusi terbesar
- **PL-South** → menengah
- **PL-Central** → paling kecil

**Interpretasi:**  
Wilayah utara merupakan pasar utama. Potensi ekspansi ada di wilayah central yang masih rendah.

---

## 5. Penjualan per Kategori Produk
Bar chart menunjukkan:
- **Yogurt** → tertinggi (~1,5 jt unit)
- **Milk** → kedua
- **ReadyMeal & SnackBar** → menengah
- **Juice** → terendah

**Insight:**  
Konsisten dengan grafik tren, Yogurt adalah produk unggulan.

---

## 6. Top Product (SKU)
- **YO-029, YO-005, YO-012** → produk terlaris
- Produk Milk dan ReadyMeal berada di bawahnya

**Interpretasi:**  
SKU berbasis Yogurt mendominasi top sales, menunjukkan kekuatan product-market fit pada kategori tersebut.

---

## 7. Perbandingan Regional per Kategori
Grafik menunjukkan:
- Semua wilayah memiliki pola mirip
- **PL-North** sedikit unggul di hampir semua kategori
- Yogurt tetap dominan di semua wilayah

**Insight:**  
Permintaan Yogurt bersifat konsisten lintas wilayah, bukan fenomena lokal.

---

## 8. Segmentasi Produk
- **Yogurt-Seg1** → tertinggi (~600 rb)
- **Yogurt-Seg3 & Seg2** → mengikuti
- **Milk-Seg2 & SnackBar-Seg1** → lebih rendah

**Interpretasi:**  
Segmentasi Yogurt menunjukkan diversifikasi produk berhasil meningkatkan penjualan.

---

## 9. Analisis Strategis

### a. Strength
- Produk Yogurt sangat kuat dan konsisten
- Channel distribusi seimbang
- Permintaan stabil di semua wilayah

### b. Weakness
- Juice underperform
- Stock terlalu tinggi dibanding penjualan
- Wilayah central kurang optimal

### c. Opportunity
- Ekspansi Yogurt (varian baru atau segmentasi lebih lanjut)
- Optimasi channel e-commerce
- Penetrasi wilayah central

### d. Threat
- Overstock meningkatkan biaya penyimpanan
- Ketergantungan tinggi pada satu kategori (Yogurt)

---

## 10. Kesimpulan
Dashboard ini menunjukkan bahwa performa FMCG didorong secara signifikan oleh kategori Yogurt dengan distribusi channel yang seimbang dan dominasi wilayah utara. Namun, terdapat ketidakseimbangan antara stok dan penjualan serta rendahnya performa kategori tertentu seperti Juice yang memerlukan strategi perbaikan berbasis data.