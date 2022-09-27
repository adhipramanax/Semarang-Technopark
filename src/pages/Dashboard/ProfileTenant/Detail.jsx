import React from "react";
import { Link } from "react-router-dom";

import edit from "../../../assets/images/svg/edit.svg";
import home from "../../../assets/images/svg/home-hashtag.svg";
import sms from "../../../assets/images/svg/sms.svg";
import telp from "../../../assets/images/svg/call.svg";

const Detail = () => {
  return (
    <>
      <div className="w-full bg-white  rounded ">
        <div className="flex justify-between items-center p-5">
          <div className="flex gap-8 ">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h1>Esteh Kulino</h1>
              <p>Bergabung pada 12 Maret 2023</p>
            </div>
            <div className="w-[150px] text-center">
              <div className="bg-[#F0B2B2] mb-2 rounded py-2 text-[#A40505]">Calon Tenant</div>
              <div className="bg-[#F9CFA3] rounded py-2 text-[#90500F]">Food Start Up</div>
            </div>
          </div>
          <Link to="/dashboard/edit-profile-tenant" className="flex bg-[#CD0606] p-3 gap-2 rounded text-white ">
            <img src={edit} alt="icon edit" />
            Edit Profile
          </Link>
        </div>
        {/* desc */}
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <tr>
                  <td className="w-1/4">
                    <div className="flex gap-2 font-bold">
                      <img src={home} alt="icon" />
                      Alamat Perusahaan
                    </div>
                  </td>
                  <td>Jl. Cendrawasih no 23B, Semarang, Jawa Tengah</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex gap-2 font-bold">
                      <img src={sms} alt="icon" />
                      E-mail Perusahaan
                    </div>
                  </td>
                  <td>kulinoesth@mail.com</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex gap-2 font-bold">
                      <img src={telp} alt="icon" />
                      Nomor Perusahaan
                    </div>
                  </td>
                  <td>089787654543</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
