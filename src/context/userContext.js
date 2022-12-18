import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

const cookies = new Cookies();

// Membuat context baru
const UserContext = createContext(null);

// Create a provider component
export const UserProvider = (props) => {
  const [user, setUser] = useState(() => {
    const token = cookies.get("jwt_token");

    if (token) {
      const decoded = jwt_decode(token);
      return {
        id: decoded.sub,
        user: decoded.user,
      };
      // console.log(decoded.user);
    }

    return null;
  });
  // console.log(user);
  const [hide, setHide] = useState(false)
  const navigate = useNavigate();

  const login = (token, expired_in) => {
    let decoded = jwt_decode(token);
    console.log(decoded);

    cookies.set("jwt_token", token, {
      path: "/",
      expires: expired_in,
    });


    // setUser({
    //   id: decoded.sub,
    //   ...decoded.user,
    // });
  };

  const logout = () => {
    cookies.remove("jwt_token");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, setHide, hide }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
