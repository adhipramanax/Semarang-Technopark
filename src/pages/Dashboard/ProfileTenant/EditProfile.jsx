import React from "react";
import EditProfileTenant from "./EditProfileTenant";
import Sidebar from "../../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";

const EditProfile = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Profile Tenant" />

          <div className="flex flex-col gap-5 mx-6 mt-10">
            {/* <Detail />
            <DocPendukung />
            <Anggota /> */}
            <EditProfileTenant />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
