import React from 'react';
import Header from '../components/Header';
import image from '../assets/image.jpg';

const Pendaftaran = () => {
  return (
    <div className="min-h-screen bg-[#fdf5ff]">
      <Header />

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-6 md:p-20 ">
        {/* Images Section */}
        <div className="flex flex-col gap-12">
          <img src={image} alt="Penghargaan" className="rounded-md shadow-md w-[300px] md:w-[550px]" />
          <img src={image} alt="Penghargaan" className="rounded-md shadow-md w-[300px] md:w-[550px]" />
        </div>

        {/* Form Section */}
        <form className="bg-gray-200 rounded-xl p-6 md:p-8 w-full max-w-md shadow-md space-y-7">
          <div>
            <label className="block mb-1 font-semibold text-left">PILIH JENIS PENDAFTARAN</label>
            <select defaultValue="" className="bg-white p-2 rounded-md w-full p-2 rounded-md text-left">
              <option value="" disabled>selected</option>
              <option value="sma">SMA</option>
              <option value="smp">SMP</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-left">NAMA LENGKAP</label>
            <input type="text" placeholder="masukan nama lengkap" className="bg-white p-2 rounded-md w-full p-2 rounded-md text-left" />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-left">ASAL SEKOLAH</label>
            <input type="text" placeholder="masukan asal sekolah" className="bg-white p-2 rounded-md w-full p-2 rounded-md text-left" />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-left">NOMOR HANDPHONE (WA)</label>
            <div className="flex items-center gap-2">
                <span className="bg-white p-2 rounded-md">+62</span>
                <input type="tel" placeholder="contoh: 89567843212" className="bg-white p-2 rounded-md flex-1 text-left" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-left">NOMOR HANDPHONE (WA) ORANG TUA</label>
            <div className="flex items-center gap-2">
                <span className="bg-white p-2 rounded-md">+62</span>
                <input type="tel" placeholder="contoh: 89567843212" className="bg-white p-2 rounded-md flex-1 text-left" />
            </div>
          </div>


          <div>
            <label className="block mb-1 font-semibold text-left">Email</label>
            <input type="email" placeholder="masukan email" className="bg-white p-2 rounded-md w-full p-2 rounded-md text-left" />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 w-full font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pendaftaran;
