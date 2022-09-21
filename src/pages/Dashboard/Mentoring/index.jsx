import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
// import Proposal from "./Proposal";
// import CardTenant from "./CardTenant";
// import TableProposal from "./TableProposal";

const index = () => {
  return (
    <>
      <div className="flex bg-[#D9D9D9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Mentoring" />
          {/* <div className="flex p-6 gap-6">
            <div className="w-full">
              <Proposal />
              <TableProposal />
            </div>
            <CardTenant />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default index;
