import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import komponen
import HomeBeforeLogin from './pages/HomeBeforeLogin';
import HomeAfterLogin from './pages/HomeAfterLogin';
import Login from './pages/Login';
import DashboardPimpinan from './pages/DashboardPimpinan';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardStudent from './pages/DashboardStudent';
import ClassAfterBuy from './pages/MyClassAfterBuy';
import ClassBeforeBuy from './pages/MyClassBeforeBuy';
import StaticMonitoring from './pages/StatisticMonitoring';
import DashboardMateri from './pages/DashboardMateri';
import DetailMateri from './pages/DetailMateri';
import Payment from './pages/Payment';
import PaymentSection from './pages/PaymentSection';
import PaymentStatus from './pages/PaymentStatus';
import UploadProof from './pages/UploadProof';
import Pendaftaran from './pages/Pendaftaran';
import Product from './pages/Product';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes untuk setiap komponen halaman */}
        <Route path="/" element={<HomeBeforeLogin />} />  {/* HomeBeforeLogin di path "/" */}
        <Route path="/home-after-login" element={<HomeAfterLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-pimpinan" element={<DashboardPimpinan />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/dashboard-student" element={<DashboardStudent />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-section" element={<PaymentSection />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
        <Route path="/upload-bukti-payment" element={<UploadProof />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/class-after-buy" element={<ClassAfterBuy />} />
        <Route path="/class-before-buy" element={<ClassBeforeBuy />} />
        <Route path="/statistic-monitoring" element={<StaticMonitoring />} />
        <Route path="/dashboard-materi" element={<DashboardMateri />} />
        <Route path="/detail-materi" element={<DetailMateri />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;