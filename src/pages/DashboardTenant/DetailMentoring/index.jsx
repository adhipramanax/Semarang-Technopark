import React from 'react'

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Link } from 'react-router-dom';

import Jumbotron from '../../../assets/images/img-mentoring.png'
import Deskripsi from './Deskripsi';
import WaktuLokasi from './WaktuLokasi';
import Mentor from './Mentor';
import Penugasan from './Penugasan';
import PenugasanKosong from './PenugasanKosong';
import BelumPresensi from './BelumPresensi';

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Detail Mentoring" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <div className="w-full bg-white py-5 px-3 font-medium text-base rounded">
              <h1 className="flex gap-2">
                <Link to="/tenant/mentoring" className="flex gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#1C1B1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Detail Mentoring
                </Link>
              </h1>
            </div>
            <div className="w-full h-60">
              <img src={Jumbotron} alt="Jumbotron" />
            </div>
            <h1 className="text-merah font-bold text-2xl">Mentoring Management Sumber Daya Perusahaan</h1>
            <Deskripsi />
            <WaktuLokasi />
            <Mentor />
            <BelumPresensi />
            <Penugasan />
            {/* <PenugasanKosong /> */}
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default index