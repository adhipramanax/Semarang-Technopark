import React from "react";

const index = () => {
  return (
    <>
      <div className="w-full bg-white p-5">
        <h1 className="text-xl font-bold pb-5">Setting Akun</h1>
        <form>
          <div className="mt-5" action="">
            <div className="flex items-center">
              <label className="w-[20%]" htmlFor="nama">
                Nama Perusahaan
              </label>
              <input
                type="text"
                placeholder="Nama Perusahaan"
                className="input input-bordered w-full max-w-[50%]"
                name="nama"
                id="nama"
                autoFocus
              />
            </div>
            <div className="flex items-center mt-5">
              <label className="w-[20%]" htmlFor="bidang">
                Bidang
              </label>
              <input
                type="text"
                placeholder="ex : Technology"
                className="input input-bordered w-full max-w-[50%]"
                name="bidang"
                id="bidang"
              />
            </div>
            <div className="flex items-center mt-5">
              <label className="w-[20%]" htmlFor="alamat">
                Alamat Perusahaan
              </label>
              <textarea
                className="textarea textarea-bordered w-[50%] h-[110px]"
                placeholder="Jl. taman siswa no 70xxx"
                id="alamat"
                name="alamat"
              ></textarea>
            </div>
            <div className="flex items-center mt-5">
              <label className="w-[20%]" htmlFor="email">
                Email Perusahaan
              </label>
              <input
                type="email"
                placeholder="ex : ccp@mail.com"
                className="input input-bordered w-full max-w-[50%]"
                id="email"
                name="email"
              />
            </div>
            <div className="flex items-center mt-5">
              <label className="w-[20%]" htmlFor="no">
                Nomor Perusahaan
              </label>
              <input
                type="tel"
                placeholder="ex : ccp@mail.com"
                className="input input-bordered w-full max-w-[50%]"
                id="no"
                name="no"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div className="flex items-center mt-5">
              <label className="w-[20%]" htmlFor="deskripsi">
                Deskripsi Perusahaan
              </label>
              <textarea
                className="textarea textarea-bordered w-[50%] h-[110px]"
                placeholder="Deskripsi Perusahaan "
                id="deskripsi"
                name="deskripsi"
              ></textarea>
            </div>
            <div className="w-[70%] flex justify-end mt-10">
              <Link
                to="/dashboard/profile-tenant"
                className="btn bg-transparent flex text-red-500 border-red-500 rounded-md gap-2 items-center mr-2 hover:bg-merah hover:text-white group"
              >
                Kembali
              </Link>
              <button className="btn flex text-white bg-merah border-red-500 rounded-md gap-2 items-center">
                Perbarui
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
