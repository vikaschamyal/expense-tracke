import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import ProfileSetup from './pages/ProfileSetup'
import TrackerPage from './TrackerPage'
import OnboardingComplete from './pages/OnboardingComplete' // optional

function App() {
  return (
    <Router>
      <Routes>
   
        <Route path="/" element={<WelcomePage />} />

 
        <Route path="/setup" element={<ProfileSetup />} />


        <Route path="/onboarding-complete" element={<OnboardingComplete />} />

  
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </Router>
  )
}

export default App
