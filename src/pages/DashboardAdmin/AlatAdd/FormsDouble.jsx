import React from "react";

const FormsDouble = (props) => {
  return (
    <>
      <table class="table-auto w-full">
        <thead className="flex gap-5  px-5 ">
          <tr className="w-1/2 flex justify-between items-center ">
            {/* <td> */}
            <td>{props.inputLabel1}</td>
            <td>
              <div>
                <input
                  type="text"
                  placeholder={props.inputForm1}
                  className="input input-bordered w-[215px]"
                />
              </div>
            </td>
            {/* </td> */}
          </tr>
          <tr className="w-1/2 flex justify-between items-center py-2">
            <td>{props.inputLabel2}</td>
            <td>
              <div>
                <input
                  type="text"
                  placeholder={props.inputForm2}
                  className="input input-bordered w-[215px]"
                />
              </div>
            </td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      {/* <div className="px-[20px] py-[8px] flex justify-between items-center">
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
      </div> */}
    </>
  );
};

export default FormsDouble;
