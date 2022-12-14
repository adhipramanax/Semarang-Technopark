import React from "react";
import inkubasi from "../../assets/images/inkubasi-hero.svg";

const Hero = () => {
  return (
    <>
      <div className="h-full container my-auto mx-auto px-10 flex flex-col justify-center items-center py-1 lg:flex lg:flex-row  lg:justify-center lg:items-center lg:py-16">
        <div className="w-1/2  lg:flex lg:justify-start">
          <img className="hidden lg:block lg:w-[70%]" src={inkubasi} alt="" />
        </div>
        <div className="lg:w-1/3 w-full flex flex-col justify-center items-center  lg:items-start">
          <p className="w-2/3 sm:w-full text-white font-bold text-3xl lg:text-5xl text-center mt-8 py-8 leading-10 lg:px-0 lg:text-start lg:py-0 lg:h-full lg:leading-relaxed">
            Inkubasi Semarang Technopark
          </p>
          <img className="block lg:hidden lg:w-full w-[246px]" src={inkubasi} alt="" />
          <p className="text-white text-center py-5 px-3 lg:text-start lg:py-5 lg:px-0">
            Semarang Technopark memiliki berbagai program dan pengelolaan Inkubasi untuk
            menghasilkan berbagai terobosan inovasi
          </p>
          <button className="bg-white text-[#CD0606] text-center py-2 px-10 rounded-xl mb-8">
            Daftar Program
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
