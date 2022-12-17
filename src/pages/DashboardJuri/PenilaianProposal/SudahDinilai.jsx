import React from "react";

const data = [
  {
    no: 1,
    nama: "Cak Mus",
  },
  {
    no: 2,
    nama: "Cak Muss",
  },
  {
    no: 3,
    nama: "Kum Kum",
  },
];

const SudahDinilai = (props) => {
  return (
    <div className="w-full bg-white p-5">
      <h1 className="text-xl font-bold mb-3">{props.title}</h1>
      <div className="flex flex-col justify-center items-center">
        <table className="table-auto w-full">
          <tr className="h-[50px]">
            <th>No</th>
            <th>Nama Juri</th>
            <th className="w-[200px]">Penerapan di Masyarakat</th>
            <th className="w-[200px]">Manfaat</th>
            <th className="w-[200px]">Keberlangsungan</th>
            <th className="w-[200px]">Presentasi Penyajian Produk</th>
          </tr>
          {data.map((val) => {
            return (
              <tr className="text-center h-[50px] even:bg-red-100 even:text-red-900">
                <th className="h-[70px]">{val.no}</th>
                <th className="h-[70px]">{val.nama}</th>
                <th className="h-[70px]">
                  <input type="number" className="w-[50px] rounded-lg" />
                </th>
                <th className="h-[70px]">
                  <input type="number" className="w-[50px] rounded-lg" />
                </th>
                <th className="h-[70px]">
                  <input type="number" className="w-[50px] rounded-lg" />
                </th>
                <th className="h-[70px]">
                  <input type="number" className="w-[50px] rounded-lg" />
                </th>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="flex justify-end mt-5">
        <button className="border-2 rounded-lg bg-[#CD0606] border-[#CD0606] p-2 text-white flex gap-2">
          Simpan Penilaian
        </button>
      </div>
    </div>
  );
};

export default SudahDinilai;
