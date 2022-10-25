import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../components/Navbar/NavbarDashboard";
import SettingAkun from "../../components/SettingAkun";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Dashboard" />
          <div className="flex p-6 gap-6 mt-20">
            <SettingAkun />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
