import React from 'react';
import { Link } from 'react-router-dom';

const ManagementTenant = () => {
  const tHead = [
    {
      judul: 'No',
      width: 'w-auto',
    },
    {
      judul: 'Nama Tenant',
      width: 'w-1/2',
    },
    {
      judul: 'Bidang',
      width: 'w-1/12',
    },
    {
      judul: 'Ketua',
      width: 'w-1/2',
    },
    {
      judul: 'Status Penilaian',
      width: 'w-1/12',
    },
    {
      judul: 'Detail',
      width: 'w-1/2',
    },
  ];

  const tBody = [
    {
      no: 1,
      NamaTenant: 'IBC Semarang',
      bidang: {
        isi: 'Food',
        warna: 'success',
      },
      ketua: 'Brahmasta Bagus Aryandra',
      StatusPenilaian: {
        isi: 'Sudah',
        warna: 'success',
      },
    },
    {
      no: 1,
      NamaTenant: 'IBC Semarang',
      bidang: {
        isi: 'Food',
        warna: 'success',
      },
      ketua: 'Brahmasta Bagus Aryandra',
      StatusPenilaian: {
        isi: 'Sudah',
        warna: 'success',
      },
    },
    {
      no: 1,
      NamaTenant: 'IBC Semarang',
      bidang: {
        isi: 'Food',
        warna: 'success',
      },
      ketua: 'Brahmasta Bagus Aryandra',
      StatusPenilaian: {
        isi: 'Sudah',
        warna: 'success',
      },
    },
    {
      no: 1,
      NamaTenant: 'IBC Semarang',
      bidang: {
        isi: 'Food',
        warna: 'success',
      },
      ketua: 'Brahmasta Bagus Aryandra',
      StatusPenilaian: {
        isi: 'Sudah',
        warna: 'success',
      },
    },
    {
      no: 1,
      NamaTenant: 'IBC Semarang',
      bidang: {
        isi: 'Food',
        warna: 'success',
      },
      ketua: 'Brahmasta Bagus Aryandra',
      StatusPenilaian: {
        isi: 'Sudah',
        warna: 'success',
      },
    },
    {
      no: 1,
      NamaTenant: 'IBC Semarang',
      bidang: {
        isi: 'Food',
        warna: 'success',
      },
      ketua: 'Brahmasta Bagus Aryandra',
      StatusPenilaian: {
        isi: 'Sudah',
        warna: 'success',
      },
    },
    {
      no: 1,
      NamaTenant: 'IBC Semarang',
      bidang: {
        isi: 'Food',
        warna: 'success',
      },
      ketua: 'Brahmasta Bagus Aryandra',
      StatusPenilaian: {
        isi: 'Sudah',
        warna: 'success',
      },
    },
  ];

  return (
    <>
      <div className="flex justify-end">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-[371px] border border-slate-300 rounded-md py-3 pl-4 pr-12 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
          <span class="absolute inset-y-0 right-0 flex items-center pr-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#79767B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#79767B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </label>
      </div>
      <div className="w-full bg-white rounded">
        <div className="overflow-x-auto !bg-white">
          <table className="table table-zebra w-full text-center">
            <thead>
              <tr>
                {tHead.map((head) => {
                  return (
                    <>
                      <th
                        className={`text-base ${head.width} font-medium tracking-tight text-neutral capitalize`}
                      >
                        {head.judul}
                      </th>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tBody.map((body) => {
                return (
                  <tr>
                    <td className="whitespace-pre-wrap">{body.no}</td>
                    <td className="whitespace-pre-wrap">{body.NamaTenant}</td>
                    <td className="whitespace-pre-wrap">
                      <div
                        className={`bg-${body.bidang.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
                      >
                        {body.bidang.isi}
                      </div>
                    </td>
                    <td className="whitespace-pre-wrap">{body.ketua}</td>
                    <td className="whitespace-pre-wrap">
                      <div
                        className={`bg-${body.StatusPenilaian.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
                      >
                        {body.StatusPenilaian.isi}
                      </div>
                    </td>
                    <td>
                      <Link
                        to="/juri/penilaian-tenant"
                        className="flex justify-center"
                      >
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.75"
                            width="32"
                            height="32"
                            rx="2"
                            fill="#338CCA"
                          />
                          <path
                            d="M25.75 11V21C25.75 24 24.25 26 20.75 26H12.75C9.25 26 7.75 24 7.75 21V11C7.75 8 9.25 6 12.75 6H20.75C24.25 6 25.75 8 25.75 11Z"
                            stroke="#FFFBFF"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.25 8.5V10.5C19.25 11.6 20.15 12.5 21.25 12.5H23.25"
                            stroke="#FFFBFF"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.75 17H16.75"
                            stroke="#FFFBFF"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.75 21H20.75"
                            stroke="#FFFBFF"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-end mr-5 mt-5 gap-1">
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-stp-primary-600 border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              <svg
                className="m-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16667 14.1667L5 10L9.16667 5.83337"
                  stroke="#CD0606"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.9999 14.1667L10.8333 10L14.9999 5.83337"
                  stroke="#CD0606"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-stp-primary-600 border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              1
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-stp-primary-600 border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              2
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-stp-primary-600 border-[1px] active w-7 rounded-tl-md rounded-br-md">
              3
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-stp-primary-600 border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              4
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-stp-primary-600 border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              6
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-stp-primary-600 border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              <svg
                className="m-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8335 14.1667L15.0002 10L10.8335 5.83337"
                  stroke="#CD0606"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 14.1667L9.16667 10L5 5.83337"
                  stroke="#CD0606"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementTenant;
