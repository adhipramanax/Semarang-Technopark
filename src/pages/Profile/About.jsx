import React from "react";

const Features = (props) => {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center items-center sm:w-1/3 lg:w-1/6">
        <div className="w-1/2 flex flex-col justify-center items-center sm:w-1/3 lg:w-full">
          <img src={props.img} alt="" />
          <h1 className="text-white text-center font-semibold text-4xl lg:text-5xl py-5 lg:w-1/3">
            {props.total}
          </h1>
          <h2 className="text-white text-base text-center">{props.name}</h2>
        </div>
      </div>
    </>
  );
};

export default Features;
