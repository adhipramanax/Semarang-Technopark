import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";

import Title from "../../../pages/DashboardAdmin/AlatAdd/Title";
import DetailTenant from "../../DashboardJuri/PenilaianProposal/DetailTenant";
import ProposalBelumDinilai from "./ProposalBelumDinilai";
import SudahDinilai from "./SudahDinilai";

const index = () => {
  return (
    <div className="relative flex bg-[#F9F9F9]">
      <Sidebar />
      <Wrapper>
        <NavbarDashboard judul="" />
        <div className="flex flex-col gap-5 pb-10 mx-6 mt-20">
          <h1 className="text-2xl font-semibold mt-5">Proposal</h1>
          <Title title="Detail Proposal" />
          <DetailTenant />
          <SudahDinilai title="Penilaian Proposal" />
          <ProposalBelumDinilai title="Penilaian Presentasi" />
        </div>
      </Wrapper>
    </div>
  );
};

export default index;
