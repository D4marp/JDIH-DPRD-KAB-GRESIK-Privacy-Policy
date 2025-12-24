import React from 'react';

export const metadata = {
  title: 'Syarat dan Ketentuan - JDIH Kab. Gresik',
  description: 'Syarat dan ketentuan penggunaan aplikasi JDIH Kab. Gresik',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Syarat dan Ketentuan Penggunaan</h1>
          <p className="text-blue-100">JDIH Kab. Gresik</p>
          <p className="text-sm text-blue-200 mt-4">Terakhir diperbarui: Desember 2025</p>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-8 space-y-8 text-gray-700 leading-relaxed">
          {/* Pengenalan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengenalan</h2>
            <p>
              Selamat datang di aplikasi JDIH (Jaringan Dokumentasi dan Informasi Hukum) Kabupaten Gresik. Dengan mengunduh, mengakses, dan menggunakan aplikasi ini, Anda menyetujui untuk terikat oleh syarat dan ketentuan yang ditetapkan dalam dokumen ini. Jika Anda tidak setuju dengan ketentuan ini, mohon jangan menggunakan aplikasi kami.
            </p>
          </section>

          {/* Definisi dan Istilah */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definisi dan Istilah</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-800">Aplikasi JDIH:</h3>
                <p className="text-gray-700">Platform digital yang menyediakan informasi tentang peraturan perundang-undangan dan dokumentasi hukum Kabupaten Gresik.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Pengguna:</h3>
                <p className="text-gray-700">Setiap orang yang mengunduh dan menggunakan aplikasi JDIH Kab. Gresik.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Konten:</h3>
                <p className="text-gray-700">Semua materi dalam aplikasi, termasuk teks, gambar, dokumen hukum, dan informasi lainnya.</p>
              </div>
            </div>
          </section>

          {/* Lisensi Penggunaan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Lisensi Penggunaan</h2>
            <p className="mb-4">
              Pemerintah Kabupaten Gresik memberikan lisensi terbatas, non-eksklusif, dan tidak dapat dialihkan kepada Anda untuk menggunakan aplikasi JDIH untuk keperluan pribadi dan non-komersial.
            </p>
            <p>
              Anda diizinkan untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>Mengunduh dan menggunakan aplikasi untuk tujuan informasi pribadi</li>
              <li>Melihat, mencetak, dan menyimpan konten untuk penggunaan pribadi</li>
              <li>Membagikan informasi publik sesuai dengan ketentuan hukum yang berlaku</li>
            </ul>
          </section>

          {/* Pembatasan Penggunaan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pembatasan Penggunaan</h2>
            <p className="mb-4">Anda dilarang untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Menggunakan aplikasi untuk tujuan komersial tanpa persetujuan tertulis</li>
              <li>Memodifikasi, menerjemahkan, atau membuat karya turunan dari aplikasi atau konten</li>
              <li>Melakukan reverse engineering, mendekompilasi, atau membongkar aplikasi</li>
              <li>Menghapus atau mengubah pemberitahuan hak cipta, merek dagang, atau notifikasi lainnya</li>
              <li>Menggunakan aplikasi dengan cara yang melanggar hukum atau ketentuan ini</li>
              <li>Membagikan akses aplikasi kepada pihak ketiga tanpa izin</li>
              <li>Melakukan scraping data atau otomasi pengaksesan konten tanpa izin</li>
              <li>Mengirim malware, virus, atau kode berbahaya lainnya</li>
              <li>Melakukan serangan denial-of-service atau aktivitas yang mengganggu layanan</li>
            </ul>
          </section>

          {/* Konten Pengguna */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Konten dan Informasi Publik</h2>
            <p className="mb-4">
              Semua konten dalam aplikasi JDIH adalah informasi publik yang disediakan oleh Pemerintah Kabupaten Gresik. Konten ini tersedia untuk umum sesuai dengan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
            </p>
            <p className="mb-4">
              Dengan mengakses konten ini, Anda memahami dan menerima bahwa:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Konten disediakan "sebagaimana adanya" tanpa jaminan</li>
              <li>Kami tidak menjamin keakuratan, kelengkapan, atau kualitas konten</li>
              <li>Penggunaan konten adalah risiko Anda sendiri</li>
              <li>Kami tidak bertanggung jawab atas interpretasi atau penggunaan konten</li>
            </ul>
          </section>

          {/* Hak Kekayaan Intelektual */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hak Kekayaan Intelektual</h2>
            <p className="mb-4">
              Semua hak kekayaan intelektual dalam aplikasi JDIH dan kontennya (kecuali konten publik yang diatribusikan kepada sumber lain) adalah milik Pemerintah Kabupaten Gresik atau pemegang lisensi yang sesuai.
            </p>
            <p className="mb-4">
              Anda setuju untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Menghormati hak cipta dan hak kekayaan intelektual lainnya</li>
              <li>Tidak melakukan pelanggaran terhadap hak-hak tersebut</li>
              <li>Mencantumkan atribusi yang sesuai jika menggunakan konten</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Penafian (Disclaimer)</h2>
            <p className="mb-4">
              <strong>APLIKASI DAN KONTEN DISEDIAKAN "SEBAGAIMANA ADANYA" TANPA JAMINAN APAPUN.</strong>
            </p>
            <p className="mb-4">
              PEMERINTAH KABUPATEN GRESIK DENGAN TEGAS MENAFIKAN SEMUA JAMINAN, BAIK TERSURAT MAUPUN TERSIRAT, TERMASUK NAMUN TIDAK TERBATAS PADA:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Jaminan tentang keberlanjutan atau ketersediaan layanan</li>
              <li>Jaminan tentang keamanan atau akurasi informasi</li>
              <li>Jaminan tentang kelayakan untuk tujuan tertentu</li>
              <li>Jaminan tentang tanpa cacat atau kesalahan</li>
            </ul>
            <p className="mt-4">
              Kami tidak bertanggung jawab atas kehilangan data, downtime, atau gangguan layanan yang mungkin terjadi.
            </p>
          </section>

          {/* Batasan Tanggung Jawab */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Batasan Tanggung Jawab</h2>
            <p className="mb-4">
              DALAM BATAS MAKSIMAL YANG DIIZINKAN OLEH HUKUM, PEMERINTAH KABUPATEN GRESIK TIDAK AKAN BERTANGGUNG JAWAB ATAS:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Kerugian yang mungkin timbul dari penggunaan atau ketidakmampuan menggunakan aplikasi</li>
              <li>Kehilangan data, pendapatan, atau keuntungan</li>
              <li>Kerusakan khusus, tidak langsung, insidental, atau konsekuensial</li>
              <li>Kesalahan atau kegagalan dalam konten atau layanan</li>
              <li>Pihak ketiga atau kejadian di luar kendali kami</li>
            </ul>
          </section>

          {/* Koneksi Internet dan Perangkat */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Koneksi Internet dan Perangkat</h2>
            <p className="mb-4">
              Pengguna bertanggung jawab atas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Menyediakan koneksi internet yang stabil dan aman</li>
              <li>Memastikan perangkat mereka memenuhi persyaratan sistem minimum</li>
              <li>Menjaga keamanan dan privasi akses perangkat mereka</li>
              <li>Menjaga perangkat tetap bebas dari malware dan virus</li>
            </ul>
          </section>

          {/* Gangguan Layanan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Gangguan dan Pemeliharaan Layanan</h2>
            <p className="mb-4">
              Kami berhak untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Melakukan pemeliharaan atau pembaruan sistem</li>
              <li>Menangguhkan atau menghentikan layanan tanpa pemberitahuan sebelumnya jika diperlukan untuk keamanan</li>
              <li>Mengubah fitur atau konten aplikasi</li>
              <li>Membatasi akses pengguna yang melanggar ketentuan ini</li>
            </ul>
            <p className="mt-4">
              Kami akan berusaha memberikan pemberitahuan sebanyak mungkin untuk gangguan yang direncanakan.
            </p>
          </section>

          {/* Pengakhiran Akses */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Pengakhiran Akses</h2>
            <p className="mb-4">
              Kami berhak untuk menonaktifkan atau membatasi akses Anda jika:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Anda melanggar ketentuan penggunaan ini</li>
              <li>Aktivitas Anda membahayakan keamanan sistem</li>
              <li>Aktivitas Anda mengganggu pengguna lain</li>
              <li>Anda terlibat dalam aktivitas ilegal</li>
            </ul>
            <p className="mt-4">
              Pengakhiran tidak menghilangkan kewajiban hukum Anda atau membatasi tanggung jawab kami menurut hukum yang berlaku.
            </p>
          </section>

          {/* Perubahan Ketentuan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Syarat dan Ketentuan</h2>
            <p>
              Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku segera setelah diposting. Penggunaan berkelanjutan atas aplikasi setelah perubahan dianggap sebagai persetujuan Anda terhadap ketentuan yang diperbarui. Kami merekomendasikan untuk secara berkala memeriksa halaman ini untuk mengetahui perubahan terbaru.
            </p>
          </section>

          {/* Hukum yang Berlaku */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Hukum yang Berlaku</h2>
            <p className="mb-4">
              Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia tanpa menghiraukan konflik ketentuan hukumnya.
            </p>
            <p>
              Yurisdiksi eksklusif untuk menyelesaikan sengketa yang timbul dari atau berkaitan dengan syarat dan ketentuan ini berada pada pengadilan yang berwenang di Kabupaten Gresik.
            </p>
          </section>

          {/* Penyelesaian Sengketa */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Penyelesaian Sengketa</h2>
            <p className="mb-4">
              Jika terjadi sengketa mengenai penggunaan aplikasi ini, kami mendorong pengguna untuk:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Menghubungi kami melalui saluran komunikasi yang disediakan</li>
              <li>Berusaha menyelesaikan secara musyawarah</li>
              <li>Jika diperlukan, mengajukan gugatan ke pengadilan yang berwenang</li>
            </ol>
          </section>

          {/* Hubungi Kami */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Hubungi Kami</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan atau kekhawatiran mengenai syarat dan ketentuan ini, silakan hubungi:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4 border-l-4 border-blue-600">
              <p className="mb-3 font-semibold text-gray-900">Dinas Komunikasi dan Informatika Kabupaten Gresik</p>
              <p className="mb-2"><span className="font-semibold">Alamat:</span> Jl. Soekarno-Hatta No. 1, Gresik</p>
              <p className="mb-2"><span className="font-semibold">Email:</span> info@gresikkab.go.id</p>
              <p className="mb-2"><span className="font-semibold">Telepon:</span> (031) 3980800</p>
              <p><span className="font-semibold">Website:</span> www.gresikkab.go.id</p>
            </div>
          </section>

          {/* Pernyataan Akhir */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Pernyataan Akhir</h2>
            <p className="mb-4">
              Dengan menggunakan aplikasi JDIH Kab. Gresik, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh syarat dan ketentuan ini.
            </p>
            <p>
              Jika ada bagian dari syarat dan ketentuan ini yang dinyatakan tidak berlaku oleh pengadilan, bagian-bagian lainnya akan tetap berlaku sepenuhnya, dan ketentuan yang tidak berlaku akan diganti dengan ketentuan yang berlaku dan mencerminkan maksud asli kami.
            </p>
          </section>

          {/* Versi dan Tanggal */}
          <div className="border-t-2 border-gray-200 mt-8 pt-6 text-sm text-gray-600">
            <p><span className="font-semibold">Versi:</span> 1.0</p>
            <p><span className="font-semibold">Efektif sejak:</span> Desember 2025</p>
            <p className="mt-2">Syarat dan ketentuan ini dapat diubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</p>
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
