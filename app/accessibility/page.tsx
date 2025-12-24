import React from 'react';

export const metadata = {
  title: 'Kebijakan Aksesibilitas - JDIH Kab. Gresik',
  description: 'Kebijakan aksesibilitas aplikasi JDIH Kab. Gresik',
};

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Kebijakan Aksesibilitas</h1>
          <p className="text-blue-100">JDIH Kab. Gresik</p>
          <p className="text-sm text-blue-200 mt-4">Terakhir diperbarui: Desember 2025</p>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-8 space-y-8 text-gray-700 leading-relaxed">
          {/* Pengenalan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Komitmen Kami terhadap Aksesibilitas</h2>
            <p className="mb-4">
              Pemerintah Kabupaten Gresik berkomitmen untuk membuat aplikasi JDIH dapat diakses oleh semua orang, termasuk mereka dengan disabilitas. Kami mengikuti standar aksesibilitas web internasional dan terus meningkatkan pengalaman pengguna.
            </p>
            <p>
              Aplikasi ini dirancang dengan prinsip "Universal Design" untuk memastikan semua pengguna dapat mengakses informasi hukum dengan mudah, tanpa memandang kemampuan atau keterbatasan mereka.
            </p>
          </section>

          {/* Standar yang Diikuti */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Standar Aksesibilitas</h2>
            <p className="mb-4">
              Aplikasi JDIH Kab. Gresik mengikuti standar internasional:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>WCAG 2.1 (Web Content Accessibility Guidelines)</strong> - Level AA sebagai target minimum</li>
              <li><strong>Section 508</strong> - Standar aksesibilitas elektronik AS</li>
              <li><strong>EN 301 549</strong> - Standar aksesibilitas IT Eropa</li>
              <li><strong>Accessibility for Ontarians with Disabilities Act (AODA)</strong></li>
            </ul>
          </section>

          {/* Fitur Aksesibilitas */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Fitur Aksesibilitas yang Tersedia</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">a. Dukungan Pembaca Layar (Screen Reader)</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Semua elemen UI dilengkapi dengan label yang deskriptif</li>
              <li>Struktur heading yang logis untuk navigasi konten</li>
              <li>Alt text untuk semua gambar dan ikon</li>
              <li>Kompatibel dengan NVDA, JAWS, dan VoiceOver</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">b. Navigasi Keyboard</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Semua fungsi dapat diakses menggunakan keyboard saja</li>
              <li>Urutan tab logis untuk memudahkan navigasi</li>
              <li>Shortcut keyboard yang intuitif</li>
              <li>Focus indicator yang jelas dan terlihat</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">c. Kontras Warna dan Tipografi</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Rasio kontras minimum 4.5:1 untuk teks normal</li>
              <li>Rasio kontras minimum 3:1 untuk teks besar</li>
              <li>Font yang mudah dibaca dengan ukuran yang cukup</li>
              <li>Jarak line spacing yang memadai</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">d. Zoom dan Ukuran Teks</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Dukungan zoom hingga 200% tanpa kehilangan fungsionalitas</li>
              <li>Kontrol ukuran teks yang dapat disesuaikan</li>
              <li>Responsive design yang bekerja pada semua ukuran layar</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">e. Captions dan Transcripts</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Video dilengkapi dengan caption tertutup</li>
              <li>Transcript tersedia untuk konten audio</li>
              <li>Deskripsi audio untuk konten visual penting</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">f. Mode Gelap (Dark Mode)</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Dukungan preferensi system dark mode</li>
              <li>Opsi manual untuk toggle light/dark mode</li>
              <li>Kontras yang memadai di kedua mode</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">g. Animasi dan Motion</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Respek terhadap prefers-reduced-motion</li>
              <li>Animasi yang tidak menyebabkan kebingungan</li>
              <li>Kontrol atas autoplay konten</li>
            </ul>
          </section>

          {/* Aksesibilitas Perangkat */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Aksesibilitas pada Berbagai Perangkat</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">Android</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Dukungan TalkBack (screen reader Android)</li>
              <li>Kompatibel dengan Android Switch Control</li>
              <li>Kontrol aksesibilitas lengkap di Android Settings</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">iOS</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Dukungan VoiceOver (screen reader iOS)</li>
              <li>Kompatibel dengan Switch Control dan Voice Control</li>
              <li>Aksesibilitas through iOS Accessibility Settings</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">Web</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Cross-browser compatibility</li>
              <li>Dukungan untuk berbagai assistive technologies</li>
              <li>Responsif pada semua ukuran viewport</li>
            </ul>
          </section>

          {/* Umpan Balik Aksesibilitas */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pelaporan Masalah Aksesibilitas</h2>
            <p className="mb-4">
              Kami menghargai feedback Anda tentang aksesibilitas aplikasi. Jika Anda mengalami kesulitan mengakses konten atau fitur aplikasi, mohon lapor kepada kami:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4 border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 mb-2">Hubungi kami melalui:</p>
              <p className="mb-2"><span className="font-semibold">Email:</span> accessibility@gresikkab.go.id</p>
              <p className="mb-2"><span className="font-semibold">Telepon:</span> (031) 3980800</p>
              <p className="mb-4"><span className="font-semibold">Subject:</span> "Laporan Aksesibilitas JDIH"</p>
              <p className="text-sm text-gray-600">
                Harap sertakan: perangkat yang digunakan, sistem operasi, jenis disabilitas atau masalah aksesibilitas yang dihadapi, dan langkah-langkah untuk mereproduksi masalah.
              </p>
            </div>
          </section>

          {/* Komitmen Berkelanjutan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Komitmen Berkelanjutan</h2>
            <p className="mb-4">
              Kami berkomitmen untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Melakukan audit aksesibilitas reguler</li>
              <li>Melibatkan pengguna dengan disabilitas dalam pengembangan</li>
              <li>Melatih tim pengembang tentang best practices aksesibilitas</li>
              <li>Meningkatkan aksesibilitas secara berkelanjutan</li>
              <li>Mematuhi standar aksesibilitas terbaru</li>
              <li>Mendengarkan dan merespons feedback pengguna</li>
            </ul>
          </section>

          {/* Aksesibilitas Konten */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Aksesibilitas Konten Hukum</h2>
            <p className="mb-4">
              Dokumen hukum dalam aplikasi disediakan dalam format yang aksesibel:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>PDF yang ditandai dengan struktur heading yang jelas</li>
              <li>Teks dapat dicari dan disalin</li>
              <li>Format alternatif tersedia jika diminta</li>
              <li>Deskripsi singkat untuk setiap dokumen</li>
              <li>Metadata yang lengkap untuk indexing yang baik</li>
            </ul>
          </section>

          {/* Panduan Aksesibilitas Pengguna */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Panduan Menggunakan Fitur Aksesibilitas</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">Mengaktifkan TalkBack (Android)</h3>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Buka Settings → Accessibility</li>
              <li>Pilih TalkBack dan aktifkan toggle</li>
              <li>Berikan izin yang diminta</li>
              <li>Buka aplikasi JDIH untuk menggunakan TalkBack</li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">Mengaktifkan VoiceOver (iOS)</h3>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Buka Settings → Accessibility</li>
              <li>Pilih VoiceOver dan aktifkan toggle</li>
              <li>Ikuti tutorial VoiceOver jika diinginkan</li>
              <li>Buka aplikasi JDIH untuk menggunakan VoiceOver</li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">Menyesuaikan Ukuran Teks</h3>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Buka Settings aplikasi JDIH</li>
              <li>Cari opsi "Text Size" atau "Font Size"</li>
              <li>Pilih ukuran yang sesuai dengan kebutuhan Anda</li>
              <li>Perubahan akan langsung diterapkan</li>
            </ol>
          </section>

          {/* Hubungi Kami */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Pertanyaan Aksesibilitas Lebih Lanjut</h2>
            <p className="mb-4">
              Untuk pertanyaan atau informasi lebih lanjut tentang aksesibilitas:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4 border-l-4 border-blue-600">
              <p className="mb-3 font-semibold text-gray-900">Dinas Komunikasi dan Informatika Kabupaten Gresik</p>
              <p className="mb-2"><span className="font-semibold">Email:</span> info@gresikkab.go.id</p>
              <p className="mb-2"><span className="font-semibold">Telepon:</span> (031) 3980800</p>
              <p><span className="font-semibold">Website:</span> www.gresikkab.go.id</p>
            </div>
          </section>

          {/* Versi dan Tanggal */}
          <div className="border-t-2 border-gray-200 mt-8 pt-6 text-sm text-gray-600">
            <p><span className="font-semibold">Versi:</span> 1.0</p>
            <p><span className="font-semibold">Efektif sejak:</span> Desember 2025</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-600 text-sm">
        <p>© 2025 Pemerintah Kabupaten Gresik. Semua hak dilindungi.</p>
      </div>
    </div>
  );
}
