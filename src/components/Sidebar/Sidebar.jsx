import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../context/userContext";

import * as AL from "./accessLevel/index";
import SidebarTemplate from "./SidebarTemplate";

const Sidebar = () => {
  const [data, setData] = React.useState([]);
  const { hide, setHide } = useContext(userContext);

  React.useEffect(() => {
    let AC = "admin";
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
          <li className="pb-2">
            <Link
              to={data.route}
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#CD0606] group hover:text-white"

            >
              <span onMouseOver={() => setHide(false)}>{data.icon}</span>
              <span class="ml-3 truncate">{data.title}</span>
            </Link>
          </li>
        );
      })}
    </SidebarTemplate>
  );
};

export default Sidebar;
