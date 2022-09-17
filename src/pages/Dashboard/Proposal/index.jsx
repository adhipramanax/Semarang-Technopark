import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import FileUpload from "./FileUpload";
import EditProposal from "./EditProposal";

const index = () => {
  return (
    <>
      <div className="flex bg-[#D9D9D9]">
        <Sidebar />
        <div className="w-full">
          <NavbarDashboard />
          <div className="flex flex-col gap-5 mx-6 mt-10">
            {/* <FileUpload /> */}
            <EditProposal />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
