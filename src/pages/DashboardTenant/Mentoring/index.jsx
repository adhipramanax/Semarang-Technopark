import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import RiwayatMentoring from "./RiwayatMentoring";
import UpcomingMentoring from "./UpcomingMentoring";

const Index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Management Mentoring" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <UpcomingMentoring />
            <RiwayatMentoring />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
