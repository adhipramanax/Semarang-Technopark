import React from "react";

import Table from '../../../components/Table'

const EditProposal = () => {
  const tHead = [
    {
      judul: "No",
      width: "w-auto"
    },
    {
      judul: "Judul Proposal",
      width: "w-1/2"
    },
    {
      judul: "Status Proposal",
      width: "w-1/12"
    },
    {
      judul: "Aksi",
      width: "w-auto"
    }
  ]

  let tBody = [
    {
      no: 1,
      judul: "Food StatUp Challange",
      status: {
        isi: "Uploaded",
        warna: "info"
      }
    },
    {
      no: 2,
      judul: "Food StatUp Challange",
      status: {
        isi: "On Review",
        warna: "warning"
      }
    },
    {
      no: 3,
      judul: "Food StatUp Challange",
      status: {
        isi: "Decline",
        warna: "error"
      }
    },
    {
      no: 4,
      judul: "Food StatUp Challange",
      status: {
        isi: "Accepted",
        warna: "success"
      }
    },
  ]
  return (
    <>
      {/* <div className="w-full bg-white  rounded ">
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <div className="font-bold text-xl pl-5">Dokumen Pendukung</div>
                <tr>
                  <td>No</td>
                  <td className="w-1/2">Jenis Dokumen</td>
                  <td className="w-1/12 text-center">Status</td>
                  <td className=" text-center">Aksi</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>Dokumen 1</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      <Table judul="Upload Proposal" link="/" tHead={tHead} tBody={tBody} />
    </>
  );
};

export default EditProposal;
