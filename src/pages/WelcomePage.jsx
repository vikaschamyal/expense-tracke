import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 px-6">
      <div className="max-w-2xl text-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Expense Tracker 
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Take control of your finances with ease. Track your income, manage your expenses, 
          and see where your money goes — all in one place.
        </p>

        {/* Features */}
        <ul className="text-left text-gray-600 dark:text-gray-400 mb-8 space-y-2">
          <li>✅ Add and categorize transactions</li>
          <li>✅ View income vs expenses at a glance</li>
          <li>✅ Simple, clean, and fast interface</li>
        </ul>

        {/* Get Started Button */}
        <Link
          to="/tracker"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage
