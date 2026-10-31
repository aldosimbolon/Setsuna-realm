/**
 * Aldo Portfolio — Interactive Engine & Bilingual System
 * Features:
 * 1. Bilingual ID/EN Engine (Default: Indonesian, persistent state)
 * 2. Theme Toggle (Dark/Light with Canvas adaptation)
 * 3. Kualanamu 2026 Stochastic Forecasting (LCG + Monte Carlo Bootstrap + Canvas Chart)
 * 4. Interactive RGB Extraction Tool (Cat images, pixel reader, channel isolation, histogram)
 * 5. Scientific Paper Modal & Clipboard utilities
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Bilingual Dictionary (Indonesian default / English toggle)
  // =========================================================================
  const i18n = {
    id: {
      'nav.projects': 'Proyek ML',
      'nav.engineering': 'Engineering',
      'nav.skills': 'Keahlian',
      'nav.about': 'Tentang',
      'nav.contact': 'Kontak',
      'nav.contactMe': 'Hubungi Saya',
      'hero.origin': 'Computer Science Undergraduate UNIMED',
      'hero.headline': 'Machine Learning, Visi Komputer, dan Simulasi Stokastik',
      'hero.subhead': 'Saya Aldo, mahasiswa Ilmu Komputer Universitas Negeri Medan. Berfokus pada pemodelan berbasis data, ekstraksi fitur citra, dan peramalan runtun waktu dengan validasi ketat.',
      'hero.exploreML': 'Eksplorasi Proyek ML',
      'hero.metric1Label': 'Major',
      'hero.metric1Sub': 'Ilmu Komputer',
      'hero.metric2Label': 'Fokus Utama',
      'hero.metric2Sub': 'Monte Carlo, CV, LCG',
      'hero.metric3Label': 'Pendekatan',
      'hero.metric3Sub': 'Empiris, Teruji, Bersih',
      'hero.liveMatrixTitle': 'Tensor Nilai RGB Piksel [Kanal R-G-B]:',
      'projects.tag': 'Riset & Proyek Utama',
      'projects.title': 'Machine Learning & Computer Vision',
      'projects.desc': 'Dua proyek laboratorium utama dengan metodologi teruji, implementasi algoritma mandiri, dan visualisasi interaktif.',
      'kno.badge': 'Pemodelan & Simulasi',
      'kno.title': 'Prediksi & Cross-Validation Penumpang Internasional Bandara Kualanamu Tahun 2026 Menggunakan LCG dan Simulasi Monte Carlo',
      'kno.summary': 'Peramalan deret waktu untuk total penumpang internasional (kedatangan, keberangkatan, transit) di Bandara Kualanamu tahun 2026 menggunakan data bulanan 2024–2025. Menggabungkan dekomposisi tren-musiman pada skala logaritmik dan residual bootstrap Monte Carlo dengan generator Linear Congruential Generator (LCG) buatan sendiri.',
      'kno.simTitle': 'Simulasi Interaktif Monte Carlo Kualanamu',
      'kno.simSubtitle': 'Interval Prediksi P5 (Batas Bawah), P50 (Median), P95 (Batas Atas)',
      'kno.simIterLabel': 'Iterasi Bootstrap:',
      'kno.runBtn': 'Jalankan Ulang Simulasi LCG',
      'kno.legendHist': 'Data Aktual 2024–2025',
      'kno.legendP50': 'Median Prediksi 2026 (P50)',
      'kno.legendBand': 'Interval Kepercayaan 90% (P5 – P95)',
      'kno.spec1Title': 'Model Dekomposisi Tren-Musiman',
      'kno.spec1Text': 'Model regresi logaritmik menangkap efek multiplikatif musiman libur hari raya dan akhir tahun: ln(Y_t) = β_0 + β_1·t + S(t) + ε_t.',
      'kno.spec2Title': 'Generator LCG Buatan Sendiri',
      'kno.spec2Text': 'Bilangan acak pseudo-random stokastik dihasilkan menggunakan: X_(n+1) = (a·X_n + c) mod m dengan konstanta modulus Marsaglia untuk menjamin periode maksimal.',
      'kno.spec3Title': 'Rolling-Origin Cross-Validation',
      'kno.spec3Text': 'Validasi dievaluasi pada berbagai horizon waktu tanpa data leakage untuk mengukur keandalan dan metrik MAPE/RMSE secara konsisten.',
      'kno.spec4Title': 'Artefak Ilmiah',
      'kno.spec4Text': 'Dokumentasi terstruktur dalam format paper jurnal akademik: Paper.docx.',
      'kno.viewDetails': 'Detail Metodologi & Paper',
      'rgb.badge': 'Machine Learning & Computer Vision',
      'rgb.team': 'Proyek Kelompok: Aldo, Dean, Sybil',
      'rgb.course': 'Mata Kuliah: Machine Learning & Computer Vision (UNIMED)',
      'rgb.title': 'Interactive RGB Extraction Tool: Ekstraksi Fitur Warna Citra Kucing Berbasis Python & Matplotlib',
      'rgb.summary': 'Tool interaktif untuk analisis pemrosesan citra digital dan ekstraksi fitur warna (RGB channels). Memungkinkan inspeksi nilai matriks piksel, navigasi multicitra, dekomposisi kanal Red, Green, Blue, dan visualisasi distribusi spektrum warna untuk pra-pemrosesan model computer vision.',
      'rgb.selectSample': 'Pilih Sampel Citra:',
      'rgb.channelFilter': 'Filter Kanal:',
      'rgb.canvasTitle': 'Kanvas Inspeksi Piksel (Arahkan atau Klik Kursor)',
      'rgb.canvasHelp': 'Klik titik mana saja pada citra untuk membaca vektor nilai warna [R, G, B] dan koordinat matriksnya.',
      'rgb.inspectorTitle': 'Hasil Ekstraksi Nilai Warna',
      'rgb.histTitle': 'Histogram Distribusi Spektrum Citra Aktif:',
      'rgb.teamCredit': 'Kolaborasi: Aldo, Dean, Sybil',
      'other.tag': 'Pengembangan Software',
      'other.title': 'Full-Stack & Deployment',
      'other.desc': 'Selain machine learning dan pemodelan, saya membangun aplikasi web produksi dengan arsitektur modern dan pipeline deployment cloud.',
      'other.titipinSummary': 'Platform jasa titip end-to-end dengan antarmuka responsif dan arsitektur backend terpisah. Dibangun untuk memfasilitasi transaksi penitipan barang secara transparan antara requester dan traveler.',
      'other.f1': 'Landing page teroptimasi dengan alur penawaran barang',
      'other.f2': 'Dashboard interaktif untuk pelacakan status pesanan pengguna',
      'other.f3': 'Panel kontrol admin untuk moderasi katalog dan transaksi',
      'other.archTitle': 'Arsitektur Sistem',
      'skills.tag': 'Kemampuan Teknis',
      'skills.title': 'Keahlian & Penguasaan Tools',
      'skills.desc': 'Teknologi dan metodologi yang saya gunakan secara reguler dalam riset, eksperimen komputasi, dan rekayasa perangkat lunak.',
      'skills.cat1': 'Machine Learning & Modeling',
      'skills.tsDesc': 'Dekomposisi tren-musiman, transformasi skala log',
      'skills.mcDesc': 'Residual bootstrap stokastik, interval P5–P50–P95',
      'skills.lcgDesc': 'Implementasi LCG (Linear Congruential Generator)',
      'skills.valDesc': 'Rolling-origin cross-validation, metrik MAPE & RMSE',
      'skills.cat2': 'Computer Vision & Data Science',
      'skills.pyDesc': 'Bahasa utama untuk riset komputasi dan pemrosesan data',
      'skills.cvDesc': 'Ekstraksi fitur warna RGB, manipulasi matriks citra',
      'skills.plotDesc': 'Visualisasi data interaktif, kalkulasi array multi-dimensi',
      'skills.paperDesc': 'Struktur laporan berkala jurnal, dokumentasi metodologi',
      'skills.cat3': 'Web & Engineering Pendukung',
      'skills.reactDesc': 'Antarmuka interaktif, manajemen state dan komponen modular',
      'skills.nodeDesc': 'Penyusunan endpoint REST API dan integrasi middleware',
      'skills.mongoDesc': 'Desain skema dokumen NoSQL dan persistensi data cloud',
      'skills.deployDesc': 'Kontrol versi kolaboratif, hosting produksi edge',
      'about.tag': 'Profil & Latar Belakang',
      'about.title': 'Fokus pada Solusi Nyata dan Pemodelan Terukur',
      'about.p1': 'Saya Aldo, mahasiswa program studi Ilmu Komputer di Universitas Negeri Medan (UNIMED). Lahir dan tumbuh di Kabupaten Samosir, Sumatera Utara, saya membawa dedikasi dan kerja keras putra daerah dalam mendalami dunia ilmu sains komputasi.',
      'about.p2': 'Dalam pendekatan kerja, saya menyukai komunikasi yang langsung, to-the-point, dan santai namun tetap terikat pada standar profesionalitas. Ketika mengkaji masalah Machine Learning atau peramalan data, saya lebih menitikberatkan pada validitas data, ketahanan metodologi (seperti cross-validation ketat), dan kode yang dapat diuji kembali.',
      'about.p3': 'Selain riset akademis, saya juga menikmati membangun perangkat lunak full-stack yang berfungsi nyata bagi pengguna. Portofolio ini mendokumentasikan dedikasi saya untuk terus berkontribusi di bidang rekayasa cerdas dan sains data.',
      'about.factsTitle': 'Informasi Akademik',
      'about.factName': 'Nama Lengkap',
      'about.factOrigin': 'Asal Daerah',
      'about.factCampus': 'Kampus',
      'about.factClass': 'Program / Kelas',
      'about.factInterests': 'Minat Utama',
      'about.factLanguages': 'Bahasa',
      'contact.tag': 'Mari Terhubung',
      'contact.title': 'Siap untuk Kolaborasi dan Diskusi Teknis',
      'contact.desc': 'Tertarik berdiskusi tentang proyek Machine Learning, simulasi data, atau peluang kolaborasi? Silakan hubungi saya melalui jalur di bawah.',
      'common.copy': 'Salin',
      'common.copied': 'Tersalin',
      'common.copyCode': 'Salin Kode',
      'common.codeCopied': 'Kode Tersalin'
    },
    en: {
      'nav.projects': 'ML Projects',
      'nav.engineering': 'Engineering',
      'nav.skills': 'Skills',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.contactMe': 'Contact Me',
      'hero.origin': 'Computer Science Undergraduate UNIMED',
      'hero.headline': 'Machine Learning, Computer Vision, & Stochastic Simulation',
      'hero.subhead': 'I am Aldo, a Computer Science student at Universitas Negeri Medan. Focused on data-driven modeling, image feature extraction, and time series forecasting with rigorous validation.',
      'hero.exploreML': 'Explore ML Projects',
      'hero.metric1Label': 'Major',
      'hero.metric1Sub': 'Computer Science',
      'hero.metric2Label': 'Primary Focus',
      'hero.metric2Sub': 'Monte Carlo, CV, LCG',
      'hero.metric3Label': 'Work Style',
      'hero.metric3Sub': 'Empirical, Tested, Direct',
      'hero.liveMatrixTitle': 'Pixel RGB Tensor Values [Channels R-G-B]:',
      'projects.tag': 'Research & Core Projects',
      'projects.title': 'Machine Learning & Computer Vision',
      'projects.desc': 'Two core academic laboratory projects featuring robust methodologies, custom algorithm implementations, and interactive visualizations.',
      'kno.badge': 'Modeling & Simulation',
      'kno.title': 'Prediction & Cross-Validation of Kualanamu Airport International Passengers 2026 Using LCG and Monte Carlo Simulation',
      'kno.summary': 'Time series forecasting for total international passengers (arrivals, departures, transit) at Kualanamu Airport for 2026 using 2024–2025 monthly data. Combines log-scale trend-seasonal decomposition with residual bootstrap Monte Carlo driven by a custom Linear Congruential Generator (LCG).',
      'kno.simTitle': 'Interactive Kualanamu Monte Carlo Simulator',
      'kno.simSubtitle': 'Prediction Intervals P5 (Lower Bound), P50 (Median), P95 (Upper Surge)',
      'kno.simIterLabel': 'Bootstrap Iterations:',
      'kno.runBtn': 'Re-run LCG Simulation',
      'kno.legendHist': 'Historical Data 2024–2025',
      'kno.legendP50': '2026 Forecast Median (P50)',
      'kno.legendBand': '90% Confidence Interval (P5 – P95)',
      'kno.spec1Title': 'Trend-Seasonal Decomposition Model',
      'kno.spec1Text': 'Log-linear regression captures multiplicative holiday and year-end seasonal spikes: ln(Y_t) = β_0 + β_1·t + S(t) + ε_t.',
      'kno.spec2Title': 'Custom LCG Pseudo-Random Generator',
      'kno.spec2Text': 'Stochastic numbers generated via: X_(n+1) = (a·X_n + c) mod m using Marsaglia constants to guarantee full period length.',
      'kno.spec3Title': 'Rolling-Origin Cross-Validation',
      'kno.spec3Text': 'Evaluated across multiple temporal cutoff horizons without data leakage to measure MAPE and RMSE consistently.',
      'kno.spec4Title': 'Scientific Publication Artifact',
      'kno.spec4Text': 'Documented in academic journal format: Paper.docx.',
      'kno.viewDetails': 'Methodology & Paper Details',
      'rgb.badge': 'Machine Learning & Computer Vision',
      'rgb.team': 'Group Project: Aldo, Dean, Sybil',
      'rgb.course': 'Course: Machine Learning & Computer Vision (UNIMED)',
      'rgb.title': 'Interactive RGB Extraction Tool: Cat Image Color Feature Extraction Built with Python & Matplotlib',
      'rgb.summary': 'Interactive digital image processing tool for color feature extraction (RGB channels). Supports pixel matrix inspection, multi-image navigation, Red/Green/Blue channel decomposition, and spectrum distribution visualization for CV model preprocessing.',
      'rgb.selectSample': 'Select Image Sample:',
      'rgb.channelFilter': 'Channel Filter:',
      'rgb.canvasTitle': 'Pixel Inspection Canvas (Hover or Click Cursor)',
      'rgb.canvasHelp': 'Click any point on the image to inspect the color vector [R, G, B] and its matrix coordinates.',
      'rgb.inspectorTitle': 'Extracted Color Profile',
      'rgb.histTitle': 'Active Image Spectrum Distribution Histogram:',
      'rgb.teamCredit': 'Collaboration: Aldo, Dean, Sybil',
      'other.tag': 'Software Engineering',
      'other.title': 'Full-Stack & Cloud Deployment',
      'other.desc': 'Alongside machine learning and modeling, I engineer production web applications with clean decoupled architectures and cloud deployment pipelines.',
      'other.titipinSummary': 'End-to-end peer-to-peer personal shopper platform with responsive UI and decoupled backend API. Built to streamline transparent requests between buyers and travelers.',
      'other.f1': 'Optimized landing page with transparent request flows',
      'other.f2': 'Interactive user dashboard for order status tracking',
      'other.f3': 'Admin control panel for catalogue moderation and transactions',
      'other.archTitle': 'System Architecture',
      'skills.tag': 'Technical Capabilities',
      'skills.title': 'Skills & Tool Mastery',
      'skills.desc': 'Technologies and empirical methodologies I use regularly in scientific research, computational modeling, and software engineering.',
      'skills.cat1': 'Machine Learning & Modeling',
      'skills.tsDesc': 'Trend-seasonal decomposition, log-scale transformation',
      'skills.mcDesc': 'Stochastic residual bootstrap, P5–P50–P95 intervals',
      'skills.lcgDesc': 'Linear Congruential Generator implementation',
      'skills.valDesc': 'Rolling-origin cross-validation, MAPE & RMSE metrics',
      'skills.cat2': 'Computer Vision & Data Science',
      'skills.pyDesc': 'Primary language for computational research and data processing',
      'skills.cvDesc': 'RGB color feature extraction, image tensor manipulation',
      'skills.plotDesc': 'Interactive data visualization, multi-dimensional array math',
      'skills.paperDesc': 'Journal structure formatting, methodology documentation',
      'skills.cat3': 'Web & Engineering Foundations',
      'skills.reactDesc': 'Interactive SPA interfaces, modular component state management',
      'skills.nodeDesc': 'RESTful API routing and decoupled middleware integration',
      'skills.mongoDesc': 'NoSQL document schema design and cloud persistence',
      'skills.deployDesc': 'Collaborative version control, edge cloud deployment',
      'about.tag': 'Profile & Background',
      'about.title': 'Focused on Practical Solutions & Measurable Models',
      'about.p1': 'I am Aldo, an undergraduate Computer Science student at Universitas Negeri Medan (UNIMED). Born and raised in Samosir Regency, North Sumatra, I bring the dedication and grounded work ethic of a Samosir native into computational science.',
      'about.p2': 'In my work, I prefer direct, to-the-point, and relaxed communication while maintaining uncompromising professional standards. When tackling Machine Learning or forecasting challenges, I emphasize data integrity, robust validation protocols, and reproducible code.',
      'about.p3': 'Beyond academic research, I enjoy engineering full-stack software that delivers tangible utility. This portfolio documents my ongoing journey across intelligent computing and applied data science.',
      'about.factsTitle': 'Academic Profile',
      'about.factName': 'Full Name',
      'about.factOrigin': 'Hometown',
      'about.factCampus': 'University',
      'about.factClass': 'Program / Cohort',
      'about.factInterests': 'Core Interests',
      'about.factLanguages': 'Languages',
      'contact.tag': 'Get in Touch',
      'contact.title': 'Open for Collaboration & Technical Discussions',
      'contact.desc': 'Interested in discussing machine learning projects, stochastic simulation, or engineering opportunities? Reach out anytime through the channels below.',
      'common.copy': 'Copy',
      'common.copied': 'Copied',
      'common.copyCode': 'Copy Code',
      'common.codeCopied': 'Code Copied'
    }
  };

  let currentLang = localStorage.getItem('aldo_lang') || 'id';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('aldo_lang', lang);
    document.documentElement.lang = lang;

    const dict = i18n[lang] || i18n.id;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const langText = document.getElementById('lang-text');
    if (langText) {
      langText.textContent = lang === 'id' ? 'ID' : 'EN';
    }
  }

  // =========================================================================
  // 2. Theme Management (Dark / Light)
  // =========================================================================
  const themeToggle = document.getElementById('theme-toggle');
  let currentTheme = localStorage.getItem('aldo_theme') || 'dark';

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aldo_theme', theme);
    // Refresh canvases with updated colors
    if (typeof drawKnoChart === 'function') drawKnoChart();
    if (typeof drawHistogram === 'function') drawHistogram();
  }

  // =========================================================================
  // 3. Kualanamu 2026 Stochastic Forecasting & Monte Carlo Simulation
  // =========================================================================
  // Monthly historical passengers (Arrivals + Departures + Transit) 2024 - 2025
  const knoHistorical = [
    { period: 'Jan 24', pax: 78420 },
    { period: 'Feb 24', pax: 74150 },
    { period: 'Mar 24', pax: 79800 },
    { period: 'Apr 24', pax: 86500 }, // Lebaran surge
    { period: 'Mei 24', pax: 81200 },
    { period: 'Jun 24', pax: 88400 },
    { period: 'Jul 24', pax: 89700 },
    { period: 'Agu 24', pax: 84300 },
    { period: 'Sep 24', pax: 82100 },
    { period: 'Okt 24', pax: 83900 },
    { period: 'Nov 24', pax: 85600 },
    { period: 'Des 24', pax: 98300 }, // Year-end surge
    { period: 'Jan 25', pax: 83100 },
    { period: 'Feb 25', pax: 79400 },
    { period: 'Mar 25', pax: 84200 },
    { period: 'Apr 25', pax: 92300 },
    { period: 'Mei 25', pax: 87500 },
    { period: 'Jun 25', pax: 94800 },
    { period: 'Jul 25', pax: 96200 },
    { period: 'Agu 25', pax: 90400 },
    { period: 'Sep 25', pax: 88300 },
    { period: 'Okt 25', pax: 90100 },
    { period: 'Nov 25', pax: 92700 },
    { period: 'Des 25', pax: 106500 }
  ];

  const forecastMonths = [
    'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26', 'Mei 26', 'Jun 26',
    'Jul 26', 'Agu 26', 'Sep 26', 'Okt 26', 'Nov 26', 'Des 26'
  ];

  // Custom Linear Congruential Generator (LCG)
  // X_(n+1) = (a * X_n + c) mod m
  class CustomLCG {
    constructor(seed = 123456789) {
      this.m = 4294967296; // 2^32
      this.a = 1664525;
      this.c = 1013904223;
      this.state = seed >>> 0;
    }

    next() {
      this.state = (Math.imul(this.a, this.state) + this.c) >>> 0;
      return this.state / this.m;
    }

    // Uniform integer between min and max inclusive
    randint(min, max) {
      return Math.floor(this.next() * (max - min + 1)) + min;
    }
  }

  let knoForecastResult = [];

  function computeForecast(iterations = 1000, seed = null) {
    const chosenSeed = seed !== null ? seed : Math.floor(Math.random() * 10000000);
    const lcg = new CustomLCG(chosenSeed);

    // Baseline historical log trend & seasonal components
    // Log values
    const logVals = knoHistorical.map(d => Math.log(d.pax));
    const n = logVals.length;

    // Linear regression on log scale: ln(Y) = a + b * t
    let sumT = 0, sumY = 0, sumTY = 0, sumT2 = 0;
    for (let t = 0; t < n; t++) {
      sumT += t;
      sumY += logVals[t];
      sumTY += t * logVals[t];
      sumT2 += t * t;
    }
    const b = (n * sumTY - sumT * sumY) / (n * sumT2 - sumT * sumT);
    const a = (sumY - b * sumT) / n;

    // Calculate historical residuals
    const residuals = [];
    for (let t = 0; t < n; t++) {
      const fitted = a + b * t;
      residuals.push(logVals[t] - fitted);
    }

    // Monthly seasonal indices from residuals (12 months cycle)
    const seasonal = new Array(12).fill(0);
    const counts = new Array(12).fill(0);
    for (let t = 0; t < n; t++) {
      const monthIdx = t % 12;
      seasonal[monthIdx] += residuals[t];
      counts[monthIdx]++;
    }
    for (let m = 0; m < 12; m++) {
      seasonal[m] /= counts[m];
    }

    // Residual variance without seasonal component
    const detrendedResiduals = [];
    for (let t = 0; t < n; t++) {
      detrendedResiduals.push(residuals[t] - seasonal[t % 12]);
    }

    // Monte Carlo Residual Bootstrap for 2026 (t = 24 to 35)
    const simResults = Array.from({ length: 12 }, () => []);

    for (let iter = 0; iter < iterations; iter++) {
      for (let m = 0; m < 12; m++) {
        const t = n + m;
        const trend = a + b * t;
        const season = seasonal[m];
        // Bootstrap sample from detrended residuals using custom LCG
        const randIdx = lcg.randint(0, detrendedResiduals.length - 1);
        const sampledResidual = detrendedResiduals[randIdx];

        const logPred = trend + season + sampledResidual;
        const paxPred = Math.round(Math.exp(logPred));
        simResults[m].push(paxPred);
      }
    }

    // Calculate percentiles: P5, P50, P95
    knoForecastResult = simResults.map((monthSims, idx) => {
      monthSims.sort((x, y) => x - y);
      const p5Idx = Math.floor(monthSims.length * 0.05);
      const p50Idx = Math.floor(monthSims.length * 0.50);
      const p95Idx = Math.floor(monthSims.length * 0.95);

      return {
        period: forecastMonths[idx],
        p5: monthSims[p5Idx],
        p50: monthSims[p50Idx],
        p95: monthSims[p95Idx]
      };
    });
  }

  // Draw chart onto HTML5 Canvas
  const canvasKno = document.getElementById('kno-chart');
  const tooltipKno = document.getElementById('chart-tooltip');

  function drawKnoChart() {
    if (!canvasKno) return;
    const ctx = canvasKno.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasKno.getBoundingClientRect();

    canvasKno.width = rect.width * dpr;
    canvasKno.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    const padLeft = 60;
    const padRight = 32;
    const padTop = 32;
    const padBottom = 48;

    const plotW = w - padLeft - padRight;
    const plotH = h - padTop - padBottom;

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // Neutral tones
    const colorGrid = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
    const colorAxis = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
    const colorText = isDark ? '#7a8599' : '#64748b';
    const colorHist = '#3b82f6';
    const colorP50 = isDark ? '#10b981' : '#059669';
    const colorBand = isDark ? 'rgba(16, 185, 129, 0.16)' : 'rgba(5, 150, 105, 0.14)';
    const colorBandLine = isDark ? 'rgba(16, 185, 129, 0.45)' : 'rgba(5, 150, 105, 0.45)';

    ctx.clearRect(0, 0, w, h);

    // Min and Max scale
    const minPax = 65000;
    const maxPax = 125000;

    const getY = (val) => padTop + plotH - ((val - minPax) / (maxPax - minPax)) * plotH;

    // Draw horizontal grid lines & Y-axis labels
    const ySteps = [70000, 80000, 90000, 100000, 110000, 120000];
    ctx.font = '11px JetBrains Mono, monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    ySteps.forEach(step => {
      const y = getY(step);
      ctx.strokeStyle = colorGrid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(w - padRight, y);
      ctx.stroke();

      ctx.fillStyle = colorText;
      ctx.fillText((step / 1000) + 'k', padLeft - 10, y);
    });

    // Total points: 24 historical + 12 forecast = 36 points
    const totalPoints = 36;
    const getX = (idx) => padLeft + (idx / (totalPoints - 1)) * plotW;

    // Save chart coordinates for hover tooltip
    canvasKno._coords = [];

    // Draw Year Boundary Lines
    [12, 24].forEach((idx) => {
      const x = getX(idx);
      ctx.strokeStyle = colorAxis;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(x, padTop);
      ctx.lineTo(x, padTop + plotH);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // Year Labels on Bottom
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillStyle = colorText;
    ctx.font = '11px Plus Jakarta Sans, sans-serif';
    ctx.fillText('2024 (Data Aktual)', getX(5.5), h - padBottom + 12);
    ctx.fillText('2025 (Data Aktual)', getX(17.5), h - padBottom + 12);
    ctx.fillText('2026 (Prediksi Monte Carlo)', getX(29.5), h - padBottom + 12);

    // 1. Draw P5 - P95 Confidence Band (Months 24 to 35)
    // Connecting seamlessly with last historical point (idx 23)
    const lastHist = knoHistorical[23];
    ctx.beginPath();
    ctx.moveTo(getX(23), getY(lastHist.pax));

    // Upper line (P95)
    knoForecastResult.forEach((d, i) => {
      ctx.lineTo(getX(24 + i), getY(d.p95));
    });

    // Lower line backwards (P5)
    for (let i = knoForecastResult.length - 1; i >= 0; i--) {
      ctx.lineTo(getX(24 + i), getY(knoForecastResult[i].p5));
    }
    ctx.lineTo(getX(23), getY(lastHist.pax));
    ctx.closePath();

    ctx.fillStyle = colorBand;
    ctx.fill();

    // Draw P5 and P95 hairline borders
    ctx.strokeStyle = colorBandLine;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);

    // Top border
    ctx.beginPath();
    ctx.moveTo(getX(23), getY(lastHist.pax));
    knoForecastResult.forEach((d, i) => ctx.lineTo(getX(24 + i), getY(d.p95)));
    ctx.stroke();

    // Bottom border
    ctx.beginPath();
    ctx.moveTo(getX(23), getY(lastHist.pax));
    knoForecastResult.forEach((d, i) => ctx.lineTo(getX(24 + i), getY(d.p5)));
    ctx.stroke();
    ctx.setLineDash([]);

    // 2. Draw Historical Line (2024-2025)
    ctx.beginPath();
    ctx.strokeStyle = colorHist;
    ctx.lineWidth = 2;
    knoHistorical.forEach((d, i) => {
      const x = getX(i);
      const y = getY(d.pax);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);

      canvasKno._coords.push({ x, y, label: d.period, val: d.pax, isHist: true });
    });
    ctx.stroke();

    // Draw historical points
    knoHistorical.forEach((d, i) => {
      const x = getX(i);
      const y = getY(d.pax);
      ctx.fillStyle = isDark ? '#14171d' : '#ffffff';
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = colorHist;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // 3. Draw Median P50 Forecast Line (Jan - Dec 2026)
    ctx.beginPath();
    ctx.strokeStyle = colorP50;
    ctx.lineWidth = 2.5;
    ctx.moveTo(getX(23), getY(lastHist.pax));

    knoForecastResult.forEach((d, i) => {
      const x = getX(24 + i);
      const y = getY(d.p50);
      ctx.lineTo(x, y);

      canvasKno._coords.push({
        x, y,
        label: d.period,
        val: d.p50,
        p5: d.p5,
        p95: d.p95,
        isHist: false
      });
    });
    ctx.stroke();

    // Points on P50
    knoForecastResult.forEach((d, i) => {
      const x = getX(24 + i);
      const y = getY(d.p50);
      ctx.fillStyle = isDark ? '#14171d' : '#ffffff';
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = colorP50;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  }

  // Handle Chart Tooltip Hover
  if (canvasKno) {
    canvasKno.addEventListener('mousemove', (e) => {
      if (!canvasKno._coords) return;
      const rect = canvasKno.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let closest = null;
      let minDist = 30;

      canvasKno._coords.forEach(pt => {
        const dist = Math.hypot(pt.x - mouseX, pt.y - mouseY);
        if (dist < minDist) {
          minDist = dist;
          closest = pt;
        }
      });

      if (closest && tooltipKno) {
        tooltipKno.classList.remove('hidden');
        if (closest.isHist) {
          tooltipKno.innerHTML = `<strong>${closest.label}</strong>: ${closest.val.toLocaleString()} pax (Aktual)`;
        } else {
          tooltipKno.innerHTML = `<strong>${closest.label} (Prediksi)</strong><br>` +
            `Median P50: <strong>${closest.val.toLocaleString()} pax</strong><br>` +
            `Batas P5–P95: ${closest.p5.toLocaleString()} – ${closest.p95.toLocaleString()} pax`;
        }
        tooltipKno.style.left = `${Math.min(closest.x + 10, rect.width - 200)}px`;
        tooltipKno.style.top = `${Math.max(closest.y - 45, 10)}px`;
      } else if (tooltipKno) {
        tooltipKno.classList.add('hidden');
      }
    });

    canvasKno.addEventListener('mouseleave', () => {
      if (tooltipKno) tooltipKno.classList.add('hidden');
    });
  }

  // Re-run Monte Carlo Simulation button
  const runMcBtn = document.getElementById('run-mc-btn');
  const simSelect = document.getElementById('sim-iterations');

  if (runMcBtn && simSelect) {
    runMcBtn.addEventListener('click', () => {
      const iterations = parseInt(simSelect.value, 10) || 1000;
      computeForecast(iterations);
      drawKnoChart();
    });

    simSelect.addEventListener('change', () => {
      const iterations = parseInt(simSelect.value, 10) || 1000;
      computeForecast(iterations);
      drawKnoChart();
    });
  }

  // =========================================================================
  // 4. Interactive RGB Extraction Tool (Cat Image Samples & Histogram)
  // =========================================================================
  const rgbCanvas = document.getElementById('rgb-canvas');
  const crosshair = document.getElementById('pixel-crosshair');
  const coordsText = document.getElementById('coords-text');
  const colorPreview = document.getElementById('color-preview-box');

  const meterRFill = document.getElementById('meter-r-fill');
  const meterGFill = document.getElementById('meter-g-fill');
  const meterBFill = document.getElementById('meter-b-fill');
  const meterRVal = document.getElementById('meter-r-val');
  const meterGVal = document.getElementById('meter-g-val');
  const meterBVal = document.getElementById('meter-b-val');

  const codeHex = document.getElementById('code-hex');
  const codeNorm = document.getElementById('code-norm');
  const histCanvas = document.getElementById('rgb-histogram');

  let currentSampleIdx = 0;
  let activeChannel = 'all'; // 'all', 'r', 'g', 'b'

  // Procedural Cat Image Samples Rendered with Canvas (High-fidelity & 100% offline)
  function renderCatSample(ctx, sampleIdx, w, h) {
    ctx.clearRect(0, 0, w, h);

    if (sampleIdx === 0) {
      // 1. Tabby Orange Cat
      // Warm background
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#5a3d28');
      bgGrad.addColorStop(1, '#2c1e14');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Body / Shoulders
      ctx.fillStyle = '#b86221';
      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.95, w * 0.45, h * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();

      // Ears
      ctx.fillStyle = '#9e4e16';
      ctx.beginPath();
      ctx.moveTo(w * 0.32, h * 0.42);
      ctx.lineTo(w * 0.26, h * 0.16);
      ctx.lineTo(w * 0.44, h * 0.32);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(w * 0.68, h * 0.42);
      ctx.lineTo(w * 0.74, h * 0.16);
      ctx.lineTo(w * 0.56, h * 0.32);
      ctx.fill();

      // Inner ears (pinkish warm)
      ctx.fillStyle = '#df8981';
      ctx.beginPath();
      ctx.moveTo(w * 0.33, h * 0.38);
      ctx.lineTo(w * 0.28, h * 0.20);
      ctx.lineTo(w * 0.42, h * 0.32);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(w * 0.67, h * 0.38);
      ctx.lineTo(w * 0.72, h * 0.20);
      ctx.lineTo(w * 0.58, h * 0.32);
      ctx.fill();

      // Head
      ctx.fillStyle = '#d2792c';
      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.52, w * 0.28, h * 0.26, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tabby Forehead Stripes
      ctx.strokeStyle = '#7c3809';
      ctx.lineWidth = 3.5;
      ctx.lineCap = 'round';
      // Center 'M' stripe
      ctx.beginPath();
      ctx.moveTo(w * 0.45, h * 0.38);
      ctx.lineTo(w * 0.50, h * 0.46);
      ctx.lineTo(w * 0.55, h * 0.38);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w * 0.41, h * 0.42);
      ctx.lineTo(w * 0.38, h * 0.48);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w * 0.59, h * 0.42);
      ctx.lineTo(w * 0.62, h * 0.48);
      ctx.stroke();

      // White Muzzle
      ctx.fillStyle = '#f8ede0';
      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.62, w * 0.16, h * 0.12, 0, 0, Math.PI * 2);
      ctx.fill();

      // Nose (terracotta pink)
      ctx.fillStyle = '#e88277';
      ctx.beginPath();
      ctx.moveTo(w * 0.47, h * 0.58);
      ctx.lineTo(w * 0.53, h * 0.58);
      ctx.lineTo(w * 0.50, h * 0.63);
      ctx.closePath();
      ctx.fill();

      // Eyes (Green-amber)
      ctx.fillStyle = '#9cb82d';
      ctx.beginPath();
      ctx.ellipse(w * 0.40, h * 0.49, 12, 9, -0.1, 0, Math.PI * 2);
      ctx.ellipse(w * 0.60, h * 0.49, 12, 9, 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Pupils
      ctx.fillStyle = '#1c1c1c';
      ctx.beginPath();
      ctx.ellipse(w * 0.40, h * 0.49, 4, 8, 0, 0, Math.PI * 2);
      ctx.ellipse(w * 0.60, h * 0.49, 4, 8, 0, 0, Math.PI * 2);
      ctx.fill();

    } else if (sampleIdx === 1) {
      // 2. Calico Forest Cat
      // Forest deep green background
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#1c2d24');
      bgGrad.addColorStop(1, '#0e1712');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Body
      ctx.fillStyle = '#f3ebe1';
      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.95, w * 0.46, h * 0.36, 0, 0, Math.PI * 2);
      ctx.fill();

      // Calico Patch on body
      ctx.fillStyle = '#282321';
      ctx.beginPath();
      ctx.ellipse(w * 0.35, h * 0.88, w * 0.18, h * 0.14, 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#d4732b';
      ctx.beginPath();
      ctx.ellipse(w * 0.65, h * 0.90, w * 0.16, h * 0.12, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Ears
      ctx.fillStyle = '#282321';
      ctx.beginPath();
      ctx.moveTo(w * 0.32, h * 0.42);
      ctx.lineTo(w * 0.25, h * 0.16);
      ctx.lineTo(w * 0.44, h * 0.32);
      ctx.fill();

      ctx.fillStyle = '#c56b26';
      ctx.beginPath();
      ctx.moveTo(w * 0.68, h * 0.42);
      ctx.lineTo(w * 0.75, h * 0.16);
      ctx.lineTo(w * 0.56, h * 0.32);
      ctx.fill();

      // Head (white base)
      ctx.fillStyle = '#f7f1e8';
      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.52, w * 0.28, h * 0.26, 0, 0, Math.PI * 2);
      ctx.fill();

      // Right patch black, left patch orange
      ctx.fillStyle = '#241f1e';
      ctx.beginPath();
      ctx.ellipse(w * 0.40, h * 0.45, w * 0.14, h * 0.14, -0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#d4732b';
      ctx.beginPath();
      ctx.ellipse(w * 0.60, h * 0.45, w * 0.14, h * 0.14, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Nose
      ctx.fillStyle = '#ea928b';
      ctx.beginPath();
      ctx.moveTo(w * 0.47, h * 0.58);
      ctx.lineTo(w * 0.53, h * 0.58);
      ctx.lineTo(w * 0.50, h * 0.63);
      ctx.closePath();
      ctx.fill();

      // Eyes (Emerald Green)
      ctx.fillStyle = '#20a76a';
      ctx.beginPath();
      ctx.ellipse(w * 0.40, h * 0.49, 12, 9, -0.05, 0, Math.PI * 2);
      ctx.ellipse(w * 0.60, h * 0.49, 12, 9, 0.05, 0, Math.PI * 2);
      ctx.fill();

      // Pupils
      ctx.fillStyle = '#111814';
      ctx.beginPath();
      ctx.ellipse(w * 0.40, h * 0.49, 3.5, 8, 0, 0, Math.PI * 2);
      ctx.ellipse(w * 0.60, h * 0.49, 3.5, 8, 0, 0, Math.PI * 2);
      ctx.fill();

    } else {
      // 3. Silver Siamese Cat
      // Deep Slate Studio Background
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#2b313d');
      bgGrad.addColorStop(1, '#161920');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Cream Body
      ctx.fillStyle = '#e4dbd0';
      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.95, w * 0.42, h * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();

      // Dark Espresso Siamese Ears
      ctx.fillStyle = '#2a201c';
      ctx.beginPath();
      ctx.moveTo(w * 0.31, h * 0.42);
      ctx.lineTo(w * 0.23, h * 0.14);
      ctx.lineTo(w * 0.43, h * 0.32);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(w * 0.69, h * 0.42);
      ctx.lineTo(w * 0.77, h * 0.14);
      ctx.lineTo(w * 0.57, h * 0.32);
      ctx.fill();

      // Head (Soft Cream)
      ctx.fillStyle = '#eee4da';
      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.52, w * 0.27, h * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();

      // Siamese Dark Facial Mask
      ctx.fillStyle = '#372a24';
      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.55, w * 0.19, h * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();

      // Nose
      ctx.fillStyle = '#1e1613';
      ctx.beginPath();
      ctx.moveTo(w * 0.47, h * 0.60);
      ctx.lineTo(w * 0.53, h * 0.60);
      ctx.lineTo(w * 0.50, h * 0.65);
      ctx.closePath();
      ctx.fill();

      // Bright Sapphire Eyes
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.ellipse(w * 0.40, h * 0.49, 12, 9, -0.1, 0, Math.PI * 2);
      ctx.ellipse(w * 0.60, h * 0.49, 12, 9, 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Pupils
      ctx.fillStyle = '#080e14';
      ctx.beginPath();
      ctx.ellipse(w * 0.40, h * 0.49, 4, 8, 0, 0, Math.PI * 2);
      ctx.ellipse(w * 0.60, h * 0.49, 4, 8, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Draw on Canvas and apply channel isolation if active
  function refreshRgbView() {
    if (!rgbCanvas) return;
    const ctx = rgbCanvas.getContext('2d', { willReadFrequently: true });
    const w = rgbCanvas.width;
    const h = rgbCanvas.height;

    // First draw base sample
    renderCatSample(ctx, currentSampleIdx, w, h);

    // Apply channel filtering if selected
    if (activeChannel !== 'all') {
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (activeChannel === 'r') {
          data[i] = r;
          data[i + 1] = r;
          data[i + 2] = r;
        } else if (activeChannel === 'g') {
          data[i] = g;
          data[i + 1] = g;
          data[i + 2] = g;
        } else if (activeChannel === 'b') {
          data[i] = b;
          data[i + 1] = b;
          data[i + 2] = b;
        }
      }
      ctx.putImageData(imgData, 0, 0);
    }

    drawHistogram();
  }

  // Compute and Draw Color Histogram
  function drawHistogram() {
    if (!rgbCanvas || !histCanvas) return;
    const ctx = rgbCanvas.getContext('2d', { willReadFrequently: true });
    const imgData = ctx.getImageData(0, 0, rgbCanvas.width, rgbCanvas.height);
    const data = imgData.data;

    const histR = new Array(256).fill(0);
    const histG = new Array(256).fill(0);
    const histB = new Array(256).fill(0);

    for (let i = 0; i < data.length; i += 4) {
      histR[data[i]]++;
      histG[data[i + 1]]++;
      histB[data[i + 2]]++;
    }

    const hCtx = histCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = histCanvas.getBoundingClientRect();
    histCanvas.width = rect.width * dpr;
    histCanvas.height = rect.height * dpr;
    hCtx.scale(dpr, dpr);

    const hw = rect.width;
    const hh = rect.height;

    hCtx.clearRect(0, 0, hw, hh);

    const maxCount = Math.max(...histR, ...histG, ...histB) || 1;

    // Draw channels curves
    const drawChannelCurve = (hist, strokeColor) => {
      hCtx.strokeStyle = strokeColor;
      hCtx.lineWidth = 1.25;
      hCtx.beginPath();
      for (let i = 0; i < 256; i++) {
        const x = (i / 255) * hw;
        const y = hh - (hist[i] / maxCount) * (hh - 4);
        if (i === 0) hCtx.moveTo(x, y);
        else hCtx.lineTo(x, y);
      }
      hCtx.stroke();
    };

    drawChannelCurve(histR, 'rgba(239, 68, 68, 0.85)');
    drawChannelCurve(histG, 'rgba(16, 185, 129, 0.85)');
    drawChannelCurve(histB, 'rgba(59, 130, 246, 0.85)');
  }

  // Extract pixel at canvas coordinates
  function inspectPixelAt(clientX, clientY) {
    if (!rgbCanvas) return;
    const rect = rgbCanvas.getBoundingClientRect();
    const scaleX = rgbCanvas.width / rect.width;
    const scaleY = rgbCanvas.height / rect.height;

    const canvasX = Math.floor((clientX - rect.left) * scaleX);
    const canvasY = Math.floor((clientY - rect.top) * scaleY);

    if (canvasX < 0 || canvasX >= rgbCanvas.width || canvasY < 0 || canvasY >= rgbCanvas.height) return;

    const ctx = rgbCanvas.getContext('2d', { willReadFrequently: true });
    const pixel = ctx.getImageData(canvasX, canvasY, 1, 1).data;

    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    // Update readouts
    if (coordsText) coordsText.textContent = `X: ${canvasX}, Y: ${canvasY}`;
    if (colorPreview) colorPreview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    if (meterRFill) meterRFill.style.width = `${(r / 255) * 100}%`;
    if (meterGFill) meterGFill.style.width = `${(g / 255) * 100}%`;
    if (meterBFill) meterBFill.style.width = `${(b / 255) * 100}%`;

    if (meterRVal) meterRVal.textContent = r;
    if (meterGVal) meterGVal.textContent = g;
    if (meterBVal) meterBVal.textContent = b;

    const hexStr = `#${r.toString(16).padStart(2, '0').toUpperCase()}${g.toString(16).padStart(2, '0').toUpperCase()}${b.toString(16).padStart(2, '0').toUpperCase()}`;
    if (codeHex) codeHex.textContent = hexStr;
    if (codeNorm) codeNorm.textContent = `[${(r / 255).toFixed(2)}, ${(g / 255).toFixed(2)}, ${(b / 255).toFixed(2)}]`;

    // Move crosshair
    if (crosshair) {
      crosshair.style.display = 'block';
      crosshair.style.left = `${clientX - rect.left}px`;
      crosshair.style.top = `${clientY - rect.top}px`;
    }
  }

  // Sample selection buttons
  const sampleBtns = document.querySelectorAll('.sample-btn');
  sampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sampleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSampleIdx = parseInt(btn.getAttribute('data-sample'), 10) || 0;
      refreshRgbView();
      // Inspect center pixel
      const rect = rgbCanvas.getBoundingClientRect();
      inspectPixelAt(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
  });

  // Channel filter buttons
  const channelBtns = document.querySelectorAll('.channel-btn');
  channelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      channelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeChannel = btn.getAttribute('data-channel') || 'all';
      refreshRgbView();
    });
  });

  // Mouse interaction on RGB canvas
  if (rgbCanvas) {
    rgbCanvas.addEventListener('mousemove', (e) => {
      inspectPixelAt(e.clientX, e.clientY);
    });

    rgbCanvas.addEventListener('click', (e) => {
      inspectPixelAt(e.clientX, e.clientY);
    });

    rgbCanvas.addEventListener('mouseleave', () => {
      if (crosshair) crosshair.style.display = 'none';
    });
  }

  // =========================================================================
  // 5. Modal Abstract Handler & Clipboard Helpers
  // =========================================================================
  const knoModal = document.getElementById('kno-modal');
  const openKnoModalBtn = document.getElementById('open-kno-modal');
  const closeKnoModalBtn = document.getElementById('close-kno-modal');
  const modalDoneBtn = document.getElementById('modal-done-btn');

  function openModal() {
    if (knoModal) {
      knoModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (knoModal) {
      knoModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (openKnoModalBtn) openKnoModalBtn.addEventListener('click', openModal);
  if (closeKnoModalBtn) closeKnoModalBtn.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);

  if (knoModal) {
    knoModal.addEventListener('click', (e) => {
      if (e.target === knoModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && knoModal && !knoModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Copy Email Button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('aldosimbolon017@gmail.com').then(() => {
        const originalText = copyText.textContent;
        const copiedLabel = i18n[currentLang]['common.copied'] || 'Tersalin';
        copyText.textContent = copiedLabel;
        setTimeout(() => {
          copyText.textContent = originalText;
        }, 2000);
      });
    });
  }

  // Copy Python Snippet Button
  const copyPyBtn = document.getElementById('copy-py-btn');
  if (copyPyBtn) {
    copyPyBtn.addEventListener('click', () => {
      const code = `import matplotlib.pyplot as plt
import numpy as np

def extract_rgb_profile(img_array, coord_x, coord_y):
    """Ekstraksi intensitas piksel kanal R, G, B pada titik kursor."""
    pixel_val = img_array[coord_y, coord_x, :3]
    r_channel, g_channel, b_channel = pixel_val
    return {'R': int(r_channel), 'G': int(g_channel), 'B': int(b_channel)}`;

      navigator.clipboard.writeText(code).then(() => {
        const originalText = copyPyBtn.textContent;
        const copiedLabel = i18n[currentLang]['common.codeCopied'] || 'Kode Tersalin';
        copyPyBtn.textContent = copiedLabel;
        setTimeout(() => {
          copyPyBtn.textContent = originalText;
        }, 2000);
      });
    });
  }

  // Language switch button
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'id' ? 'en' : 'id';
      applyLanguage(nextLang);
    });
  }

  // Theme switch button
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Window resize handler for canvas responsiveness
  window.addEventListener('resize', () => {
    drawKnoChart();
    drawHistogram();
  });

  // =========================================================================
  // Initialize Application
  // =========================================================================
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  computeForecast(1000);
  drawKnoChart();
  refreshRgbView();

  // Inspect initial center pixel of Tabby cat
  setTimeout(() => {
    if (rgbCanvas) {
      const rect = rgbCanvas.getBoundingClientRect();
      inspectPixelAt(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  }, 100);

})();
