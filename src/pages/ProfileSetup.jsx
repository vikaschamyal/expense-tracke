import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileSetup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [usage, setUsage] = useState('personal') // default

  const handleNext = () => {
    // save to localStorage or Context API
    localStorage.setItem('userName', name || 'User')
    localStorage.setItem('usageType', usage)

    navigate('/tracker')
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 px-6">
      <div className="max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Set Up Your Profile</h2>
        <p className="text-gray-700 dark:text-gray-300">This helps us personalize your experience.</p>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />

        {/* Usage Selection */}
        <div className="flex flex-col space-y-2 text-left">
          <label className="text-gray-700 dark:text-gray-300">How do you plan to use CashoraOne?</label>
          <select
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="personal">Personal Finance / Expenses</option>
            <option value="explore">Just exploring / trying out</option>
            <option value="work">Work / Business tracking</option>
            <option value="skip">Skip for now</option>
          </select>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="mt-4 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ProfileSetup
