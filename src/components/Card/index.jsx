import React from 'react';

const index = (props) => {
  return (
    <>
      <div className="card w-full hover:-translate-y-2 duration-150">
        <figure className="w-full">
          <img
            className="rounded-[12px] object-cover w-full"
            src={`${props.img}`}
            alt="Shoes"
          />
        </figure>
        <div className="pt-5">
          {/* <div> */}
          <span className="bg-stp-green text-base text-white rounded-[4px] px-5 py-1">
            {props.kategori}
          </span>
          {/* </div> */}
          <h1 className="text-sm xl:text-xl lg:text-xl font-medium mt-5 mb-5 w-[80%]">
            {props.judul}
          </h1>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3002 19.83L19.8302 15.3C20.7802 14.35 21.2902 13.04 21.2202 11.7L20.9802 6.69998C20.8902 4.69998 19.3002 3.10998 17.3102 3.00998L12.3102 2.76998C10.9702 2.70998 9.6602 3.20998 8.7102 4.15998L4.18019 8.68997C2.32019 10.55 2.32019 13.57 4.18019 15.44L8.5702 19.83C10.4202 21.7 13.4402 21.7 15.3002 19.83ZM11.6202 9.49998C11.6202 7.90998 12.9102 6.61998 14.5002 6.61998C16.0902 6.61998 17.3802 7.90998 17.3802 9.49998C17.3802 11.09 16.0902 12.38 14.5002 12.38C12.9102 12.38 11.6202 11.09 11.6202 9.49998Z"
                  fill="#F08619"
                />
              </svg>
              <p className="text-xs xl:text-sm font-normal">{props.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6201 8.45C19.5701 3.83 15.5401 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 11.9901 1.75C8.4601 1.75 4.4201 3.82 3.3701 8.44C2.2001 13.6 5.3601 17.97 8.2201 20.72C9.2801 21.74 10.6401 22.25 12.0001 22.25C13.3601 22.25 14.7201 21.74 15.7701 20.72C18.6301 17.97 21.7901 13.61 20.6201 8.45ZM12.0001 13.46C10.2601 13.46 8.8501 12.05 8.8501 10.31C8.8501 8.57 10.2601 7.16 12.0001 7.16C13.7401 7.16 15.1501 8.57 15.1501 10.31C15.1501 12.05 13.7401 13.46 12.0001 13.46Z"
                  fill="#F08619"
                />
              </svg>
              <p className="text-xs xl:text-sm font-normal">{props.lokasi}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
