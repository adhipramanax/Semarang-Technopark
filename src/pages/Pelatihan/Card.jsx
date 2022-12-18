import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  return (
    <>
      <Link to="/detail-pelatihan" className="w-full hover:-translate-y-2 duration-150">
        <figure className="w-full">
          <img
            className="rounded-md object-cover w-full"
            src={`${props.img}`}
            alt="Shoes"
          />
        </figure>
        <div className="flex flex-col pt-2 gap-3">
          <h1 className="text-md xl:text-xl lg:text-xl font-semibold">
            {props.judul}
          </h1>
          <p className="text-neutral font-normal text-xs">Cecep Bagus Suryadinata KA, S.Kom</p>
        </div>
        <div className="flex items-center gap-1 mt-4">
          <p className="font-normal text-xs flex-1">23 Oktober 2022</p>
          <button className="btn flex bg-[#CD0606] border-0 px-4 text-white capitalize tracking-wide hover:bg-red-700 rounded-xl">
            Daftar
          </button>
        </div>
      </Link>
    </>
  );
};

export default Index;
