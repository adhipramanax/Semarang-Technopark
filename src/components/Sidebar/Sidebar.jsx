import React, { useContext } from "react";
import { Link } from "react-router-dom";

import * as AL from "./accessLevel/index";
import SidebarTemplate from "./SidebarTemplate";

import UserContext from "../../context/userContext";

const Sidebar = () => {
  const [data, setData] = React.useState([]);
  const { user, setHide } = useContext(UserContext);

  React.useEffect(() => {
    // let AC = user.roles[1];
    let AC = user.user.role[0];
    for (const key of Object.keys(AL)) {
      if (AC.toLowerCase() === key.toLowerCase()) {
        setData(AL[key]);
      }
    }
  }, [data]);

  // const handleOver = () => {
  //   hide ? setHide(false) : setHide(true);
  // };
  // const handleOut = () => {
  //   hide ? setHide(true) : setHide(false);
  // };
  // console.log(hide);

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
