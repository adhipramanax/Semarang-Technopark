import React from "react";
import logo from "../../assets/images/st-logo.png";

const SidebarTemplate = (props) => {
  return (
    <aside class="w-64 h-screen bg-white fixed" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 ">
        <div className="flex justify-center py-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col justify-between">
          <ul class="space-y-2">{props.children}</ul>
        </div>
      </div>
    </aside>
  );
};

export default SidebarTemplate;
