import React from 'react';

const index = () => {
  const data = [
    {
      judul: 'Nama Akun',
      name: 'nama',
      placeholder: 'nama',
    },
    {
      judul: 'Password Lama',
      name: 'password',
      placeholder: 'Masukan Password Lama',
    },
    {
      judul: 'Password Baru',
      name: 'password',
      placeholder: 'Password Baru',
    },
    {
      judul: 'Ilangi Password Baru',
      name: 'password',
      placeholder: 'Ulangi Password Baru',
    },
  ];

  return (
    <>
      <div className="w-full bg-white p-5">
        <h1 className="text-xl font-bold pb-5">Setting Akun</h1>
        <form>
          <div
            className="mt-5 flex flex-col gap-5"
            action=""
          >
            {data.map((d) => {
              return (
                <div className="flex items-center">
                  <label
                    className="w-[20%]"
                    htmlFor="nama"
                  >
                    {d.judul}
                  </label>
                  <input
                    type="text"
                    placeholder={d.placeholder}
                    className="input input-bordered w-full max-w-[50%]"
                    name={d.name}
                    autoFocus
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <button className="btn flex text-white bg-stp-primary-600 border-red-500 rounded-md gap-2 items-center">
              Perbarui
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
