import React from "react";
import inkubasi from "../../assets/images/inkubasi-hero.svg";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-10 flex flex-col justify-center items-center py-18 lg:flex lg:flex-row  lg:justify-center lg:items-center lg:py-16">
        <div className="w-1/2  lg:flex lg:justify-start">
          <img className="hidden lg:block lg:w-[70%]" src={inkubasi} alt="" />
        </div>
        <div className="lg:w-1/3 w-full">
          <p className="text-white font-bold text-4xl lg:text-5xl text-center py-10 leading-10 lg:px-0 lg:text-start lg:py-0 lg:h-full lg:leading-relaxed">
            Inkubasi Semarang Technopark
          </p>
          <img
            className="block lg:hidden lg:w-full w-[]"
            src={inkubasi}
            alt=""
          />
          <p className="text-white text-center py-8 px-3 lg:text-start lg:py-5 lg:px-0">
            Semarang Technopark memiliki berbagai program dan pengelolaan
            Inkubasi untuk menghasilkan berbagai terobosan inovasi
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
