import React from "react";

import Terkirim from '../../../assets/images/svg/document-upload.svg'
import Direview from '../../../assets/images/svg/document-previous.svg'
import Diterima from '../../../assets/images/svg/clipboard-tick.svg'
import Ditolak from '../../../assets/images/svg/folder-cross.svg'

const Proposal = () => {
  const proposals = [
    {
      title: "Proposal Terkirim",
      num: 10,
      color: "info",
      icon: Terkirim
    },
    {
      title: "Proposal Direview",
      num: 10,
      color: "warning",
      icon: Direview
    },
    {
      title: "Proposal Diterima",
      num: 10,
      color: "success",
      icon: Diterima
    },
    {
      title: "Proposal Ditolak",
      num: 10,
      color: "primary",
      icon: Ditolak
    },
  ];

  return (
    <>
      <div className="flex gap-5 h-48 my-5">
        {proposals.map((data) => {
          return (
            <div className={`w-full rounded-lg p-5 flex justify-around h-full flex-col gap-3 bg-white border-b-[12px] border-b-${data.color}`}>
              <img className="w-fit" src={data.icon} alt="logo" />
              <p className="font-normal w-1/2">{data.title}</p>
              <h1 className="text-4xl font-bold">{data.num}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Proposal;
