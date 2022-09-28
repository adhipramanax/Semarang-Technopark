import React from "react";

const Title = (props) => {
  return (
    <>
      <div className="w-[888px] h-[70px] bg-white px-[20px] py-[10px] flex flex-col justify-center text-xl font-medium">
        {props.title}
      </div>
    </>
  );
};

export default Title;
