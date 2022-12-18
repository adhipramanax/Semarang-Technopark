import React from 'react';

import Null from '../../../assets/images/svg/null.png';

const BelumKegiatan = () => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Presensi Kehadiran</h1>
        <div className="flex flex-col items-center gap-2">
          <img
            className="mt-2"
            src={Null}
            alt="Mentor Avatar"
          />
          <p className="text-stp-gray w-1/2 text-center">
            Kegiatan belum dimulai, Anda dapat melakukan presensi ketika
            kegiatan sudah dimulai
          </p>
        </div>
      </div>
    </>
  );
};

export default BelumKegiatan;
