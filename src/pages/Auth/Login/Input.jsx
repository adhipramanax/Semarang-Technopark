import React from "react";
import { Link } from "react-router-dom";
import email from "../../../assets/images/sms.svg";
import password from "../../../assets/images/password.svg";

const input = (props) => {
  const changeEye = () => {
    props.onUpdate(props.password ? false : true);
  };

  return (
    <>
      <div className="w-full h-screen xl:w-[35%] xl:mx-0 lg:w-[40%] lg:mx-0 flex flex-col justify-center">
        <h1 className="text-white text-center text-2xl xl:text-4xl font-bold mt-2 xl:mt-12 mb-5 lg:mt-9 lg:mb-5">
          Masuk ke Akun
        </h1>
        <form className="flex flex-col items-center gap-4 py-8 px-6 bg-white rounded-[20px]">
          <div className="flex items-center w-full gap-2">
            <img className="w-5 xl:w-6 lg:w-6" src={email} alt="email" />
            <p className="text-sm xl:text-lg lg:text-lg">Email</p>
          </div>
          <div className="w-full">
            <input
              className="w-full rounded-lg px-5 bg-[#F9F9F9] peer "
              placeholder="Masukan Email"
              type="email"
              name="email"
            />
            <p class="mt-2 hidden peer-invalid:block text-pink-600 text-sm">
              Email anda tidak valid.
            </p>
          </div>
          <div className="flex items-center w-full gap-2">
            <img className="w-5 xl:w-6 lg:w-6" src={password} alt="password" />
            <p className="text-sm xl:text-lg lg:text-lg">Kata Sandi</p>
          </div>
          <div className="w-full relative block">
            <input
              className="block w-full rounded-lg pl-5 pr-10 bg-[#F9F9F9]"
              placeholder="Masukan Kata Sandi"
              type={props.password ? "password" : "text"}
              pattern="^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,20}$"
              name="password"
            />
            <span className="absolute top-2.5 right-3 flex items-center pl-4">
              {props.password ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={changeEye}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={changeEye}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className="flex justify-between w-full">
            <div className="gap-2 flex items-center">
              <input type="checkbox" class="checked:bg-[#F08619] rounded" id="ingat" name="ingat" />
              <label htmlFor="ingat" className="text-sm xl:text-base lg:text-base cursor-pointer">
                {" "}
                Ingat Saya
              </label>
            </div>
            <Link
              to="/lupa"
              className="cursor-pointer text-sm xl:text-base lg:text-base text-[#F08619]"
            >
              Lupa Password?
            </Link>
          </div>
          <button className="btn rounded-[16px] bg-[#04A2FF] w-full h-[40px] xl:h-[55px] lg:h-[55px] text-white border-0 hover:bg-blue-700 tracking-wide mt-1 xl:mt-5 lg:mt-5">
            Masuk
          </button>
          <div className="text-sm xl:text-base lg:text-base mt-1 xl:mt-3 lg:mt-3 flex gap-1">
            Belum Punya Akun?
            <Link to="/register">
              <span className="text-[#F08619] text-sm xl:text-base lg:text-base hover:underline">
                Daftar Sekarang
              </span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default input;
