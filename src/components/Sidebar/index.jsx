import React from "react";

import logo from "../../assets/images/st-logo.png";
import dashboard from "../../assets/images/svg/dashboard.svg";

const index = () => {
  const dash = [
    {
      title: "Dashboard",
      icon: (
        <svg
          className="w-6 h-6 transition text-gray-500 duration-75 group-hover:text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.04 6.82018L14.28 2.79018C12.71 1.69018 10.3 1.75018 8.78999 2.92018L3.77999 6.83018C2.77999 7.61018 1.98999 9.21018 1.98999 10.4702V17.3702C1.98999 19.9202 4.05999 22.0002 6.60999 22.0002H17.39C19.94 22.0002 22.01 19.9302 22.01 17.3802V10.6002C22.01 9.25018 21.14 7.59018 20.04 6.82018ZM12.75 18.0002C12.75 18.4102 12.41 18.7502 12 18.7502C11.59 18.7502 11.25 18.4102 11.25 18.0002V15.0002C11.25 14.5902 11.59 14.2502 12 14.2502C12.41 14.2502 12.75 14.5902 12.75 15.0002V18.0002Z" />
        </svg>
      ),
    },
    {
      title: "Proposal",
      icon: (
        <svg
          className="w-6 h-6 transition text-gray-500 duration-75 group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM13.75 14.94C13.75 14.99 13.75 15.05 13.75 15.1C13.73 15.24 13.67 15.37 13.57 15.49C13.56 15.5 13.54 15.52 13.53 15.53L11.53 17.53C11.38 17.68 11.19 17.75 11 17.75C10.81 17.75 10.62 17.68 10.47 17.53C10.18 17.24 10.18 16.76 10.47 16.47L11.19 15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H11.19L10.47 13.53C10.32 13.38 10.25 13.19 10.25 13C10.25 12.81 10.32 12.62 10.47 12.47C10.76 12.18 11.24 12.18 11.53 12.47L13.53 14.47C13.66 14.61 13.73 14.77 13.75 14.94Z" />
          <path d="M17.4301 8.80999C18.3801 8.81999 19.7001 8.81999 20.8301 8.81999C21.4001 8.81999 21.7001 8.14999 21.3001 7.74999C19.8601 6.29999 17.2801 3.68999 15.8001 2.20999C15.3901 1.79999 14.6801 2.07999 14.6801 2.64999V6.13999C14.6801 7.59999 15.9201 8.80999 17.4301 8.80999Z" />
        </svg>
      ),
    },
    {
      title: "Ativitas",
      icon: (
        <svg
          className="w-6 h-6 transition text-gray-500 duration-75 group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.26 9.96L14.95 12.94C14.66 13.31 14.25 13.55 13.78 13.6C13.31 13.66 12.85 13.53 12.48 13.24L10.65 11.8C10.58 11.74 10.5 11.74 10.46 11.75C10.42 11.75 10.35 11.77 10.29 11.85L7.91 14.94C7.76 15.13 7.54 15.23 7.32 15.23C7.16 15.23 7 15.18 6.86 15.07C6.53 14.82 6.47 14.35 6.72 14.02L9.1 10.93C9.39 10.56 9.8 10.32 10.27 10.26C10.73 10.2 11.2 10.33 11.57 10.62L13.4 12.06C13.47 12.12 13.54 12.12 13.59 12.11C13.63 12.11 13.7 12.09 13.76 12.01L16.07 9.03C16.32 8.7 16.8 8.64 17.12 8.9C17.45 9.17 17.51 9.64 17.26 9.96Z" />
        </svg>
      ),
    },
    {
      title: "Mentoring",
      icon: (
        <svg
          className="w-6 h-6 transition text-gray-500 duration-75 group-hover:text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M16.83 15.6402C17.5 15.2002 18.38 15.6802 18.38 16.4802V17.7702C18.38 19.0402 17.39 20.4002 16.2 20.8002L13.01 21.8602C12.45 22.0502 11.54 22.0502 10.99 21.8602L7.8 20.8002C6.6 20.4002 5.62 19.0402 5.62 17.7702V16.4702C5.62 15.6802 6.5 15.2002 7.16 15.6302L9.22 16.9702C10.01 17.5002 11.01 17.7602 12.01 17.7602C13.01 17.7602 14.01 17.5002 14.8 16.9702L16.83 15.6402Z" />
          <path d="M19.98 6.46L13.99 2.53C12.91 1.82 11.13 1.82 10.05 2.53L4.03002 6.46C2.10002 7.71 2.10002 10.54 4.03002 11.8L5.63002 12.84L10.05 15.72C11.13 16.43 12.91 16.43 13.99 15.72L18.38 12.84L19.75 11.94V15C19.75 15.41 20.09 15.75 20.5 15.75C20.91 15.75 21.25 15.41 21.25 15V10.08C21.65 8.79 21.24 7.29 19.98 6.46Z" />
        </svg>
      ),
    },
    {
      title: "Profile Tenant",
      icon: (
        <svg
          className="w-6 h-6 transition text-gray-500 duration-75 group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" />
          <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" />
          <path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" />
          <path d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <aside class="w-64 h-screen bg-white" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3   ">
          <div className="flex justify-center py-5">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col justify-between">
            {/* <div> */}
            <ul class="space-y-2">
              {dash.map((data) => {
                return (
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#CD0606] group hover:text-white"
                    >
                      {data.icon}

                      <span class="ml-3">{data.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* </div> */}
          </div>
        </div>
      </aside>
    </>
  );
};

export default index;
