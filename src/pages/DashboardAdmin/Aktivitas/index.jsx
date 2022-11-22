import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Maintenance from "../../../components/Maintenance";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Aktivitas" />
          <div className="flex flex-col gap-5 mx-6 mt-10">
            <Maintenance />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default index;
