import React from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Management from './ManagementCWS'

const index = () => {
    return (
        <>
            <div className="flex bg-[#D9D9D9]">
                <Sidebar />
                <div className="w-full ml-64">
                    <NavbarDashboard judul="Management Working Space" />
                    <div className="flex flex-col gap-5 mx-6 mt-10">
                        <Management />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index