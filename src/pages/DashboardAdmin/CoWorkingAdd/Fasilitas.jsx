import React from "react";

const Fasilitas = () => {
  return (
    <>
      <div className="w-[888px] bg-white px-[20px] py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-base font-bold text-[#D73737]">Fasilitas</h1>
        </div>
        <table class="table-auto w-full">
          <thead className="flex gap-5  px-5 ">
            <tr className="w-1/2 flex justify-between items-center ">
              {/* <td> */}
              <td>Fasilitas</td>
              <td>
                <div>
                  <input
                    type="text"
                    placeholder="ex. Wi-Fi"
                    className="input input-bordered w-[215px]"
                  />
                </div>
              </td>
              {/* </td> */}
            </tr>
            <tr className="w-1/2 flex justify-between items-center py-2">
              <td>Fasilitas</td>
              <td>
                <div>
                  <input
                    type="text"
                    placeholder="ex. Wi-Fi"
                    className="input input-bordered w-[215px]"
                  />
                </div>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <button className="w-full my-3 btn border-[#D73737] bg-transparent text-[#D73737] hover:bg-red-300 hover:border-[#D73737]">
          Tambah Fasilitas
        </button>
      </div>
    </>
  );
};

export default Fasilitas;
