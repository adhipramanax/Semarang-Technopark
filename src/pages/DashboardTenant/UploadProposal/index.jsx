import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";

import { FaHeading } from "react-icons/fa";

import Steps from "../../../components/Steps";
// import TipTap from "../../../components/TipTap";
import Mantine from "../../../components/Mantine";

const index = () => {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Upload Proposal" />
          <div className="flex flex-col gap-5 mx-6 mt-20 h-screen">
            <div className="w-full bg-white py-5 px-3 font-medium text-base rounded flex justify-center">
              <Steps />
            </div>
            <div className="w-full bg-white py-5 px-5 font-medium text-base rounded">
              <h1 className="text-xl font-bold">Upload Proposal Bab I</h1>
              <div className="flex justify-center my-5">
                <Mantine />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default index;
