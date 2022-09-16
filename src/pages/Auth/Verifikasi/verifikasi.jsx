import React from 'react'
import { Link } from "react-router-dom";
import email from '../../../assets/images/sms.svg';

const index = () => {
    return (
        <>
            <div className="w-full my-auto xl:w-[35%] xl:mx-0 lg:w-[50%] lg:mx-0">
                <div className="w-11/12 aspect-video m-auto bg-white rounded-2xl flex justify-center items-center flex-col px-6 py-4">
                    <img className="h-14 w-14 aspect-square" src={email} alt="email" />
                    <h1 className="mt-2">Verifikasi sudah dikirim ke email anda</h1>
                    <p className="text-red-500">verdiangalangp@gmail.com</p>
                    <Link to="/login" className="btn mt-4 rounded-[16px] bg-[#04A2FF] w-full h-[55px] text-white border-0 hover:bg-blue-700 tracking-wide text-lg ">
                        <button>
                            Login Sekarang
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default index