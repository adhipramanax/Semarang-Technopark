import React from "react";

const EditProfile = () => {
  return (
    <>
      <div className="flex bg-[#D9D9D9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Profile Tenant" />

          <div className="flex flex-col gap-5 mx-6 mt-10">
            {/* <Detail />
            <DocPendukung />
            <Anggota /> */}
            <EditProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
