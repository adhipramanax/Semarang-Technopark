import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";

import Title from "../../DashboardAdmin/AlatAdd/Title";
import InformasiAlat from "../../DashboardAdmin/AlatAdd/InformasiAlat";
import BiayaSewa from "../../DashboardAdmin/AlatAdd/BiayaSewa";
import DokumenPendukung from "../../DashboardAdmin/AlatAdd/DokumenPendukung";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full">
          <NavbarDashboard />
          <div className="w-full ml-64 p-5">
            <div className="flex flex-col gap-5 ">
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
      </div>
    </>
  );
};

export default index;
