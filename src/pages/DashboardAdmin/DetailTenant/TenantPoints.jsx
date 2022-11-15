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
      {/* <div className="w-full bg-white  rounded ">
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="">
                <th>No</th>
                <th>Nama Juri</th>
                <th>Point1</th>
                <th>Point2</th>
                <th>Point3</th>
                <th>Point4</th>
                <th>Point5</th>
                <th>Point6</th>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>1</td>
                  <td className="w-[250px]">
                    Cak Mus arifin bla bla balasjdsawbddna dhdv h
                  </td>
                  <td>86</td>
                  <td>84</td>
                  <td>90</td>
                  <td>92</td>
                  <td>89</td>
                  <td>80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TenantPoints;
