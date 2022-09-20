import React from "react";

import fileImg from "../../../assets/images/amico.png";

const FileUpload = () => {
  return (
    <>
      <div className="bg-white mx-6 mt-10 flex flex-col items-center justify-center  py-9">
        <div className="flex flex-col items-center justify-center w-1/2 gap-9">
          <img className="w-1/2" src={fileImg} alt="file" />
          <div className="text-center items-center flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">Document Not Uploaded</h1>
            <p className="w-2/3">Silahkan upload dokumen proposal tenant anda untuk melanjutkan</p>
          </div>
          <input className="bg-[#CD0606 border-black border-solid" type="file" />
        </div>
      </div>
    </>
  );
};

export default FileUpload;
