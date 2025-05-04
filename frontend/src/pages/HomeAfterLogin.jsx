import React from 'react';
import Header from '../components/Header';

import emailIcon from '../assets/medsos/email.png';
import whatsappIcon from '../assets/medsos/whatsapp.webp';
import twitterIcon from '../assets/medsos/twitter.png';
import instagramIcon from '../assets/medsos/instagram.png';
import youtubeIcon from '../assets/medsos/youtube.png';
import linkedinIcon from '../assets/medsos/linkedin.png';
import heroImage from '../assets/hero.jpg';
import logo from '../assets/logo_medukasi.png';

export default function HomeAfterLogin() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-purple-200 to-white">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
            {/* Hero Section */}
            <section className="p-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2">
          <img src={heroImage} alt="Illustration" className="w-full max-w-lg mx-auto" />
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-black">PT MANDIRI EDUKASI INDONESIA</h1>
          <p className="italic text-gray-700 mt-2 text-sm">"National Edustartup to help young learner achieving their great potentials"</p>
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { label: 'Lolos OSN', value: 445 },
              { label: 'Medali OSN', value: 232 },
              { label: 'Persiapan Kampus', value: 50 }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-r from-red-400 to-indigo-900 text-white px-6 py-4 rounded-xl shadow text-center w-36">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-red-400 to-indigo-900 text-white px-6 py-4 rounded-xl shadow mt-6 max-w-xl">
            <h2 className="text-lg font-semibold">LEBIH DARI 35 SEKOLAH</h2>
            <p className="text-sm mt-1 leading-relaxed">
              Bermitra jangka panjang dengan kami dalam memberikan kelas persiapan untuk siswa siswi dalam menghadapi berbagai kompetisi akademik bergengsi baik nasional maupun internasional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
