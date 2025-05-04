import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_medukasi.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-gradient-to-r from-red-400 to-indigo-900 text-white">
      <div className="flex items-center">
        <img src={logo} alt="FME Logo" className="h-9 w-auto" />
      </div>

      <nav className="flex items-center gap-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="#" className="hover:underline">
          Product
        </Link>
        <Link to="#" className="hover:underline">
          Testimoni
        </Link>
        <Link to="#" className="hover:underline">
          Others
        </Link>
        <Link to="#" className="hover:underline">
          Contacts
        </Link>
        <Link to="/register" className="hover:underline">
          Sign Up
        </Link>
        </nav>
    </header>
  );
};

export default Header;
