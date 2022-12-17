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
        ...decoded.user,
      };
    }

    return null;
  });
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
    <UserContext.Provider value={{ user, login, logout, setHide }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
