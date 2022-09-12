import React from "react";

import Sidebar from "../../components/Sidebar";
import NavbarDashboard from "../../components/Navbar/NavbarDashboard";

const index = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <NavbarDashboard />
      </div>
    </>
  );
};

export default index;
