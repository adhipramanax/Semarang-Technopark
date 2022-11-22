import { createContext } from "react";

// Create context untuk menyimpan data state dari user.
const userContext = createContext();

// Export context agar bisa diimport di file lain.
export default userContext;