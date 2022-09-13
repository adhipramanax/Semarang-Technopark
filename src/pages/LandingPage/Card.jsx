import React from "react";

const Card = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex p-10 gap-8 text-2xl font-medium">
            <button>Event</button>
            <button>Sewa Alat</button>
            <button>Co-Working</button>
          </div>
          <div className="flex justify-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-10 text-[#D73737] "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* card */}
        <div className="card w-96 bg-base-100">
          <figure>
            <img className="rounded" src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body px-2">
            <div className=" ">
              <span className="bg-[#04A2FF] text-white rounded-xl px-5">Pelatihan</span>
            </div>
            <p>Pelatihan Digital Marketing</p>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
