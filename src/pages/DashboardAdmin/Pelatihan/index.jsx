import React from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import DaftarPelatihan from './DaftarPelatihan';

const Index = () => {
    return (
        <div className="flex bg-[#F9F9F9]">
            <Sidebar />
            <div className="w-full ml-64">
                <NavbarDashboard judul="Management Juri" />
                <div className="flex flex-col gap-5 mx-6 mt-20">
                    <DaftarPelatihan judul="Tambah Pelatihan" link="/" />
                </div>
            </div>
        </div>
    )
}

export default Index