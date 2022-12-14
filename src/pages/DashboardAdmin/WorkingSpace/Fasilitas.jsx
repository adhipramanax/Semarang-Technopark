import React from 'react'

const Fasilitas = (props) => {
  return (
    <>
      <div className="w-1/2 bg-white p-5 rounded">
        <h1 className="flex gap-2 pb-3 pt-2 items-center font-semibold border-b-[2px] border-b-[#F4EFF4]">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22.3916H15C20 22.3916 22 20.3916 22 15.3916V9.3916C22 4.3916 20 2.3916 15 2.3916H9C4 2.3916 2 4.3916 2 9.3916V15.3916C2 20.3916 4 22.3916 9 22.3916Z" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.7002 9.65137L12.0002 12.7214L17.2602 9.67136" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 18.1609V12.7109" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.7603 6.68146L7.56024 8.46146C6.84024 8.86146 6.24023 9.87146 6.24023 10.7015V14.0915C6.24023 14.9215 6.83024 15.9315 7.56024 16.3315L10.7603 18.1115C11.4403 18.4915 12.5602 18.4915 13.2502 18.1115L16.4503 16.3315C17.1703 15.9315 17.7702 14.9215 17.7702 14.0915V10.6915C17.7702 9.86146 17.1803 8.85146 16.4503 8.45146L13.2502 6.67146C12.5602 6.29146 11.4403 6.29146 10.7603 6.68146Z" stroke="#1C1B1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Fasilitas
        </h1>
        <div className="flex mt-5">
          <div className="grid grid-cols-2 gap-y-3 w-full">
            {props.fasilitas.map((fas) => {
              return (
                <h1 className="flex gap-2 items-center">
                  {fas.icon}
                  {fas.judul}
                </h1>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Fasilitas