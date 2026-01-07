import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import ProfileSetup from './pages/ProfileSetup'
import TrackerPage from './TrackerPage'
import OnboardingComplete from './pages/OnboardingComplete'
import HomeLoan from './features/loans/HomeLoan'
import StudentLoan from './features/loans/StudentLoan'
import VehicleLoan from './features/loans/VehicleLoan'
import Reports from './pages/Reports'
import About from './pages/About'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

import FAQ from './components/FAQ'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/setup" element={<ProfileSetup />} />
        <Route path="/onboarding-complete" element={<OnboardingComplete />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/loans/home" element={<HomeLoan />} />
        <Route path="/loans/student" element={<StudentLoan />} />
        <Route path="/loans/vehicle" element={<VehicleLoan />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
