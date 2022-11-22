import React from 'react';

import Null from '../../../assets/images/svg/null.png';

const PenugasanKosong = () => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Penugasan</h1>
        <div className="flex flex-col items-center gap-2">
          <img
            className="mt-2"
            src={Null}
            alt="Mentor Avatar"
          />
          <p className="text-stp-gray w-1/2 text-center">
            Belum Terdapat Penugasan yang diinputkan oleh mentor
          </p>
        </div>
      </div>
    </>
  );
};

export default PenugasanKosong;
