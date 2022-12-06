import React from "react";

const Booking = () => {
  return (
    <>
      <div className="w-full flex gap-5 bg-white p-5">
        <div className="w-1/6 rounded">
          <img className="w-full" src="https://placeimg.com/192/192/people" />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-xl">Inkubator Bisnis Center (IBC)</h1>
            <p className="mt-3">Jl. Raya Lamongan no 3-5, Sampangan</p>
          </div>
          <div className="flex justify-between">
            <div className="">
              <p>Durasi penyewaan</p>
              <div className=" bg-[#E16868] rounded text-center text-white items-center px-2 mt-3">
                12 Oktober - 17 Oktober 2022
              </div>
            </div>
            <div className="items-center text-center">
              <p>ID Pemesanan</p>
              <div className=" bg-[#338CCA] rounded text-center text-white items-center px-2 mt-3">
                ABCDESFGHIJKLM
              </div>
            </div>
            <div className="items-center text-center">
              <p>Status</p>
              <div className=" bg-[#6EBC14] rounded text-center text-white items-center px-2 mt-3">
                Aktif
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
