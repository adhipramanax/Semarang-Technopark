import React from 'react'

import ImgMentor from '../../../assets/images/img-mentor.png'

const Mentor = () => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Mentor</h1>
        <div className="flex flex-col items-center gap-2">
          <img className="mt-2" src={ImgMentor} alt="Mentor Avatar" />
          <h1>Cecep Bagus Suryadinata KA, M.Kom., P.hD</h1>
          <p className="text-gray">UI/UX Designer at SEAL</p>
        </div>
      </div>
    </>
  )
}

export default Mentor