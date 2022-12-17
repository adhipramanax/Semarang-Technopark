import React from "react";
import { Link } from "react-router-dom";

const DetailTenant = () => {
  const data = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0001 13.4H13.8001C11.4001 13.4 10.6001 12.6 10.6001 10.2V7L17.0001 13.4Z"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6001 2H15.6001"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 5C7 3.34 8.34 2 10 2H12.62"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      judul: "Judul Proposal",
      ket: "Esteh Kulino, Solusi terbaik minum esteh saat pandemi",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8 2V5"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 2V5"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 9.09H20.5"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            stroke="#D73737"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9955 13.7H12.0045"
            stroke="#D73737"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.29431 13.7H8.30329"
            stroke="#D73737"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.29431 16.7H8.30329"
            stroke="#D73737"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      judul: "Waktu Upload",
      ket: "18 Desember 2022",
    },

    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.4399 19.05L15.9599 20.57L18.9999 17.53"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.4501 10.79 7.5601 8.84 7.5601 6.44C7.5501 3.99 9.5401 2 11.9901 2C14.4401 2 16.4301 3.99 16.4301 6.44C16.4301 8.84 14.5301 10.79 12.1601 10.87Z"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.99 21.81C10.17 21.81 8.36004 21.35 6.98004 20.43C4.56004 18.81 4.56004 16.17 6.98004 14.56C9.73004 12.72 14.24 12.72 16.99 14.56"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      judul: "Ketua Kelompok",
      ket: "Cecep Bagus",
    },
  ];
  return (
    <div className="w-full">
      <div className="bg-white p-5 flex items-center gap-8">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">Esteh Kulino</h1>
          <h5 className="text-sm">Bergabung pada 12 Maret 2023</h5>
        </div>
        <div>
          <div className="w-40 text-center flex flex-col gap-2">
            <div className="bg-[#F0B2B2] py-1 rounded text-[#A40505]">
              Calon Tenant
            </div>
            <div className="bg-[#F9CFA3] py-1 rounded text-[#90500F]">
              Food Start Up
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="table w-full">
          <tbody>
            {data.map((d) => {
              return (
                <tr>
                  <td className="w-1/4">
                    <div className="flex gap-2 font-bold">
                      {d.svg}
                      {d.judul}
                    </div>
                  </td>
                  <td>{d.ket}</td>
                </tr>
              );
            })}
            <tr>
              <td className="w-1/4">
                <div className="flex gap-2 font-bold">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                      stroke="#CD0606"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                      stroke="#CD0606"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 13H12"
                      stroke="#CD0606"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 17H16"
                      stroke="#CD0606"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h1>Proposal</h1>
                </div>
              </td>
              <td>
                {" "}
                <button className="text-red-600 border-2 rounded-lg border-red-600 px-4 py-2 hover:border-red-400 hover:text-red-400">
                  Lihat Proposal
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailTenant;
