import React from "react";
import Card from "./Card";

const PelatihanAktif = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Pelatihan Aktif</h1>
        <button className="text-[#D73737] text-base">Lihat Semua</button>
      </div>
      <Card />
    </>
  );
};

export default PelatihanAktif;
