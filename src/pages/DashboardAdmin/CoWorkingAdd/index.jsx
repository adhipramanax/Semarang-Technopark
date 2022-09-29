import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";

import Title from "../../DashboardAdmin/AlatAdd/Title";
import InformasiCoworking from "./InformasiCoworking";
import BiayaSewa from "../../DashboardAdmin/AlatAdd/BiayaSewa";
import DokumenPendukung from "../../DashboardAdmin/AlatAdd/DokumenPendukung";
import Fasilitas from "./Fasilitas";
import WaktuOperasional from "./WaktuOperasional";

const index = () => {
  return (
    <>
      <div className="relative flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full ml-64 p-5">
          <NavbarDashboard />
          <div className="flex flex-col gap-5 mx-6 mt-10">
            <Title title="Tambah Working Space" />
            <InformasiCoworking />
            <WaktuOperasional />
            <BiayaSewa />
            <Fasilitas />
            <DokumenPendukung />
            <div className="w-[888px] flex justify-end">
              <button className="btn btn-error border-none justify-self-end bg-[#CD0606] w-[127px] px-4 py-3 mb-3 text-white rounded-[4px]">
                Tambahkan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[88px] right-10 w-40">
        <div>
          <ul className="menu">
            <li className="bordered">
              <a className="px-2 py-0 w-44 text-sm" id="">
                Item 1
              </a>
            </li>
            <li className="bordered">
              <a className="px-2 py-0 w-44 text-sm">Item 1</a>
            </li>
            <li className="border-l border-lime-500">
              <a className="px-2 py-0 w-44 text-sm">Item 1</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
