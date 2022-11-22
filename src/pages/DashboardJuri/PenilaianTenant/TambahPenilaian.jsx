import React from "react";
import imgCreate from "../../../assets/images/cuate.png";
const TambahPenilaian = () => {
  return (
    <div>
      <div className="bg-white w-full flex justify-center p-5 flex-col items-center">
        <figure>
          <img src={imgCreate} alt="" />
        </figure>
        <p className="mt-5 font-medium">Anda belum melakukan penilaian </p>
        <button className="btn flex gap-1 bg-[#CD0606] mt-3">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.3954C17.5 22.3954 22 17.8954 22 12.3954C22 6.89545 17.5 2.39545 12 2.39545C6.5 2.39545 2 6.89545 2 12.3954C2 17.8954 6.5 22.3954 12 22.3954Z"
              stroke="#FFFBFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12.3954H16"
              stroke="#FFFBFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16.3954V8.39545"
              stroke="#FFFBFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Tambah Penilaian
        </button>
      </div>
    </div>
  );
};

export default TambahPenilaian;
