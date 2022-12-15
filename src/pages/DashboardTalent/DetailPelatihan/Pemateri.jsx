import React from 'react'

import ImgMentor from '../../../assets/images/img-mentor.png'

const Pemateri = () => {
  const data = [
    {
      gambar: ImgMentor,
      nama: "Cecep Bagus Suryadinata KA, M.Kom., P.hD",
      jabatan: "UI/UX Designer at SEAL"
    },
    {
      gambar: ImgMentor,
      nama: "Cecep Bagus Suryadinata KA, M.Kom., P.hD",
      jabatan: "UI/UX Designer at SEAL"
    },
    {
      gambar: ImgMentor,
      nama: "Cecep Bagus Suryadinata KA, M.Kom., P.hD",
      jabatan: "UI/UX Designer at SEAL"
    },
    {
      gambar: ImgMentor,
      nama: "Cecep Bagus Suryadinata KA, M.Kom., P.hD",
      jabatan: "UI/UX Designer at SEAL"
    },
  ]
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Pemateri</h1>
        <div className="flex gap-4 justify-center flex-wrap">
          {data.map((data) => {
            return (
              <div className="flex flex-col items-center gap-2">
                <img className="mt-2" src={data.gambar} alt="Pemateri Avatar" />
                <h1>{data.nama}</h1>
                <p className="text-gray">{data.jabatan}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Pemateri