import React, { useState, useContext } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import layanan1 from "../../../assets/images/layanan1.png";
import layanan2 from "../../../assets/images/layanan2.png";
import layanan3 from "../../../assets/images/layanan3.png";
import layanan4 from "../../../assets/images/layanan4.png";
import BtnNavbar from "./BtnNavbar";
import userContext from "../../../context/userContext";
import { BiChevronDown } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Index = (props) => {
  const { user } = useContext(userContext);
  // const user = {
  //   name: 'Verdian Galang',
  // };
  const navigate = useNavigate();
  const [isChangeNavColor, setIsChangeNavColor] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isCollapseNav, setIsCollapseNav] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setIsChangeNavColor(true);
    } else {
      setIsChangeNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className="w-full relative">
      {/* navbar */}
      <div
        className={`pb-4 px-9 md:px-16 fixed top-0 inset-x-0 w-full z-50 transition-all-200 ${
          isChangeNavColor
            ? "bg-stp-primary-500 pt-4"
            : "bg-transparent pt-6 xsm:pt-9"
        }`}
      >
        <div className="max-w-[90remx] mx-auto flex justify-between items-center w-full">
          <NavLink
            to="/"
            className="block text-white font-bold text-lg w-28 xsm:w-auto leading-tight"
          >
            Semarang Technopark
          </NavLink>
          <div id="navbar-default">
            <div className="flex gap-5 xsm:gap-8 items-center">
              <NavLink to="/" className="nav-link-list hidden 2md:block">
                Home
              </NavLink>
              <NavLink to="/profile" className="nav-link-list hidden 2md:block">
                Profile
              </NavLink>
              <div className="dropdown dropdown-hover dropdown-end hidden 2md:block">
                <label
                  tabIndex={0}
                  className="nav-link-list flex items-center gap-1 cursor-pointer"
                >
                  Layanan
                  <BiChevronDown className="fill-white text-2xl transition-all-200" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-3 shadow bg-white rounded-xl w-[400px] grid grid-cols-2 gap-3 top-12"
                >
                  <li className="col-span-1">
                    <button
                      onClick={() => navigate("/inkubasi")}
                      className="btn btn-ghost bg-gray-200/50 focus:text-black flex items-center h-full !p-3 !justify-start flex-nowrap"
                      type="button"
                    >
                      <img className="w-9 block" src={layanan1} alt="layanan" />
                      <span className="block text-left">Inkubasi STP</span>
                    </button>
                  </li>
                  <li className="col-span-1">
                    <button
                      onClick={() => navigate("/sewa-alat")}
                      className="btn btn-ghost bg-gray-200/50 focus:text-black flex items-center h-full !p-3 !justify-start flex-nowrap"
                      type="button"
                    >
                      <img className="w-9 block" src={layanan2} alt="layanan" />
                      <span className="block text-left">Sewa Alat</span>
                    </button>
                  </li>
                  <li className="col-span-1">
                    <button
                      onClick={() => navigate("/co-working")}
                      className="btn btn-ghost bg-gray-200/50 focus:text-black flex items-center h-full !p-3 !justify-start flex-nowrap"
                      type="button"
                    >
                      <img className="w-9 block" src={layanan3} alt="layanan" />
                      <span className="block text-left">Co-Working Space</span>
                    </button>
                  </li>
                  <li className="disabled">
                    <button
                      onClick={() => navigate("/")}
                      className="btn btn-ghost !bg-white focus:text-black flex items-center h-full !p-3 !justify-start flex-nowrap !cursor-not-allowed"
                      type="button"
                      disabled
                    >
                      <img className="w-9 block" src={layanan4} alt="layanan" />
                      <span className="block text-left">Event & Pelatihan</span>
                    </button>
                  </li>
                </ul>
              </div>
              <NavLink to="/" className="nav-link-list hidden 2md:block">
                Partners
              </NavLink>

              {user !== null ? (
                <BtnNavbar />
              ) : (
                <button
                  onClick={() => navigate(props.auth)}
                  className="text-stp-primary-500 hover:text-white text-sm xsm:text-base bg-white hover:bg-stp-secondary focus:ring-4 focus:ring-red-300 font-semibold rounded-full focus:outline-none py-1 xsm:py-2 px-4 xsm:px-6 transition-200"
                >
                  {props.title}
                </button>
              )}
              {/* toggle menu navbar mobile */}
              <div className="block 2md:hidden">
                <button
                  id="hamburger"
                  className="flex flex-col justify-center align-center gap-3px"
                  type="button"
                  onClick={() => setIsOpenNav(!isOpenNav)}
                >
                  <span className="w-5 h-2px bg-white"></span>
                  <span className="w-5 h-2px bg-white"></span>
                  <span className="w-5 h-2px bg-white"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* black screen */}
      {isOpenNav && (
        <div
          className="h-screen w-screen bg-black/50 fixed top-0 inset-x-0 z-[200] transition-all-300 2md:hidden"
          onClick={() => setIsOpenNav(!isOpenNav)}
        />
      )}

      {/* navbar mobile */}
      <div className="2md:hidden">
        <div
          className={`z-[250] bg-white fixed top-0 right-0 h-screen w-80 transition-transform duration-300 ease-in-out p-7 ${
            isOpenNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between mb-6">
            <h1 className="text-stp-primary-500">Semarang Technopark</h1>
            <button onClick={() => setIsOpenNav(!isOpenNav)} type="button">
              <MdClose className="text-2xl" />
            </button>
          </div>
          <ul className="block">
            <li className="mb-0">
              <Link
                to="/"
                className="text-black hover:text-red-600 font-semibold uppercase text-sm block py-4 border-b border-black/70 truncate"
              >
                Home
              </Link>
            </li>
            <li className="mb-0">
              <Link
                to="/profile"
                className="text-black hover:text-red-600 font-semibold uppercase text-sm block py-4 border-b border-black/70 truncate"
              >
                Profile
              </Link>
            </li>
            <li className="mb-0 overflow-hidden" data-collapsed="false">
              <div
                className="text-black hover:text-red-600 font-semibold uppercase text-sm py-4 border-b border-black/70 cursor-pointer mb-2 flex items-center justify-between truncate"
                onClick={() => setIsCollapseNav(!isCollapseNav)}
              >
                Layanan
                <BiChevronDown
                  className={`text-2xl transition-all-300 ${
                    isCollapseNav ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <ul
                className={`transition-all-300 flex flex-col ${
                  isCollapseNav ? "max-h-96" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    to="/inkubasi"
                    className="hover:text-red-600 py-2 px-3 flex items-center gap-2 bg-white hover:bg-gray-200 nav-mobile-link"
                  >
                    <img
                      src={layanan1}
                      alt="inkubasi-stp-link"
                      className="w-6"
                    />
                    <span className="text-black hover:text-red-600 font-semibold uppercase text-sm block py-2 truncate">
                      Inkubasi STP
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sewa-alat"
                    className="hover:text-red-600 py-2 px-3 flex items-center gap-2 bg-white hover:bg-gray-200 nav-mobile-link"
                  >
                    <img
                      src={layanan2}
                      alt="sewa-alat-stp-link"
                      className="w-6"
                    />
                    <span className="text-black hover:text-red-600 font-semibold uppercase text-sm block py-2 truncate">
                      Sewa Alat
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/co-working"
                    className="hover:text-red-600 py-2 px-3 flex items-center gap-2 bg-white hover:bg-gray-200 nav-mobile-link"
                  >
                    <img
                      src={layanan3}
                      alt="co-working-space-stp-link"
                      className="w-6"
                    />
                    <span className="text-black hover:text-red-600 font-semibold uppercase text-sm block py-2 truncate">
                      Co-Working Space
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pelatihan"
                    className="hover:text-red-600 py-2 px-3 flex items-center gap-2 bg-white hover:bg-gray-200 nav-mobile-link"
                  >
                    <img
                      src={layanan2}
                      alt="event-pelatihan-stp-link"
                      className="w-6"
                    />
                    <span className="text-black hover:text-red-600 font-semibold uppercase text-sm block py-2 truncate">
                      Event & Pelatihan
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-0">
              <Link
                to="/profile"
                className="text-black hover:text-red-600 font-semibold uppercase text-sm block py-4 border-b border-black/70 truncate"
              >
                Partner
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
