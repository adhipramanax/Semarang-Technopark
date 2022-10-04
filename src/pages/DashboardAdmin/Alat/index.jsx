import React from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import ManagementAlat from './ManagementAlat'

const index = () => {
    return (
        <>
            <div className="flex bg-[#D9D9D9]">
                <Sidebar />
                <div className="w-full ml-64">
                    <NavbarDashboard judul="Management Alat" />
                    <div className="flex flex-col gap-5 mx-6 mt-10">
                        <ManagementAlat />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index