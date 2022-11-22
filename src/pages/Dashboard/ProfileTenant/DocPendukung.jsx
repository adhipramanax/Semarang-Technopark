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
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.667 2H9.66699C4.66699 2 2.66699 4 2.66699 9V15C2.66699 20 4.66699 22 9.66699 22H15.667C20.667 22 22.667 20 22.667 15V13" stroke="#FFFBFF" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16.7069 3.02001L8.82687 10.9C8.52687 11.2 8.22687 11.79 8.16687 12.22L7.73687 15.23C7.57687 16.32 8.34687 17.08 9.43687 16.93L12.4469 16.5C12.8669 16.44 13.4569 16.14 13.7669 15.84L21.6469 7.96001C23.0069 6.60001 23.6469 5.02001 21.6469 3.02001C19.6469 1.02001 18.0669 1.66001 16.7069 3.02001Z" stroke="#FFFBFF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M15.5771 4.15002C16.2471 6.54002 18.1171 8.41002 20.5171 9.09002" stroke="#FFFBFF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                      <button className="bg-[#5CB3E4] rounded p-2">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.7271 16.5V11.5" stroke="#FFFBFF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M15.167 14H10.167" stroke="#FFFBFF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M22.667 11V17C22.667 21 21.667 22 17.667 22H7.66699C3.66699 22 2.66699 21 2.66699 17V7C2.66699 3 3.66699 2 7.66699 2H9.16699C10.667 2 10.997 2.44 11.567 3.2L13.067 5.2C13.447 5.7 13.667 6 14.667 6H17.667C21.667 6 22.667 7 22.667 11Z" stroke="#FFFBFF" stroke-miterlimit="10" />
                        </svg>
                      </button>
                      <button className="bg-[#E16868] rounded p-2">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.667 5.97998C18.337 5.64998 14.987 5.47998 11.647 5.47998C9.66699 5.47998 7.68699 5.57998 5.70699 5.77998L3.66699 5.97998" stroke="#FFFBFF" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.16699 4.97L9.38699 3.66C9.54699 2.71 9.66699 2 11.357 2H13.977C15.667 2 15.797 2.75 15.947 3.67L16.167 4.97" stroke="#FFFBFF" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M19.5169 9.14001L18.8669 19.21C18.7569 20.78 18.6669 22 15.8769 22H9.45689C6.66689 22 6.57689 20.78 6.46689 19.21L5.81689 9.14001" stroke="#FFFBFF" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.9971 16.5H14.3271" stroke="#FFFBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.167 12.5H15.167" stroke="#FFFBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
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
