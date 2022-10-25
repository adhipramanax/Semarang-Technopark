import React from "react";

const FormTextArea = (props) => {
  return (
    <>
      <div className="px-[20px] py-[8px] flex justify-between items-center">
        <div>{props.textAreaLabel}</div>
        <div>
          <textarea
            className="textarea textarea-bordered w-[628px] h-[110PX]"
            placeholder={props.textAreaInput}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default FormTextArea;
