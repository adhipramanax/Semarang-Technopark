import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import AkunTenant from "./AkunTenant";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Management Tenant" />
          <div className="flex flex-col gap-5 mx-6 mt-20 h-screen ">
            <AkunTenant />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
