import React from "react";
import { Link } from "react-router-dom";

import edit from "../../assets/images/svg/edit-2.svg";
import add from "../../assets/images/svg/folder-add.svg";
import trash from "../../assets/images/svg/trash.svg";

const index = (props) => {
  const check = (userid, password, alamat, kapasitas, bidang, ketua, noseri, pemilik) => {
    if (userid !== undefined) {
      return (
        <>
          <td className="whitespace-pre-wrap">{userid}</td>
          <td className="whitespace-pre-wrap">{password}</td>
        </>
      );
    } else if (alamat !== undefined) {
      return (
        <>
          <td className="whitespace-pre-wrap">{alamat}</td>
          <td className="whitespace-pre-wrap">{kapasitas}</td>
          <td className="flex w-full h-full">
            <button className="bg-secondary rounded m-auto p-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.08984H20.5"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#FFFBFF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.7002H12.0045"
                  stroke="#FFFBFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 13.7002H8.30329"
                  stroke="#FFFBFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 16.7002H8.30329"
                  stroke="#FFFBFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </td>
        </>
      );
    } else if (bidang !== undefined) {
      return (
        <>
          <td>
            <div
              className={`bg-${bidang.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
            >
              {bidang.isi}
            </div>
          </td>
          <td className="whitespace-pre-wrap">{ketua}</td>
          <td className="flex w-full h-full">
            <button className="bg-info rounded m-auto p-1">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8008 7V17C21.8008 20 20.3008 22 16.8008 22H8.80078C5.30078 22 3.80078 20 3.80078 17V7C3.80078 4 5.30078 2 8.80078 2H16.8008C20.3008 2 21.8008 4 21.8008 7Z"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.3008 4.5V6.5C15.3008 7.6 16.2008 8.5 17.3008 8.5H19.3008"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.80078 13H12.8008"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.80078 17H16.8008"
                  stroke="#FFFBFF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </td>
        </>
      );
    } else if (noseri !== undefined) {
      return (
        <>
          <td>
            <div
              className={`bg-${noseri.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
            >
              {noseri.isi}
            </div>
          </td>
          <td className="whitespace-pre-wrap">{pemilik}</td>
          <td className="flex w-full h-full">
            <button className="bg-secondary rounded m-auto p-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.08984H20.5"
                  stroke="#FFFBFF"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#FFFBFF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.7002H12.0045"
                  stroke="#FFFBFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 13.7002H8.30329"
                  stroke="#FFFBFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 16.7002H8.30329"
                  stroke="#FFFBFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </td>
        </>
      );
    }
    return;
  };
  const statuss = (status) => {
    if (status !== undefined) {
      return (
        <>
          <td>
            <div
              className={`bg-${status.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
            >
              {status.isi}
            </div>
          </td>
        </>
      );
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <Link to={props.link}>
          <button className="btn bg-merah text-white capitalize p-3 flex items-center gap-2 border-0 hover:bg-red-700">
            {props.judul}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H16"
                stroke="#FFFBFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16V8"
                stroke="#FFFBFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#FFFBFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Link>
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
                {props.tHead.map((head) => {
                  return (
                    <th
                      className={`text-base ${head.width} font-medium tracking-tight text-neutral capitalize`}
                    >
                      {head.judul}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {props.tBody.map((body) => {
                return (
                  <tr>
                    <td className="whitespace-pre-wrap">{body.no}</td>
                    <td className="whitespace-pre-wrap">{body.judul}</td>
                    {check(
                      body.userid,
                      body.password,
                      body.alamat,
                      body.kapasitas,
                      body.bidang,
                      body.ketua,
                      body.noseri,
                      body.pemilik
                    )}
                    {statuss(body.status)}
                    <td>
                      <div className="flex gap-2 justify-center">
                        <button className="bg-[#6EBC14] rounded p-1">
                          <img src={edit} alt="icon" />
                        </button>
                        <button className="bg-[#5CB3E4] rounded p-1">
                          <img src={add} alt="icon" />
                        </button>
                        <button className="bg-[#E16868] rounded p-1">
                          <img src={trash} alt="icon" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-end mr-5 mt-5 gap-1">
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-merah border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
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
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-merah border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              1
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-merah border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              2
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-merah border-[1px] active w-7 rounded-tl-md rounded-br-md">
              3
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-merah border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              4
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-merah border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
              6
            </button>
            <button className="text-sm font-medium select-none h-7 cursor-pointer border-merah border-[1px] unactive w-7 rounded-tl-md rounded-br-md">
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

export default index;
