import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'FAQ & Bantuan - JDIH Kab. Gresik',
  description: 'Pertanyaan umum dan panduan penggunaan aplikasi JDIH Kab. Gresik',
};

export default function FAQ() {
  const faqs = [
    {
      category: "Umum",
      questions: [
        {
          q: "Apa itu JDIH Kab. Gresik?",
          a: "JDIH (Jaringan Dokumentasi dan Informasi Hukum) Kab. Gresik adalah aplikasi resmi dari Pemerintah Kabupaten Gresik yang menyediakan akses mudah ke peraturan perundang-undangan, keputusan, dan dokumentasi hukum Kabupaten Gresik."
        },
        {
          q: "Apakah aplikasi ini gratis?",
          a: "Ya, aplikasi JDIH Kab. Gresik sepenuhnya gratis. Anda tidak perlu membayar untuk mengunduh, memasang, atau menggunakan aplikasi ini. Semua informasi hukum dapat diakses tanpa biaya."
        },
        {
          q: "Siapa yang bisa menggunakan aplikasi ini?",
          a: "Siapa saja dapat menggunakan aplikasi ini tanpa ada batasan. Aplikasi dirancang untuk masyarakat umum, pelajar, mahasiswa, profesional hukum, dan aparatur pemerintah."
        }
      ]
    },
    {
      category: "Instalasi & Login",
      questions: [
        {
          q: "Apakah saya perlu login atau registrasi?",
          a: "Tidak. Aplikasi JDIH Kab. Gresik tidak memerlukan login, registrasi, atau pembuatan akun. Anda dapat langsung mengakses semua informasi tanpa proses autentikasi apapun."
        },
        {
          q: "Bagaimana cara mengunduh aplikasi?",
          a: "Anda dapat mengunduh aplikasi dari Google Play Store (untuk Android) atau Apple App Store (untuk iOS). Cari 'JDIH Kab. Gresik' dan klik tombol 'Download' atau 'Install'."
        },
        {
          q: "Berapa ukuran aplikasi ini?",
          a: "Ukuran aplikasi JDIH Kab. Gresik sekitar 50-100 MB tergantung versi. Pastikan Anda memiliki ruang penyimpanan yang cukup di perangkat Anda."
        },
        {
          q: "Sistem operasi apa yang didukung?",
          a: "Aplikasi mendukung Android 8.0 (atau lebih tinggi) dan iOS 12.0 (atau lebih tinggi). Periksa persyaratan sistem di toko aplikasi sebelum mengunduh."
        }
      ]
    },
    {
      category: "Penggunaan & Fitur",
      questions: [
        {
          q: "Bagaimana cara mencari peraturan tertentu?",
          a: "Gunakan fitur pencarian di halaman utama. Ketik kata kunci, nomor peraturan, atau topik yang Anda cari. Hasil pencarian akan ditampilkan dengan informasi relevan."
        },
        {
          q: "Bisakah saya menyimpan dokumen untuk dibaca offline?",
          a: "Ya. Buka dokumen yang ingin Anda simpan, kemudian tap tombol 'Simpan' atau 'Download'. Dokumen akan disimpan di perangkat Anda untuk diakses offline."
        },
        {
          q: "Bagaimana cara mencetak dokumen?",
          a: "Anda dapat mencetak dokumen dengan menggunakan fitur 'Print' di menu. Pilih printer yang sesuai dan ikuti instruksi pencetakan di perangkat Anda."
        },
        {
          q: "Bisakah saya membagikan dokumen dengan orang lain?",
          a: "Ya. Buka dokumen yang ingin dibagikan, kemudian tap tombol 'Bagikan'. Anda dapat membagikan melalui email, WhatsApp, atau aplikasi lain yang tersedia di perangkat Anda."
        },
        {
          q: "Bagaimana jika saya menemukan dokumen yang salah atau ketinggalan?",
          a: "Hubungi Dinas Komunikasi dan Informatika Kabupaten Gresik melalui email info@gresikkab.go.id atau telepon (031) 3980800. Kami akan segera meninjau dan memperbarui konten."
        }
      ]
    },
    {
      category: "Privasi & Keamanan",
      questions: [
        {
          q: "Apakah data pribadi saya aman?",
          a: "Ya. Aplikasi JDIH tidak memerlukan data pribadi dan tidak mengumpulkan informasi identitas pengguna. Hanya analytics penggunaan yang dikumpulkan untuk peningkatan layanan."
        },
        {
          q: "Apakah informasi yang saya akses dipantau?",
          a: "Tidak. Kami tidak melacak apa yang Anda baca atau cari secara personal. Kami hanya mengumpulkan data aggregat (total pengguna, fitur populer, dll) untuk meningkatkan aplikasi."
        },
        {
          q: "Bagaimana data saya dilindungi?",
          a: "Data ditransmisikan menggunakan enkripsi HTTPS yang aman. Server kami dilindungi dengan sistem keamanan berlapis, dan data dipantau secara reguler."
        },
        {
          q: "Apakah aplikasi ini aman dari virus?",
          a: "Ya. Aplikasi ini tersedia di Google Play Store dan Apple App Store yang keduanya memiliki proses verifikasi keamanan yang ketat. Kami juga melakukan update keamanan secara berkala."
        }
      ]
    },
    {
      category: "Masalah Teknis",
      questions: [
        {
          q: "Aplikasi tidak bisa dibuka. Apa yang harus saya lakukan?",
          a: "Coba langkah-langkah berikut: 1) Tutup aplikasi sepenuhnya dan buka kembali, 2) Restart perangkat Anda, 3) Hapus cache aplikasi di Settings > Apps > JDIH > Storage > Clear Cache, 4) Update aplikasi ke versi terbaru."
        },
        {
          q: "Mengapa dokumen tidak muncul atau loading lambat?",
          a: "Ini mungkin karena koneksi internet yang lambat. Pastikan Anda memiliki koneksi internet yang stabil (WiFi atau data seluler). Coba muat ulang aplikasi atau tunggu beberapa saat sebelum mencoba lagi."
        },
        {
          q: "Bagaimana cara mengupdate aplikasi?",
          a: "Buka Google Play Store atau App Store, cari 'JDIH Kab. Gresik', dan tap tombol 'Update'. Atau aktifkan auto-update di pengaturan toko aplikasi untuk update otomatis."
        },
        {
          q: "Saya lupa password/tidak bisa login. Apa yang harus saya lakukan?",
          a: "Aplikasi JDIH tidak memerlukan password atau login. Anda dapat langsung mengakses semua fitur tanpa autentikasi. Jika ada masalah lain, hubungi tim support kami."
        },
        {
          q: "Bagaimana cara menghapus aplikasi?",
          a: "Tekan dan tahan ikon aplikasi JDIH di home screen, kemudian pilih 'Uninstall'. Atau buka Settings > Apps > JDIH > Uninstall. Data yang disimpan akan dihapus."
        }
      ]
    },
    {
      category: "Konten & Informasi",
      questions: [
        {
          q: "Apa jenis dokumen yang tersedia?",
          a: "Aplikasi berisi Peraturan Daerah (Perda), Keputusan Bupati, Peraturan Bupati, Keputusan Kepala Dinas, dan dokumentasi hukum lainnya dari Pemerintah Kabupaten Gresik."
        },
        {
          q: "Seberapa sering konten diperbarui?",
          a: "Konten diperbarui sesuai dengan peraturan terbaru yang diterbitkan oleh Pemerintah Kabupaten Gresik. Update dapat dilakukan kapan saja tergantung kebutuhan."
        },
        {
          q: "Apakah informasi di sini sama dengan informasi resmi dari Pemerintah?",
          a: "Ya. Semua informasi di aplikasi ini adalah sumber resmi dari Pemerintah Kabupaten Gresik dan merupakan informasi publik yang mengikat secara hukum."
        },
        {
          q: "Bagaimana jika ada peraturan yang kontradiktif atau membingungkan?",
          a: "Untuk interpretasi hukum yang spesifik, kami sarankan berkonsultasi dengan profesional hukum atau lembaga terkait. Aplikasi hanya menyediakan teks dokumen tanpa memberikan interpretasi hukum."
        },
        {
          q: "Bisakah saya menggunakan informasi ini untuk keperluan komersial?",
          a: "Informasi adalah publik domain, tetapi penggunaan untuk keperluan komersial harus sesuai dengan peraturan yang berlaku. Silakan baca Syarat dan Ketentuan untuk detail lebih lanjut."
        }
      ]
    },
    {
      category: "Dukungan & Feedback",
      questions: [
        {
          q: "Bagaimana cara menghubungi tim support?",
          a: "Anda dapat menghubungi Dinas Komunikasi dan Informatika Kabupaten Gresik melalui: Email: info@gresikkab.go.id | Telepon: (031) 3980800 | Website: www.gresikkab.go.id"
        },
        {
          q: "Bagaimana cara memberikan saran atau feedback?",
          a: "Kami sangat menghargai masukan Anda. Hubungi kami melalui email atau telepon dengan subject 'Saran JDIH Kab. Gresik' dan jelaskan saran Anda secara detail."
        },
        {
          q: "Berapa lama waktu respon dari tim support?",
          a: "Kami berusaha merespons pertanyaan Anda dalam waktu 1-2 hari kerja. Untuk masalah mendesak, hubungi telepon kami selama jam kerja (Senin-Jumat, 08:00-16:00 WIB)."
        },
        {
          q: "Apakah ada forum atau komunitas pengguna?",
          a: "Saat ini, komunikasi langsung melalui email dan telepon adalah cara utama kami. Kami sedang mengembangkan forum komunitas untuk memudahkan dialog dengan pengguna."
        }
      ]
    },
    {
      category: "Lainnya",
      questions: [
        {
          q: "Apakah aplikasi ini tersedia di negara lain?",
          a: "Aplikasi dirancang khusus untuk masyarakat Kabupaten Gresik, Indonesia. Namun, dapat diakses dari mana saja di dunia yang memiliki koneksi internet."
        },
        {
          q: "Dalam bahasa apa aplikasi ini tersedia?",
          a: "Aplikasi ini tersedia dalam Bahasa Indonesia. Kami sedang mempertimbangkan untuk menambahkan dukungan bahasa lain di masa depan."
        },
        {
          q: "Apakah ada versi web dari aplikasi ini?",
          a: "Ya. Aplikasi JDIH juga dapat diakses melalui web browser di https://jdih-gresik.example.com dengan fitur yang sama."
        },
        {
          q: "Bagaimana cara melaporkan bug atau masalah keamanan?",
          a: "Jika Anda menemukan bug atau masalah keamanan, hubungi kami segera melalui email security@gresikkab.go.id. Laporkan detail lengkap dan langkah-langkah untuk mereproduksi masalah."
        }
      ]
    }
  ];

  return (
    <main className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JDIH</span>
              </div>
              <span className="font-bold text-xl text-gray-900">JDIH Kab. Gresik</span>
            </Link>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition">
                Privasi
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 transition">
                Syarat
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Pertanyaan yang Sering Diajukan
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Temukan jawaban atas pertanyaan umum tentang aplikasi JDIH Kab. Gresik
        </p>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-8">
          {faqs.map((section, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{section.category}</h2>
              </div>
              <div className="divide-y">
                {section.questions.map((faq, qIdx) => (
                  <details key={qIdx} className="group">
                    <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition">
                      <span>{faq.q}</span>
                      <svg 
                        className="h-6 w-6 text-gray-600 transition group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <div className="px-6 py-4 text-gray-700 bg-gray-50 border-t">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Tidak menemukan jawaban Anda?</h2>
          <p className="mb-6 text-blue-100">
            Hubungi tim support kami yang siap membantu Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:info@gresikkab.go.id" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email: info@gresikkab.go.id
            </a>
            <a href="tel:031398080" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.02 1.004 1.89 1.742 2.627.738.737 1.607 1.323 2.627 1.742l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.5C7.82 18 2 12.18 2 5.5V3z" />
              </svg>
              Telepon: (031) 3980800
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Pemerintah Kabupaten Gresik. Semua hak dilindungi.</p>
        </div>
      </footer>
    </main>
  );
}
