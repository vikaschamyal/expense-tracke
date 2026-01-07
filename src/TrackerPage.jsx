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
  const [darkMode, setDarkMode] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const userName = localStorage.getItem('userName') || 'User'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <GlobalProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* Header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Welcome back, {userName} 
          </h2>

          {/* Add Transaction */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              + Add Transaction
            </button>
          </div>
          {isModalOpen && <AddTransaction onClose={() => setIsModalOpen(false)} />}

          {/* Dashboard Cards */}
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

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <ExpenseChart />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <MonthlyTrendChart />
            </div>
          </div>

          {/* Filter */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <FilterBar />
          </div>

          {/* Transactions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all max-h-[450px] overflow-y-auto">
            <TransactionList />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default TrackerPage
