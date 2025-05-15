import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_medukasi.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-gradient-to-r from-[#4ADE80] to-[#166534] text-white rounded-t-xl">
      <div className="flex items-center">
        <img src={logo} alt="FME Logo" className="h-9 w-auto" />
      </div>

      <nav className="flex items-center gap-6 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="#" className="hover:underline">Product</Link>
        <Link to="#" className="hover:underline">Testimoni</Link>
        <Link to="#" className="hover:underline">Others</Link>
        <Link to="#" className="hover:underline">Contacts</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm">
            Sign Up
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
