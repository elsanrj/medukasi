import React from 'react';
import logo from '../assets/logo_medukasi.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-gradient-to-r from-red-400 to-indigo-900 text-white">
      <div className="flex items-center">
        <img src={logo} alt="FME Logo" className="h-9 w-auto" />
      </div>

      <nav className="flex items-center gap-6">
        <Link to="/home-after-login" className="hover:underline">
          Home
        </Link>
        <Link to="/class-before-buy" className="hover:underline">
          Class
        </Link>
        <Link to="#" className="hover:underline">
          Others
        </Link>
        <Link to="#" className="hover:underline">
          Contacts
        </Link>
        <Link to="#" className="hover:underline">
          My Class
        </Link>
        <Link to="/dashboard-student">
          <div className="bg-white text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">👤</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
