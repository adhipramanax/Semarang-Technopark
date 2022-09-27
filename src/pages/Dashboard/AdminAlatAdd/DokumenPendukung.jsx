import React from "react";

const DokumenPendukung = () => {
  return (
    <>
      <div className="w-[888px] bg-white px-[20px] py-[10px]">
        <div className="py-[10px]">
          <h1 className="text-base font-bold">Informasi Alat</h1>
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
