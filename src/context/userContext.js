import { createContext } from "react";

// Create context untuk menyimpan data state dari user.
const user = createContext();

// Export context agar bisa diimport di file lain.
export default user;