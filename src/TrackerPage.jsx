import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import FilterBar from './components/FilterBar'
import ExpenseChart from './components/ExpenseChart'
import SavingsInvestments from './components/SavingsInvestments' // new component
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import MonthlyTrendChart from './components/MonthlyTrendChart'

const TrackerPage = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <GlobalProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <AddTransaction />

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 space-y-4">
            <Balance />
            <IncomeExpenses />
            <SavingsInvestments />  {/* added here */}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
            <ExpenseChart />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
            <MonthlyTrendChart/>
            
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
            <FilterBar />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
            <TransactionList />

          </div>
          <Footer/>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default TrackerPage
