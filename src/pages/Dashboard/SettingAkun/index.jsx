import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import SettingAkun from '../../../components/SettingAkun/'
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Profile Tenant" />
          <div className="flex flex-col gap-5 mx-6 mt-10">
            <SettingAkun />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default index;
