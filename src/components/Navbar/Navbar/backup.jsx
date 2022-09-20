<nav class="bg-white border-gray-200 lg:px-2 sm:px-24 lg:py-2.5 rounded bg-transparent ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <Link to="/" class="lg:flex items-center text-white text-lg hidden ">
      Semarang TechSnopark
    </Link>
    {/* Mobile */}
    <div className="drawer drawer-mobile lg:hidden drawer-end">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-end ">
        <label htmlFor="my-drawer-2" className="p-3 text-white lg:hidden ">
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
        </label>
      </div>
      <div className="drawer-side  ">
        <label htmlFor="my-drawer-2" className="drawer-overlay items-end"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content fixed  h-full">
          <div className="flex justify-between  items-center mb-8 mt-7">
            <div className="text-[#D73737] font-bold ">Semarang Technopark</div>
            <label htmlFor="my-drawer-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <li>
            <Link to="/" className="btn-ghost hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="btn-ghost hover:text-red-600">
              Profile
            </Link>
          </li>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <h1 className="collapse-title ">Layanan</h1>
            <div className="collapse-content pl-3">
              {/* <div className="block"> */}
              <Link to="/inkubasi" className="btn-ghost hover:text-red-600 pl-3 py-2 flex gap-2">
                <img src={layanan1} alt="gambar" className="w-1/12" />
                Inkubasi STP
              </Link>
              {/* </div> */}
              <Link to="/sewa-alat" className="btn-ghost hover:text-red-600 pl-3 py-2 flex gap-2">
                <img src={layanan1} alt="gambar" className="w-1/12" />
                <p>Sewa Alat</p>
              </Link>
              <Link to="/co-working" className="btn-ghost hover:text-red-600 pl-3 py-2 flex gap-2">
                <img src={layanan1} alt="gambar" className="w-1/12" />
                Co-Working Space
              </Link>{" "}
              <Link to="/pelatihan" className="btn-ghost hover:text-red-600 pl-3 py-2 flex gap-2">
                <img src={layanan1} alt="gambar" className="w-1/12" />
                Event & Pelatihan
              </Link>
              {/* <Link to="/sewa-alat" className="btn-ghost hover:text-red-600">
                      Sewa Alat
                    </Link>
                    <Link to="/co-working" className="btn-ghost hover:text-red-600">
                      Co-Working Space
                    </Link>
                    <Link to="/pelatihan" className="btn-ghost hover:text-red-600">
                      Event & Pelatihan
                    </Link> */}
              {/* <ul>
                      <li>
                        <Link to="/inkubasi" className="btn-ghost hover:text-red-600">
                          Inkubasi STP
                        </Link>
                      </li>
                      <li>
                        <Link to="/sewa-alat" className="btn-ghost hover:text-red-600">
                          Sewa Alat
                        </Link>
                      </li>
                      <li>
                        <Link to="/co-working" className="btn-ghost hover:text-red-600">
                          Co-Working Space
                        </Link>
                      </li>
                      <li>
                        <Link to="/pelatihan" className="btn-ghost hover:text-red-600">
                          Event & Pelatihan
                        </Link>
                      </li>
                    </ul> */}
            </div>
          </div>
          <li>
            <Link to="/profile" className="btn-ghost hover:text-red-600">
              Partner
            </Link>
          </li>
        </ul>
      </div>
    </div>
    {/* end mobile */}
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <div className="flex justify-center gap-5 items-center">
        <ul className="flex justify-center gap-5 items-center">
          <Link to="/" className="text-white ">
            Home
          </Link>
          <Link to="/profile" className="text-white">
            Profile
          </Link>
          <div className="dropdown dropdown-hover dropdown-end">
            <label tabIndex={0} className=" text-white ">
              Layanan
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[400px] flex flex-row flex-wrap "
            >
              <div className="flex">
                <li>
                  <Link to="/inkubasi">
                    <img className="w-14" src={layanan1} alt="layanan" />
                    Inkubasi STP
                  </Link>
                </li>
                <li>
                  <Link to="/sewa-alat">
                    <img className="w-14" src={layanan1} alt="layanan" />
                    Sewa Alat
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link to="co-working">
                    <img className="w-14" src={layanan1} alt="layanan" />
                    Co-Working Space
                  </Link>
                </li>
                <li>
                  <Link to="/pelatihan">
                    <img className="w-14" src={layanan1} alt="layanan" />
                    Event & Pelatihan
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <Link to="/" className="text-white">
            Partners
          </Link>
        </ul>
        <Link
          to={props.auth}
          class="focus:outline-none text-[#CD0606] bg-white hover:bg-[#F08619] focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm py-3 px-6  hover:text-white"
        >
          {props.title}
        </Link>
      </div>
    </div>
  </div>
</nav>;
