import React from "react";

const CardTenant = () => {
  return (
    <>
      <div className="w-1/4 h-[422] bg-white py-8">
        <div className="flex flex-col items-center gap-3 ">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <h1 className="font-bold text-xl">Esteh Kulino</h1>
          <div>
            <div className="bg-[#F0B2B2] mb-2 rounded py-2 text-[#A40505]">Calon Tenant</div>
            <div className="bg-[#F9CFA3] rounded py-2 text-[#90500F]">Food Start Up</div>
          </div>
        </div>
        <div>3 Anggota</div>
      </div>
    </>
  );
};

export default CardTenant;
