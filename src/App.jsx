import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import TrackerPage from './TrackerPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </Router>
  )
}

export default App
