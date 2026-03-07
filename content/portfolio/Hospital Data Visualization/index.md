---
title: 'Hospital Data Visualization'
summary: 'Hospital Data Visualization'
description: 'Berikut merupakan visualisasi data dari data Rumah Sakit menggunakan Looker Studio, simak penjelasannya'
date: 2024-12-28 14:55:00 -0300
categories: [Blog]
keywords: [python, data visualization, data analysis, eda]
tags: [LLM]
summary: Berikut merupakan visualisasi data dari data Rumah Sakit menggunakan Looker Studio, simak penjelasannya
draft : false
cover:
    image: 'data.jpg'
    hidden: false
    alt: data visualization
---

# 🏥 Analisis Dashboard Rumah Sakit

## 1. Ringkasan Data
- **Total Pasien:** 348
- **Pavilion:** 36
- **Alamanda:** 88
- **Rosalia:** 195

**Interpretasi:**  
Sebagian besar pasien dirawat di **Rosalia**, menunjukkan bahwa ruang atau unit ini memiliki kapasitas atau tingkat penggunaan tertinggi.

---

## 2. Distribusi Penyakit

Penyakit yang paling banyak ditangani:

- Diabetes
- Stroke
- Tifus
- Asma
- Kanker
- Pneumonia
- Jantung
- Diare
- THT

**Kesimpulan:**  
Kasus penyakit kronis seperti **Diabetes dan Stroke** cukup dominan dibandingkan penyakit lainnya.

---

## 3. Status Pasien

Distribusi status pasien:

- **Sembuh:** 64,4%
- **Meninggal:** 27,1%
- **Masih Dirawat (Active):** sekitar 8%

**Kesimpulan:**  
Mayoritas pasien berhasil sembuh, namun tingkat kematian masih cukup signifikan sehingga perlu perhatian pada penanganan penyakit berat.

---

## 4. Tren Pasien Masuk dan Keluar

Grafik menunjukkan jumlah:

- **Tanggal Masuk**
- **Tanggal Keluar**

Setiap bulan.

**Kesimpulan:**
- Jumlah pasien masuk dan keluar relatif stabil.
- Tidak terlihat lonjakan pasien yang sangat tinggi pada bulan tertentu.

---

## 5. Distribusi Kasus Penyakit per Bulan

Beberapa penyakit muncul secara konsisten setiap bulan, seperti:

- Diabetes
- Asma
- Tifus
- Pneumonia

**Kesimpulan:**  
Penyakit-penyakit tersebut kemungkinan merupakan **penyakit yang paling sering ditangani oleh rumah sakit**.

---

## 6. Data Dokter

Panel sebelah kiri menunjukkan jumlah pasien yang ditangani oleh setiap dokter.

Contoh:

- dr. Martina → 27 pasien
- dr. Bambang → 24 pasien
- dr. Bernadeta → 24 pasien

**Kesimpulan:**  
Beban kerja dokter relatif tersebar, tetapi beberapa dokter menangani lebih banyak pasien dibanding yang lain.

---

## 7. Insight Utama

Beberapa poin penting dari dashboard:

- Unit **Rosalia** memiliki jumlah pasien terbanyak.
- Penyakit kronis seperti **Diabetes dan Stroke** cukup dominan.
- Mayoritas pasien **sembuh**, tetapi tingkat kematian masih perlu diperhatikan.
- Jumlah pasien masuk dan keluar **relatif stabil setiap bulan**.

---

## 8. Rekomendasi

Beberapa langkah yang dapat dilakukan:

- meningkatkan **penanganan penyakit kronis** seperti diabetes dan stroke
- mengevaluasi **beban kerja dokter**
- meningkatkan **kapasitas unit dengan pasien terbanyak**
- melakukan **analisis tren penyakit secara berkala** untuk perencanaan layanan kesehatan