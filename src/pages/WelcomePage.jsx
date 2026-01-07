import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WelcomePage = () => {
  const [loaded, setLoaded] = useState(false)

  // Lazy/fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 px-6">
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl text-center bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 hover:scale-[1.02] transform transition-all duration-300"
          >
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Welcome to CashoraOne
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
            >
              Take control of your finances with ease. Track your income, manage your expenses, 
              and see where your money goes — all in one place.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-left text-gray-600 dark:text-gray-400 mb-8 space-y-2"
            >
              <li> ◦ Add and categorize transactions</li>
              <li> ◦ View income vs expenses at a glance</li>
              <li> ◦ Clean, fast, and intuitive interface</li>
            </motion.ul>

            {/* Get Started Button */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 150 }}
            >
              <Link
                to="/setup"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Optional Skip */}
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Already familiar? <Link to="/tracker" className="text-blue-600 hover:underline">Go directly to dashboard</Link>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WelcomePage
