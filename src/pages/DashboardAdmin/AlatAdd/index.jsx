import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";

import Title from "../../DashboardAdmin/AlatAdd/Title";
import InformasiAlat from "../../DashboardAdmin/AlatAdd/InformasiAlat";
import BiayaSewa from "../../DashboardAdmin/AlatAdd/BiayaSewa";
import DokumenPendukung from "../../DashboardAdmin/AlatAdd/DokumenPendukung";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Tambah Alat" />
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
        </Wrapper>
      </div>
    </>
  );
};

export default index;
