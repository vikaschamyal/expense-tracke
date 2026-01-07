import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WelcomePage = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-6">
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full max-w-5xl lg:max-w-6xl bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-12 lg:p-16 hover:scale-[1.02] transform transition-all duration-300"
          >
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
            >
              Welcome to CashoraOne
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Take control of your finances with ease. Track your income, manage your expenses, 
              and see where your money goes — all in one place.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 space-y-3 pl-4 list-disc"
            >
              <li>Add and categorize transactions effortlessly</li>
              <li>Visualize income vs expenses at a glance</li>
              <li>Enjoy a clean, fast, and intuitive interface</li>
              <li>Export your data securely in CSV or JSON</li>
            </motion.ul>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 150 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/setup"
                className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 text-center"
              >
                Get Started
              </Link>

              <Link
                to="/tracker"
                className="inline-block px-10 py-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl shadow-md transition-all duration-300 text-center"
              >
                Go to Dashboard
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center"
            >
              Already familiar? You can jump straight into your dashboard.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WelcomePage
