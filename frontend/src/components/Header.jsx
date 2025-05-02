import React from 'react';
import logo from '../assets/logo_medukasi.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-[#c86d8d] to-[#1a237e] rounded-t-2xl text-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="FME Logo" className="h-10 w-auto" />
      </div>

      <nav className="flex items-center gap-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Class</a>
        <a href="#" className="hover:underline">Others</a>
        <a href="#" className="hover:underline">Contacts</a>
        <a href="#" className="hover:underline">My Class</a>
        <div className="bg-white text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">👤</div>
      </nav>
    </header>
  );
};

export default Header;
