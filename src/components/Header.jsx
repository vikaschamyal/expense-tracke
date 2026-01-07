
import { useState } from 'react'

const Header = () => {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-4">
      
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold flex items-center gap-3 text-gray-900 dark:text-white">
          
          CashoraOne
        </h1>

        <button
          onClick={() => setShowAbout(!showAbout)}
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline transition"
        >
          {showAbout ? 'Hide details' : 'What is this app?'}
        </button>
      </div>

      {/* About  */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showAbout ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
          <p>
            <strong>CashoraOne</strong> is a practical expense and income tracking tool designed
            to help individuals and small professionals stay in control of their finances.
            It focuses on clarity, simplicity, and real-world usability.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Record income and expenses with clear categorization</li>
            <li>Instantly view balance and monthly spending patterns</li>
            <li>Track savings and financial goals over time</li>
            <li>Filter and review past transactions efficiently</li>
          </ul>

          <p className="text-xs italic text-gray-500 dark:text-gray-400">
            Built for people who want a simple system to understand and improve their money habits.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
