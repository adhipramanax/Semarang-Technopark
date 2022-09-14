import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "./Button";
import Created from "./Created";

const Hero = () => {
  return (
    <>
      <div className="relative bg-[url('https://res.cloudinary.com/dna8dexwi/image/upload/v1662981768/semarang-technopark/bg-profile_ywzpvs.png')] h-screen bg-no-repeat-x bg-cover bg-center">
        <Navbar auth="/register" title="Register" />
        <img
          className="absolute w-[25%] z-0 translate-y-[80%] lg:translate-y-24 md:translate-y-24 sm:translate-y-36"
          src="https://res.cloudinary.com/dna8dexwi/image/upload/v1663010927/semarang-technopark/side_fgroeh.png"
          alt=""
        />
        <img
          className="absolute w-[25%] z-0 translate-y-[80%] lg:translate-y-24 right-0 md:translate-y-24 sm:translate-y-36"
          src="https://res.cloudinary.com/dna8dexwi/image/upload/v1663012615/semarang-technopark/right_rx8ogg.png"
          alt=""
        />
        <div className="h-[90vh] flex flex-col justify-center items-center z-40">
          <h1 className="z-50 text-center text-4xl text-white font-bold leading-relaxed mb-2 lg:text-6xl">
            Semarang Technopark
          </h1>
          <p className="z-50 text-center text-white sm:w-[500px] lg:w-[680px]">
            Semarang Technopark memiliki berbagai program dan pengelolaan
            Inkubasi untuk menghasilkan berbagai terobosan inovasi
          </p>
          <br />
          <Button />
          <div className="flex flex-col justify-center items-center">
            <Created />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
