import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <>
      <div className="w-full bg-white  rounded ">
        <div className="flex justify-between items-center p-5">
          <div className="flex gap-8 ">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h1>Esteh Kulino</h1>
              <p>Bergabung pada 12 Maret 2023</p>
            </div>
            <div className="w-[150px] text-center">
              <div className="bg-[#F0B2B2] mb-2 rounded py-2 text-[#A40505]">
                Calon Tenant
              </div>
              <div className="bg-[#F9CFA3] rounded py-2 text-[#90500F]">
                Food Start Up
              </div>
            </div>
          </div>
          <Link
            to="/tenant/edit-profile-tenant"
            className="flex bg-[#CD0606] p-3 gap-2 rounded text-white "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2599 3.6L5.04985 12.29C4.73985 12.62 4.43985 13.27 4.37985 13.72L4.00985 16.96C3.87985 18.13 4.71985 18.93 5.87985 18.73L9.09985 18.18C9.54985 18.1 10.1799 17.77 10.4899 17.43L18.6999 8.74C20.1199 7.24 20.7599 5.53 18.5499 3.44C16.3499 1.37 14.6799 2.1 13.2599 3.6Z"
                stroke="#FFFBFF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.8901 5.04999C12.3201 7.80999 14.5601 9.91999 17.3401 10.2"
                stroke="#FFFBFF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 22H21"
                stroke="#FFFBFF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Edit Profile
          </Link>
        </div>
        {/* desc */}
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
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
                          d="M12 18V15"
                          stroke="#1C1B1E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.07 2.82009L3.14002 8.37009C2.36002 8.99009 1.86002 10.3001 2.03002 11.2801L3.36002 19.2401C3.60002 20.6601 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z"
                          stroke="#1C1B1E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Alamat Perusahaan
                    </div>
                  </td>
                  <td>Jl. Cendrawasih no 23B, Semarang, Jawa Tengah</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex gap-2 font-bold">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                          stroke="#313033"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                          stroke="#313033"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      E-mail Perusahaan
                    </div>
                  </td>
                  <td>kulinoesth@mail.com</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex gap-2 font-bold">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                          stroke="#313033"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        />
                      </svg>
                      Nomor Perusahaan
                    </div>
                  </td>
                  <td>089787654543</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
