import React from "react";

import aktivitasImg from "../../../assets/images/aktivitas.png";

const AksesAktivitas = () => {
  return (
    <>
      <div className="bg-white  flex flex-col items-center justify-center py-9 w-full">
        <div className="flex flex-col items-center justify-center w-1/2 gap-9">
          <img className="w-1/2" src={aktivitasImg} alt="file" />
          <div className="text-center items-center flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">Kamu Belum Punya Akses</h1>
            <p className="w-2/3">
              Kamu akan dapat akses jika sudah jadi tenant resmi Semarang Technopark
            </p>
          </div>
          <input className="bg-[#CD0606] text-white border-black border-solid" type="file" />
        </div>
      </div>
    </>
  );
};

export default AksesAktivitas;
