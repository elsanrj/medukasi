import Header from '../components/Header';
import qrisLogo from '../assets/payment/qris.png';
import qrImage from '../assets/payment/qr-code.png';

export default function QrisSection() {
  const totalAmount = 252000;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);

  return (
    <div className="bg-purple-50 min-h-screen">
      <Header />

      <main className="flex justify-center py-10">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
          <h2 className="text-lg font-bold mb-4">QRIS</h2>

          <div className="text-left border-t border-b py-3 mb-4">
            <p className="text-black">Total: <strong>{formatCurrency(totalAmount)}</strong></p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-600 text-xl text-center">🕒</span>
              <p className="text-sm font-medium text-center">Segera Lakukan Pembayaran Dalam</p>
            </div>
            <p className="text-red-600 font-semibold mt-1">
              23 Jam : 49 Menit : 10 Detik
            </p>
          </div>

          <p className="mb-3">Scan kode QR di bawah ini</p>
          <img src={qrisLogo} alt="QRIS" className="mx-auto h-6 mb-2" />
          <img src={qrImage} alt="QR Code" className="mx-auto w-32 h-32 mb-3" />

          <p className="text-sm font-semibold">PT MANDIRI EDUKASI INDONESIA</p>
          <p className="text-sm text-gray-600 mb-3">NMID: ID12345567893546</p>

          <button className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-4 py-2 rounded-full mb-3">
            Download Kode QR
          </button>

          <hr className="my-2" />

          <a href="/payment/status" className="text-green-600 font-semibold hover:underline">
            Cek Status Pembayaran
          </a>
        </div>
      </main>
    </div>
  );
}
