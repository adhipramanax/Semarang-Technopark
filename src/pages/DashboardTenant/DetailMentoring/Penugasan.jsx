import React from 'react';

const Penugasan = () => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Penugasan</h1>
        <table className="mt-5">
          <tr>
            <td className="w-1/4 h-10 text-neutral">Judul Penugasan</td>
            <td className="border-b border-b-stp-gray h-14">
              Penugasan mentoring Sumber Daya Perusahaan
            </td>
          </tr>
          <tr>
            <td className="w-1/4 h-10 text-neutral">Deskripsi Penugasan</td>
            <td className="border-b !border-b-stp-gray h-20">
              Buatlah rancangan ketika anda ingin melakukan management terhadap
              sumber daya barang habis pada perusaan
            </td>
          </tr>
          <tr>
            <td className="w-1/4 h-10 text-neutral">Dedline Pengumpulan</td>
            <td className="border-b border-b-stp-gray h-14 flex justify-between items-center">
              <p>20 Januari 2022</p>
              <p>3 Hari tersisa</p>
            </td>
          </tr>
          <tr>
            <td
              className="w-1/4 h-10 text-neutral"
              rowSpan={2}
            >
              Status Pengumpulan
            </td>
            <td className="h-16">Belum ada file yang dikumpulkan</td>
          </tr>
          <tr>
            {/* <td className="w-1/4 h-10"></td> */}
            <td className="border-b border-b-stp-gray">
              <button className="btn btn-outline border-2 border-dashed btn-error mb-4">
                + Kumpulkan Tugas
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Penugasan;
