import React from "react";

import Forms from "../../DashboardAdmin/AlatAdd/Forms";
import FormTextArea from "./FormTextArea";

const informasiAlat = () => {
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
              d="M10.75 2.44982C11.45 1.85982 12.58 1.85982 13.26 2.44982L14.84 3.79982C15.14 4.04982 15.71 4.25982 16.11 4.25982H17.81C18.87 4.25982 19.74 5.12982 19.74 6.18982V7.88982C19.74 8.28982 19.95 8.84982 20.2 9.14982L21.55 10.7298C22.14 11.4298 22.14 12.5598 21.55 13.2398L20.2 14.8198C19.95 15.1198 19.74 15.6798 19.74 16.0798V17.7798C19.74 18.8398 18.87 19.7098 17.81 19.7098H16.11C15.71 19.7098 15.15 19.9198 14.85 20.1698L13.27 21.5198C12.57 22.1098 11.44 22.1098 10.76 21.5198L9.18001 20.1698C8.88001 19.9198 8.31 19.7098 7.92 19.7098H6.17C5.11 19.7098 4.24 18.8398 4.24 17.7798V16.0698C4.24 15.6798 4.04 15.1098 3.79 14.8198L2.44 13.2298C1.86 12.5398 1.86 11.4198 2.44 10.7298L3.79 9.13982C4.04 8.83982 4.24 8.27982 4.24 7.88982V6.19982C4.24 5.13982 5.11 4.26982 6.17 4.26982H7.9C8.3 4.26982 8.86 4.05982 9.16 3.80982L10.75 2.44982Z"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8.12988V12.9599"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9945 16H12.0035"
              stroke="#D73737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-base font-bold text-[#D73737]">
            Informasi Coworking
          </h1>
        </div>
        <Forms inputLabel="Nama Workspace" inputForm="Nama Workspace" />
        <FormTextArea textAreaLabel="Alamat" textAreaInput="Alamat" />
        <Forms inputLabel="Kapasitas" inputForm="Kapasitas" />
        <Forms inputLabel="Nomor Pengurus" inputForm="Nomor Pengurus" />
      </div>
    </>
  );
};

export default informasiAlat;
