import React from "react";
import edit from "../../../assets/images/svg/edit-2.svg";
import add from "../../../assets/images/svg/folder-add.svg";
import trash from "../../../assets/images/svg/trash.svg";

const DocPendukung = () => {
  return (
    <>
      <div className="w-full bg-white  rounded ">
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <div className="font-bold text-xl pl-5">Dokumen Pendukung</div>
                <tr>
                  <td className="w-1/2">Jenis Dokumen</td>
                  <td className="w-1/12 text-center">Status</td>
                  <td className=" text-center">Aksi</td>
                </tr>
                <tr>
                  <td className="">Dokumen 1</td>
                  <td>
                    <div className="bg-[#6EBC14] rounded p-2 text-white text-center">Uploaded</div>
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
                <tr>
                  <td className="">HKI</td>
                  <td>
                    <div className="bg-[#E16868] rounded p-2 text-white text-center">
                      Unuploaded
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocPendukung;
