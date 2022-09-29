import React from "react";

import ig from "../../assets/images/ig.svg";
import twiter from "../../assets/images/twiter.svg";
import fb from "../../assets/images/fb.svg";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="bg-[#2F3133]">
        <footer className="flex p-10 text-white container  mx-auto justify-between">
          <div className="lg:w-1/4">
            <span className="font-medium text-[24px] text-white">Semarang Technopark</span>
            <div>
              Semarang Technopark memiliki berbagai program dan pengelolaan Inkubasi untuk
              menghasilkan berbagai terobosan inovasi
            </div>
            <span className="flex gap-5 pt-4">
              <img src={ig} alt="instagram" />
              <img src={twiter} alt="twiter" />
              <img src={fb} alt="facebook" />
            </span>
          </div>
          <div className="w-1/5 lg:flex hidden flex-col ">
            <span className="font-medium text-[24px] text-white">Layanan</span>
            <a href="/inkubasi" className="link link-hover">
              Incubator Event
            </a>
            <a href="/co-working" className="link link-hover">
              Co-Working Space
            </a>
            <a href="/sewa-alat" className="link link-hover">
              Sewa Alat
            </a>
            <a href="/pelatihan" className="link link-hover">
              Pelatihan
            </a>
          </div>
          <div className="w-1/5 lg:flex hidden flex-col">
            <span className="font-medium text-[24px] text-white">Profil STP</span>
            <a href="/" className="link link-hover">
              Tentang
            </a>
            <a href="/" className="link link-hover">
              Visi & Misi Mentor
            </a>
            <a href="/" className="link link-hover">
              Mentor
            </a>
            <a href="/" className="link link-hover ">
              Partners
            </a>
          </div>
          <div className="w-1/4 lg:flex hidden flex-col">
            <span className="font-medium text-[24px] text-white">Call Us</span>
            <span className="flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Semarang, Indonesia
            </span>
            <span className="flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +25470000000
            </span>
            <span className="flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              semarangtechnopark@gmail.com
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default index;
