import React from "react";
import logo from "../../assets/images/bappeda-logo.png";

const Created = () => {
  return (
    <>
      <div className="hidden lg:block pt-20">
        <p className="text-lg text-white font-semibold pb-3 text-center">
          Created by:
        </p>
        <div className=" bg-white rounded-2xl lg:w-[500px] h-[120px] p-[20px] lg:flex lg:justify-evenly lg:items-center">
          <img src={logo} alt="" />
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Created;
