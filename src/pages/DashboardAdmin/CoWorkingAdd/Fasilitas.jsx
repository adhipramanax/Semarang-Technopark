import React from "react";

const Fasilitas = () => {
  return (
    <>
      <div className="w-[888px] bg-white px-[20px] py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-base font-bold">Fasilitas</h1>
        </div>
        <div className=" flex items-center justify-between px-5">
          <div>
            <h1>Fasilitas Umum</h1>
          </div>
          <div className="flex flex-col">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">Kamar Mandi</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">Kamar Mandi</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">Kamar Mandi</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">wifi</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">wifi</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">wifi</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">AC</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer ">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">AC</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text ml-2">AC</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fasilitas;
