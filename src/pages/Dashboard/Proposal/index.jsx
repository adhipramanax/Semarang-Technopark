import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import FileUpload from "./FileUpload";

const index = () => {
  return (
    <>
      <div className="flex bg-[#D9D9D9]">
        <Sidebar />
        <div className="w-full">
          <NavbarDashboard />
          <div className="w-full">
            <FileUpload />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
