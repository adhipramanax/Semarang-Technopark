import React from "react";

import office from "../../assets/images/office.svg";
import find from "../../assets/images/find.svg";

const Jumbotron = () => {
  return (
    <>
      <div className="container mx-auto">
        <section className="w-1/2 flex flex-col gap-5">
          <div className="flex gap-3">
            <img src={office} alt="office" />
            <h1 className="text-white text-6xl font-bold">Co-Working</h1>
          </div>
          <p className="text-white text-base">
            Ruang kerja baru dimana Semarang Tehcnopark menyediakan beberapa Co-Working Space.
          </p>
        </section>
        <div className="relative block w-96 py-5">
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
            placeholder="Cari Co-Working"
            className="block w-full py-3 pl-12 pr-3 text-gray-700 placeholder-gray-400 bg-white shadow rounded-lg dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
