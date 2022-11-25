import React from 'react'

const WaktuLokasi = () => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Waktu dan Lokasi</h1>
        <table className="mt-2">
          <tr className="h-8">
            <td className="w-1/2 text-gray text-base font-normal">Hari</td>
            <td>Senin</td>
          </tr>
          <tr className="h-8">
            <td className="w-1/2 text-gray text-base font-normal">Tanggal</td>
            <td>27 Juni 2022</td>
          </tr>
          <tr className="h-8">
            <td className="w-1/2 text-gray text-base font-normal">Jam</td>
            <td>09:00 - 16:00</td>
          </tr>
          <tr className="h-8">
            <td className="w-1/2 text-gray text-base font-normal">Lokasi</td>
            <td>Via Zoom Meeting</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default WaktuLokasi