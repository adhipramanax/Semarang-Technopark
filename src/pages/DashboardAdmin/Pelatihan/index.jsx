import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import DaftarPelatihan from "./DaftarPelatihan";
import PelatihanAktif from "./PelatihanAktif";
import RiwayatPelatihan from "./Riwayatpelatihan";
import Wrapper from "../../../components/Wrapper/Wrapper";

const Index = () => {
  return (
    <div className="flex bg-[#F9F9F9] h-screen">
      <Sidebar />
      <Wrapper>
        <NavbarDashboard judul="Management Pelatihan" />
        <div className="flex flex-col gap-5 mx-6 mt-20">
          <DaftarPelatihan judul="Tambah Pelatihan" link="/" />
          <PelatihanAktif />
          <RiwayatPelatihan />
        </div>
      </Wrapper>
    </div>
  );
};

export default Index;
