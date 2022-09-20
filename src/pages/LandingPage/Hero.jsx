import React from "react";

import lp from "../../assets/images/lp.png";

const Hero = () => {
  return (
    <>
      <section id="hero" className="h-full relative">
        <div
          role="header-image"
          className="w-full md:justify-end md:flex lg:overflow-hidden lg:right-[0] lg:bottom-[-119px] absolute mt-[50px]"
        >
          <img
            className="lg:translate-x-[151px] lg:h-screen lg:object-contain  md:w-[500px] lg:w-[700px] xl:w-[1050px]"
            src={lp}
            alt="HERO"
          />
        </div>
        <div
          role="heading-left"
          className="lg:bottom-[50%] lg:translate-y-[50%] bottom-[30px] absolute lg:left-[108px] mx-[30px] max-w-[447px]  text-white"
        >
          <h1 className="lg:text-[4.19em] text-2xl lg:leading-normal font-bold">
            Semarang Technopark
          </h1>
          <p className="mt-[5px] mb-[15px]">
            Semarang Technopark memiliki berbagai program dan pengelolaan Inkubasi untuk
            menghasilkan berbagai terobosan inovasi
          </p>
          <button className="btn bg-white rounded-full text-[#CD0606] hover:bg-white mt-[10px] px-[34px]">
            Lihat Program
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
