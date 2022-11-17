import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Management from "./ManagementCWS";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Management Working Space" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <Management />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default index;
