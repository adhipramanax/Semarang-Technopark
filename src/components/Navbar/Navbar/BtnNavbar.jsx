import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../../../context/userContext';
import Cookies from 'universal-cookie';
import { FaUserCircle } from 'react-icons/fa';
import { BiChevronDown, BiLogOut } from 'react-icons/bi';
import { RiHome5Fill } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';

const BtnNavbar = () => {
  const { user, changeUser } = useContext(userContext);
  // const user = {
  //   name: 'Verdian Galang',
  // };
  const navigate = useNavigate();

  const logout = () => {
    const cookies = new Cookies();

    changeUser(null);
    cookies.remove('jwt_token');
    navigate('/');
  };

  return (
    <>
      <div className="dropdown dropdown-content dropdown-end bg-white  focus:ring-4 font-bold rounded-full text-sm py-2 px-4">
        <label
          tabindex="0"
          className="bg-transparent flex items-center"
        >
          <FaUserCircle className="text-lg fill-stp-primary-500 mr-2" />
          <span className="hidden xsm:block">{user.name}</span>
          <BiChevronDown className="text-2xl fill-stp-primary-500 ml-0 xsm:ml-1" />
        </label>
        {/* dropdown link */}
        <ul
          tabindex="0"
          className="dropdown-content menu p-2 shadow bg-white rounded-xl w-52 mt-6"
        >
          <li>
            <Link
              to="/"
              className="btn btn-ghost bg-white active:text-black justify-start !p-3"
            >
              <RiHome5Fill className="text-xl fill-stp-primary-500" />
              <p>Home Page</p>
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
