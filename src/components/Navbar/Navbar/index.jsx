import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import layanan1 from "../../../assets/images/layanan1.png";
import NavbarMobile from "./NavbarMobile";

const Index = (props) => {
  return (
    <>
      <nav class="py-3 bg-white border-gray-200 lg:px-20 sm:px-24 lg:py-2.5 rounded bg-transparent absolute top-0 w-full z-50">
        <div class="container lg:flex lg:flex-wrap lg:justify-between lg:items-center  mx-auto">
          <Link
            to="/"
            class="lg:flex items-center w-[149px] lg:w-[230px] text-white font-bold px-5 sm:hidden"
          >
            Semarang Technopark
          </Link>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="flex justify-center gap-5 items-center md:">
              <ul className="flex justify-center gap-5 items-center">
                <Link to="/" className="text-white ">
                  Home
                </Link>
                <Link to="/profile" className="text-white">
                  Profile
                </Link>
                <div className="dropdown dropdown-hover dropdown-end">
                  <label tabIndex={0} className=" text-white flex  items-center gap-1">
                    Layanan
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100  rounded-box w-[400px] flex flex-row flex-wrap"
                  >
                    <div className="flex">
                      <li>
                        <Link
                          to="/inkubasi"
                          className="btn btn-ghost h-full bg-white focus:text-black"
                        >
                          <img className="w-14" src={layanan1} alt="layanan" />
                          Inkubasi STP
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sewa-alat"
                          className="btn btn-ghost h-full bg-white focus:text-black flex"
                        >
                          <img className="w-14" src={layanan1} alt="layanan" />
                          Sewa Alat
                        </Link>
                      </li>
                    </div>
                    <div className="flex">
                      <li>
                        <Link
                          to="/co-working"
                          className="btn btn-ghost  bg-white focus:text-black h-full flex justify-start"
                        >
                          <img className="w-14" src={layanan1} alt="layanan" />
                          <p className="w-1/3">Co-Working Space</p>
                        </Link>
                      </li>
                      <li className="disabled">
                        <Link to="" className="">
                          <img className="w-14 " src={layanan1} alt="layanan" />
                          Event & Pelatihan
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
                <Link to="/" className="text-white disabled">
                  Partners
                </Link>
              </ul>
              <Link
                to={props.auth}
                class="focus:outline-none text-[#CD0606] bg-white hover:bg-[#F08619] focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm py-[6px] px-6  hover:text-white"
              >
                {props.title}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <NavbarMobile />
    </>
  );
};

export default Index;
