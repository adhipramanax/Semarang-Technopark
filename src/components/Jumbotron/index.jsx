import React from "react";

const index = () => {
  return (
    <>
      <div className="container mx-auto px-2 lg:px-24 sm:px-20 ">
        <div className="flex items-center justify-between flex-wrap px-2 h-[60vh] lg:h-[90vh]">
          <div className="block sm:hidden lg:hidden w-full ">
            <img className="w-full " src={props.hero} alt="jumbotron" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/2">
            <h1 className="text-[40px] sm:text-[34px] lg:text-[40px] xl:text-[55px] font-bold ">
              {props.title}
            </h1>
            <p className="text-[20px] lg:text-[22px] py-5 pb-8">{props.desc}</p>
            <a href={props.links}>
              {/* <button className="btn btn-error bg-[#CD0606] text-white w-36 rounded-full mt-6"> */}
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-4 mr-2 mb-2 flex justify-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-36 rounded-full mt-6"
              >
                {props.btnTitle}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </button>
            </a>
          </div>
          <div className="sm:w-1/2 lg:w-[40%] hidden sm:block lg:block ">
            <img className="w-full " src={props.hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
