import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

const UpcomingMentoring = () => {
  const data = [
    {
      judul: "Pelatihan Design Grafis",
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Upcoming Mentoring</h1>
      </div>
      <div className="flex gap-6">
        {data.map((d) => {
          return (
            <Link
              to="/admin/detail-pelatihan"
              className="card w-56 bg-base-100 "
            >
              <figure className="px-3 pt-3 ">
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  className=" h-44 object-cover rounded"
                />
              </figure>
              <div className="px-3 pt-2 text-left ">
                <h2 className="card-title text-base">{d.judul}</h2>
                <p className="text-xs">Cecep Bagus Suryadinata KA, S.Kom</p>
                <p className="text-xs py-6 text-[#D73737]">23 Oktober 2022</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default UpcomingMentoring;
