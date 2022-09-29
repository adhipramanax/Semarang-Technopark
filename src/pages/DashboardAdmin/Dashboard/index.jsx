import React from "react";

import Sidebar from "../../../components/Sidebar";

const index = () => {
  return (
    <div className="flex bg-[#D9D9D9]">
      <h1>halo</h1>
      <Sidebar />
      {/* <div className="w-full ml-64">
        <NavbarDashboard judul="Dashboard" />
        <div className="flex p-6 gap-6">
          <div className="w-full">
            <Proposal />
            <TableProposal />
          </div>
          <CardTenant />
        </div>
      </div> */}
    </div>
  );
};

export default index;
