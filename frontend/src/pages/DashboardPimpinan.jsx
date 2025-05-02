import React, { useState } from 'react';
import HeaderAdmin from '../components/HeaderAdmin';
import SidebarPimpinan from '../components/SidebarPimpinan';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const DashboardPimpinan = () => {
  const [students, setStudents] = useState([
    { id: 1, nama: 'Shizuka', program: 'Medu Course', status: 'Aktif' },
    { id: 2, nama: 'Dina', program: 'Ucok', status: 'Tidak Aktif' },
    { id: 3, nama: 'Naeya', program: 'Private Class', status: 'Aktif' },
  ]);
  
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Siswa Terdaftar');
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarbarOpen);
  };

  // Data untuk grafik garis (pendaftaran per bulan)
  const monthlyData = [
    { name: 'Jan', students: 400 },
    { name: 'Feb', students: 300 },
    { name: 'Mar', students: 200 },
    { name: 'Apr', students: 100 },
    { name: 'May', students: 0 },
    { name: 'Jun', students: 150 },
    { name: 'Jul', students: 250 },
    { name: 'Aug', students: 350 },
    { name: 'Sep', students: 200 },
    { name: 'Oct', students: 100 },
    { name: 'Nov', students: 50 },
    { name: 'Dec', students: 300 },
  ];

  // Data untuk grafik batang (status siswa)
  const statusData = [
    { name: 'Aktif', value: 40 },
    { name: 'Non-Aktif', value: 20 },
  ];

  return (
    <div className="flex flex-col h-screen">
      <HeaderAdmin toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-64 min-w-64 overflow-y-auto transition-all duration-300`}>
          <SidebarPimpinan activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto" style={{ backgroundColor: '#FEF7FF' }}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold text-gray-800">
                {activeMenu}
              </h1>
              
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Cari nama..."
                  className="w-full px-3 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-2.5 top-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {activeMenu === 'Siswa Terdaftar' && (
              <>
                <button className="mb-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Tambah Siswa Baru
                </button>
                
                <div className="bg-white rounded-md overflow-hidden shadow">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          No
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Nama
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Program Belajar
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {students.map((student) => (
                        <tr key={student.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.nama}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.program}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              student.status === 'Aktif'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {student.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            
            {activeMenu === 'Siswa Aktif' && (
              <div className="bg-white rounded-md p-6 shadow">
                <h2 className="text-lg font-medium mb-4">Daftar Siswa Aktif</h2>
                <p className="text-gray-600">Menampilkan data siswa yang saat ini aktif mengikuti pembelajaran.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {students
                    .filter(student => student.status === 'Aktif')
                    .map(student => (
                      <div key={student.id} className="border rounded-md p-4 bg-indigo-50">
                        <h3 className="font-medium">{student.nama}</h3>
                        <p className="text-sm text-gray-600">Program: {student.program}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            )}
            
            {activeMenu === 'Grafik' && (
              <div className="space-y-8">
                {/* Grafik Batang - Status Siswa */}
                <div className="bg-white rounded-md p-6 shadow">
                  <h3 className="text-md font-medium mb-4">Status Siswa</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={statusData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Grafik Garis - Pendaftaran per Bulan */}
                <div className="bg-white rounded-md p-6 shadow">
                  <h3 className="text-md font-medium mb-4">Pendaftaran Siswa per Bulan</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={monthlyData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="students" stroke="#82ca9d" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPimpinan;