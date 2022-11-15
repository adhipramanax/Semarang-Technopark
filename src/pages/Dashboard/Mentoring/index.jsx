import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Maintenance from "../../../components/Maintenance";
// import Proposal from "./Proposal";
// import CardTenant from "./CardTenant";
// import TableProposal from "./TableProposal";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full ml-64 h-[100vh]">
          <NavbarDashboard judul="Mentoring" />
          <Maintenance />
        </div>
      </div>
    </>
  );
};

export default index;
