import React from 'react'
import { Link } from "react-router-dom";
import email from '../../../assets/images/sms.svg';
import password from '../../../assets/images/password.svg';

const input = (props) => {
    const changeEye = () => {
        props.onUpdate(props.password ? false : true)
    }

    // return (
    //     <>
    //         <div className="w-full xl:w-[35%] xl:mx-0 lg:w-[40%] lg:mx-0">
    //             <h1 className="text-white text-center text-4xl font-bold mt-12 mb-5 lg:mt-9 lg:mb-5">Daftarkan Akun</h1>
    //             <div className="flex flex-col items-center gap-4 py-4 px-6 bg-white rounded-[20px]">
    //                 <div className="flex items-center w-full gap-2">
    //                     <img src={email} alt="email" />
    //                     Email
    //                 </div>
    //                 <input
    //                     className="w-full rounded-lg px-5 bg-[#F9F9F9]"
    //                     placeholder="Masukan Email"
    //                     type="email"
    //                     name="email"
    //                 />
    //                 <div className="flex items-center w-full gap-2">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="#F08619" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
    //                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    //                     </svg>
    //                     Nama
    //                 </div>
    //                 <input
    //                     className="w-full rounded-lg px-5 bg-[#F9F9F9]"
    //                     placeholder="Masukan Nama Anda"
    //                     type="text"
    //                     name="nama"
    //                 />
    //                 <div className="flex items-center w-full gap-2">
    //                     <img src={password} alt="password" />
    //                     Kata Sandi
    //                 </div>
    //                 <div className="w-full relative">
    //                     <input
    //                         className="w-full rounded-lg pl-5 pr-12 bg-[#F9F9F9]"
    //                         placeholder="Masukan Kata Sandi"
    //                         type={props.password ? "password" : "text"}
    //                         name="password"
    //                     />
    //                     {props.password ?
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute -top-[2rem] left-[19rem] xl:-top-[2rem] xl:left-[22rem] lg:-top-[2rem] lg:left-[16rem] cursor-pointer" onClick={changeEye}>
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //                         </svg>
    //                         :
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute -top-[2rem] left-[19rem] xl:-top-[2rem] xl:left-[22rem] lg:-top-[2rem] lg:left-[16rem] cursor-pointer" onClick={changeEye}>
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    //                         </svg>
    //                     }
    //                 </div>
    //                 <div className="flex items-center w-full gap-2">
    //                     <img src={password} alt="password" />
    //                     Ulangi Kata Sandi
    //                 </div>
    //                 <div className="w-full relative">
    //                     <input
    //                         className="w-full rounded-lg pl-5 pr-12 bg-[#F9F9F9]"
    //                         placeholder="Ulangi Kata Sandi"
    //                         type={props.password ? "password" : "text"}
    //                         name="passwordUlang"
    //                     />
    //                     {props.password ?
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-[0.6rem] left-[20rem] cursor-pointer" onClick={changeEye}>
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //                         </svg>
    //                         :
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-[0.6rem] left-[20rem] cursor-pointer" onClick={changeEye}>
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    //                         </svg>
    //                     }
    //                 </div>
    //                 <button className="btn rounded-[16px] bg-[#04A2FF] w-full h-[55px] text-white border-0 hover:bg-blue-700 tracking-wide">
    //                     Daftar
    //                 </button>
    //                 <div className="text-base flex gap-1">
    //                     Sudah Punya Akun?
    //                     <Link to="/login">
    //                         <span className="text-[#F08619] text-base hover:underline">Login Sekarang</span>
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );

    return (
        <>
            <div className="w-full xl:w-[35%] xl:mx-0 lg:w-[50%] lg:mx-0">
                <h1 className="text-white text-center text-4xl font-bold mb-5 lg:mt-0 lg:mb-5">Masuk ke Akun</h1>
                <div className="flex flex-col items-center gap-4 py-8 px-6 bg-white rounded-[20px]">
                    <div className="flex items-center w-full gap-2">
                        <img src={email} alt="email" />
                        Email
                    </div>
                    <input
                        className="w-full rounded-lg px-5 bg-[#F9F9F9]"
                        placeholder="Masukan Email"
                        type="text"
                        name="email"
                    />
                    <div className="flex items-center w-full gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F08619" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        Nama
                    </div>
                    <input
                        className="w-full rounded-lg px-5 bg-[#F9F9F9]"
                        placeholder="Masukan Nama Anda"
                        type="text"
                        name="nama"
                    />
                    <div className="flex items-center w-full gap-2">
                        <img src={password} alt="password" />
                        Kata Sandi
                    </div>
                    <div className="w-full relative">
                        <input
                            className="w-full rounded-lg pl-5 pr-12 bg-[#F9F9F9]"
                            placeholder="Masukan Kata Sandi"
                            type={props.password ? "password" : "text"}
                            name="password"
                        />
                        {props.password ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative -top-[2rem] left-[19rem] xl:-top-[2rem] xl:left-[22rem] lg:-top-[2rem] lg:left-[20rem] cursor-pointer" onClick={changeEye}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative -top-[2rem] left-[19rem] xl:-top-[2rem] xl:left-[22rem] lg:-top-[2rem] lg:left-[20rem] cursor-pointer" onClick={changeEye}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        }
                    </div>
                    <div className="flex items-center w-full gap-2">
                        <img src={password} alt="password" />
                        Ulangi Kata Sandi
                    </div>
                    <div className="w-full relative">
                        <input
                            className="w-full rounded-lg pl-5 pr-12 bg-[#F9F9F9]"
                            placeholder="Ulangi Kata Sandi"
                            type={props.password ? "password" : "text"}
                            name="passwordUlang"
                        />
                        {props.password ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative -top-[2rem] left-[19rem] xl:-top-[2rem] xl:left-[22rem] lg:-top-[2rem] lg:left-[20rem] cursor-pointer" onClick={changeEye}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative -top-[2rem] left-[19rem] xl:-top-[2rem] xl:left-[22rem] lg:-top-[2rem] lg:left-[20rem] cursor-pointer" onClick={changeEye}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        }
                    </div>
                    <button className="btn rounded-[16px] bg-[#04A2FF] w-full h-[55px] text-white border-0 hover:bg-blue-700 tracking-wide">
                        Masuk
                    </button>
                    <div className="text-base mt-3 flex gap-1">
                        Belum Punya Akun?
                        <Link to="/register">
                            <span className="text-[#F08619] text-base hover:underline">Daftar Sekarang</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default input