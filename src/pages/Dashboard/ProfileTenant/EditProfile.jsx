import React from 'react'

const EditProfile = () => {
  return (
    <div className="w-full bg-white p-5">
      <h1 className="text-xl font-bold pb-5">Edit Profile Tenant</h1>
      <form>
        <div className="flex items-center p-2">
          <div className="avatar mr-10">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <button className="btn bg-transparent flex text-red-500 border-red-500 rounded-md gap-2 items-center mr-2 hover:bg-merah hover:text-white group">
            Delete
            <svg className="group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#CD0606" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#CD0606" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.8499 9.14001L18.1999 19.21C18.0899 20.78 17.9999 22 15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.14001" stroke="#CD0606" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.3301 16.5H13.6601" stroke="#CD0606" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.5 12.5H14.5" stroke="#CD0606" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className="btn flex text-white bg-merah border-red-500 rounded-md gap-2 items-center">
            Upload
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17V11L7 13" stroke="#FFFBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 11L11 13" stroke="#FFFBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#FFFBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#FFFBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div className="mt-5" action=''>
          <div className="flex items-center">
            <label className="w-[20%]" htmlFor='nama'>Nama Perusahaan</label>
            <input type="text" placeholder="Nama Perusahaan" className="input input-bordered w-full max-w-[50%]" name='nama' id="nama" autoFocus />
          </div>
          <div className="flex items-center mt-5">
            <label className="w-[20%]" htmlFor='bidang'>Bidang</label>
            <input type="text" placeholder="ex : Technology" className="input input-bordered w-full max-w-[50%]" name='bidang' id="bidang" />
          </div>
          <div className="flex items-center mt-5">
            <label className="w-[20%]" htmlFor='alamat'>Alamat Perusahaan</label>
            <textarea className="textarea textarea-bordered w-[50%] h-[110px]" placeholder="Jl. taman siswa no 70xxx" id='alamat' name='alamat'></textarea>
          </div>
          <div className="flex items-center mt-5">
            <label className="w-[20%]" htmlFor='email'>Email Perusahaan</label>
            <input type="email" placeholder="ex : ccp@mail.com" className="input input-bordered w-full max-w-[50%]" id='email' name='email' />
          </div>
          <div className="flex items-center mt-5">
            <label className="w-[20%]" htmlFor='no'>Nomor Perusahaan</label>
            <input type="tel" placeholder="ex : ccp@mail.com" className="input input-bordered w-full max-w-[50%]" id='no' name='no' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
          </div>
          <div className="flex items-center mt-5">
            <label className="w-[20%]" htmlFor='deskripsi'>Deskripsi Perusahaan</label>
            <textarea className="textarea textarea-bordered w-[50%] h-[110px]" placeholder="Deskripsi Perusahaan " id='deskripsi' name='deskripsi'></textarea>
          </div>
          <div className="w-[70%] flex justify-end mt-10">
            <button className="btn bg-transparent flex text-red-500 border-red-500 rounded-md gap-2 items-center mr-2 hover:bg-merah hover:text-white group">Kembali</button>
            <button className="btn flex text-white bg-merah border-red-500 rounded-md gap-2 items-center">Perbarui</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProfile