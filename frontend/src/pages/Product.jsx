import React from "react";
import Header from "../components/HeaderHome";

import satu from '../assets/product/satu.jpeg';
import dua from '../assets/product/dua.jpeg';
import tiga from '../assets/product/tiga.jpeg';
import empat from '../assets/product/empat.jpeg';

const products = [
  {
    title: "Ucok",
    description:
      "Mandiri OSN adalah pionir komunitas belajar pertama yang berfokus pada persiapan siswa menuju Olimpiade Sains Nasional (OSN).",
    image: satu,
    active: true,
  },
  {
    title: "Medu Course",
    description:
      "Hadir sebagai solusi lengkap untuk persiapan menjadi mahasiswa baru (maba).",
    image: dua,
  },
  {
    title: "Private Class",
    description:
      "Private Class adalah layanan bimbingan personal yang dirancang untuk memberikan pengalaman belajar yang fleksibel dan disesuaikan dengan kebutuhan unik setiap siswa.",
    image: tiga,
  },
  {
    title: "Other Services",
    description:
      "Menyediakan layanan seleksi tim Olimpiade Sains Sekolah dan sejenisnya yang dirancang untuk membantu sekolah memilih siswa terbaik dengan proses seleksi berbasis Computer-Based Test (CBT).",
    image: empat,
  },
];

export default function ProductGrid() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 py-10">
        <h1 className="text-2xl font-bold mb-8">Kategori Produk</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r from-pink-400 to-indigo-500 rounded-2xl p-6 shadow-lg text-center transition-all ${
                product.active ? "border-4 border-blue-400" : ""
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto mb-4 w-20 h-20 object-contain"
              />
              <h2 className="text-white text-lg font-bold mb-2">
                {product.title}
              </h2>
              <p className="text-white mb-4 text-sm">{product.description}</p>
              <div className="flex justify-center gap-4">
                <button className="bg-blue-600 text-white px-6 py-1 rounded-full shadow">
                  Detail
                </button>
                <button className="bg-blue-600 text-white px-6 py-1 rounded-full shadow">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
