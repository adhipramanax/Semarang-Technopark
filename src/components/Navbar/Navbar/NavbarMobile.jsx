import React, { useRef, useEffect } from 'react';

import layanan1 from '../../../assets/images/layanan1.png';
import layanan2 from '../../../assets/images/layanan2.png';
import layanan3 from '../../../assets/images/layanan3.png';
import layanan4 from '../../../assets/images/layanan4.png';

import { Link } from 'react-router-dom';

const NavbarMobile = () => {
  const collapse = useRef();

  function collapseFunc() {
    if (this.getAttribute('data-collapsed') == 'false') {
      this.childNodes[1].setAttribute('style', 'max-height: 500px');
      this.childNodes[0].childNodes[1].setAttribute(
        'style',
        'transform: rotate(180deg)'
      );
      this.setAttribute('data-collapsed', 'true');
      return;
    }

    this.childNodes[1].setAttribute('style', 'max-height: 0');
    this.childNodes[0].childNodes[1].setAttribute(
      'style',
      'transform: rotate(0)'
    );
    this.setAttribute('data-collapsed', 'false');
  }

  function toggleShow() {
    const parent = this.closest('.parent-hamburger');

    if (parent.getAttribute('data-show') == 'false') {
      parent.childNodes[2].setAttribute('style', 'transform: translate(0)');
      parent.childNodes[0].setAttribute('style', 'visibility: visible');
      parent.setAttribute('data-show', 'true');
      return;
    }
    parent.childNodes[2].setAttribute('style', 'transform: translate(100%)');
    parent.childNodes[0].setAttribute('style', 'visibility: hidden');
    parent.setAttribute('data-show', 'false');
  }

  useEffect(() => {
    let el = collapse.current;
    el.addEventListener('click', collapseFunc);

    let buttons = document.querySelectorAll('.button-toggle');
    buttons.forEach(function (el) {
      el.addEventListener('click', toggleShow);
    });

    return () => {
      el.removeEventListener('click', collapseFunc);
      buttons.forEach(function (el) {
        el.removeEventListener('click', toggleShow);
      });
    };
  }, []);
  return (
    <>
      {/* Mobile */}
      <div
        id="mobile-nav"
        className="parent-hamburger md:hidden lg:hidden fixed h-full right-0 z-[500]"
        data-show="false"
      >
        <div className="h-[100vh] w-[100vw] bg-black opacity-[50%] absolute z-[501] translate-x-[-100%] invisible transition-all duration-300"></div>
        <button
          id="hamburger"
          className="button-toggle flex flex-col justify-center align-center gap-[3px] absolute right-[20px] top-[20px] z-[100]"
        >
          <span className="w-[20px] h-[2px] bg-white"></span>
          <span className="w-[20px] h-[2px] bg-white"></span>
          <span className="w-[20px] h-[2px] bg-white"></span>
        </button>
        <div
          id="sidebar"
          className="absolute h-full w-[337px] bg-white right-0 p-[28px] transition-all duration-300 translate-x-full z-[502]"
        >
          <div className="flex justify-between">
            <h1 className="text-[#CD0606] font-bold">Semarang Technopark</h1>
            <label className="button-toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <ul className="block mt-[20px] text-black">
            <li className="my-[10px]">
              <Link
                to="/"
                className="btn-ghost hover:text-red-600 block p-2"
              >
                Home
              </Link>
            </li>
            <li className="my-[10px]">
              <Link
                to="/profile"
                className="btn-ghost hover:text-red-600 block p-2"
              >
                Profile
              </Link>
            </li>
            <li
              className="my-[10px] overflow-hidden  "
              ref={collapse}
              data-collapsed="false"
            >
              <div className=" hover:text-red-600 flex justify-between p-2 ">
                Layanan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <ul className="max-h-[0] transition-all duration-300 flex flex-col gap-1">
                <li>
                  <Link
                    to="/inkubasi"
                    className="btn-ghost hover:text-red-600 pl-3 py-2 flex gap-2"
                  >
                    <img
                      src={layanan1}
                      alt="gambar"
                      className="w-1/12"
                    />
                    Inkubasi STP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sewa-alat"
                    className="btn-ghost hover:text-red-600 pl-3 py-2 flex gap-2"
                  >
                    <img
                      src={layanan2}
                      alt="gambar"
                      className="w-1/12"
                    />
                    Sewa Alat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/co-working"
                    className="btn-ghost hover:text-red-600 pl-3 py-2 flex gap-2"
                  >
                    <img
                      src={layanan3}
                      alt="gambar"
                      className="w-1/12"
                    />
                    Co-Working Space
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pelatihan"
                    className="btn-ghost hover:text-red-600 pl-3 py-2 flex gap-2 "
                  >
                    <img
                      src={layanan4}
                      alt="gambar"
                      className="w-1/12"
                    />
                    Event & Pelatihan
                  </Link>
                </li>
              </ul>
            </li>
            <li className="my-[10px]">
              <Link
                to="/profile"
                className="btn-ghost hover:text-red-600 block p-2"
              >
                Partner
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* end mobile */}
    </>
  );
};

export default NavbarMobile;
