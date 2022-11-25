import React from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import UpcomingPelatihan from './UpComingPelatihan';
import RiwayatPelatihan from './RiwayatPelatihan';

const Index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Management Pelatihan" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <UpcomingPelatihan />
            <RiwayatPelatihan />
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default Index