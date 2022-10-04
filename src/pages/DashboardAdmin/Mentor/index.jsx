import React from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import AkunMentor from './AkunMentor'

const index = () => {
  return (
      <>
          <div className="flex bg-[#D9D9D9]">
              <Sidebar />
              <div className="w-full ml-64">
                  <NavbarDashboard judul="Management Mentor" />
                  <div className="flex flex-col gap-5 mx-6 mt-10">
                      <AkunMentor />
                  </div>
              </div>
          </div>
      </>
  )
}

export default index