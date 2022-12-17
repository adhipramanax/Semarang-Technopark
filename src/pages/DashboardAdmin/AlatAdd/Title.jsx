import React from "react";
import { Link } from "react-router-dom";

const Title = (props) => {
  return (
    <>
      <div className="w-full bg-white py-5 px-3 font-medium text-base rounded">
        <h1 className="flex gap-2">
          <Link to="/admin/pelatihan" className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                stroke="#1C1B1E"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {props.title}
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Title;
