import React from 'react'

const Operasional = () => {
    return (
        <>
            <div className="w-1/2 bg-white p-5 rounded">
                <h1 className="flex gap-2 pb-3 pt-2 items-center font-semibold border-b-[2px] border-b-[#F4EFF4]">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2.3916V5.3916" stroke="#1C1B1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 2.3916V5.3916" stroke="#1C1B1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.5 9.48145H20.5" stroke="#1C1B1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 8.8916V17.3916C21 20.3916 19.5 22.3916 16 22.3916H8C4.5 22.3916 3 20.3916 3 17.3916V8.8916C3 5.8916 4.5 3.8916 8 3.8916H16C19.5 3.8916 21 5.8916 21 8.8916Z" stroke="#1C1B1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.9955 14.0918H12.0045" stroke="#1C1B1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.29431 14.0918H8.30329" stroke="#1C1B1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.29431 17.0918H8.30329" stroke="#1C1B1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Hari Operasional
                </h1>
                <div className="flex mt-5">
                    <h1 className="w-[15%] text-red-500 font-semibold">Buka</h1>
                    <p className="w-[85%]">Senin - Minggu</p>
                </div>
            </div>
            <div className="w-1/2 bg-white p-5 rounded">
                <h1 className="flex gap-2 pb-3 pt-2 items-center font-semibold border-b-[2px] border-b-[#F4EFF4]">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12.3916C22 17.9116 17.52 22.3916 12 22.3916C6.48 22.3916 2 17.9116 2 12.3916C2 6.8716 6.48 2.3916 12 2.3916C17.52 2.3916 22 6.8716 22 12.3916Z" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.7099 15.5714L12.6099 13.7214C12.0699 13.4014 11.6299 12.6314 11.6299 12.0014V7.90137" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Jam Operasional
                </h1>
                <div className="flex mt-5">
                    <h1 className="w-[15%] text-red-500 font-semibold">Buka</h1>
                    <p className="w-[85%]">08:00 - 20:00</p>
                </div>
            </div>
        </>
    )
}

export default Operasional