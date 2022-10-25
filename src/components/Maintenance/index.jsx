import React from "react";

import img from "../../assets/images/aktivitas.png";

const index = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-full p-48">
        <img src={img} alt="error image" />
        <p className="text-4xl font-semibold">Sorry, Maintetenance In Progres</p>
      </div>
    </>
  );
};

export default index;
