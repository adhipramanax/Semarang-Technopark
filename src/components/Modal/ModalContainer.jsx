import React from "react";

const ModalContainer = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className="fixed left-0 top-0 right-0 bottom-0 flex flex-col bg-black/50 items-center justify-center">
        <div className=" w-[500px] bg-white p-10 relative rounded">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-4 top-4"
            onClick={props.onClose}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold ">Tambah Mentor</h2>
          <form action="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan nama mentor"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email mentor</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">No Telpon</span>
              </label>
              <input
                type="text"
                placeholder="No Telpon"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select name="" id="" className="select select-bordered w-full">
                <option value="aktif">Aktif</option>
                <option value="non-aktif">Afk</option>
              </select>
            </div>
          </form>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn border-none bg-red-500 hover:bg-red-400"
            >
              Tambahkan
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContainer;
