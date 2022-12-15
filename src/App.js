import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";
import userContext from "./context/userContext";
import Cookies from "universal-cookie";

// Landing Page
import LandingPage from "./pages/LandingPage";
import CoWorking from "./pages/CoWorking";
import SewaAlat from "./pages/SewaAlat";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Setting from "./pages/Setting/";
import Profile from "./pages/Profile";
import Inkubasi from "./pages/Inkubasi";
import Verifikasi from "./pages/Auth/Verifikasi";
import Error from "./pages/Error";

// Dashboard User
import Dashboard from "./pages/Dashboard/Dashboard";
import Proposal from "./pages/Dashboard/Proposal";
import Aktivitas from "./pages/Dashboard/Aktivitas";
import Mentoring from "./pages/Dashboard/Mentoring";

// Dashboard Admin
import AdminAlatAdd from "./pages/DashboardAdmin/AlatAdd";
import AdminCoWorkingAdd from "./pages/DashboardAdmin/CoWorkingAdd";
import AdminDashboard from "./pages/DashboardAdmin/Dashboard";
import AdminInkubasi from "./pages/DashboardAdmin/Inkubasi";
import UserManagement from "./pages/DashboardAdmin/UserManagement";
import Mentor from "./pages/DashboardAdmin/Mentor";
import Juri from "./pages/DashboardAdmin/Juri";
import Tenant from "./pages/DashboardAdmin/Tenant";
import Alat from "./pages/DashboardAdmin/Alat";
import DetailAlat from "./pages/DashboardAdmin/DetailAlat";
import AdminAktivitas from "./pages/DashboardAdmin/Aktivitas";
import DetailTenant from "./pages/DashboardAdmin/DetailTenant";
import WorkingSpace from "./pages/DashboardAdmin/WorkingSpace";
import DetailWorkingSpace from "./pages/DashboardAdmin/DetailWorkingSpace";
import Pelatihan from "./pages/DashboardAdmin/Pelatihan";
import DetailPelatihan from "./pages/DashboardAdmin/DetailPelatihan";

// import dashboard tenant
import DashboardTenant from "./pages/DashboardTenant/Dashboard";
import ProposalTenant from "./pages/DashboardTenant/Proposal";
import MentoringTenant from "./pages/DashboardTenant/Mentoring";
import DetailMentoringTenant from "./pages/DashboardTenant/DetailMentoring";
import SewaCoworkingTenant from "./pages/DashboardTenant/SewaCoworking";
import SewaAlatTenant from "./pages/DashboardTenant/SewaAlat";
import ProfileTenant from "./pages/DashboardTenant/ProfileTenant";
import EditProfileTenant from "./pages/DashboardTenant/EditProfileTenant";

// import dashboard talent
import DashboardTalent from "./pages/DashboardTalent/Dashboard";
import PelatihanTalent from "./pages/DashboardTalent/Pelatihan";
import DetailPelatihanTalent from "./pages/DashboardTalent/DetailPelatihan";
import SewaCoworkingTalent from "./pages/DashboardTalent/SewaCoworking";
import SewaAlatTalent from "./pages/DashboardTalent/SewaAlat";
import ProfileTenantTalent from "./pages/DashboardTalent/ProfileTenant";
import ProfileTalentTalent from "./pages/DashboardTalent/ProfileTalent";

// Import dashboard juri
import CalonTenant from "./pages/DashboardJuri/CalonTenant";
import PenilaianTenant from "./pages/DashboardJuri/PenilaianTenant";

// Import dashboard mentor
import DashboardMentor from "./pages/DashboardMentor/Dashboard";
import MentoringMentor from "./pages/DashboardMentor/Mentoring";
import PelatihanMentor from "./pages/DashboardMentor/Pelatihan";
import ProfileMentor from "./pages/DashboardMentor/Profile";

const cookies = new Cookies();

