import React from "react";
import logo from "../../assets/images/bappeda-logo.png";

const Hero = () => {
  return (
    <>
      <div className="container h-full mx-auto w-full pt-2 flex flex-col justify-center items-center">
        <img
          className="absolute w-[100px] sm:w-[150px] md:w-[200px] lg:w-[220px] xl:w-[320px] -left-3 lg:left-0 top-40 lg:top-[280px] z-0 md:top-44 xl:top-56"
          src="https://res.cloudinary.com/dna8dexwi/image/upload/v1663010927/semarang-technopark/side_fgroeh.png"
          alt=""
        />
        <img
          className="absolute w-[90px] sm:w-[130px] md:w-[160px] lg:w-[220px] xl:w-[300px] right-0 top-[165px] z-0 md:top-48 lg:top-[280px] xl:top-52"
          src="https://res.cloudinary.com/dna8dexwi/image/upload/v1663012615/semarang-technopark/right_rx8ogg.png"
          alt=""
        />
        <div className="absolute mt-10 h-full flex flex-col justify-center items-center ">
          <h1 className="w-2/3 md:w-full lg:w-full text-white font-bold text-3xl lg:text-[64px] text-center leading-[48px]">
            Semarang Technopark
          </h1>
          <p className="w-[290px] md:w-[520px] lg:w-[720px] text-white text-[0.7em] lg:text-base text-center my-5 lg:my-10">
            Semarang Technopark memiliki berbagai program dan pengelolaan
            Inkubasi untuk menghasilkan berbagai terobosan inovasi
          </p>
          <a
            href="#about"
            className="btn bg-white rounded-xl text-[#CD0606] hover:bg-white mt-[10px] px-[34px] font-semibold border-none"
          >
            About
          </a>
          <div className="hidden lg:block pt-20">
            <p className="text-lg text-white font-semibold pb-3 text-center">
              Created by:
            </p>
            <div className=" bg-white rounded-2xl h-[120px] p-[20px] lg:flex lg:justify-evenly lg:items-center">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
