import React from 'react'
import { Link } from 'react-router-dom';

const Index = (props) => {
  return (
    <>
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
                    <td className="whitespace-pre-wrap">{body.nama}</td>
                    <td>
                      <div
                        className={`bg-${body.role.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
                      >
                        {body.role.isi}
                      </div>
                    </td>
                    <td>
                      <div
                        className={`bg-${body.status.warna} rounded px-2 py-1 text-white text-center text-base font-normal`}
                      >
                        {body.status.isi}
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 justify-center">
                        <Link
                          to={body.aksi.hapus}
                          className="bg-[#E16868] rounded p-1"
                        >
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.667 5.97998C18.337 5.64998 14.987 5.47998 11.647 5.47998C9.66699 5.47998 7.68699 5.57998 5.70699 5.77998L3.66699 5.97998"
                              stroke="#FFFBFF"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.16699 4.97L9.38699 3.66C9.54699 2.71 9.66699 2 11.357 2H13.977C15.667 2 15.797 2.75 15.947 3.67L16.167 4.97"
                              stroke="#FFFBFF"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.5169 9.14001L18.8669 19.21C18.7569 20.78 18.6669 22 15.8769 22H9.45689C6.66689 22 6.57689 20.78 6.46689 19.21L5.81689 9.14001"
                              stroke="#FFFBFF"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.9971 16.5H14.3271"
                              stroke="#FFFBFF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.167 12.5H15.167"
                              stroke="#FFFBFF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Link>
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
                        <Link
                          to={body.aksi.edit}
                          className="bg-stp-info rounded p-1"
                        >
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.667 2H9.66699C4.66699 2 2.66699 4 2.66699 9V15C2.66699 20 4.66699 22 9.66699 22H15.667C20.667 22 22.667 20 22.667 15V13"
                              stroke="#FFFBFF"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M16.7069 3.02001L8.82687 10.9C8.52687 11.2 8.22687 11.79 8.16687 12.22L7.73687 15.23C7.57687 16.32 8.34687 17.08 9.43687 16.93L12.4469 16.5C12.8669 16.44 13.4569 16.14 13.7669 15.84L21.6469 7.96001C23.0069 6.60001 23.6469 5.02001 21.6469 3.02001C19.6469 1.02001 18.0669 1.66001 16.7069 3.02001Z"
                              stroke="#FFFBFF"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.5771 4.15002C16.2471 6.54002 18.1171 8.41002 20.5171 9.09002"
                              stroke="#FFFBFF"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
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
  )
}

export default Index