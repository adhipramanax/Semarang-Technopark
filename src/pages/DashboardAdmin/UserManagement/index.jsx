import React from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Maintenance from '../../../components/Maintenance'
import ManagementTenant from './ManagementTenant'
import ManagementMentor from './ManagementMentor'
import ManagementJuri from './ManagementJuri'
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [value, setValue] = useState("Tenant")
  let isi
  const cekTable = (e) => {
    setValue(e.target.value)
  }
  
  // const table = 

  if (value === "Tenant") {
    isi = (<ManagementTenant />)
  } else if (value === "Mentor") {
    isi = (<ManagementMentor />)
  } else if (value === "Juri") {
    isi = (<ManagementJuri/>)
  }

  // console.log(isi);
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <Sidebar />
        <Wrapper>
          <NavbarDashboard judul="Management User" />
          <div className="flex flex-col gap-5 mx-6 mt-20">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Link to="/">
                  <button className="btn bg-stp-primary-600 text-white capitalize p-3 flex items-center gap-2 border-0 hover:bg-red-700">
                    Tambah Mentor
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12H16"
                        stroke="#FFFBFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 16V8"
                        stroke="#FFFBFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#FFFBFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </Link>
                <Link to="/">
                  <button className="btn bg-stp-secondary text-white capitalize p-3 flex items-center gap-2 border-0 hover:bg-red-700">
                    Tambah Juri
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12H16"
                        stroke="#FFFBFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 16V8"
                        stroke="#FFFBFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#FFFBFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              <label class="relative block">
                <span class="sr-only">Search</span>
                <input
                  class="placeholder:italic placeholder:text-slate-400 block bg-white w-[371px] border border-slate-300 rounded-md py-3 pl-4 pr-12 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
                <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="#79767B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 22L20 20"
                      stroke="#79767B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <select onChange={cekTable} className="select select-bordered w-full max-w-xs">
              <option selected>Tenant</option>
              <option>Mentor</option>
              <option>Juri</option>
            </select>
            {isi}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
