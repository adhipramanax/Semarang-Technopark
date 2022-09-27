import React from "react";

const FormsDouble = (props) => {
  return (
    <>
      <div className="px-[20px] py-[8px] flex justify-between items-center">
        <div className="w-[100px] mr-[20px]">{props.inputLabel1}</div>
        <div>
          <input
            type="text"
            placeholder={props.inputForm1}
            className="input input-bordered w-[215px]"
          />
        </div>
        <div>{props.inputLabel2}</div>
        <div>
          <input
            type="text"
            placeholder={props.inputForm2}
            className="input input-bordered w-[215px]"
          />
        </div>
      </div>
    </>
  );
};

export default FormsDouble;
