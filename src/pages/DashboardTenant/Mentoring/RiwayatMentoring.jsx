import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";
import imgSample from "../../../assets/images/sample.png";

const RiwayatMentoring = () => {
  const data = [
    {
      judul: "Pelatihan Design Grafis",
    },
    {
      judul: "Management Keuangan",
    },
    {
      judul: "Management Sumber Daya Perusahaan",
    },
    {
      judul: "Pelatihan Design Grafis",
    },
    {
      judul: "Management Sumber Daya Perusahaan",
    },
    {
      judul: "Management Keuangan",
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Riwayat Mentoring</h1>
        <button className="text-[#D73737] text-base">Lihat Semua</button>
      </div>
      <div className="flex gap-6">
        {data.map((d) => {
          return (
            <Link
              to="/tenant/detail-mentoring"
              className="card w-56 bg-base-100 "
            >
              <figure className="px-3 pt-3 ">
                <img
                  src={imgSample}
                  alt="Shoes"
                  className=" h-44 object-cover rounded"
                />
              </figure>
              <div className="px-3 pt-2 text-left ">
                <div className="w-1/2 bg-[#6EBC14] rounded text-center text-white flex justify-center gap-1 items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00004 14.6666C11.6667 14.6666 14.6667 11.6666 14.6667 7.99992C14.6667 4.33325 11.6667 1.33325 8.00004 1.33325C4.33337 1.33325 1.33337 4.33325 1.33337 7.99992C1.33337 11.6666 4.33337 14.6666 8.00004 14.6666Z"
                      stroke="#FFFBFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.16663 7.99995L7.05329 9.88661L10.8333 6.11328"
                      stroke="#FFFBFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Passed
                </div>

                <h2 className="card-title text-base">{d.judul}</h2>
                <p className="text-xs">Cecep Bagus Suryadinata KA, S.Kom</p>
                <p className="text-xs py-6 text-[#D73737]">23 Oktober 2022</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RiwayatMentoring;
