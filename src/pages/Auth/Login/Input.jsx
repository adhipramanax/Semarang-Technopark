import React from "react";
import { Link } from "react-router-dom";

const input = () => {
  return (
    <>
      <form className="text-center w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-3">
        <h1 className="text-white text-[40px] font-bold py-[23px]">Masuk Ke Akun</h1>

        <div className="flex flex-col items-center gap-4 py-8 bg-white p-[34px] rounded-[25px]">
          <div className="flex w-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-[#F08619]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Email
          </div>
          <input
            class="  block w-full  rounded-lg px-5 bg-[#F9F9F9]"
            placeholder="Masukan Email"
            type="text"
            name="email"
          />
          <div className="flex w-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-[#F08619]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Kata Sandi
          </div>
          <input
            class="  block w-full  rounded-lg px-5 bg-[#F9F9F9]"
            placeholder="Masukan Kata Sandi"
            type="password"
            name="password"
          />
          <div className="flex justify-between py-3 w-full">
            <span>
              <input type="checkbox" class="default:ring-2 rounded" />
              <span className=" font-normal text-[14px]"> Ingat Saya</span>
            </span>
            <span className="text-[14px] text-[#F08619]">Lupa Password?</span>
          </div>

          <button className="rounded-[16px] bg-[#04A2FF] w-full h-[55px] text-white btn btn-error">
            Masuk
          </button>
          <div>
            <span className="text-[14px]">
              Belum Punya Akun?
              <Link to="/register">
                <span className="text-[#F08619] text-[14px]"> Daftar Sekarang</span>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default input;
