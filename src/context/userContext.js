import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";

// Create context untuk menyimpan data state dari user.
const userContext = createContext();

const cookies = new Cookies();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ambil dari cookie, cek apabila ada jwtnya

    const jwt_token = cookies.get("jwt_token");

    // Apabila ada jwtnya maka ambil dan decode jwtnya
    try {
      var decoded = jwt_decode(jwt_token);

      setUser({
        id: decoded.iat,
        name: decoded.user.name,
        email: decoded.user.email,
      });
    } catch (err) {
      setUser(null);
    }
    // Setelah di decode, panggil fungsi setUser() dan ganti dengan isi dari jwtnya
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};

// Export context agar bisa diimport di file lain.
export default userContext;
