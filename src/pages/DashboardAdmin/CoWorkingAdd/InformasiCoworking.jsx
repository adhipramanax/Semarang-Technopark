import React from "react";

import Forms from "../../DashboardAdmin/AlatAdd/Forms";
import FormTextArea from "./FormTextArea";

const informasiAlat = () => {
  return (
    <>
      <div className="w-[888px] bg-white px-[20px] py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-base font-bold">Informasi Coworking</h1>
        </div>
        <Forms inputLabel="Nama Workspace" inputForm="Nama Workspace" />
        <FormTextArea textAreaLabel="Alamat" textAreaInput="Alamat" />
        <Forms inputLabel="Kapasitas" inputForm="Kapasitas" />
        <Forms inputLabel="Nomor Pengurus" inputForm="Nomor Pengurus" />
      </div>
    </>
  );
};

export default informasiAlat;
