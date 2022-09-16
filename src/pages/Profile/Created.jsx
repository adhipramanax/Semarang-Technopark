import React from "react";

import bappeda from "../../assets/images/bappeda-logo.png";

const Created = () => {
  return (
    <>
      <div className="mt-20 hidden lg:block">
        <p className="text-lg text-center text-white font-semibold pb-3">
          Created by:
        </p>
        <div className=" bg-white rounded-3xl lg:w-[500px] h-[120px] p-[20px] flex justify-center">
          <img src={bappeda} alt="" />
          <img src={bappeda} alt="" />
        </div>
      </div>
    </>
  );
};

export default Created;
