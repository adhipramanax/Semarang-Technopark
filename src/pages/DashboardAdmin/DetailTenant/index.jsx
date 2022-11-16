import React from "react";

import Sidebar from "../../../components/Sidebar/Sidebar";

import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Detail from "./Detail";
import TenantPoints from "./TenantPoints";

import Modal from "../../../components/Modal/Modal";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9] h-screen ">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Management Tenant" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <Detail />
            <TenantPoints />
          </div>
          <Modal />
        </Wrapper>
      </div>
    </>
  );
};

export default index;
