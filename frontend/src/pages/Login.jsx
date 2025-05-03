import React from "react";
import Header from '../components/HeaderHome';

import logo from "../assets/logo_medukasi.png";
import email from "../assets/login/email.png";
import key from "../assets/login/key.png";

export default function Login() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="min-h-screen bg-[#fef8fc] flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo Medukasi" className="h-16" />
          </div>
          <form className="space-y-4">
  <div className="flex items-center border rounded-md px-3 py-2 bg-gray-200">
    <img src={email} alt="Email Icon" className="h-5 w-5 mr-2" />
    <input
      type="email"
      placeholder="Email"
      className="bg-transparent outline-none w-full"
    />
  </div>
  <div className="flex items-center border rounded-md px-3 py-2 bg-gray-200">
    <img src={key} alt="Password Icon" className="h-4 w-4 mr-2" />
    <input
      type="password"
      placeholder="Password"
      className="bg-transparent outline-none w-full"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
  >
    Login
  </button>
</form>

          <p className="text-center text-sm text-gray-700 mt-4">
            Belum punya akun?{" "}
            <a href="#" className="text-red-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
