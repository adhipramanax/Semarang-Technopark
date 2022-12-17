import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";

import Title from "../../DashboardAdmin/AlatAdd/Title";
import InformasiCoworking from "./InformasiCoworking";
import BiayaSewa from "../../DashboardAdmin/AlatAdd/BiayaSewa";
import DokumenPendukung from "../../DashboardAdmin/AlatAdd/DokumenPendukung";
import Fasilitas from "./Fasilitas";
import WaktuOperasional from "./WaktuOperasional";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="relative flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="" />
          <div className="flex flex-col gap-5 pb-10 mx-6 mt-20">
            <h1 className="text-2xl font-semibold mt-5">Working Space</h1>
            <Title title="Tambah Working Space" />
            <InformasiCoworking />
            <BiayaSewa />
            <Fasilitas />
            <WaktuOperasional />
            <DokumenPendukung />
            <div className="w-full flex justify-end">
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
