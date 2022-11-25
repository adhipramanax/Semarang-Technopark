import React from 'react'

import Null from '../../../assets/images/svg/null.png'

const BelumLink = () => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Link Pelatihan</h1>
        <div className="flex flex-col items-center gap-2">
          <img className="mt-2" src={Null} alt="Mentor Avatar" />
          <p className="text-gray w-1/2 text-center">Belum ada link pelatihan yang dimasukan oleh admin, silahkan tunggu hingga admin menginputkan link pelatihan</p>
        </div>
      </div>
    </>
  )
}

export default BelumLink