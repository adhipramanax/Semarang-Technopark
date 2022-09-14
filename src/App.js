import "./App.css";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Verifikasi from './pages/Auth/Verifikasi'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifikasi" element={<Verifikasi />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
