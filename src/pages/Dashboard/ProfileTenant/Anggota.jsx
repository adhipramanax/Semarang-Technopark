import React from "react";
import { Link } from "react-router-dom";

import edit from "../../../assets/images/svg/edit-2.svg";
import add from "../../../assets/images/svg/folder-add.svg";
import trash from "../../../assets/images/svg/trash.svg";
import adds from "../../../assets/images/svg/add-square.svg";

const Anggota = () => {
  const data = [
    {
      nama: "Cecep Bagus Suryadinata KA",
      statusAnggota: "Ketua",
    },
    {
      nama: "Cecep Bagus Suryadinata KA",
      statusAnggota: "Anggota",
    },
    {
      nama: "Cecep Bagus Suryadinata KA",
      statusAnggota: "Anggota",
    },
    {
      nama: "Cecep Bagus Suryadinata KA",
      statusAnggota: "Ketua",
    },
  ];
  return (
    <>
      <div className="w-full bg-white  rounded ">
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <div className="font-bold text-xl pl-5">Anggota</div>
                <tr>
                  <td className="w-1/2">Nama Anggota</td>
                  <td className="w-1/12 text-center">Status</td>
                  <td className=" text-center">Aksi</td>
                </tr>
                {data.map((d) => {
                  return (
                    <tr>
                      <td className="">{d.nama}</td>
                      <td>
                        <div className="bg-[#5CB3E4] rounded p-2 text-white text-center">
                          {d.statusAnggota}
                        </div>
                      </td>

                      <td>
                        <div className="flex gap-2 justify-center">
                          <button className="bg-[#6EBC14] rounded p-2">
                            <img src={edit} alt="icon" />
                          </button>
                          <button className="bg-[#5CB3E4] rounded p-2">
                            <img src={add} alt="icon" />
                          </button>
                          <button className="bg-[#E16868] rounded p-2">
                            <img src={trash} alt="icon" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-end my-3">
              <button className="flex bg-[#CD0606] p-3 gap-2 rounded text-white ">
                Tambah Anggota
                <img src={adds} alt="icon edit" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anggota;
