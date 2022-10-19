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
import Aktivitas from "./pages/Dashboard/Aktivitas";
import Mentoring from "./pages/Dashboard/Mentoring";
import AdminAlatAdd from "./pages/DashboardAdmin/AlatAdd";
import AdminCoWorkingAdd from "./pages/DashboardAdmin/CoWorkingAdd";
import AdminDashboard from "./pages/DashboardAdmin/Dashboard";

import Setting from "./pages/Setting/";

import ProfileTenant from "./pages/Dashboard/ProfileTenant";
import EditProfileTenant from "./pages/Dashboard/ProfileTenant/EditProfile";
import Mentor from "./pages/DashboardAdmin/Mentor";
import Juri from "./pages/DashboardAdmin/Juri";
import WorkingSpace from "./pages/DashboardAdmin/WorkingSpace";
import Tenant from "./pages/DashboardAdmin/Tenant";
import Alat from "./pages/DashboardAdmin/Alat";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import AdminAktivitas from "./pages/DashboardAdmin/Aktivitas";

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
        <Route path="/dashboard/aktivitas" element={<Aktivitas />} />
        <Route path="/dashboard/mentoring" element={<Mentoring />} />
        <Route path="/dashboard/profile-tenant" element={<ProfileTenant />} />
        <Route path="/dashboard/edit-profile-tenant" element={<EditProfileTenant />} />

        {/*End dashboard user */}
        {/* dashboard admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-alat" element={<AdminAlatAdd />} />
        <Route path="/admin/add-coworking" element={<AdminCoWorkingAdd />} />
        <Route path="/admin/edit-profile-tenant" element={<EditProfileTenant />} />
        <Route path="/admin/mentor" element={<Mentor />} />
        <Route path="/admin/juri" element={<Juri />} />
        <Route path="/admin/daftar-working-space" element={<WorkingSpace />} />
        <Route path="/admin/tenant" element={<Tenant />} />
        <Route path="/admin/daftar-alat" element={<Alat />} />
        <Route path="/admin/aktivitas" element={<AdminAktivitas />} />

        {/*End dashboard user */}
        <Route path="/nav" element={<NavbarMobile />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
