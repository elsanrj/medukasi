import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import komponen
import HomeBeforeLogin from './pages/HomeBeforeLogin';
import HomeAfterLogin from './pages/HomeAfterLogin';
import Login from './pages/Login';
import DashboardPimpinan from './pages/DashboardPimpinan';
import Payment from './pages/Payment';
import PaymentSection from './pages/PaymentSection';
import PaymentStatus from './pages/PaymentStatus';
import UploadProof from './pages/UploadProof';
import Pendaftaran from './pages/Pendaftaran';
import Product from './pages/Product';
import Register from './pages/Register';
import Class from './pages/DashboardStudent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes untuk setiap komponen halaman */}
        <Route path="/" element={<HomeBeforeLogin />} />  {/* HomeBeforeLogin di path "/" */}
        <Route path="/home-after-login" element={<HomeAfterLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-pimpinan" element={<DashboardPimpinan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-section" element={<PaymentSection />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
        <Route path="/upload-bukti-payment" element={<UploadProof />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/class" element={<Class />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;