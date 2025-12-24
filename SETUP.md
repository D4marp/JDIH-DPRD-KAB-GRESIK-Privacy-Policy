# Setup & Deployment Guide - JDIH DPRD Kab. Gresik

## ✅ Status: READY FOR DEPLOYMENT

Aplikasi Privacy Policy JDIH DPRD Kab. Gresik telah dikonfigurasi dengan lengkap dan siap untuk submission ke Play Store dan App Store.

## 🚀 Instalasi & Setup Lokal

### 1. Install Dependencies
```bash
cd /Users/HCMPublic/Kuliah/Project/JDIH-DPRD-Gresik
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Server akan berjalan di: `http://localhost:3000`

### 3. Build untuk Production
```bash
npm run build
npm start
```

## 📱 Halaman yang Tersedia

- **Home** (`/`) - Landing page dengan informasi aplikasi
- **Privacy Policy** (`/privacy-policy`) - Kebijakan privasi lengkap
- **Terms of Service** (`/terms-of-service`) - Syarat dan ketentuan
- **Accessibility** (`/accessibility`) - Kebijakan aksesibilitas
- **FAQ** (`/faq`) - Pertanyaan yang sering diajukan

## 📋 Files & Folders

```
app/
├── page.tsx                    # Home page
├── privacy-policy/page.tsx     # Privacy Policy
├── terms-of-service/page.tsx   # Terms of Service
├── accessibility/page.tsx      # Accessibility
├── faq/page.tsx               # FAQ
├── layout.tsx                 # Root layout
└── globals.css                # Global styles

public/
└── robots.txt                 # SEO

Configuration:
├── package.json               # Dependencies
├── next.config.js            # Next.js config
├── tailwind.config.ts        # Tailwind CSS
├── postcss.config.js         # PostCSS
├── tsconfig.json             # TypeScript
└── .gitignore                # Git config

Documentation:
├── PLAYSTORE_README.md       # Deskripsi untuk Play Store
├── app-store-config.json     # Metadata untuk App Store
└── SETUP.md                  # File ini
```

## 🔄 Langkah Deployment

### 1. Persiapkan Domain
- Update semua URL dari `jdih-dprd-gresik.example.com` ke domain sebenarnya
- File yang perlu diupdate:
  - `app/page.tsx` (footer & CTA)
  - `PLAYSTORE_README.md`
  - Privacy Policy & Terms (Hubungi Kami section)

### 2. Setup SSL Certificate
- Install SSL certificate di server production
- Pastikan HTTPS diaktifkan

### 3. Build & Deploy
```bash
npm run build
npm start
```

### 4. Testing
- Test semua halaman di berbagai device
- Test responsive design
- Test accessibility features

### 5. Submit ke Play Store
- Gunakan deskripsi dari `PLAYSTORE_README.md`
- Upload Privacy Policy URL
- Category: Books & Reference

### 6. Submit ke App Store
- Upload privacy policy
- Gunakan metadata dari `app-store-config.json`
- Submit untuk review

## 📞 Contact Information

```
DPRD Kabupaten Gresik
Email: info@dprd-gresik.go.id
Phone: (031) XXXX-XXXX
Website: www.dprd-gresik.go.id
```

## 🎓 Tech Stack

- **Framework**: Next.js 15.x
- **React**: 18.3.1
- **CSS**: Tailwind CSS 3.4.7
- **Language**: TypeScript 5.7.2
- **Node.js**: Latest LTS

---

**Version**: 1.0.0
**Created**: December 24, 2025
**Status**: Ready for Production
