import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OnboardingComplete = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // automatically redirect after 2s
    const timer = setTimeout(() => {
      navigate('/tracker')
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 px-6">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Set!</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">Welcome to CashoraOne. Redirecting to your dashboard...</p>
      </div>
    </div>
  )
}

export default OnboardingComplete
