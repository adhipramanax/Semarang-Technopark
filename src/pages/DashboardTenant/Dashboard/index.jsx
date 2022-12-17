import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Proposal from "./Proposal";
import CardTenant from "./CardTenant";
import TableProposal from "./TableProposal";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Dashboard Tenant" />
          <div className="flex p-6 gap-6 mt-20">
            <div className="w-full">
              <Proposal />
              <TableProposal />
            </div>
            <CardTenant />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default index;
