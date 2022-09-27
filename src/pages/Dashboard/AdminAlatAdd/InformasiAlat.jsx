import React from "react";

import Forms from "../../Dashboard/AdminAlatAdd/Forms";
import FormsDouble from "../../Dashboard/AdminAlatAdd/FormsDouble";

const informasiAlat = () => {
  return (
    <>
      <div className="w-[888px] bg-white px-[20px] py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-base font-bold">Infromasi Alat</h1>
        </div>
        <Forms inputLabel="Nama Alat" inputForm="Nama Alat" />
        <Forms inputLabel="No Seri" inputForm="No Seri" />
        <FormsDouble
          inputLabel1="Merk"
          inputForm1="Merk"
          inputLabel2="Tahun Beli"
          inputForm2="Tahun Beli"
        />
        <Forms inputLabel="No Seri" inputForm="No Seri" />
      </div>
    </>
  );
};

export default informasiAlat;
