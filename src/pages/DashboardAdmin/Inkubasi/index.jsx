import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Maintenance from "../../../components/Maintenance";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full side h-[100vh]">
          <NavbarDashboard judul="Mentoring" />
          <Maintenance />
        </div>
      </div>
    </>
  );
};

export default index;
