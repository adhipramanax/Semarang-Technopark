import React from "react";

const WaktuOperasional = () => {
  return (
    <>
      <div className="w-[888px] bg-white px-[20px] py-[10px] pb-2">
        <div className="py-[10px]">
          <h1 className="text-base font-bold">Waktu Operasional</h1>
        </div>
        <div className="px-[20px] py-[8px] flex justify-between items-center">
          <div>Jam Operasional</div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Jam Buka"
              className="input input-bordered w-[310px]"
            />
            <input
              type="text"
              placeholder="Jam Buka"
              className="input input-bordered w-[310px]"
            />
          </div>
        </div>
        <div className="px-[20px] py-[8px] flex justify-between items-center">
          <div>Hari Operasional</div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Hari Buka"
              className="input input-bordered w-[310px]"
            />
            <input
              type="text"
              placeholder="Hari Buka"
              className="input input-bordered w-[310px]"
            />
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
