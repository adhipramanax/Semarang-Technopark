import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import edit from '../../assets/images/svg/edit-2.svg';
import add from '../../assets/images/svg/folder-add.svg';
import trash from '../../assets/images/svg/trash.svg';

const index = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <Link to={props.link}>
          <button className="btn bg-stp-primary-600 text-white capitalize p-3 flex items-center gap-2 border-0 hover:bg-red-700">
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
              {props.tBody.map((body) => {
                return (
                  <tr>
                    <td className="whitespace-pre-wrap">{body.no}</td>
                    <td className="whitespace-pre-wrap">{body.judul}</td>
                    <td>
                      <div
                        className={`bg-${body.bidang.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
                      >
                        {body.bidang.isi}
                      </div>
                    </td>
                    <td className="whitespace-pre-wrap">{body.ketua}</td>
                    <td>
                      <div
                        className={`bg-${body.status.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
                      >
                        {body.status.isi}
                      </div>
                    </td>
                    <td className="flex w-full h-full">
                      <button className="bg-stp-info rounded m-auto p-1">
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
                    <td>
                      <div className="flex gap-2 justify-center">
                        <Link
                          to={body.aksi.detail}
                          className="bg-[#E0AF00] rounded p-1"
                        >
                          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33331 22H15.3333C20.3333 22 22.3333 20 22.3333 15V9C22.3333 4 20.3333 2 15.3333 2H9.33331C4.33331 2 2.33331 4 2.33331 9V15C2.33331 20 4.33331 22 9.33331 22Z" stroke="#FFFBFF" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.0833 9H8.58331" stroke="#FFFBFF" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.0833 15H8.58331" stroke="#FFFBFF" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </Link>
                      </div>
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

export default index;
