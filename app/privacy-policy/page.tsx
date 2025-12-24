import React from 'react';

export const metadata = {
  title: 'Kebijakan Privasi - JDIH Kab. Gresik',
  description: 'Kebijakan privasi aplikasi JDIH Kab. Gresik',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Kebijakan Privasi</h1>
          <p className="text-blue-100">JDIH Kab. Gresik</p>
          <p className="text-sm text-blue-200 mt-4">Terakhir diperbarui: Desember 2025</p>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-8 space-y-8 text-gray-700 leading-relaxed">
          {/* Pengenalan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengenalan</h2>
            <p className="mb-4">
              Kami, Kabupaten Gresik, melalui Aplikasi JDIH (Jaringan Dokumentasi dan Informasi Hukum) berkomitmen untuk melindungi privasi pengguna. Kebijakan Privasi ini menjelaskan bagaimana aplikasi kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan.
            </p>
            <p>
              Aplikasi ini dirancang sebagai platform informasi publik tentang peraturan perundang-undangan dan dokumentasi hukum Kabupaten Gresik tanpa memerlukan proses pendaftaran atau login.
            </p>
          </section>

          {/* Informasi yang Dikumpulkan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informasi yang Dikumpulkan</h2>
            <p className="mb-4">Karena aplikasi JDIH Kab. Gresik adalah aplikasi informasi publik tanpa fitur login atau registrasi, kami hanya mengumpulkan:</p>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">a. Data Otomatis (Analytics)</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Jenis perangkat yang digunakan (iOS atau Android)</li>
              <li>Sistem operasi dan versinya</li>
              <li>Informasi koneksi internet (tipe koneksi)</li>
              <li>Aktivitas penggunaan aplikasi (halaman yang dikunjungi, fitur yang digunakan)</li>
              <li>Waktu dan durasi penggunaan aplikasi</li>
              <li>Lokasi umum pengguna (tingkat provinsi/kota)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">b. Cookie dan Teknologi Serupa</h3>
            <p>
              Kami dapat menggunakan cookies dan teknologi tracking serupa untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>Meningkatkan pengalaman pengguna</li>
              <li>Menganalisis penggunaan aplikasi</li>
              <li>Menyimpan preferensi pengguna</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">c. Data yang TIDAK Dikumpulkan</h3>
            <p>
              Aplikasi ini <strong>TIDAK</strong> mengumpulkan:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>Nama pribadi atau identitas pengguna</li>
              <li>Alamat email atau nomor telepon</li>
              <li>Data lokasi presisi (GPS)</li>
              <li>Informasi identitas pribadi (KTP, NIK, dll)</li>
              <li>Data keuangan atau pembayaran</li>
              <li>Riwayat kesehatan atau biometrik</li>
            </ul>
          </section>

          {/* Penggunaan Informasi */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Penggunaan Informasi</h2>
            <p className="mb-4">Informasi yang dikumpulkan digunakan untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Menyediakan dan meningkatkan layanan aplikasi JDIH</li>
              <li>Menganalisis pola penggunaan untuk optimalisasi konten</li>
              <li>Memahami kebutuhan pengguna akan informasi hukum</li>
              <li>Mencegah fraud dan meningkatkan keamanan</li>
              <li>Mematuhi kewajiban hukum yang berlaku</li>
              <li>Memberikan pengalaman pengguna yang lebih baik</li>
            </ul>
          </section>

          {/* Keamanan Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Keamanan Data</h2>
            <p className="mb-4">
              Kami mengimplementasikan langkah-langkah keamanan teknis dan organisasi untuk melindungi data pengguna:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Enkripsi data dalam transit menggunakan protokol HTTPS/SSL</li>
              <li>Akses data dibatasi hanya kepada personel yang berwenang</li>
              <li>Pembaruan keamanan reguler dan pemantauan sistem</li>
              <li>Backup data untuk memastikan ketersediaan layanan</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Namun, tidak ada metode transmisi internet atau penyimpanan elektronik yang 100% aman. Kami tidak dapat menjamin keamanan absolut, tetapi berkomitmen untuk menggunakan praktik terbaik industri.
            </p>
          </section>

          {/* Pembagian Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pembagian Data dengan Pihak Ketiga</h2>
            <p className="mb-4">
              Kami <strong>TIDAK</strong> menjual, memperdagangkan, atau membagikan data pengguna kepada pihak ketiga untuk keperluan pemasaran.
            </p>
            <p className="mb-4">Data dapat dibagikan dengan:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Penyedia layanan teknis (hosting, analytics) yang terikat perjanjian kerahasiaan</li>
              <li>Otoritas pemerintah jika diwajibkan oleh hukum</li>
              <li>Mitra resmi Pemerintah Kabupaten Gresik dalam konteks pelayanan publik</li>
            </ul>
          </section>

          {/* Retensi Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Retensi Data</h2>
            <p>
              Data analytics dan logs penggunaan disimpan sesuai dengan peraturan pemerintah. Data akan dihapus atau dianonimkan setelah tidak lagi diperlukan untuk keperluan yang dikumpulkan, biasanya dalam waktu 1-2 tahun, kecuali jika diwajibkan oleh hukum untuk disimpan lebih lama.
            </p>
          </section>

          {/* Hak Pengguna */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hak-Hak Pengguna</h2>
            <p className="mb-4">Sesuai dengan Undang-Undang Perlindungan Data Pribadi Indonesia, Anda memiliki hak untuk:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Mengetahui informasi apa yang dikumpulkan tentang Anda</li>
              <li>Mengakses data pribadi Anda yang kami miliki</li>
              <li>Meminta koreksi data yang tidak akurat</li>
              <li>Menghapus data Anda (kecuali jika ada kewajiban hukum untuk menyimpannya)</li>
              <li>Membatasi penggunaan data Anda</li>
              <li>Mengajukan keberatan atas pemrosesan data</li>
            </ul>
            <p className="mt-4">
              Untuk mengajukan permintaan terkait hak-hak di atas, silakan hubungi kami melalui kontak yang disediakan di bagian akhir kebijakan ini.
            </p>
          </section>

          {/* Konten dan Informasi Publik */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Konten dan Informasi Publik</h2>
            <p className="mb-4">
              Semua konten yang ditampilkan dalam aplikasi JDIH (peraturan, dokumentasi hukum, keputusan, dll) adalah informasi publik yang tersedia untuk umum sesuai dengan:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Undang-Undang Nomor 30 Tahun 2000 tentang Rahasia Dagang</li>
              <li>Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik</li>
              <li>Peraturan Pemerintah Kabupaten Gresik</li>
            </ul>
            <p className="mt-4">
              Konten ini bebas diakses dan dapat digunakan sesuai dengan ketentuan hukum yang berlaku. Namun, Anda tetap bertanggung jawab atas penggunaan informasi tersebut sesuai dengan hukum yang ada.
            </p>
          </section>

          {/* Link Eksternal */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Link Eksternal dan Situs Pihak Ketiga</h2>
            <p>
              Aplikasi ini dapat berisi link ke situs web pihak ketiga. Kami tidak bertanggung jawab atas kebijakan privasi situs eksternal tersebut. Kami merekomendasikan untuk membaca kebijakan privasi setiap situs sebelum memberikan informasi pribadi.
            </p>
          </section>

          {/* Perubahan Kebijakan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami berhak mengubah kebijakan privasi ini kapan saja. Perubahan akan segera berlaku setelah diposting di aplikasi. Kami akan memberitahu pengguna tentang perubahan signifikan melalui notifikasi di dalam aplikasi atau sarana komunikasi lainnya. Penggunaan berkelanjutan atas aplikasi setelah perubahan dianggap sebagai persetujuan Anda terhadap kebijakan yang diperbarui.
            </p>
          </section>

          {/* Hubungi Kami */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Hubungi Kami</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan, kekhawatiran, atau ingin mengajukan permintaan terkait kebijakan privasi ini, silakan hubungi kami:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4 border-l-4 border-blue-600">
              <p className="mb-3 font-semibold text-gray-900">Dinas Komunikasi dan Informatika Kabupaten Gresik</p>
              <p className="mb-2"><span className="font-semibold">Alamat:</span> Jl. Soekarno-Hatta No. 1, Gresik</p>
              <p className="mb-2"><span className="font-semibold">Email:</span> info@gresikkab.go.id</p>
              <p className="mb-2"><span className="font-semibold">Telepon:</span> (031) 3980800</p>
              <p><span className="font-semibold">Website:</span> www.gresikkab.go.id</p>
            </div>
          </section>

          {/* Pernyataan Penutup */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Pernyataan Penutup</h2>
            <p className="mb-4">
              Dengan menggunakan aplikasi JDIH Kab. Gresik, Anda menyetujui kebijakan privasi ini. Jika Anda tidak setuju dengan kebijakan ini, mohon jangan menggunakan aplikasi kami.
            </p>
            <p>
              Kebijakan privasi ini berlaku untuk semua pengguna aplikasi JDIH Kab. Gresik di semua platform (Android, iOS, dan web).
            </p>
          </section>

          {/* Versi dan Tanggal */}
          <div className="border-t-2 border-gray-200 mt-8 pt-6 text-sm text-gray-600">
            <p><span className="font-semibold">Versi:</span> 1.0</p>
            <p><span className="font-semibold">Efektif sejak:</span> Desember 2025</p>
            <p className="mt-2">Kebijakan privasi ini dapat diubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</p>
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
