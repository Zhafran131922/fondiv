// app/not-found.js
"use client";

import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <Head>
        <title>Halaman Tidak Ditemukan - 404</title>
        <meta name="description" content="Halaman yang Anda cari tidak ditemukan" />
      </Head>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full text-center">
        {/* Icon dengan gradient */}
        <div className="mx-auto mb-6">
          <div className="bg-gradient-to-r from-[#1f0057] to-[#b13781] rounded-full p-1 w-24 h-24 flex items-center justify-center mx-auto">
            <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="#1f0057">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Konten */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1f0057] to-[#b13781] bg-clip-text text-transparent mb-2">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-200"
          >
            Kembali
          </button>
          
          <Link 
            href="/" 
            className="px-6 py-3 text-white rounded-lg font-medium text-center transition-all duration-300 shadow-md hover:shadow-lg"
            style={{
              background: 'linear-gradient(45deg, #1f0057, #b13781)'
            }}
          >
            Beranda
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Fondiv. All rights reserved.</p>
      </div>
    </div>
  );
}