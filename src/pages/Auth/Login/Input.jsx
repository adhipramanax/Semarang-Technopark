import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import loading from "../../../assets/images/svg/loading.svg";
import userContext from "../../../context/userContext";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

const Input = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { login, setUser } = useContext(userContext);

  const changeEye = () => {
    props.onUpdate(props.password ? false : true);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Loading
    let button = document.querySelector("button[role='button-login']");

    button.innerHTML = `<img src=${loading} alt="" style="height: 100%; opacity: 0.3" />`;
    button.setAttribute("disabled", true);

    let bodyForm = new FormData();

    bodyForm.append("email", email);
    bodyForm.append("password", password);

    axios({
      method: "POST",
      url: "https://cors-anywhere.herokuapp.com/https://apimagang.semarangtechnopark.id/stp/auth/login",
      data: bodyForm,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        // console.log(res);
        let token = res.data.token;
        // let expires = res.data.expires_in;

        // console.log(token);
        login(token, new Date(new Date().getTime() + 200 * 1000));

        //set cookie
        // document.cookie = `token=${res.data.access_token}; expires=${new Date(
        //   new Date().getTime() + res.data.expires_in * 1000
        // )}`;
        // document.cookie = `expires=${new Date(
        //   new Date().getTime() + res.data.expires_in * 1000
        // )}`;

        const cookies = new Cookies();

        cookies.set("jwt_token", token, {
          expires: new Date(new Date().getTime() + 200 * 1000),
          path: "/",
          // httpOnly: true,
          secure: true,
          // domain: "www.stp.com",
        });
        toast.success("Berhasil Masuk");
        var decoded = jwt_decode(token)
        setUser({
          id: decoded.sub,
          user: decoded.user
        })

        // console.log(res.data.access_token);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ulangi, data anda tidak valid");

        button.innerHTML = `Masuk`;
        button.removeAttribute("disabled");
      });
  };

  return (
    <>
      <div className="w-full h-screen xl:w-[35%] xl:mx-0 lg:w-[40%] lg:mx-0 flex flex-col justify-center">
        <Toaster />
        <h1 className="text-white text-center text-2xl xl:text-4xl font-bold mt-2 xl:mt-12 mb-5 lg:mt-9 lg:mb-5">
          Masuk ke Akun
        </h1>
        <form className="flex flex-col items-center gap-4 py-8 px-6 bg-white rounded-[20px]">
          <div className="flex items-center w-full gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
                fill="#F08619"
              />
            </svg>
            <p className="text-sm xl:text-lg lg:text-lg">Email</p>
          </div>
          <div className="w-full">
            <input
              className="w-full rounded-lg px-5 bg-[#F9F9F9] peer "
              placeholder="Masukan Email"
              type="email"
              name="email"
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p class="mt-2 hidden peer-invalid:block text-pink-600 text-sm">
              Email anda tidak valid.
            </p>
          </div>
          {/* <div className="flex items-center w-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#F08619"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5 xl:w-6 xl:h-6 lg:w-5 lg:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p className="text-sm xl:text-lg lg:text-lg">Jenis Akun</p>
          </div> */}
          {/* <div className="w-full">
            <select className="w-full py-2 rounded-lg px-5 bg-[#F9F9F9] text-inherit">
              <option disabled selected>
                Pilih role
              </option>
              <option>Admin</option>
              <option>Mentor</option>
              <option>Tenant</option>
              <option>Juri</option>
              <option>User</option>
            </select>
          </div> */}
          <div className="flex items-center w-full gap-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 7.33332H18.3333C18.5764 7.33332 18.8096 7.4299 18.9815 7.60181C19.1534 7.77372 19.25 8.00688 19.25 8.24999V19.25C19.25 19.4931 19.1534 19.7263 18.9815 19.8982C18.8096 20.0701 18.5764 20.1667 18.3333 20.1667H3.66667C3.42355 20.1667 3.19039 20.0701 3.01849 19.8982C2.84658 19.7263 2.75 19.4931 2.75 19.25V8.24999C2.75 8.00688 2.84658 7.77372 3.01849 7.60181C3.19039 7.4299 3.42355 7.33332 3.66667 7.33332H5.5V6.41666C5.5 4.95797 6.07946 3.55902 7.11091 2.52757C8.14236 1.49612 9.54131 0.916656 11 0.916656C12.4587 0.916656 13.8576 1.49612 14.8891 2.52757C15.9205 3.55902 16.5 4.95797 16.5 6.41666V7.33332ZM14.6667 7.33332V6.41666C14.6667 5.4442 14.2804 4.51156 13.5927 3.82393C12.9051 3.1363 11.9725 2.74999 11 2.74999C10.0275 2.74999 9.09491 3.1363 8.40728 3.82393C7.71964 4.51156 7.33333 5.4442 7.33333 6.41666V7.33332H14.6667ZM10.0833 12.8333V14.6667H11.9167V12.8333H10.0833ZM6.41667 12.8333V14.6667H8.25V12.8333H6.41667ZM13.75 12.8333V14.6667H15.5833V12.8333H13.75Z"
                fill="#F08619"
              />
            </svg>
            <p className="text-sm xl:text-lg lg:text-lg">Kata Sandi</p>
          </div>
          <div className="w-full relative block">
            <input
              className="block w-full rounded-lg pl-5 pr-10 bg-[#F9F9F9]"
              placeholder="Masukan Kata Sandi"
              type={props.password ? "password" : "text"}
              name="password"
              onInput={(e) => {
                setPassword(e.target.value);
              }}
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
              <input
                type="checkbox"
                class="checked:bg-[#F08619] rounded"
                id="ingat"
                name="ingat"
              />
              <label
                htmlFor="ingat"
                className="text-sm xl:text-base lg:text-base cursor-pointer"
              >
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
          <button
            onClick={handleLogin}
            role="button-login"
            className="btn rounded-[16px] bg-[#04A2FF] w-full h-[40px] xl:h-[55px] lg:h-[55px] text-white border-0 hover:bg-blue-700 tracking-wide mt-1 xl:mt-5 lg:mt-5"
          >
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

export default Input;
