import React from 'react';
import Header from '../components/Header';
import kelas from '../assets/class/kelas.png';

export default function ClassAfterBuy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center flex-1 p-8">
        <div className="w-full max-w-5xl bg-[#FEF7FF] rounded-[18px] border-[6px] border-[#CAC4D0] p-10 shadow-md">
          
          {/* Greeting */}
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Selamat Datang, User!
          </h2>

          {/* Illustration + Description */}
          <div className="flex flex-col items-center mb-12">
            <img
              src={kelas}
              alt="Ilustrasi Kelas"
              className="w-64 h-64 object-contain"
            />
            <p className="text-base font-semibold text-black mt-4">
              Mari pantau progres belajarmu
            </p>
          </div>

          {/* Status Box */}
          <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-red-400 to-indigo-900 rounded-xl shadow-md">
            <div className="text-white">
              <p className="text-lg font-semibold">Status Class</p>
              <p className="text-sm">
                Mari selesaikan materi ini bersama, kamu pasti bisa!
              </p>
            </div>
            <button className="ml-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition">
              Akses Materi
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
