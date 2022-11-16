import React, { useContext } from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Proposal from "./Proposal";
import CardTenant from "./CardTenant";
import TableProposal from "./TableProposal";
import userContext from "../../../context/userContext";

const Index = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <>
      <h1>{user.name}</h1>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full side">
          <NavbarDashboard judul="Dashboard" />
          <div className="flex p-6 gap-6 mt-20">
            <div className="w-full ">
              <Proposal />
              <TableProposal />
            </div>
            <CardTenant />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
