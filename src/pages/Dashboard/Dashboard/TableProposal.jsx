import React from "react";

const TableProposal = () => {
  // make me data from API
  const data = [
    {
      no: 1,
      judul: "Quality Control Specialist",
    },
    {
      no: 2,
      judul: "Quality Control Specialist",
    },
    {
      no: 3,
      judul: "Quality Control Specialist",
    },
    {
      no: 4,
      judul: "Quality Control Specialist",
    },
    {
      no: 5,
      judul: "Quality Control Specialist",
    },
    {
      no: 6,
      judul: "Quality Control Specialist",
    },
    {
      no: 7,
      judul: "Quality Control Specialist",
    },
    {
      no: 8,
      judul: "Quality Control Specialist",
    },
    {
      no: 9,
      judul: "Quality Control Specialist",
    },
  ];
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="w-1/12">No</th>
              <th>Judul Proposal</th>
              <th className="w-1/6">Status Proposal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr>
                  <th>{d.no}</th>
                  <td>{d.judul}</td>
                  <td>
                    <div className="border-solid bg-[#F6B675] text-center text-white">
                      On Review
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableProposal;
