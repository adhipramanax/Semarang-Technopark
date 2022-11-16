import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const cookies = new Cookies();

// Membuat context baru
const UserContext = createContext(null);

// Create a provider component
export const UserProvider = (props) => {
  const [user, setUser] = useState(() => {
    const token = cookies.get("jwt_token");

    if (token) {
      const decoded = jwtDecode(token);
      return {
        id: decoded.sub,
        ...decoded.user,
      };
    }

    return null;
  });
  const navigate = useNavigate();

  const login = (token, expired_in) => {
    const decoded = jwtDecode(token);

    cookies.set("jwt_token", token, {
      path: "/",
      expires: expired_in,
    });

    setUser({
      id: decoded.sub,
      ...decoded.user,
    });
  };

  const logout = () => {
    cookies.remove("jwt_token");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
