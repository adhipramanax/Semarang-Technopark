import React from 'react'

const HargaSewa = () => {
    return (
        <>
            <div className="w-1/2 bg-white p-5 rounded">
                <h1 className="flex gap-2 pb-3 pt-2 items-center font-semibold border-b-[2px] border-b-[#F4EFF4]">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.67188 14.7214C8.67188 16.0114 9.66188 17.0514 10.8919 17.0514H13.4019C14.4719 17.0514 15.3419 16.1414 15.3419 15.0214C15.3419 13.8014 14.8119 13.3714 14.0219 13.0914L9.99187 11.6914C9.20187 11.4114 8.67188 10.9814 8.67188 9.76145C8.67188 8.64145 9.54187 7.73145 10.6119 7.73145H13.1219C14.3519 7.73145 15.3419 8.77145 15.3419 10.0614" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 6.3916V18.3916" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 22.3916C17.5228 22.3916 22 17.9144 22 12.3916C22 6.86875 17.5228 2.3916 12 2.3916C6.47715 2.3916 2 6.86875 2 12.3916C2 17.9144 6.47715 22.3916 12 22.3916Z" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Harga Sewa
                </h1>
                <ul className="mt-5 gap-y-3 grid">
                    <li className="flex w-full">
                        <h1 className="w-[25%] text-red-500 font-semibold">Harian</h1>
                        <p className="w-[65%]">Rp. 50.000</p>
                    </li>
                    <li className="flex w-full">
                        <h1 className="w-[25%] text-red-500 font-semibold">Mingguan</h1>
                        <p className="w-[65%]">Rp. 50.000</p>
                    </li>
                    <li className="flex w-full">
                        <h1 className="w-[25%] text-red-500 font-semibold">Bulanan</h1>
                        <p className="w-[65%]">Rp. 50.000</p>
                    </li>
                    <li className="flex w-full">
                        <h1 className="w-[25%] text-red-500 font-semibold">Tahunan</h1>
                        <p className="w-[65%]">Rp. 50.000</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HargaSewa