import React from 'react'
import { Link } from 'react-router-dom'

const Materi = () => {
  const data = [
    {
      judul: "Materi Bacaan - Buku Reverensi.pdf",
      link: "/"
    },
    {
      judul: "Materi Bacaan - Buku Reverensi.pdf",
      link: "/"
    },
  ]
  return (
    <>
      <div className="w-full bg-white p-5 rounded">
        <h1 className="font-medium text-xl">Penugasan</h1>
        <div className="w-full mt-5">
          {data.map((data) => {
            return (
              <Link to={data.link} className="flex justify-between first:mt-0 last:mt-4 items-center group">
                <p>{data.judul}</p>
                <svg
                  className="w-6 h-6 transition text-gray-500 duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="group-hover:fill-red-700" d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM12.28 15.78L10.28 17.78C10.21 17.85 10.12 17.91 10.03 17.94C9.94 17.98 9.85 18 9.75 18C9.65 18 9.56 17.98 9.47 17.94C9.39 17.91 9.31 17.85 9.25 17.79C9.24 17.78 9.23 17.78 9.23 17.77L7.23 15.77C6.94 15.48 6.94 15 7.23 14.71C7.52 14.42 8 14.42 8.29 14.71L9 15.44V11.25C9 10.84 9.34 10.5 9.75 10.5C10.16 10.5 10.5 10.84 10.5 11.25V15.44L11.22 14.72C11.51 14.43 11.99 14.43 12.28 14.72C12.57 15.01 12.57 15.49 12.28 15.78Z" fill="#D73737" />
                  <path className="group-hover:fill-red-700" d="M17.4299 8.80999C18.3799 8.81999 19.6999 8.81999 20.8299 8.81999C21.3999 8.81999 21.6999 8.14999 21.2999 7.74999C19.8599 6.29999 17.2799 3.68999 15.7999 2.20999C15.3899 1.79999 14.6799 2.07999 14.6799 2.64999V6.13999C14.6799 7.59999 15.9199 8.80999 17.4299 8.80999Z" fill="#D73737" />
                </svg>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Materi