import React from 'react'

import Null from '../../../assets/images/svg/null.png'

const BelumPresensi = () => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Presensi Kehadiran</h1>
        <div className="flex flex-col items-center gap-2">
          <img className="mt-2" src={Null} alt="Mentor Avatar" />
          <p className="text-gray w-1/2 text-center">Anda belum melakukan presensi, silahkan lakukan presensi untuk mengkonfirmasi kehadiran dalam mentoring</p>
          <button className="btn flex text-white bg-merah hover:bg-red-700 border-0 hover:text-slate-200 rounded-md gap-2 items-center capitalize">Presensi Kehadiran</button>
        </div>
      </div>
    </>
  )
}

export default BelumPresensi