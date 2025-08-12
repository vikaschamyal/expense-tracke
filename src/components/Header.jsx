import { FaMoneyBillWave } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <header className="bg-white rounded-xl shadow-md p-5 space-y-4">
      {/* Main Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
          🤑
          Expense Tracker
        </h1>
      </div>

      {/* About Section Toggle */}
      <div>
        <button
          onClick={() => setShowAbout(!showAbout)}
          className="text-sm text-blue-600 hover:underline"
        >
          {showAbout ? 'Hide About' : 'About This App'}
        </button>
      </div>

      {/* About Content */}
      {showAbout && (
        <div className="mt-3 text-sm text-gray-700 leading-relaxed transition-all duration-300 ease-in-out">
          <p>
            Welcome to <strong>Expense Tracker</strong> — your personal and business finance companion.  
            Track your income, expenses, savings, and investments with ease.  
            Perfect for job professionals and business owners who want to manage cash flow, set savings goals, and grow financially.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li> Track income & spending in real-time</li>
            <li> Visualize expenses with charts</li>
            <li> Set savings & investment goals</li>
            <li> Filter & view past transactions</li>
          </ul>
          <p className="mt-2 italic">"Manage your money, before it manages you."</p>
        </div>
      )}
    </header>
  )
}

export default Header
