import { useState, useEffect, useCallback } from 'react'
import { GlobalProvider } from './context/GlobalContext'
import Header from './components/layout/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import FilterBar from './components/FilterBar'
import ExpenseChart from './components/ExpenseChart'
import SavingsInvestments from './components/SavingsInvestments'
import MonthlyTrendChart from './components/MonthlyTrendChart'
import Footer from './components/Footer'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Modal from './components/ui/Modal'

const TrackerPage = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const userName = localStorage.getItem('userName') || 'User'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  return (
    <GlobalProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Welcome back, {userName}
          </h2>

          <div className="flex justify-end">
            <Button onClick={openModal} size="md">
              + Add transaction
            </Button>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} title="Add transaction">
            <AddTransaction onClose={closeModal} />
          </Modal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Balance" className="col-span-1">
              <Balance />
            </Card>
            <Card title="Income & expenses" className="col-span-1">
              <IncomeExpenses />
            </Card>
            <Card title="Savings & investments" className="col-span-1">
              <SavingsInvestments />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Expense breakdown">
              <ExpenseChart />
            </Card>
            <Card title="Monthly trend">
              <MonthlyTrendChart />
            </Card>
          </div>

          <Card title="Filters">
            <FilterBar />
          </Card>

          <Card title="Transactions" className="max-h-[450px] overflow-y-auto">
            <TransactionList />
          </Card>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default TrackerPage
