import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Maintenance from "../../../components/Maintenance";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Mentoring" />
          <Maintenance />
        </Wrapper>
      </div>
    </>
  );
};

export default index;
