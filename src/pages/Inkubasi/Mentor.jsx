import React from "react";

const Mentor = (props) => {
  return (
    <>
      <div className="w-1/3 lg:w-1/5">
        <img className="w-full" src={props.img} alt="" />
        <h1 className="text-center py-2 font-semibold text-sm lg:text-2xl">
          {props.name}
        </h1>
        <h2 className="text-center text-xs lg:text-base">{props.role}</h2>
      </div>
    </>
  );
};

export default Mentor;
