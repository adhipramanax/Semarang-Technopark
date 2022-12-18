import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../../context/userContext";
import Cookies from "universal-cookie";
import { FaUserCircle } from "react-icons/fa";
import { BiChevronDown, BiLogOut } from "react-icons/bi";
import { RiHome5Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

const BtnNavbar = () => {
  // const { user, logout } = useContext(userContext);
  // const navigate = useNavigate();

  const { user, setUser } = useContext(userContext);
  // const user = {
  //   name: 'Verdian Galang',
  // };
  const navigate = useNavigate();

  const logout = () => {
    const cookies = new Cookies();

    setUser(null);
    cookies.remove("jwt_token");
    navigate("/");
  };

  return (
    <>
      <div className="dropdown dropdown-content dropdown-end bg-white  focus:ring-4 font-bold rounded-full text-sm py-2 px-4">
        <label tabindex="0" className="bg-transparent flex items-center">
          <FaUserCircle className="text-lg fill-stp-primary-500 mr-2" />
          <span className="hidden xsm:block">{user.user.name}</span>
          <BiChevronDown className="text-2xl fill-stp-primary-500 ml-0 xsm:ml-1" />
        </label>
        {/* dropdown link */}
        <ul
          tabindex="0"
          className="dropdown-content menu p-2 shadow bg-white rounded-xl w-52 mt-6"
        >
          <li>
            <Link
              to={`/${user.user.role}/dashboard`}
              className="btn btn-ghost h-full bg-white active:text-black justify-start"
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.04 4.82018L13.28 0.790182C11.71 -0.309818 9.29999 -0.249818 7.78999 0.920182L2.77999 4.83018C1.77999 5.61018 0.98999 7.21018 0.98999 8.47018V15.3702C0.98999 17.9202 3.05999 20.0002 5.60999 20.0002H16.39C18.94 20.0002 21.01 17.9302 21.01 15.3802V8.60018C21.01 7.25018 20.14 5.59018 19.04 4.82018ZM11.75 16.0002C11.75 16.4102 11.41 16.7502 11 16.7502C10.59 16.7502 10.25 16.4102 10.25 16.0002V13.0002C10.25 12.5902 10.59 12.2502 11 12.2502C11.41 12.2502 11.75 12.5902 11.75 13.0002V16.0002Z"
                  fill="#605D62"
                />
              </svg>

              <p>Dashboard</p>
              {/* to="/"
              className="btn btn-ghost bg-white active:text-black justify-start !p-3"
            >
              <RiHome5Fill className="text-xl fill-stp-primary-500" />
              <p>Home Page</p> */}
            </Link>
          </li>
          <li>
            <Link
              to="/setting"
              className="btn btn-ghost !p-3 bg-white active:text-black justify-start"
            >
              <IoMdSettings className="text-xl fill-stp-primary-500" />
              <p>Setting Akun</p>
            </Link>
          </li>
          <hr className="mt-2 mb-3" />
          <li className="border-solid focus:bg-black">
            <button
              onClick={() => logout()}
              className="btn btn-error !p-3 bg-white active:text-black justify-start !border-none"
            >
              <BiLogOut className="text-xl fill-stp-primary-500" />
              <p>Logout</p>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BtnNavbar;
