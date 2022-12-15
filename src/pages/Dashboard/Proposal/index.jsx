import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import FileUpload from "./FileUpload";
import EditProposal from "./EditProposal";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Proposal" />
          <div className="flex p-6 gap-6  h-[92vh] mt-20">
            <FileUpload />
            {/* <EditProposal /> */}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default index;
