import React from "react";

const WaktuOperasional = () => {
  return (
    <>
      <div className="w-full bg-white px-[20px] py-[10px] pb-2">
        <div className="py-[10px] flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.71 15.1798L12.61 13.3298C12.07 13.0098 11.63 12.2398 11.63 11.6098V7.50977"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-base font-bold text-[#D73737]">
            Waktu Operasional
          </h1>
        </div>
        <div className="px-[20px] py-[8px] flex justify-between items-center">
          <div>Jam Operasional</div>
          <div className="grid grid-cols-2 gap-2">
            <select className="select select-bordered w-[310px]">
              <option disabled selected>
                Jam Buka
              </option>
              <option>08.00</option>
              <option>09.00</option>
              <option>10.00</option>
              <option>11.00</option>
              <option>12.00</option>
              <option>13.00</option>
            </select>
            <select className="select select-bordered w-[310px]">
              <option disabled selected>
                Jam Tutup
              </option>
              <option>18.00</option>
              <option>19.00</option>
              <option>20.00</option>
              <option>21.00</option>
              <option>22.00</option>
              <option>23.00</option>
              <option>23.59</option>
            </select>
          </div>
        </div>
        <div className="px-[20px] py-[8px] flex justify-between items-center">
          <div>Hari Operasional</div>
          <div className="grid grid-cols-2 gap-2">
            <select className="select select-bordered w-[310px]">
              <option disabled selected>
                Hari Buka
              </option>
              <option>Senin</option>
              <option>Selasa</option>
              <option>Rabu</option>
              <option>Kamis</option>
              <option>Jumat</option>
              <option>Sabtu</option>
              <option>Minggu</option>
            </select>
            <select className="select select-bordered w-[310px]">
              <option disabled selected>
                Jam Tutup
              </option>
              <option>Senin</option>
              <option>Selasa</option>
              <option>Rabu</option>
              <option>Kamis</option>
              <option>Jumat</option>
              <option>Sabtu</option>
              <option>Minggu</option>
            </select>
          </div>
        </div>
        <div className="flex ml-[197px]">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span className="label-text ml-2">Buka Setiap Hari</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaktuOperasional;
