import React from "react";

const data = [
  {
    no: 1,
    nama: "Cak Mus Situmorang",
    point1: 86,
    point2: 76,
    point3: 80,
    point4: 70,
    point5: 69,
    point6: 89,
  },
  {
    no: 1,
    nama: "Cak Mus Situmorang",
    point1: 86,
    point2: 76,
    point3: 80,
    point4: 70,
    point5: 69,
    point6: 89,
  },
  {
    no: 1,
    nama: "Cak Mus Situmorang",
    point1: 86,
    point2: 76,
    point3: 80,
    point4: 70,
    point5: 69,
    point6: 89,
  },
];

const Penilaian = () => {
  return (
    <>
      <div className="w-full bg-white  rounded ">
        <div className="p-5">
          <table className="table-auto w-full">
            <tr className="h-[50px]">
              <th>No</th>
              <th>Nama Juri</th>
              <th>Point1</th>
              <th>Point2</th>
              <th>Point3</th>
              <th>Point4</th>
              <th>Point5</th>
              <th>Point6</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr
                  key={key}
                  className="text-center h-[50px] even:bg-red-100 even:text-red-900"
                >
                  <td>{val.no}</td>
                  <td>{val.nama}</td>
                  <td>{val.point1}</td>
                  <td>{val.point2}</td>
                  <td>{val.point3}</td>
                  <td>{val.point4}</td>
                  <td>{val.point5}</td>
                  <td>{val.point6}</td>
                </tr>
              );
            })}
          </table>
          <div className="flex justify-end mt-2">
            <button className="btn bg-[#CD0606] ">
              {" "}
              <svg
                className="h-6 w-6 pr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#FFFBFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 12L10.58 14.83L16.25 9.17004"
                  stroke="#FFFBFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Ubah Penilaian
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Penilaian;
