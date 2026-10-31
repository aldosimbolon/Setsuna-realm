# Portofolio Aldo — Machine Learning & Pemodelan Komputasi

Website portofolio pribadi Aldo, mahasiswa Ilmu Komputer Universitas Negeri Medan (UNIMED) kelas PSIK-24A, putra daerah asal Kabupaten Samosir, Sumatera Utara.

Dibangun dengan prinsip ketelitian desain (**Unslop craft guide**) dan kesederhanaan rekayasa (**CLAUDE.md principles**): tanpa gradien ungu semu, tanpa efek glow neon, tanpa emoji berlebihan, navigasi tenang, dan fokus pada materi ilmiah serta interaktivitas nyata.

---

## Fitur Utama

1. **Simulasi Interaktif Peramalan Penumpang Bandara Kualanamu 2026**
   - Berdasarkan riset kelompok 2 (PSIK-24A UNIMED) dibimbing oleh **Ichwanul Muslim Karo Karo, M.Kom., Ph.D.**
   - Model: dekomposisi tren-musiman pada skala logaritmik + residual bootstrap Monte Carlo dengan generator LCG (*Linear Congruential Generator*) buatan sendiri.
   - Menampilkan visualisasi kanvas beresolusi tinggi dengan pita interval prediksi **P5 (pesimis)**, **P50 (median)**, dan **P95 (lonjakan)** untuk 12 bulan di tahun 2026.
   - Kontrol interaktif untuk mengubah jumlah iterasi bootstrap (500 hingga 5.000 iterasi) dan menjalankan ulang simulasi stokastik secara langsung di browser.
   - Modal informasi lengkap paper akademik (`Jurnal_Kelompok_2_PSIK-24A.docx`) dan skema *rolling-origin cross-validation*.

2. **Interactive RGB Extraction Tool (Visi Komputer & Pemrosesan Citra)**
   - Berdasarkan proyek laboratorium mata kuliah *Machine Learning & Computer Vision* bersama tim: **Dean, Sybil, dan Aldo**.
   - Kanvas inspeksi piksel interaktif yang membaca intensitas kanal Red, Green, dan Blue secara real-time pada koordinat kursor.
   - Pilihan sampel citra kucing (Tabby Orange, Calico Forest, Silver Siamese).
   - Filter isolasi kanal (RGB Penuh, Kanal R, Kanal G, Kanal B).
   - Plot kurva histogram distribusi spektrum warna 256 intensitas.
   - Cuplikan implementasi algoritma Python + Matplotlib & NumPy asli.

3. **Engineering Pendukung: NitipIn / Titipin**
   - Dokumentasi proyek full-stack (React SPA + Express + MongoDB Atlas) yang di-deploy di Vercel.
   - Diagram arsitektur sistem dan rincian fitur transaksional.

4. **Sistem Bilingual & Tema**
   - Dukungan dwibahasa: Bahasa Indonesia (utama) dan Bahasa Inggris (teknis) dengan peralihan instan tanpa refresh halaman.
   - Pilihan tema Gelap (Graphite Ramp) dan Terang (Muted Slate) dengan kontras tinggi (memenuhi standar WCAG AA > 4.5:1).

---

## Struktur Berkas

```
Portofolio/
├── index.html        # Struktur semantik HTML5 dengan atribut i18n
├── styles.css        # Sistem desain CSS murni (grid 4px, graphite ramp, accent pine)
├── app.js            # Engine simulasi LCG Monte Carlo, RGB extractor, & bilingual i18n
├── server.js         # Server lokal ringan zero-dependency berbasis Node.js http
├── package.json      # Metadata proyek dan skrip npm
└── README.md         # Dokumentasi teknis
```

---

## Cara Menjalankan Secara Lokal

### Opsi 1: Menjalankan Server Node.js (Rekomendasi)
```bash
npm start
# atau
node server.js
```
Buka browser di `http://localhost:3000`.

### Opsi 2: Langsung Buka Berkas
Karena dibuat tanpa dependensi npm yang rumit (*zero-build architecture*), Anda juga dapat langsung mengklik dua kali berkas `index.html` pada File Explorer untuk membukanya di browser apa pun.

---

## Cara Deploy

### Vercel
Karena website ini bersifat statis murni:
1. Jalankan `vercel` di direktori proyek ini:
   ```bash
   vercel
   ```
2. Atau hubungkan repositori GitHub ke dashboard Vercel, pilih direktori `Portofolio`, tanpa perlu build command.

### GitHub Pages
1. Push proyek ke repositori GitHub: `github.com/aldosimbolon/portfolio`
2. Masuk ke **Settings** > **Pages**
3. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.

---

## Kontak & Profil
- **Nama**: Aldo Simbolon
- **Kampus**: Universitas Negeri Medan (UNIMED) — PSIK-24A
- **Asal**: Kabupaten Samosir, Sumatera Utara
- **Email**: [aldosimbolon017@gmail.com](mailto:aldosimbolon017@gmail.com)
- **GitHub**: [github.com/aldosimbolon](https://github.com/aldosimbolon)
- **LinkedIn**: [linkedin.com/in/aldo-simbolon](https://linkedin.com/in/aldo-simbolon)
