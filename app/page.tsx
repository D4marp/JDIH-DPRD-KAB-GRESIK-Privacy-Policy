import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'JDIH Kab. Gresik - Jaringan Dokumentasi dan Informasi Hukum',
  description: 'Aplikasi informasi publik JDIH Kabupaten Gresik yang menyediakan akses mudah ke peraturan perundang-undangan dan dokumentasi hukum.',
};

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JDIH</span>
              </div>
              <span className="font-bold text-xl text-gray-900">JDIH Kab. Gresik</span>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition">
                Privasi
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 transition">
                Syarat
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition">
                FAQ
              </Link>
              <Link href="/accessibility" className="text-gray-600 hover:text-blue-600 transition">
                Aksesibilitas
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-5xl text-white font-bold">JDIH</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Jaringan Dokumentasi dan <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Informasi Hukum</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Platform informasi publik yang menyediakan akses mudah dan lengkap terhadap peraturan perundang-undangan serta dokumentasi hukum Kabupaten Gresik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.6915026,7.37042127 L3.50612381,17.5164457 C3.19218622,17.7118692 3.03521743,17.8095805 3.03521743,17.8095805 C3.03521743,17.8095805 3.03521743,17.8095805 3.34915502,17.6141571 L17.5431501,7.5748126 C17.8571217,7.37948163 18.0140889,7.28177042 18.0140889,7.28177042 C18.0140889,7.28177042 17.8571217,7.28177042 17.6915026,7.37042127 Z"/>
              </svg>
              Download di Play Store
            </a>
            <a 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:shadow-lg transition"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.905-.08 1.77-.67 2.99-.76 1.23-.1 2.16.49 2.74 1.23-2.62 1.65-2.17 5.12.14 6.02-.82 2.02-1.95 3.1-3.95 3.68zm-3.05-11.58c-.16-1.88 1.56-3.47 3.36-3.68.29 2.26-2.13 4.05-3.36 3.68z"/>
              </svg>
              Download di App Store
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Fitur Utama</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Akses Mudah</h3>
            <p className="text-gray-600">
              Akses semua peraturan dan dokumentasi hukum Kabupaten Gresik dengan mudah, cepat, dan gratis tanpa memerlukan registrasi atau login.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Data Lengkap</h3>
            <p className="text-gray-600">
              Koleksi lengkap peraturan perundang-undangan, keputusan, dan dokumentasi hukum resmi dari Pemerintah Kabupaten Gresik yang selalu diperbarui.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pencarian Cepat</h3>
            <p className="text-gray-600">
              Fitur pencarian canggih membantu Anda menemukan informasi hukum yang dibutuhkan dengan mudah dan cepat.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Update Berkala</h3>
            <p className="text-gray-600">
              Informasi selalu diperbarui sesuai dengan peraturan terbaru yang diterbitkan oleh Pemerintah Kabupaten Gresik.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Aman & Terpercaya</h3>
            <p className="text-gray-600">
              Aplikasi resmi dari Pemerintah Kabupaten Gresik dengan jaminan keamanan data dan privasi pengguna.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Offline Mode</h3>
            <p className="text-gray-600">
              Simpan dokumen penting dan akses offline kapan saja, di mana saja tanpa memerlukan koneksi internet.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Tentang JDIH Kab. Gresik</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                JDIH (Jaringan Dokumentasi dan Informasi Hukum) Kabupaten Gresik adalah platform digital resmi yang menyediakan akses publik ke peraturan perundang-undangan, keputusan, dan dokumentasi hukum Kabupaten Gresik.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Aplikasi ini dikembangkan oleh Dinas Komunikasi dan Informatika Kabupaten Gresik sebagai wujud nyata komitmen pemerintah dalam menyediakan transparansi dan akses informasi publik kepada seluruh masyarakat.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dengan aplikasi JDIH, masyarakat dapat dengan mudah mencari, membaca, dan mengakses semua peraturan hukum yang berlaku di Kabupaten Gresik untuk keperluan pribadi, pendidikan, atau profesional.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Resmi dan Terpercaya</h3>
                    <p className="mt-2 text-gray-600">Sumber informasi hukum dari Pemerintah Kabupaten Gresik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Gratis dan Publik</h3>
                    <p className="mt-2 text-gray-600">Akses informasi hukum tanpa biaya untuk semua masyarakat</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Mudah Digunakan</h3>
                    <p className="mt-2 text-gray-600">Antarmuka yang user-friendly untuk semua kalangan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Penting untuk Diketahui</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0zM8 9a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
                Tanpa Login & Registrasi
              </h3>
              <p className="text-gray-600">
                Aplikasi JDIH Kab. Gresik adalah aplikasi informasi publik yang dapat diakses oleh siapa saja tanpa perlu membuat akun, login, atau registrasi. Semua pengguna memiliki akses yang sama ke semua informasi yang tersedia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1V3a1 1 0 011-1h5a1 1 0 011 1v1h1V3a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm0 5a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V7z" clipRule="evenodd" />
                </svg>
                Informasi Publik
              </h3>
              <p className="text-gray-600">
                Semua konten dalam aplikasi ini adalah informasi publik yang disediakan oleh Pemerintah Kabupaten Gresik sesuai dengan Undang-Undang Keterbukaan Informasi Publik.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.488 5.951 1.488a1 1 0 001.169-1.409l-7-14z" />
                </svg>
                Privasi Terjamin
              </h3>
              <p className="text-gray-600">
                Kami berkomitmen melindungi privasi pengguna. Data Anda tidak akan dikumpulkan untuk tujuan komersial dan kami tidak memerlukan informasi pribadi apapun.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999a11.954 11.954 0 010 10.002 8 8 0 106.910 6.910A11.954 11.954 0 012.166 5zm6.25 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" clipRule="evenodd" />
                </svg>
                Dukungan & Bantuan
              </h3>
              <p className="text-gray-600">
                Jika Anda memiliki pertanyaan atau membutuhkan bantuan, silakan hubungi Dinas Komunikasi dan Informatika Kabupaten Gresik melalui kontak yang tersedia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Mengakses Informasi Hukum?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Download aplikasi JDIH Kab. Gresik sekarang dan akses semua peraturan perundang-undangan Kabupaten Gresik dengan mudah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.5,6.5 L3.5,17.5 C3.5,18.33 4.17,19 5,19 L19,19 C19.83,19 20.5,18.33 20.5,17.5 L20.5,6.5 C20.5,5.67 19.83,5 19,5 L5,5 C4.17,5 3.5,5.67 3.5,6.5 Z"/>
              </svg>
              Download di Play Store
            </a>
            <a 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05,20.28 C16.07,21.23 15,21.16 13.97,20.68 C12.88,20.18 11.98,20.2 10.74,20.68 C9.3,21.3 8.54,21.12 7.68,20.28 C2.79,15.25 3.51,7.59 9.05,7.31 C10.4,7.38 11.29,8.05 12.08,8.11 C12.985,8.03 13.78,7.44 14.99,7.35 C16.23,7.25 17.16,7.84 17.74,8.58 C15.12,10.23 15.57,13.7 17.88,14.6 C17.06,16.62 15.93,17.7 13.93,18.28 Z M13,6.5 C12.84,4.62 14.56,3.03 16.36,2.82 C16.65,4.68 14.23,6.37 13,6.5 Z"/>
              </svg>
              Download di App Store
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">JDIH</span>
                </div>
                <span className="font-bold text-white">JDIH Kab. Gresik</span>
              </div>
              <p className="text-sm">Platform informasi publik dari Pemerintah Kabupaten Gresik</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Menu</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Beranda</a></li>
                <li><a href="#" className="hover:text-white transition">Tentang</a></li>
                <li><a href="#" className="hover:text-white transition">Fitur</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-white transition">Kebijakan Privasi</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition">Syarat & Ketentuan</Link></li>
                <li><Link href="/accessibility" className="hover:text-white transition">Aksesibilitas</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@gresikkab.go.id</li>
                <li>Telepon: (031) 3980800</li>
                <li>Website: www.gresikkab.go.id</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">© 2025 Pemerintah Kabupaten Gresik. Semua hak dilindungi.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.746 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.777 2.21.565 6.478.006 7.757 0 8.183 0 12s.012 4.243.07 5.525c.208 4.27 2.126 6.2 6.394 6.409 1.278.058 1.704.07 4.97.07 3.268 0 3.694-.012 4.972-.07 4.26-.208 6.189-2.142 6.394-6.41.057-1.28.07-1.706.07-4.97 0-3.265-.012-3.691-.07-4.97-.211-4.268-2.128-6.199-6.394-6.409C15.255.012 14.83 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                    <circle cx="18.406" cy="5.595" r="1.44" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
