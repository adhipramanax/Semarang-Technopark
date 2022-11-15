import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import AksesAktivitas from "./AksesAktivitas";
// import Proposal from "./Proposal";
// import CardTenant from "./CardTenant";
// import TableProposal from "./TableProposal";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full side">
          <NavbarDashboard judul="Aktivitas" />
          <div className="flex p-6 gap-6 h-[92vh] mt-20">
            <AksesAktivitas />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
