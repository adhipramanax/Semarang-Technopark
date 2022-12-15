import React from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";

const Index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Management Profile Talent" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            Hello
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default Index