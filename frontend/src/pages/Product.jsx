import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

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

export default function Product() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fef7ff' }}>
      <Header />
      <main className="px-24 py-10">
        <h1 className="text-2xl font-bold mb-8">Kategori Produk</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-36">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r from-red-400 to-indigo-900 rounded-2xl px-6 py-16 shadow-lg text-center transition-all w-full h-full flex flex-col justify-between ${product.active ? "border-4 border-blue-400" : ""
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
                <Link to="#" className="bg-blue-600 text-white px-6 py-1 rounded-full shadow text-center">
                  Detail
                </Link>
                <Link to="/payment" className="bg-blue-600 text-white px-6 py-1 rounded-full shadow text-center">
                  Beli
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
