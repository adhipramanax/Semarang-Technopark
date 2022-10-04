import React from "react";
import { Link } from "react-router-dom";

// import dashboard from "../../assets/images/svg/dashboard.svg";
import * as AL from "./accessLevel/index";
import SidebarTemplate from "./SidebarTemplate";

const Sidebar = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let AC = "User";
    for (const key of Object.keys(AL)) {
      if (AC.toLowerCase() === key.toLowerCase()) {
        setData(AL[key]);
      }
    }
  }, [data]);

  return (
    <SidebarTemplate>
      {data.map((data) => {
        return (
          <li>
            <Link
              to={data.route}
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#CD0606] group hover:text-white"
            >
              {data.icon}
              <span class="ml-3">{data.title}</span>
            </Link>
          </li>
        );
      })}
    </SidebarTemplate>
  );
};

export default Sidebar;
