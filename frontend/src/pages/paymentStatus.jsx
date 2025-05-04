import Header from '../components/Header';

export default function PaymentStatus() {
  return (
    <div className="bg-purple-50 min-h-screen">
      <Header />

      <main className="flex justify-center items-start mt-10 py-10 px-72">
        <div className="bg-white shadow-xl rounded-xl p-16 w-full max-w-[600px]">
          <h2 className="text-center text-lg font-bold mb-6">RIWAYAT PEMBELIAN</h2>

          <div className="bg-white rounded-xl p-6 text-center">
            <div className="mb-6">
              <div className="bg-[#1E73E8] text-white font-bold text-base py-3 px-4 rounded-xl w-full shadow-inner">
                Menunggu Pembayaran
              </div>
            </div>

            <p className="text-xl font-semibold tracking-wide mb-2">
              INVM-23ER432
            </p>

            <hr className="my-4" />

            <div className="mb-4">
              <p className="text-sm">Lakukan Pembayaran Sebelum</p>
              <p className="text-red-600 font-semibold text-base">
                Rabu, 26 Maret 2025 pukul 12.03
              </p>
            </div>

            <div className="text-left text-sm text-gray-700 mt-4">
              <p className="font-semibold mb-1">Catatan:</p>
              <p>
                Apabila telah membayar tetapi status Anda belum berubah, Anda dapat
                refresh halaman ini untuk memperbarui status. Jika setelah 3 jam
                status belum berubah, hubungi kami di{' '}
                <span className="font-semibold">082274152348</span>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
