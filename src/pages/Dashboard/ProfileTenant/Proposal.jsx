import React from "react";

const Proposal = () => {
  const data = [
    {
      nama: "Food StatUp Challange 1",
      statusAnggota: "Dalam review",
      tanggal: "13 Juni 2022",
    },
    {
      nama: "Food StatUp Challange 1",
      statusAnggota: "Dalam review",
      tanggal: "13 Juni 2022",
    },
    {
      nama: "Food StatUp Challange 1",
      statusAnggota: "Dalam review",
      tanggal: "13 Juni 2022",
    },
    {
      nama: "Food StatUp Challange 1",
      statusAnggota: "Dalam review",
      tanggal: "13 Juni 2022",
    },
  ];
  return (
    <>
      <div className="w-full bg-white  rounded ">
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <div className="font-bold text-xl pl-5">Proposal</div>
                <tr>
                  <td className="w-12">No</td>
                  <td className="w-1/2">Judul Proposal</td>
                  <td className="w-1/12 text-center">Status Proposal</td>
                  <td className=" text-center">Tanggal Upload</td>
                  <td className=" text-center">Aksi</td>
                </tr>
                {data.map((d) => {
                  return (
                    <tr>
                      <td>1</td>
                      <td className="">{d.nama}</td>
                      <td>
                        <div className="bg-[#5CB3E4] rounded p-2 text-white text-center">
                          {d.statusAnggota}
                        </div>
                      </td>
                      <td className="text-center">{d.tanggal}</td>

                      <td>
                        <div className="flex gap-2 justify-center">
                          <button className="bg-[#5CB3E4] rounded p-2">
                            <svg
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.7271 16.5V11.5"
                                stroke="#FFFBFF"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.167 14H10.167"
                                stroke="#FFFBFF"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M22.667 11V17C22.667 21 21.667 22 17.667 22H7.66699C3.66699 22 2.66699 21 2.66699 17V7C2.66699 3 3.66699 2 7.66699 2H9.16699C10.667 2 10.997 2.44 11.567 3.2L13.067 5.2C13.447 5.7 13.667 6 14.667 6H17.667C21.667 6 22.667 7 22.667 11Z"
                                stroke="#FFFBFF"
                                stroke-miterlimit="10"
                              />
                            </svg>
                          </button>
                          <button className="bg-stp-warning rounded p-2">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 11V17L11 15"
                                stroke="#FFFBFF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9 17L7 15"
                                stroke="#FFFBFF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                                stroke="#FFFBFF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                                stroke="#FFFBFF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposal;
