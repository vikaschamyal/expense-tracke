import { FaMoneyBillWave } from 'react-icons/fa'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="card">
      <h1>
        <FaMoneyBillWave /> Expense Tracker
      </h1>
      <button 
        className="theme-toggle btn btn-secondary"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  )
}

export default Header