import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";

import Title from "../../Dashboard/AdminAlatAdd/Title";
import InformasiAlat from "../../Dashboard/AdminAlatAdd/InformasiAlat";
import BiayaSewa from "../../Dashboard/AdminAlatAdd/BiayaSewa";
import DokumenPendukung from "../../Dashboard/AdminAlatAdd/DokumenPendukung";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full">
          <NavbarDashboard />
          <div className="flex flex-col gap-5 mx-6 mt-10">
            <Title title="Tambah Alat" />
            <InformasiAlat informasiName="Informasi Alat" />
            <BiayaSewa />
            <DokumenPendukung />
            <div className="w-[888px] flex justify-end">
              <button className="btn btn-error border-none justify-self-end bg-[#CD0606] w-[127px] px-4 py-3 mb-3 text-white rounded-[4px]">
                Tambahkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
