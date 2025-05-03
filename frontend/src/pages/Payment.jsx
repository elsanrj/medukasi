import { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

import briLogo from '../assets/payment/bri.png';
import mandiriLogo from '../assets/payment/mandiri.png';
import bcaLogo from '../assets/payment/bca.png';
import bniLogo from '../assets/payment/bni.png';
import danaLogo from '../assets/payment/dana.png';
import gopayLogo from '../assets/payment/gopay.png';
import visaLogo from '../assets/payment/visa.png';
import mastercardLogo from '../assets/payment/mastercard.png';
import jcbLogo from '../assets/payment/jcb.png';
import qrisLogo from '../assets/payment/qris.png';

export default function PaymentPage() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const totalAmount = 120000;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);

  const vaMethods = [
    { name: 'BRI', logo: briLogo },
    { name: 'Mandiri', logo: mandiriLogo },
    { name: 'BCA', logo: bcaLogo },
    { name: 'BNI', logo: bniLogo },
  ];

  const ewalletMethods = [
    { name: 'DANA', logo: danaLogo },
    { name: 'Gopay', logo: gopayLogo },
  ];

  const cardMethods = [
    {
      name: 'Kartu Kredit / Kartu Debit',
      logos: [visaLogo, mastercardLogo, jcbLogo],
    },
  ];

  const qrisMethod = {
    name: 'QRIS',
    logo: qrisLogo,
  };

  return (
    <div className="bg-purple-50 min-h-screen">
      <Header />

      <main className="flex justify-center py-12">
        <div className="bg-white shadow-xl rounded-xl p-12 w-full max-w-md">
          <h2 className="text-center text-lg font-bold mb-1">METODE PEMBAYARAN</h2>
          <div className="text-center mb-6 py-5">
            <p className="text-left text-black text-base font-medium">Total harga yang dibayar</p>
            <p className="text-left text-red-600 text-xl font-bold tracking-wider">
              {formatCurrency(totalAmount)}
            </p>
          </div>


          {/* Transfer Virtual Account */}
          <div className="mb-4">
            <div className="bg-gray-300 rounded-lg px-8 py-6">
              <p className="font-semibold mb-2">Transfer Virtual Account</p>
              {vaMethods.map((bank) => (
                <label
                  key={bank.name}
                  className="flex items-center justify-between bg-white rounded-lg px-3 py-2 mb-2 cursor-pointer"
                >
                  <div className="flex items-center">
                    <img src={bank.logo} alt={bank.name} className="h-6 w-auto mr-2" />
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    value={bank.name}
                    onChange={() => setSelectedMethod(bank.name)}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* QRIS */}
          <div className="mb-4">
            <div className="bg-gray-300 rounded-lg px-8 py-6">
              <p className="font-semibold mb-2">QRIS</p>
              <label className="flex items-center justify-between bg-white rounded-lg px-3 py-2 mb-2 cursor-pointer"
              >
                <img src={qrisMethod.logo} alt="QRIS" className="h-6 w-auto mr-2" />
                <input
                  type="radio"
                  name="payment"
                  value="QRIS"
                  onChange={() => setSelectedMethod('QRIS')}
                />
              </label>
            </div>
          </div>

          {/* E-Wallet */}
          <div className="mb-4">
            <div className="bg-gray-300 rounded-lg px-8 py-6">
              <p className="font-semibold mb-2">E-Wallet</p>
              {ewalletMethods.map((wallet) => (
                <label
                  key={wallet.name}
                  className="flex items-center justify-between bg-white rounded-lg px-3 py-2 mb-2 cursor-pointer"
                >
                  <img src={wallet.logo} alt={wallet.name} className="h-6 w-auto mr-2" />
                  <input
                    type="radio"
                    name="payment"
                    value={wallet.name}
                    onChange={() => setSelectedMethod(wallet.name)}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Credit/Debit Card */}
          <div className="mb-4">
            <div className="bg-gray-300 rounded-lg px-8 py-6">
              <p className="font-semibold mb-2">{cardMethods[0].name}</p>
              <label className="flex items-center bg-white rounded-lg px-3 py-2 cursor-pointer"
              >
                <div className="flex space-x-2">
                  {cardMethods[0].logos.map((logo, idx) => (
                    <img key={idx} src={logo} alt="card" className="h-6 w-auto" />
                  ))}
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="Kartu Kredit / Kartu Debit"
                  className="ml-auto"
                  onChange={() => setSelectedMethod('Kartu Kredit / Kartu Debit')}
                />
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between text-sm text-gray-700 mb-2">
            Metode Pembayaran:{" "}
            <span className="text-green-600 font-semibold">
              {selectedMethod || 'Belum dipilih'}
            </span>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate('/payment-section')}
          >
            Lanjutkan
          </button>
        </div>
      </main>
    </div>
  );
}