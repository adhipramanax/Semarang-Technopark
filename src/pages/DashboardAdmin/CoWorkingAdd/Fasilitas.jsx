import React from "react";

const Fasilitas = () => {
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
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.69995 9.25977L11.9999 12.3298L17.2599 9.27976"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 17.7698V12.3198"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.76 6.28986L7.56 8.06986C6.84 8.46986 6.23999 9.47985 6.23999 10.3099V13.6999C6.23999 14.5299 6.83 15.5399 7.56 15.9399L10.76 17.7199C11.44 18.0999 12.56 18.0999 13.25 17.7199L16.45 15.9399C17.17 15.5399 17.77 14.5299 17.77 13.6999V10.2999C17.77 9.46986 17.18 8.45985 16.45 8.05985L13.25 6.27985C12.56 5.89985 11.44 5.89986 10.76 6.28986Z"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
