import React from "react";

const Forms = (props) => {
  return (
    <>
      <div className="px-[20px] py-[8px] flex justify-between items-center">
        <div>{props.inputLabel}</div>
        <div>
          <input
            type="text"
            placeholder={props.inputForm}
            className="input input-bordered w-[628px]"
          />
        </div>
      </div>
    </>
  );
};

export default Forms;
