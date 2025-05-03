import React from 'react';
import logo from '../assets/logo_medukasi.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-gradient-to-r from-red-400 to-indigo-900 text-white">
      <div className="flex items-center">
        <img src={logo} alt="FME Logo" className="h-9 w-auto" />
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
