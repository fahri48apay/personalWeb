# M Fahri Saleh — Personal Website & Portofolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

> Website portofolio pribadi **Mohammad Fahri Saleh** — Operator CCTV berpengalaman
> 6+ tahun yang sedang bertransformasi menjadi **Frontend & Fullstack Developer**.
> Dibangun dengan HTML, CSS, dan JavaScript murni — tanpa framework, tanpa build step.

**Live:** <https://fahri48apay.github.io/personalWeb/>

---

## ✨ Fitur

| Fitur | Keterangan |
| --- | --- |
| 🎨 **Dark theme + aksen cyan** | Desain kontras tinggi, konsisten di semua section |
| 📱 **Fully responsive** | Breakpoint 1285 / 991 / 895 px — desktop → tablet → mobile |
| 🧭 **Navigasi beranimasi typing** | Hero text dengan efek ketik 5 profesi (aksesibel via `prefers-reduced-motion`) |
| 🕰️ **Timeline interaktif** | Riwayat pendidikan dalam timeline bergaris tengah |
| 💬 **Testimoni atasan** | Kartu testimoni dengan avatar asli & inisial |
| 📩 **Form kontak → WhatsApp** | Kirim pesan langsung ke WhatsApp — tanpa butuh backend/server |
| ♿ **Aksesibilitas WCAG-friendly** | `:focus-visible`, label tiap input, `aria-label`, `lang="id"`, kontras terverifikasi |
| 🖼️ **SEO & share-ready** | Meta description, `theme-color`, favicon SVG inline |

Format kontak saat ini memanfaatkan **WhatsApp** (`wa.me`) sebagai saluran pengiriman pesan,
sehingga situs statis di GitHub Pages bisa menerima pesan **tanpa server**.

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
| --- | --- |
| **HTML5** | Struktur semantik halaman (`header`, `section`, `footer`, form berlabel) |
| **CSS3** | Variabel `:root` sebagai design token, Flexbox & Grid, media query, animasi |
| **JavaScript vanilla** | Scroll-spy, menu mobile, handler form → WhatsApp |
| **Boxicons** | Ikon sosial & UI (CDN) |
| **Poppins** | Font utama (Google Fonts) |

---

## 📁 Struktur Proyek

```
personalWeb/
├── index.html        # Halaman utama (semua section portfolio)
├── style.css         # Tokens, layout, animasi, media query
├── script.js         # Scroll-spy, menu mobile, form WhatsApp
├── favicon.svg       # Ikon tab browser (F cyan)
├── foto-profil.jpg   # Foto profil hero
├── Untung Slamet.png # Foto testimoni
├── AliBambang.jpg    # Foto testimoni
└── hero.jpg          # Aset foto cadangan
```

---

## 🚀 Menjalankan Secara Lokal

Repositori ini murni statis — cukup layani folder dengan server file apa pun:

```bash
# Opsi 1: Python
python3 -m http.server 8000

# Opsi 2: Node live-server (sudah terpasang global di beberapa environment)
npx live-server

# Opsi 3: VS Code → ekstensi "Live Server" → klik Go Live
```

Buka `http://localhost:8000` di browser.

---

## 🌍 Deploy ke GitHub Pages

1. Buat repo baru (misal `personalWeb`) lalu `git push` konten ini ke `main`.
2. Buka **Settings → Pages** di repo.
3. Pilih **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Klik **Save** — situs langsung live di `https://<username>.github.io/personalWeb/`.

> Alur ini memakai GitHub Pages klasik (bukan Actions). Riwayat repo ini pernah
> memakai `static.yml` (Actions) — file tersebut sudah dihapus dari branch `main`.

---

## ✍️ Kustomisasi Cepat

| Ingin mengubah | Edit di |
| --- | --- |
| Teks hero & profil | `index.html` → section `#home` |
| Riwayat pendidikan | `index.html` → section `#education` |
| Pengalaman kerja | `index.html` → section `#experience` |
| Testimoni | `index.html` → section `#testimonials` |
| Nomor WhatsApp form | `index.html` (`action`) & `script.js` (URL `wa.me/...`) |
| Warna tema | `style.css` → `:root` (`--main-color`, `--bg-color`) |

---

## 📬 Kontak

- **LinkedIn:** [Mohammad Fahri Saleh](https://www.linkedin.com/in/mohammad-fahri-s-934b9a264/)
- **GitHub:** [@fahri48apay](https://github.com/fahri48apay)
- **Instagram:** [@fahri_apay](https://www.instagram.com/fahri_apay/)
- **WhatsApp:** [6285179944894](https://wa.me/6285179944894)

---

## 📄 Lisensi

© 2025 **M Fahri Saleh** — All Rights Reserved.

Dibuat dengan ❤️ untuk pembelajaran dan pengembangan diri — *#life_long_learning*.