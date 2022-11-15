import React from "react";

import Sidebar from "../../../components/Sidebar/Sidebar";

import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Detail from "./Detail";
import TenantPoints from "./TenantPoints";

import Modal from "../../../components/Modal/Modal";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9] h-screen">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Management Tenant" />
          <div className="flex flex-col gap-5 mx-6 mt-10">
            <Detail />
            <TenantPoints />
          </div>
          <Modal />
        </div>
      </div>
    </>
  );
};

export default index;
