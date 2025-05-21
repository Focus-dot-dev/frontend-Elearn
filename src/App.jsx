import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modules from "./Pages/Modules/modules.jsx";
import Dashboard from "./Pages/Dashboard/dashboard.jsx";
import Assessment from "./Pages/Assessment/assessment.jsx";
import Login from "./Pages/Login/login.jsx";
import Donation from "./Pages/Donation/donation.jsx";
import Profile from "./Pages/Profile/profile.jsx";
import LearningScreen from "./Pages/LearningScreen/learningScreen.jsx";
import Enroll from "./Pages/enroll/enroll.jsx";
import EnrollMore from "./Pages/enrollMore/enrollMore.jsx";
import SignUp from "./Pages/SignUp/signUp.jsx";
import HomePage from "./Pages/homePage/HomePage.jsx";
import Afterenroll from "./Pages/afterEnroll/AfterEnroll.jsx";
import LoggedinContact from "./Pages/loggedinContact/loggedincontact.jsx";
import CombinedHeroContact from "./Pages/CombinedHeroContact copy/CombinedHeroContact.jsx";
import MessagingInterface from "./Pages/messages/messages.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<CombinedHeroContact />} />

          {/* Protected Pages */}
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <MessagingInterface />
              </ProtectedRoute>
            }
          />
          <Route
            path="/modules"
            element={
              <ProtectedRoute>
                <Modules />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessment"
            element={
              <ProtectedRoute>
                <Assessment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/donations"
            element={
              <ProtectedRoute>
                <Donation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learn"
            element={
              <ProtectedRoute>
                <LearningScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/enroll"
            element={
              <ProtectedRoute>
                <Enroll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/afterenroll"
            element={
              <ProtectedRoute>
                <Afterenroll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/enrollmore"
            element={
              <ProtectedRoute>
                <EnrollMore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact_us"
            element={
              <ProtectedRoute>
                <LoggedinContact />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
