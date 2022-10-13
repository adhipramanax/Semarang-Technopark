import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";

const index = () => {
  return (
    <>
      <div className="flex bg-[#f9f9f9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Dashboard Admin" />
          <div className="flex flex-col gap-5 mx-6 mt-10 h-screen">{/* <AkunTenant /> */}</div>
        </div>
      </div>
    </>
  );
};

export default index;
