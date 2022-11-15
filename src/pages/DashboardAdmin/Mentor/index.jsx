import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import AkunMentor from "./AkunMentor";
import Wrapper from "../../../components/Wrapper/Wrapper";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          {/* <div className="w-full ml-64"> */}
            <NavbarDashboard judul="Management Mentor" />
            <div className="flex flex-col gap-5 mx-6 mt-20">
              <AkunMentor />
            </div>
          {/* </div> */}
        </Wrapper>
      </div>
    </>
  );
};

export default index;
