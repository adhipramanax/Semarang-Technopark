import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import FileUpload from "./FileUpload";
import EditProposal from "./EditProposal";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Proposal" />
          <div className="flex p-6 gap-6  h-[92vh] mt-20">
            <FileUpload />
            {/* <EditProposal /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
