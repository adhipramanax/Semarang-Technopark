import React from 'react'

import Null from '../../../assets/images/svg/null.png'

const Link = () => {
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Link Pelatihan</h1>
        <div className="flex flex-col items-center gap-2">
          <button className="btn flex bg-[#CD0606] border-0 p-3 gap-2 rounded text-white capitalize tracking-wide hover:bg-red-700">
            Ikuti Pelatihan
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.63 14.29V13.79H14.62V11.52C14.62 9.71385 13.1561 8.25 11.35 8.25H7.66C6.87386 8.25 6.23999 8.88387 6.23999 9.67001V12.47C6.23999 14.2879 7.7163 15.7518 9.53325 15.74L9.53407 15.74L13.2123 15.71C13.9974 15.7087 14.63 15.0754 14.63 14.29ZM15.2126 13.586L15.49 13.17L15.2126 13.586L17.1327 14.866C17.8274 15.3292 18.75 14.8264 18.75 14V10.02C18.75 9.19357 17.8274 8.69084 17.1327 9.15398L15.2126 10.434L15.49 10.85L15.2126 10.434C14.9221 10.6277 14.75 10.9545 14.75 11.3V12.72C14.75 13.0654 14.9221 13.3923 15.2126 13.586ZM3 12C3 6.75614 7.25614 2.5 12.5 2.5C17.7439 2.5 22 6.75614 22 12C22 17.2439 17.7439 21.5 12.5 21.5C7.25614 21.5 3 17.2439 3 12Z" fill="#FFFBFF" stroke="#FFFBFF" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Link