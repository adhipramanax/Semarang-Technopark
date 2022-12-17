import React from "react";
import EditProfileTenant from "./EditProfileTenant";
import Sidebar from "../../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";

const Index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Profile Tenant" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <EditProfileTenant />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
