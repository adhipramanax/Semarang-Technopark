import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Detail from "./Detail";
import DocPendukung from "./DocPendukung";
import Anggota from "./Anggota";
// import Proposal from "./Proposal";
// import CardTenant from "./CardTenant";
// import TableProposal from "./TableProposal";

const index = () => {
  return (
    <>
      <div className="flex bg-[#D9D9D9]">
        <Sidebar />
        <div className="w-full">
          <NavbarDashboard />

          <div className="flex flex-col gap-5 mx-6 mt-10">
            <Detail />
            <DocPendukung />
            <Anggota />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
