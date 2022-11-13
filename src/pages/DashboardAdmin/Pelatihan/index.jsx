import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import DaftarPelatihan from "./DaftarPelatihan";
import PelatihanAktif from "./PelatihanAktif";
import RiwayatPelatihan from "./Riwayatpelatihan";

const Index = () => {
  return (
    <div className="flex bg-[#F9F9F9] h-screen">
      <Sidebar />
      <div className="w-full ml-64">
        <NavbarDashboard judul="Management Juri" />
        <div className="flex flex-col gap-5 mx-6 mt-20">
          <DaftarPelatihan judul="Tambah Pelatihan" link="/" />
          <PelatihanAktif />
          <RiwayatPelatihan />
        </div>
      </div>
    </div>
  );
};

export default Index;
