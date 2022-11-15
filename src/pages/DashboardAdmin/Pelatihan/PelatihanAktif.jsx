import React from "react";
import Card from "./Card";

const PelatihanAktif = () => {
  const data = [
    {
      judul: "Nama Akun",
      name: "nama",
      placeholder: "nama",
    },
    {
      judul: "Password Lama",
      name: "password",
      placeholder: "Masukan Password Lama",
    },
    {
      judul: "Password Baru",
      name: "password",
      placeholder: "Password Baru",
    },
    {
      judul: "Ilangi Password Baru",
      name: "password",
      placeholder: "Ulangi Password Baru",
    },
  ];
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
