import { GlobalProvider } from '../context/GlobalContext'
import Header from '../components/layout/Header'
import Card from '../components/ui/Card'
import { useState, useEffect } from 'react'

function Reports() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <GlobalProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Reports
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              View detailed financial reports and insights.
            </p>
          </div>

          <Card title="Coming Soon">
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <p>Reports feature is under development.</p>
              <p className="mt-2 text-sm">
                This section will include spending summaries, category breakdowns, and export
                options.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default Reports

