import React from "react";
import Header from "../components/HeaderHome";

import emailIcon from "../assets/login/email.png";
import keyIcon from "../assets/login/key.png";
import userIcon from "../assets/login/user.png";

export default function RegisterForm() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Daftar Akun</h2>
          <form className="space-y-4">
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <img src={userIcon} alt="User" className="w-6 h-5 mr-2" />
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="bg-transparent w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <span className="text-gray-500 mr-2">+62</span>
              <input
                type="tel"
                placeholder="Nomor Handphone"
                className="bg-transparent w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <img src={emailIcon} alt="Email" className="w-5 h-5 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <img src={keyIcon} alt="Password" className="w-4 h-4 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <img src={keyIcon} alt="Confirm Password" className="w-4 h-4 mr-2" />
              <input
                type="password"
                placeholder="Konfirmasi Password"
                className="bg-transparent w-full outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Sudah punya akun?{" "}
            <a href="/login" className="text-red-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
