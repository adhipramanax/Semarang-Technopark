import React from 'react'
import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import { Link } from 'react-router-dom';
import IBC from '../../../assets/images/ibc.png'

const DetailPelatihan = () => {
  return (
    <>
      <div className="flex bg-[#D9D9D9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Management Alat" />
          <div className="flex flex-col gap-5 pb-10 mx-6 mt-20">
            <div className="w-full bg-white py-5 px-3 font-medium text-base rounded">
              <h1 className="flex gap-2">
                <Link to="/admin/daftar-pelatihan" className="flex gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#1C1B1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Detail Pelatihan
                </Link>
              </h1>
            </div>
            <div className="w-full bg-white p-5 rounded">
              <div className="flex gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7499 2.45031C11.4499 1.86031 12.5799 1.86031 13.2599 2.45031L14.8399 3.80031C15.1399 4.05031 15.7099 4.26031 16.1099 4.26031H17.8099C18.8699 4.26031 19.7399 5.13031 19.7399 6.19031V7.89031C19.7399 8.29031 19.9499 8.85031 20.1999 9.15031L21.5499 10.7303C22.1399 11.4303 22.1399 12.5603 21.5499 13.2403L20.1999 14.8203C19.9499 15.1203 19.7399 15.6803 19.7399 16.0803V17.7803C19.7399 18.8403 18.8699 19.7103 17.8099 19.7103H16.1099C15.7099 19.7103 15.1499 19.9203 14.8499 20.1703L13.2699 21.5203C12.5699 22.1103 11.4399 22.1103 10.7599 21.5203L9.17988 20.1703C8.87988 19.9203 8.30988 19.7103 7.91988 19.7103H6.16988C5.10988 19.7103 4.23988 18.8403 4.23988 17.7803V16.0703C4.23988 15.6803 4.03988 15.1103 3.78988 14.8203L2.43988 13.2303C1.85988 12.5403 1.85988 11.4203 2.43988 10.7303L3.78988 9.14031C4.03988 8.84031 4.23988 8.28031 4.23988 7.89031V6.20031C4.23988 5.14031 5.10988 4.27031 6.16988 4.27031H7.89988C8.29988 4.27031 8.85988 4.06031 9.15988 3.81031L10.7499 2.45031Z" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 8.12988V12.9599" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.9941 16H12.0031" stroke="#D73737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h1 className="text-base font-bold text-merah">Informasi Pelatihan</h1>
              </div>
              <div className="flex mt-3">
                <div className="w-[24.5%]">
                  <img className="rounded w-[250px] h-[218px] object-cover" src={IBC} alt="ibc" />
                </div>
                <div className="w-[65%] flex ml-10">
                  <div className="grid grid-cols-3 gap-y-6 my-auto">
                    <h1 className="font-semibold text-base">Judul Pelatihan</h1>
                    <p className="col-span-2">Pelatihan Cyber Security</p>
                    <h1 className="font-semibold text-base">Pembicara</h1>
                    <p className="col-span-2">Brahmasta Bagus Aryandra</p>
                    <h1 className="font-semibold text-base">Deskripsi</h1>
                    <p className="col-span-2">Belajar bagaimana cara menjadi hacker yang baik dalam melakukan pengamanan terhadap suatu website</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white p-5 rounded">
              <div className="flex gap-2">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.67188 14.7214C8.67188 16.0114 9.66188 17.0514 10.8919 17.0514H13.4019C14.4719 17.0514 15.3419 16.1414 15.3419 15.0214C15.3419 13.8014 14.8119 13.3714 14.0219 13.0914L9.99187 11.6914C9.20187 11.4114 8.67188 10.9814 8.67188 9.76145C8.67188 8.64145 9.54187 7.73145 10.6119 7.73145H13.1219C14.3519 7.73145 15.3419 8.77145 15.3419 10.0614" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 6.3916V18.3916" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 22.3916C17.5228 22.3916 22 17.9144 22 12.3916C22 6.86875 17.5228 2.3916 12 2.3916C6.47715 2.3916 2 6.86875 2 12.3916C2 17.9144 6.47715 22.3916 12 22.3916Z" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <h1 className="text-base font-bold text-merah">Detail Kapasitas</h1>
              </div>
              <div className="flex mt-3 gap-2">
                <div className="w-1/2 flex gap-5 items-center">
                  <label className="w-fit">Jumlah Pendaftar</label>
                  <input type="text" value="100" className="input input-bordered w-full max-w-xs disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" disabled />
                </div>
                <div className="w-1/2 flex gap-5 items-center">
                  <label className="w-fit">Maks. Kapasitas</label>
                  <input type="text" value="1000" className="input input-bordered w-full max-w-xs disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" disabled />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[48%] bg-white p-5 rounded">
                <div className="flex gap-2">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.3916C22 17.9116 17.52 22.3916 12 22.3916C6.48 22.3916 2 17.9116 2 12.3916C2 6.8716 6.48 2.3916 12 2.3916C17.52 2.3916 22 6.8716 22 12.3916Z" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.7099 15.5714L12.6099 13.7214C12.0699 13.4014 11.6299 12.6314 11.6299 12.0014V7.90137" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h1 className="text-base font-bold text-merah">Pelaksanaan</h1>
                </div>
                <div className="mt-3">
                  <div className="w-full flex items-center first:mb-3 last:mb-0">
                    <label className="w-full">Hari</label>
                    <input type="date" value="2022-12-30" className="input input-bordered w-full max-w-xs disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" disabled />
                  </div>
                  <div className="w-full flex items-center first:mb-3 last:mb-0">
                    <label className="w-full">Jam</label>
                    <input type="time" value="08:00" className="input input-bordered w-full max-w-xs disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" disabled />
                  </div>
                </div>
              </div>
              <div className="w-[48%] bg-white p-5 rounded">
                <div className="flex gap-2">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.3916C22 17.9116 17.52 22.3916 12 22.3916C6.48 22.3916 2 17.9116 2 12.3916C2 6.8716 6.48 2.3916 12 2.3916C17.52 2.3916 22 6.8716 22 12.3916Z" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.7099 15.5714L12.6099 13.7214C12.0699 13.4014 11.6299 12.6314 11.6299 12.0014V7.90137" stroke="#D73737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h1 className="text-base font-bold text-merah">Pelaksanaan</h1>
                </div>
                <div className="mt-3">
                  <div className="w-full flex items-center first:mb-3 last:mb-0">
                    <label className="w-full">Hari</label>
                    <input type="date" value="2022-12-30" className="input input-bordered w-full max-w-xs disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" disabled />
                  </div>
                  <div className="w-full flex items-center first:mb-3 last:mb-0">
                    <label className="w-full">Jam</label>
                    <input type="time" value="08:00" className="input input-bordered w-full max-w-xs disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" disabled />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPelatihan