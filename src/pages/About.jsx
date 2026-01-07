import { GlobalProvider } from '../context/GlobalContext'
import Header from '../components/layout/Header'
import Card from '../components/ui/Card'
import { useState, useEffect } from 'react'

function About() {
  const [darkMode, setDarkMode] = useState(false)

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
              About CashoraOne
            </h1>
          </div>

          <Card title="Overview">
            <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>CashoraOne</strong> is a personal finance dashboard designed to help you
                track expenses, manage income, and understand your financial commitments.
              </p>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Features
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Track income and expenses with categorization</li>
                  <li>View balance and spending patterns</li>
                  <li>Calculate loan EMIs for home, student, and vehicle loans</li>
                  <li>Filter and review transaction history</li>
                  
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Loan Calculators
                </h3>
                <p>
                  Our loan calculators use standard EMI formulas to help you understand monthly
                  payments, total interest, and repayment amounts. All calculations are performed
                  locally in your browser.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CashoraOne stores all data locally in your browser. No data is sent to external
                  servers.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default About

