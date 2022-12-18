import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../../context/userContext";
import Cookies from "universal-cookie";
import users from "../../../assets/images/mentor-inkubasi.png";

const Index = (props) => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  // function cekHide(hide) {
  //   if (hide) {
  //     return "w-[calc(100%-64px)]";
  //   } else {
  //     return "w-[calc(100%-256px)]";
  //   }
  // }

  const logout = () => {
    const cookies = new Cookies();

    setUser(null);
    cookies.remove("jwt_token");
    navigate("/");
  };
  return (
    <>
      <nav>
        <div class=" flex flex-wrap justify-between items-center ">
          <a href="#" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap ">
              {props.judul}
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 "
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="flex justify-center items-center  gap-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
            <img className="w-10 mask mask-circle" src={users} alt="user" />
            <div class="dropdown dropdown-content dropdown-end  ">
              <label
                tabindex="0"
                class=" m-1 bg-transparent h-full flex items-center gap-1"
              >
                {user.user.name}
                {/* Verdian Galang */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </label>

              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-6 "
              >
                <li>
                  <Link
                    to="/"
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

                    <p>Home Page</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/setting"
                    className="btn btn-ghost h-full bg-white active:text-black justify-start"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.82 20H8.18001C7.95194 20 7.73071 19.9221 7.55301 19.7792C7.37531 19.6362 7.25181 19.4368 7.20301 19.214L6.79601 17.33C6.25306 17.0921 5.73824 16.7946 5.26101 16.443L3.42401 17.028C3.20657 17.0973 2.97196 17.0902 2.75913 17.0078C2.5463 16.9254 2.36806 16.7727 2.25401 16.575L0.430006 13.424C0.317152 13.2261 0.274789 12.9958 0.309849 12.7708C0.344909 12.5457 0.455315 12.3392 0.623006 12.185L2.04801 10.885C1.9832 10.2961 1.9832 9.70189 2.04801 9.113L0.623006 7.816C0.455078 7.66177 0.344521 7.45507 0.309455 7.22978C0.27439 7.00449 0.316896 6.77397 0.430006 6.576L2.25001 3.423C2.36406 3.22532 2.5423 3.07259 2.75513 2.99019C2.96796 2.90778 3.20257 2.90066 3.42001 2.97L5.25701 3.555C5.50101 3.375 5.75501 3.207 6.01701 3.055C6.27001 2.913 6.53001 2.784 6.79601 2.669L7.20401 0.787C7.25258 0.564198 7.37584 0.364688 7.55335 0.221549C7.73087 0.0784098 7.95197 0.000239966 8.18001 0H11.82C12.048 0.000239966 12.2691 0.0784098 12.4467 0.221549C12.6242 0.364688 12.7474 0.564198 12.796 0.787L13.208 2.67C13.7503 2.90927 14.2649 3.20668 14.743 3.557L16.581 2.972C16.7983 2.90292 17.0327 2.91017 17.2453 2.99256C17.4579 3.07495 17.636 3.22753 17.75 3.425L19.57 6.578C19.802 6.985 19.722 7.5 19.377 7.817L17.952 9.117C18.0168 9.70589 18.0168 10.3001 17.952 10.889L19.377 12.189C19.722 12.507 19.802 13.021 19.57 13.428L17.75 16.581C17.636 16.7787 17.4577 16.9314 17.2449 17.0138C17.0321 17.0962 16.7974 17.1033 16.58 17.034L14.743 16.449C14.2661 16.8003 13.7516 17.0975 13.209 17.335L12.796 19.214C12.7472 19.4366 12.6239 19.6359 12.4464 19.7788C12.2689 19.9218 12.0479 19.9998 11.82 20ZM9.99601 6C8.93514 6 7.91772 6.42143 7.16758 7.17157C6.41743 7.92172 5.99601 8.93913 5.99601 10C5.99601 11.0609 6.41743 12.0783 7.16758 12.8284C7.91772 13.5786 8.93514 14 9.99601 14C11.0569 14 12.0743 13.5786 12.8244 12.8284C13.5746 12.0783 13.996 11.0609 13.996 10C13.996 8.93913 13.5746 7.92172 12.8244 7.17157C12.0743 6.42143 11.0569 6 9.99601 6Z"
                        fill="#605D62"
                      />
                    </svg>

                    <p>Setting Akun</p>
                  </Link>
                </li>
                <li className="border-solid focus:bg-black">
                  <button
                    onClick={() => logout()}
                    className="btn btn-ghost h-full bg-white active:text-black justify-start"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.49 7.19844V7.2V16.8C21.49 18.2946 21.0251 19.4578 20.2364 20.2464C19.4478 21.0351 18.2846 21.5 16.79 21.5H14.2C12.7054 21.5 11.5422 21.0351 10.7536 20.2464C9.96492 19.4578 9.5 18.2946 9.5 16.8V13.25H15.25C15.9361 13.25 16.5 12.6861 16.5 12C16.5 11.3139 15.9361 10.75 15.25 10.75H9.5V7.2C9.5 5.70545 9.96492 4.54218 10.7536 3.75355C11.5422 2.96492 12.7054 2.5 14.2 2.5H16.8C18.2946 2.5 19.4577 2.96497 20.245 3.75331C21.0321 4.54154 21.4947 5.70427 21.49 7.19844Z"
                        fill="#CD0606"
                        stroke="#CD0606"
                      />
                      <path
                        d="M4.20639 10.8963L3.35283 11.7498H4.55994H8.49994V12.2498H4.55994H3.35283L4.20639 13.1034L6.27639 15.1734C6.37113 15.2681 6.37113 15.4316 6.27639 15.5263C6.18165 15.621 6.01823 15.621 5.9235 15.5263L2.57349 12.1763C2.47876 12.0816 2.47876 11.9181 2.57349 11.8234L5.92349 8.4734C6.01823 8.37866 6.18165 8.37866 6.27639 8.4734L6.28248 8.47949L6.28878 8.48537C6.32119 8.51562 6.34994 8.57448 6.34994 8.64984C6.34994 8.71439 6.32768 8.775 6.27639 8.82629L4.20639 10.8963Z"
                        fill="#292D32"
                        stroke="#CD0606"
                      />
                    </svg>

                    <p>Logout</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
