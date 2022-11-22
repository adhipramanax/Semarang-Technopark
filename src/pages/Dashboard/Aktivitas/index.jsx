import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import AksesAktivitas from "./AksesAktivitas";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Aktivitas" />
          <div className="flex p-6 gap-6 h-[92vh] mt-20">
            <AksesAktivitas />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default index;
