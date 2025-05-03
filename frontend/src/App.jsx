// App.jsx
import React from 'react';
import Home from './pages/HomeAfterLogin';
import Payment from './pages/Payment';
import PaymentSection from './pages/paymentSection';
import PaymentStatus from './pages/paymentStatus';
import UploadBuktiPayment from './pages/uploadBuktiPayment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-section" element={<PaymentSection />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
        <Route path="/upload-bukti-payment" element={<UploadBuktiPayment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

