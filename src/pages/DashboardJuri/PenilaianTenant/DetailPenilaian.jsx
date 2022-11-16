import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

const DetailPenilaian = () => {
  const data = [
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.02 2.84001L3.63 7.04001C2.73 7.74001 2 9.23001 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29001 21.19 7.74001 20.2 7.05001L14.02 2.72001C12.62 1.74001 10.37 1.79001 9.02 2.84001Z"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9V18"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 13.5H16.5"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      judul: "Alamat Perusahaan",
      ket: "Jl. Cendrawasih no 23B, Semarang, Jawa Tengah",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      judul: "E-mail Perusahaan",
      ket: "kulinoesth@mail.com",
    },
    {
      svg: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z"
            stroke="#CD0606"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </svg>
      ),
      judul: "Nomor Perusahaan",
      ket: "089787654543",
    },

    {
      svg: (
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
      ),
      judul: "Ketua Kelompok",
      ket: "Cecep Bagus",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full h-16 bg-white p-5 flex gap-7 mb-3">
        <Link to="/">
          <svg
            width="9"
            height="18"
            viewBox="0 0 9 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16.92L1.48 10.4C0.709996 9.63 0.709996 8.37 1.48 7.6L8 1.08"
              stroke="#1C1B1E"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <h1>Co Working Detail</h1>
      </div>
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
                <div className="flex gap-2 font-bold">Proposal</div>
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

export default DetailPenilaian;
