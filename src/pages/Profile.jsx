import { GlobalProvider } from '../context/GlobalContext'
import Header from '../components/layout/Header'
import Card from '../components/ui/Card'
import { useState, useEffect } from 'react'

function Profile() {
  const [darkMode, setDarkMode] = useState(false)
  const userName = localStorage.getItem('userName') || 'User'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <GlobalProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Profile
            </h1>
          </div>

          <Card title="User Information">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <div className="text-sm text-gray-900 dark:text-gray-100">{userName}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default Profile

