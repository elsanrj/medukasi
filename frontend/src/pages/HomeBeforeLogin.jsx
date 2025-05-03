import React from 'react';
import Header from '../components/HeaderHome';

import emailIcon from '../assets/medsos/email.png';
import whatsappIcon from '../assets/medsos/whatsapp.webp';
import twitterIcon from '../assets/medsos/twitter.png';
import instagramIcon from '../assets/medsos/instagram.png';
import youtubeIcon from '../assets/medsos/youtube.png';
import linkedinIcon from '../assets/medsos/linkedin.png';
import heroImage from '../assets/hero.jpg';
import logo from '../assets/logo_medukasi.png';

export default function HomeBeforeLogin() {
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

      {/* Footer */}
      <footer style={{ backgroundColor: '#B05F5F' }} className="text-white px-8 py-10">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Kiri: Info Perusahaan */}
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="FME Logo" className="h-8 w-auto" />
              <h1 className="text-lg font-bold">PT MANDIRI EDUKASI INDONESIA</h1>
            </div>
            <p className="text-sm italic mb-4">
              “National Edustartup to help young learner<br />
              achieving their great potentials”
            </p>
            <p className="text-sm">
              Cengkareng Business City IOT 12 Unit 18-19 Lt.1,<br />
              Jalan Atang Sanjaya No.2A1, R.T.006/R.W.007, Benda, Kota<br />
              Tangerang, Banten 15125.
            </p>
          </div>

          {/* Kanan: Kontak & Sosial Media */}
          <div className="lg:w-1/3">
            <h2 className="text-md font-semibold mb-3">Hubungi Kami</h2>
            <div className="flex items-center space-x-2 mb-2">
              <img src={emailIcon} alt="Email" className="h-5 w-5" />
              <a href="mailto:akademik@medukasi.id" className="text-sm underline">akademik@medukasi.id</a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
              <span className="text-sm">082274152348</span>
            </div>
            <div className="flex space-x-3">
              <img src={twitterIcon} alt="X" className="h-5 w-5" />
              <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
              <img src={youtubeIcon} alt="YouTube" className="h-6 w-6" />
              <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
