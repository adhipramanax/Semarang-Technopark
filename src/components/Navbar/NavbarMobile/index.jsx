import React from "react";

const index = () => {
  return (
    <>
      <div className="drawer drawer-mobile lg:hidden ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay items-end "></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <div>Semarang Technopark</div>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <div tabIndex={0} className="collapse collapse-arrow ">
              <h1 className="collapse-title ">Layanan</h1>
              <div className="collapse-content">
                {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                <ul>
                  <li>
                    <a>Inkubasi STP</a>
                  </li>
                  <li>
                    <a>Sewa Alat</a>
                  </li>
                  <li>
                    <a>Co-Working Space</a>
                  </li>
                  <li>
                    <a>Event & Pelatihan</a>
                  </li>
                </ul>
              </div>
            </div>
            <li>
              <a>Partner</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
