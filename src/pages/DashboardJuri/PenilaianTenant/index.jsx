import React from "react";

import Sidebar from "../../../components/Sidebar/Sidebar";
import Wrapper from "../../../components/Wrapper/Wrapper";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import DetailPenilaian from "./DetailPenilaian";
import Penilaian from "./Penilaian";
import TambahPenilaian from "./TambahPenilaian";

const index = () => {
  return (
    <div className="flex bg-[#F9F9F9]">
      <Sidebar />
      <Wrapper>
        <NavbarDashboard judul="Penilaian Tenant" />
        <div className="flex flex-col gap-5 mx-6 mt-20">
          <DetailPenilaian />
          {/* <Penilaian /> */}
          <TambahPenilaian />
        </div>
      </Wrapper>
    </div>
  );
};

export default index;
