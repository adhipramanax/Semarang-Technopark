import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Detail from "./Detail";
import DocPendukung from "./DocPendukung";
import Anggota from "./Anggota";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Proposal from "./Proposal";

const Index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Profile Tenant" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <Detail />
            <DocPendukung />
            <Proposal />
            <Anggota />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
