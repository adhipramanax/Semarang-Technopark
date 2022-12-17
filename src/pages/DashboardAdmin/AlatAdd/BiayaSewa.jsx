import React from "react";

import FormsDouble from "../../DashboardAdmin/AlatAdd/FormsDouble";

const BiayaSewa = () => {
  return (
    <>
      <div className="w-full bg-white px-[20px] py-[10px]">
        <div className="py-[10px] flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6V18"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-base font-bold text-[#D73737]">Biaya Sewa</h1>
        </div>
        <FormsDouble
          inputLabel1="Harian"
          inputForm1="Rp50.000,00"
          inputLabel2="Mingguan"
          inputForm2="Rp300.000,00"
        />
        <FormsDouble
          inputLabel1="Bulanan"
          inputForm1="Rp1.500.000,00"
          inputLabel2="Tahunan"
          inputForm2="Rp5.000.000,00"
        />
      </div>
    </>
  );
};

export default BiayaSewa;
