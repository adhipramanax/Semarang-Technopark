import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Detail from "./Detail";
import DocPendukung from "./DocPendukung";
import Anggota from "./Anggota";
import EditProfile from "./EditProfileTenant";

const ProfileTenant = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full side">
          <NavbarDashboard judul="Profile Tenant" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <Detail />
            <DocPendukung />
            <Anggota />
            {/* <EditProfile />  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTenant;
