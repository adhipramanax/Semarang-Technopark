import React from "react";
import { Link } from "react-router-dom";
import { BiEditAlt, BiCategory } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

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
              <div className="bg-[#F0B2B2] mb-2 rounded py-2 text-[#A40505]">
                Calon Tenant
              </div>
              <div className="bg-[#F9CFA3] rounded py-2 text-[#90500F]">
                Food Start Up
              </div>
            </div>
          </div>
          <Link
            to="/tenant/edit-profile-tenant"
            className="flex bg-[#CD0606] p-3 gap-2 rounded text-white "
          >
            <BiEditAlt className="text-2xl " />
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
                      <FiHome className="text-2xl text-stp-primary-500" />
                      Alamat Perusahaan
                    </div>
                  </td>
                  <td>Jl. Cendrawasih no 23B, Semarang, Jawa Tengah</td>
                </tr>
                <tr>
                  <td className="w-1/4">
                    <div className="flex gap-2 font-bold">
                      <VscTypeHierarchySuper className="text-2xl fill-stp-primary-500" />
                      Jenis Perusahaan
                    </div>
                  </td>
                  <td>PT (Perusahaan Terbuka)</td>
                </tr>
                <tr>
                  <td className="w-1/4">
                    <div className="flex gap-2 font-bold">
                      <BiCategory className="text-2xl text-stp-primary-500" />
                      Kategori
                    </div>
                  </td>
                  <td>
                    <div className="bg-[#F9CFA3] rounded p-2 text-[#90500F] w-fit text-center">
                      Industri Kuliner
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4">
                    <div className="flex gap-2 font-bold">
                      <FiHome className="text-2xl text-stp-primary-500" />
                      Tahun Berdiri
                    </div>
                  </td>
                  <td>2022</td>
                </tr>
                <tr>
                  <td className="w-1/4">
                    <div className="flex gap-2 font-bold">
                      <FiHome className="text-2xl text-stp-primary-500" />
                      CEO
                    </div>
                  </td>
                  <td>Cecep Bagus</td>
                </tr>

                <tr>
                  <td>
                    <div className="flex gap-2 font-bold">
                      <HiOutlineMail className="text-2xl text-stp-primary-500" />
                      E-mail Perusahaan
                    </div>
                  </td>
                  <td>kulinoesth@mail.com</td>
                </tr>

                <tr>
                  <td>
                    <div className="flex gap-2 font-bold">
                      <BsTelephone className="text-2xl text-stp-primary-500" />
                      Nomor Perusahaan
                    </div>
                  </td>
                  <td>089787654543</td>
                </tr>
                <tr>
                  <td className="w-1/4">
                    <div className="flex gap-2 font-bold">
                      <FiHome className="text-2xl text-stp-primary-500" />
                      Halaman Perusahaan
                    </div>
                  </td>
                  <td>
                    <a href="www.google.com">www.google.com</a>
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

export default Detail;
