import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import layanan1 from "../../../assets/images/layanan1.png";
import NavbarMobile from "./NavbarMobile";

const Index = (props) => {
  return (
    <>
      <nav class="bg-white border-gray-200 lg:px-2 sm:px-24 lg:py-2.5 rounded bg-transparent absolute top-0 w-full z-50">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" class="lg:flex items-center text-white text-lg hidden ">
            Semarang TechSnopark
          </Link>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="flex justify-center gap-5 items-center">
              <ul className="flex justify-center gap-5 items-center">
                <Link to="/" className="text-white ">
                  Home
                </Link>
                <Link to="/profile" className="text-white">
                  Profile
                </Link>
                <div className="dropdown dropdown-hover dropdown-end">
                  <label tabIndex={0} className=" text-white ">
                    Layanan
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[400px] flex flex-row flex-wrap "
                  >
                    <div className="flex">
                      <li>
                        <Link to="/inkubasi">
                          <img className="w-14" src={layanan1} alt="layanan" />
                          Inkubasi STP
                        </Link>
                      </li>
                      <li>
                        <Link to="/sewa-alat">
                          <img className="w-14" src={layanan1} alt="layanan" />
                          Sewa Alat
                        </Link>
                      </li>
                    </div>
                    <div className="flex">
                      <li>
                        <Link to="co-working">
                          <img className="w-14" src={layanan1} alt="layanan" />
                          Co-Working Space
                        </Link>
                      </li>
                      <li>
                        <Link to="/pelatihan">
                          <img className="w-14" src={layanan1} alt="layanan" />
                          Event & Pelatihan
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
                <Link to="/" className="text-white">
                  Partners
                </Link>
              </ul>
              <Link
                to={props.auth}
                class="focus:outline-none text-[#CD0606] bg-white hover:bg-[#F08619] focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm py-3 px-6  hover:text-white"
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
