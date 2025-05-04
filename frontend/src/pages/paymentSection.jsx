import Header from '../components/Header';
import { Link } from 'react-router-dom';
import qrisLogo from '../assets/payment/qris.png';
import qrImage from '../assets/payment/qr-code.png';

export default function PaymentSection() {
  const totalAmount = 252000;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);

  return (
    <div className="bg-purple-50 min-h-screen">
      <Header />

      <main className="flex justify-center py-12">
        <div className="bg-white shadow-lg rounded-xl p-12 w-full max-w-md text-center">
          <h2 className="text-lg font-bold mb-4">QRIS</h2>

          <div className="text-left border-t border-b py-3 mb-">
            <p className="text-black">Total: <strong>{formatCurrency(totalAmount)}</strong></p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-600 text-xl text-center">🕒</span>
              <p className="text-sm font-medium text-center">Segera Lakukan Pembayaran Dalam</p>
            </div>
            <p className="text-red-600 font-semibold mt-1">
              23 Jam : 49 Menit : 10 Detik
            </p>
          </div>

          <p className="m-3">Scan kode QR di bawah ini</p>
          <img src={qrisLogo} alt="QRIS" className="mx-auto h-6 mb-2" />
          <img src={qrImage} alt="QR Code" className="mx-auto w-32 h-32 mb-3" />

          <p className="text-sm font-semibold">PT MANDIRI EDUKASI INDONESIA</p>
          <p className="text-sm text-gray-600 mb-3">NMID: ID12345567893546</p>

          <button className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-4 p-2 rounded-full">
            Download Kode QR
          </button>
          <hr className="my-2" />
          <Link to="/upload-bukti-payment" className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-4 p-2 rounded-full">
            Upload Bukti Pembayaran
          </Link>
          <hr className="my-8" />
          <Link to="/payment-status" className="text-green-600 font-semibold hover:underline">
            Cek Status Pembayaran
          </Link>
        </div>
      </main>
    </div>
  );
}
