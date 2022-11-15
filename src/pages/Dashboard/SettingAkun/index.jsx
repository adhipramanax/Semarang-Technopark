import React from "react";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <div className="w-full ml-64">
          <NavbarDashboard judul="Profile Tenant" />
          <div className="flex flex-col gap-5 mx-6 mt-10">
            <SettingAkun />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
