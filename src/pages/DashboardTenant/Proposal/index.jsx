import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Maintenance from '../../../components/Maintenance'

const Index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Management Proposal" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <Maintenance />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
