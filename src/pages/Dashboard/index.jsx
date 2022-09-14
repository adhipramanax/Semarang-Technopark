import React from "react";

import Sidebar from "../../components/Sidebar";
import NavbarDashboard from "../../components/Navbar/NavbarDashboard";
import Proposal from "./Proposal";
import CardTenant from "./CardTenant";

const index = () => {
  return (
    <>
      <div className="flex bg-[#D9D9D9]">
        <Sidebar />
        <div className="w-full">
          <NavbarDashboard />
          <div className="flex p-6 gap-6">
            <Proposal />
            <CardTenant />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
