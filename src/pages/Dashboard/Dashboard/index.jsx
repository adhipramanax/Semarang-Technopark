import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Proposal from "./Proposal";
import CardTenant from "./CardTenant";
import TableProposal from "./TableProposal";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Dashboard" />
          <div className="flex p-6 gap-6 mt-20">
            <div className="w-full ">
              <Proposal />
              <TableProposal />
            </div>
            <CardTenant />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