function App() {
  const [user, changeUser] = useState({});
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Ambil dari cookie, cek apabila ada jwtnya

    const jwt_token = cookies.get("jwt_token");

    // Apabila ada jwtnya maka ambil dan decode jwtnya
    try {
      var decoded = jwt_decode(jwt_token);

      changeUser({
        id: decoded.iat,
        name: decoded.user.name,
        email: decoded.user.email,
      });
    } catch (err) {
      changeUser(null);
    }
    // Setelah di decode, panggil fungsi changeUser() dan ganti dengan isi dari jwtnya
  }, []);

  const contextValue = {
    user,
    changeUser,
    hide,
    setHide,
  };

  return (
    <>
      <userContext.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            {/* Page */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/co-working" element={<CoWorking />} />
            <Route path="/sewa-alat" element={<SewaAlat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/inkubasi" element={<Inkubasi />} />
            <Route path="/verifikasi" element={<Verifikasi />} />
            <Route path="/error" element={<Error />} />
            {/* End Page */}

            {/* dashboard user */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/proposal" element={<Proposal />} />
            <Route path="/dashboard/aktivitas" element={<Aktivitas />} />
            <Route path="/dashboard/mentoring" element={<Mentoring />} />

            {/*End dashboard user */}

            {/* dashboard admin */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/add-alat" element={<AdminAlatAdd />} />
            <Route
              path="/admin/add-coworking"
              element={<AdminCoWorkingAdd />}
            />
            <Route path="/admin/user-management" element={<UserManagement />} />
            <Route path="/admin/mentor" element={<Mentor />} />
            <Route path="/admin/juri" element={<Juri />} />
            <Route
              path="/admin/daftar-working-space"
              element={<WorkingSpace />}
            />
            <Route path="/admin/tenant" element={<Tenant />} />
            <Route path="/admin/daftar-alat" element={<Alat />} />
            <Route path="/admin/aktivitas" element={<AdminAktivitas />} />
            <Route
              path="/admin/detail-working-space"
              element={<DetailWorkingSpace />}
            />
            <Route path="/admin/detail-alat" element={<DetailAlat />} />
            <Route
              path="/admin/detail-pelatihan"
              element={<DetailPelatihan />}
            />
            <Route path="/admin/detail-tenant" element={<DetailTenant />} />
            <Route path="/admin/pelatihan" element={<Pelatihan />} />
            <Route path="/admin/inkubasi" element={<AdminInkubasi />} />
            {/*End dashboard admin */}

            {/* dashboard tenant */}
            <Route path="/tenant/dashboard" element={<DashboardTenant />} />
            <Route path="/tenant/proposal" element={<ProposalTenant />} />
            <Route path="/tenant/mentoring" element={<MentoringTenant />} />
            <Route
              path="/tenant/detail-mentoring"
              element={<DetailMentoringTenant />}
            />
            <Route
              path="/tenant/sewa-coworking"
              element={<SewaCoworkingTenant />}
            />
            <Route path="/tenant/sewa-alat" element={<SewaAlatTenant />} />
            <Route path="/tenant/profile-tenant" element={<ProfileTenant />} />
            <Route
              path="/tenant/edit-profile-tenant"
              element={<EditProfileTenant />}
            />
            <Route
              path="/tenant/sewa-coworking"
              element={<SewaCoworkingTenant />}
            />
            {/*End dashboard tenant */}

            {/* dashboard talent */}
            <Route path="/talent/dashboard" element={<DashboardTalent />} />
            <Route path="/talent/pelatihan" element={<PelatihanTalent />} />
            <Route
              path="/talent/detail-pelatihan"
              element={<DetailPelatihanTalent />}
            />
            <Route
              path="/talent/sewa-coworking"
              element={<SewaCoworkingTalent />}
            />
            <Route path="/talent/sewa-alat" element={<SewaAlatTalent />} />
            <Route
              path="/talent/profile-tenant"
              element={<ProfileTenantTalent />}
            />
            <Route
              path="/talent/profile-talent"
              element={<ProfileTalentTalent />}
            />
            {/*End dashboard talent */}

            {/* dashboard juri */}
            <Route path="/juri/calon-tenant" element={<CalonTenant />} />
            <Route
              path="/juri/penilaian-tenant"
              element={<PenilaianTenant />}
            />
            {/*End dashboard juri */}

            {/* dashboard mentor */}
            <Route path="/mentor/dashboard" element={<DashboardMentor />} />
            <Route path="/mentor/pelatihan" element={<PelatihanMentor />} />
            <Route path="/mentor/mentoring" element={<MentoringMentor />} />
            <Route path="/mentor/profile" element={<ProfileMentor />} />
            {/*End dashboard mentor */}

            <Route path="/setting" element={<Setting />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
