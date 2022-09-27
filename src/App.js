import "./App.css";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CoWorking from "./pages/CoWorking";
import SewaAlat from "./pages/SewaAlat";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Profile from "./pages/Profile";
import Inkubasi from "./pages/Inkubasi";
import Verifikasi from "./pages/Auth/Verifikasi";
import Error from "./pages/Error";
import Proposal from "./pages/Dashboard/Proposal";
import Aktifitas from "./pages/Dashboard/Aktifitas";
import Mentoring from "./pages/Dashboard/Mentoring";
import AdminAlatAdd from "./pages/Dashboard/AdminAlatAdd";
import AdminCoWorkingAdd from "./pages/Dashboard/AdminCoWorkingAdd";

import ProfileTenant from "./pages/Dashboard/ProfileTenant";
import {ProfileTenant, EditProfileTenant} from "./pages/Dashboard/ProfileTenant";
// import EditProfileTenant from "./pages/Dashboard/ProfileTenant/EditProfileTenant";
import NavbarMobile from "./components/Navbar/NavbarMobile";

function App() {
  return (
    <>
      <Routes>
        {/* Page */}
        <Route path="/" element={<LandingPage />} />
        {/* End Page */}
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/co-working" element={<CoWorking />} />
        <Route path="/sewa-alat" element={<SewaAlat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inkubasi" element={<Inkubasi />} />
        <Route path="/verifikasi" element={<Verifikasi />} />
        <Route path="/error" element={<Error />} />
        {/* End Auth */}
        {/* dashboard user */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/proposal" element={<Proposal />} />
        <Route path="/dashboard/aktifitas" element={<Aktifitas />} />
        <Route path="/dashboard/mentoring" element={<Mentoring />} />
        <Route path="/dashboard/profile-tenant" element={<ProfileTenant />} />
        <Route path="/dashboard/add-alat" element={<AdminAlatAdd />} />
        <Route
          path="/dashboard/add-coworking"
          element={<AdminCoWorkingAdd />}
        />
        <Route path="/dashboard/edit-profile-tenant" element={<EditProfileTenant />} />
        {/*End dashboard user */}
        <Route path="/nav" element={<NavbarMobile />} />
      </Routes>
    </>
  );
}

export default App;
