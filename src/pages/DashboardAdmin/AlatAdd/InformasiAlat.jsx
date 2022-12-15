import React from "react";

import Forms from "../../DashboardAdmin/AlatAdd/Forms";

const informasiAlat = () => {
  return (
    <>
      <div className="w-[888px] bg-white px-[20px] py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-base font-bold text-[#D73737]">Informasi Alat</h1>
        </div>
        <Forms inputLabel="Nama Alat" inputForm="ex: Kamera 360" />
        <Forms inputLabel="No Seri" inputForm="ex: 1234-XYZ" />
        <Forms inputLabel="Merk" inputForm="ex: Canon" />
        <Forms inputLabel="Tahun Beli" inputForm="ex: 2019" />
        <Forms
          inputLabel="Pemilik"
          inputForm="ex: Dinas Pendidikan Kota Semarang"
        />
        <Forms
          inputLabel="Alamat"
          inputForm="ex: Jl. Lamongan No.17, Bendan Ngisor"
        />
      </div>
    </>
  );
};

export default informasiAlat;
