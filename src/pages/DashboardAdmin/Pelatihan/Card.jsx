import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const data = [
    {
      judul: "Pelatihan Design Grafis",
    },
    {
      judul: "Pelatihan Design Grafis",
    },
    {
      judul: "Pelatihan Design Grafis",
    },
    {
      judul: "Pelatihan Design Grafis",
    },
    {
      judul: "Pelatihan Design Grafis",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-5 place-content-stretch gap-x-4">
        {data.map((d) => {
          return (
            <Link
              to="/admin/detail-pelatihan"
              className="bg-base-100 shadow-xl p-3"
            >
              <figure className="pb-2">
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  className=" h-44 object-cover rounded"
                />
              </figure>
              <h2 className="card-title text-base">{d.judul}</h2>
              <p className="text-xs mt-1">Cecep Bagus Suryadinata KA, S.Kom</p>
              <p className="text-xs mt-6">23 Oktober 2022</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Card;
