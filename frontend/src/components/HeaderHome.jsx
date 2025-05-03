import React from 'react';
import logo from '../assets/logo_medukasi.png';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-300 to-purple-500 text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>
      <nav className="flex gap-4 items-center text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Product</a>
        <a href="#" className="hover:underline">Testimoni</a>
        <a href="#" className="hover:underline">Others</a>
        <a href="#" className="hover:underline">Contacts</a>
        <a href="#" className="hover:underline">Login</a>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">Sign Up</button>
      </nav>
    </header>
  );
}
