import React from "react";

const Jumbotron = (props) => {
  return (
    <>
      <div className="h-[300px] w-screen flex flex-col justify-end">
        <div className="px-5 xl:px-[108px] mx-auto lg:mx-0 lg:px-24">
          <div className="flex gap-3">
            <img className="w-8 xl:w-11 lg:w-11" src={props.img} alt="office" />
            <h1 className="text-white text-4xl xl:text-6xl lg:text-5xl font-bold">{props.judul}</h1>
          </div>
          <p className="text-white text-sm xl:text-base lg:text-base mt-5">{props.desc}</p>
          <div className="relative block w-full py-5 mt-2 xl:mt-5 lg:mt-5">
            <span className="absolute top-8 left-0 flex items-center pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input
              type="text"
              name="cari"
              placeholder={`Cari ${props.judul}`}
              className="block w-full lg:w-1/2 xl:w-1/2 py-3 pl-12 pr-3 text-gray-700 placeholder-gray-400 marker: bg-white shadow rounded-lg dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
