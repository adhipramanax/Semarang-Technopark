import React from "react";

const DokumenPendukung = () => {
  return (
    <>
      <div className="w-full bg-white px-[20px] py-[10px]">
        <div className="py-[10px] flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 13H12"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 17H16"
              stroke="#D73737"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-base font-bold text-[#D73737]">
            Dokumen Pendukung
          </h1>
        </div>
        <div className="flex justify-between items-center p-5">
          <div>Foto Working Space</div>
          <div className="w-2/3 flex justify-between">
            <div className="flex flex-col justify-center items-center">
              <button className="btn btn-outline border-2 border-dashed btn-error w-16 h-16 mb-2">
                +
              </button>
              <p className="text-sm font-medium">* Foto Utama</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="btn btn-outline border-2 border-dashed btn-error w-16 h-16 mb-2">
                +
              </button>
              <p className="text-sm text-slate-600">Gambar 1</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="btn btn-outline border-2 border-dashed btn-error w-16 h-16 mb-2">
                +
              </button>
              <p className="text-sm text-slate-600">Gambar 2</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="btn btn-outline border-2 border-dashed btn-error w-16 h-16 mb-2">
                +
              </button>
              <p className="text-sm text-slate-600">Gambar 3</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="btn btn-outline border-2 border-dashed btn-error w-16 h-16 mb-2">
                +
              </button>
              <p className="text-sm text-slate-600">Gambar 4</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="btn btn-outline border-2 border-dashed btn-error w-16 h-16 mb-2">
                +
              </button>
              <p className="text-sm text-slate-600">Gambar 5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DokumenPendukung;
