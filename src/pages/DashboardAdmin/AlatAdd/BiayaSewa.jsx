import React from "react";

import FormsDouble from "../../DashboardAdmin/AlatAdd/FormsDouble";

const BiayaSewa = () => {
  return (
    <>
      <div className="w-[888px] bg-white px-[20px] py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-base font-bold">Biaya Sewa</h1>
        </div>
        <FormsDouble
          inputLabel1="Harian"
          inputForm1="Rp50.000,00"
          inputLabel2="Mingguan"
          inputForm2="Rp300.000,00"
        />
        <FormsDouble
          inputLabel1="Bulanan"
          inputForm1="Rp1.500.000,00"
          inputLabel2="Tahunan"
          inputForm2="Rp5.000.000,00"
        />
      </div>
    </>
  );
};

export default BiayaSewa;
