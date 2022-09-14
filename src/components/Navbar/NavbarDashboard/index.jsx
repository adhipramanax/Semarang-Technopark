import React from "react";

import user from "../../../assets/images/user.png";

const index = () => {
  return (
    <>
      <div className="container ">
        <nav class="p-3 border-gray-200 dark:bg-gray-800 dark:border-gray-700 bg-white">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Dashboard
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="flex justify-center items-center  gap-5  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
              <img className="w-10" src={user} alt="user" />
              {/* batas */}
              <div class="dropdown dropdown-content dropdown-end  ">
                <label tabindex="0" class=" m-1 bg-transparent">
                  Verdian Galang
                </label>
                {/* <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div class="font-medium truncate">name@flowbite.com</div>
                </div> */}
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-5"
                >
                  <li className="border-solid">
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              {/* <span className="font-medium">Cecep Bagus</span> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default index;
