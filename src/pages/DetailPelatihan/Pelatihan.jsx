import React from 'react'

import FullPelatihan from '../../assets/images/pelatihan-full.png'

const Index = () => {
  return (
    <>
      <img src={FullPelatihan} alt="pelatihan" />
      <div>
        <h1 className="font-semibold text-4xl">Pelatihan Desain Grafis</h1>
        <div className="flex font-medium text-base items-center gap-2 mt-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM10.09 16.72L6.29 12.91L7.77 11.43L10.09 13.76L15.94 7.89L17.42 9.37L10.09 16.72Z" fill="#04A2FF" />
          </svg>
          dikelola oleh Semarang Technopark
        </div>
        <h1 className="font-medium text-xl mt-7">Waktu dan Lokasi</h1>
        <table className="mt-2">
          <tr className="h-8">
            <td className="w-1/2 text-stp-gray text-base font-normal">Hari</td>
            <td>Senin</td>
          </tr>
          <tr className="h-8">
            <td className="w-1/2 text-stp-gray text-base font-normal">
              Tanggal
            </td>
            <td>27 Juni 2022</td>
          </tr>
          <tr className="h-8">
            <td className="w-1/2 text-stp-gray text-base font-normal">Jam</td>
            <td>09:00 - 16:00</td>
          </tr>
          <tr className="h-8">
            <td className="w-1/2 text-stp-gray text-base font-normal">
              Lokasi
            </td>
            <td>Via Zoom Meeting</td>
          </tr>
        </table>
        <div className="flex gap-1 text-stp-primary-500 items-center mt-5 font-medium text-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#CD0606" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 6V18" stroke="#CD0606" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#CD0606" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Free
        </div>
        <h1 className="font-semibold text-base mt-3">Deskripsi Pelatihan</h1>
        <p className="font-normal text-base mt-3">Pelatihan Desain Grafis sendiri adalah proses pembelajaran keahlian dan keterampilan berupa CorelDraw dan Photoshop yang bertujuan untuk meningkatkan ketrampilan dan pengusaan materi dalam mendesain dengan baik.</p>
        <button className="btn mt-4 bg-[#CD0606] border-0 p-3 rounded text-white capitalize tracking-wide hover:bg-red-700">
          Sewa Sekarang
        </button>
      </div>
    </>
  )
}

export default Index