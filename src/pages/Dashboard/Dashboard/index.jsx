import React, { useContext } from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Proposal from "./Proposal";
import CardTenant from "./CardTenant";
import TableProposal from "./TableProposal";
import userContext from "../../../context/userContext";
import Wrapper from "../../../components/Wrapper/Wrapper";

const Index = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Dashboard" />
          <div className="flex p-6 gap-6 mt-20">
            <div className="w-full ">
              <Proposal />
              <TableProposal />
            </div>
            <CardTenant />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
