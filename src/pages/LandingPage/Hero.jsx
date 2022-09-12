import React from "react";

import lp from "../../assets/images/lp.png";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col justify-end lg:flex-row-reverse text-white">
          {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}
          <img src={lp} className="absolute right-[-100px]" alt="hero" />
          <div className="w-1/3">
            <h1 className="text-5xl font-bold">Semarang Technopark</h1>
            <p className="py-6">
              Semarang Technopark memiliki berbagai program dan pengelolaan Inkubasi untuk
              menghasilkan berbagai terobosan inovasi
            </p>
            <button className="btn text-[#CD0606] rounded-[16px] bg-white hover:text-white hover:bg-[#04A2FF]">
              Lihat Program{" "}
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
