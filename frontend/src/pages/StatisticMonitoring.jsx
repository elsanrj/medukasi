import React from 'react';
import Header from '../components/Header';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StaticMonitoring() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center flex-1 p-8">
        <div className="w-full max-w-6xl bg-[#FEF7FF] rounded-[18px] border-[6px] border-[#CAC4D0] p-10 shadow-md">
          
          {/* Judul Halaman */}
          <h2 className="text-2xl font-bold text-black mb-8">
            ← Static & Monitoring
          </h2>

          {/* Kotak Aktivitas */}
          <div className="flex justify-between items-center px-6 py-5 mb-6 bg-gradient-to-r from-red-400 to-indigo-900 rounded-xl shadow-md">
            <div className="text-white">
              <p className="text-xl font-bold mb-1">Activity</p>
              <p className="text-sm">Seluruh aktivitas terselesaikan 70%...</p>
            </div>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zr9XNziQY7/1d16xkfw_expires_30_days.png"
              alt="Activity"
              className="w-[300px] h-[80px] rounded-xl object-contain"
            />
          </div>

          {/* Kotak Score */}
          <div className="flex justify-between items-center px-6 py-5 mb-6 bg-gradient-to-r from-red-400 to-indigo-900 rounded-xl shadow-md">
            <div className="text-white">
              <p className="text-xl font-bold mb-1">Score</p>
              <p className="text-sm">Rata-rata nilai seluruh class 92/100</p>
            </div>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zr9XNziQY7/fab4yuus_expires_30_days.png"
              alt="Score"
              className="w-[300px] h-[80px] rounded-xl object-contain"
            />
          </div>

          {/* Kotak Achievement */}
          <div className="flex justify-between items-center px-6 py-5 mb-8 bg-gradient-to-r from-red-400 to-indigo-900 rounded-xl shadow-md">
            <div className="text-white">
              <p className="text-xl font-bold mb-1">Achievement Progress</p>
              <p className="text-sm">Kehadiran bla bla bla</p>
            </div>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zr9XNziQY7/l68g8qb4_expires_30_days.png"
              alt="Achievement"
              className="w-[300px] h-[80px] rounded-xl object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
