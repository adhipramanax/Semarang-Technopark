import React from "react";
import belumDinilai from "../../../assets/images/cuate.png";

const ProposalBelumDinilai = ({ title }) => {
  return (
    <div className="w-full bg-white p-5">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex flex-col justify-center items-center">
        <img src={belumDinilai} alt="" />
        <p className="text-[#79767B] ">
          Belum ada juri yang memberikan penilaian
        </p>
      </div>
    </div>
  );
};

export default ProposalBelumDinilai;
