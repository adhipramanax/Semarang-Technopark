import React from "react";

const TableProposal = () => {
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
            <tr>
              <th>1</th>
              <td>Quality Control Specialist</td>
              <td>
                <div className="border-solid bg-[#F6B675] text-center text-white">On Review</div>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Desktop Support Technician</td>
              <td>
                <div className="border-solid bg-[#F6B675] text-center text-white">On Review</div>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Tax Accountant</td>
              <td>
                <div className="border-solid bg-[#F6B675] text-center text-white">On Review</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableProposal;
