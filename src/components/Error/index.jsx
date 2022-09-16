import React from 'react'
import { Link } from 'react-router-dom'

const index = (props) => {
    return (
        <div className="flex">
            <div className="m-auto text-center">
                <img className="m-auto" src={props.img} alt="404" />
                <h1 className="text-4xl text-red-700 font-bold mt-8">{props.title}</h1>
                <p className="mt-4 text-lg font-semibold">{props.desc}</p>
                <Link to="/dashboard" className="btn btn-error text-white bg-red-600 mt-8 text-lg">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Kembali
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default index