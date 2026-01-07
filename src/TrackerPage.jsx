import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import FilterBar from './components/FilterBar'
import ExpenseChart from './components/ExpenseChart'
import SavingsInvestments from './components/SavingsInvestments'
import MonthlyTrendChart from './components/MonthlyTrendChart'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

const TrackerPage = () => {
  // Dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  // Control modal for adding transactions
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Apply dark class to <html> whenever darkMode changes
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <GlobalProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

          {/* Header with dark mode toggle */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Add Transaction Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              + Add Transaction
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <AddTransaction onClose={() => setIsModalOpen(false)} />
          )}

          {/* Dashboard Cards - quick glance metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <Balance />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <IncomeExpenses />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <SavingsInvestments />
            </div>
          </div>

          {/* Charts section - interactive, explore your spending */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <ExpenseChart />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <MonthlyTrendChart />
            </div>
          </div>

          {/* Filter bar - explore data dynamically */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <FilterBar />
          </div>

          {/* Transaction list - scrollable, sleek look */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all max-h-[450px] overflow-y-auto">
            <TransactionList />
          </div>

          {/* Footer - keep it minimal but professional */}
          <Footer />

        </div>
      </div>
    </GlobalProvider>
  )
}

export default TrackerPage
