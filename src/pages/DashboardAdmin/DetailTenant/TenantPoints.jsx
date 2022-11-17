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

const TenantPoints = () => {
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
        </div>
      </div>
    </>
  );
};

export default TenantPoints;
