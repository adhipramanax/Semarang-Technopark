import React from "react";
import { useContext } from "react";
import logo from "../../assets/images/st-logo.png";
import userContext from "../../context/userContext";
import Setting from "./Setting";

const SidebarTemplate = (props) => {
  const { hide, setHide } = useContext(userContext);

  // console.log(hide);
  const handleHide = () => {
    hide ? setHide(false) : setHide(true)
  }

  function cekHide(hide) {
    if (hide) {
      return "w-16"
    } else {
      return "w-64"
    }
  }
  return (
    <aside class={`${cekHide(hide)} h-screen bg-white fixed flex justify-between flex-col duration-500 ease-out`} aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 -z-10">
        <div className="flex justify-center py-5">
          {/* <img src={logo} alt="logo" /> */}
          <button
            id="hamburger"
            className="button-toggle flex flex-col justify-center align-center gap-[3px] absolute right-[20px] top-[20px] z-[100]"
            onClick={handleHide}
          >
            <span className="w-[20px] h-[2px] bg-black"></span>
            <span className="w-[20px] h-[2px] bg-black"></span>
            <span className="w-[20px] h-[2px] bg-black"></span>
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <ul class="space-y-2">{props.children}</ul>
        </div>
      </div>
      <Setting />
    </aside>
  );
};

export default SidebarTemplate;
