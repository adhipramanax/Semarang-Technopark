import React from "react";

const TentangInkubasi = (props) => {
  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box drop-shadow-lg py-1 px-3 my-3 lg:w-1/2 md:w-2/3 dark:bg-white"
      >
        <div className="collapse-title text-lg font-medium text-slate-600">{props.title}</div>
        <div className="collapse-content text-sm text-slate-600">{props.detail}</div>
      </div>
    </>
  );
};

export default TentangInkubasi;
