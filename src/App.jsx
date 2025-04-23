import { useState, useEffect } from 'react'
import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import FilterBar from './components/FilterBar'
import ExpenseChart from './components/ExpenseChart'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode'
  }, [darkMode])

  return (
    <GlobalProvider>
      <div className={`container ${darkMode ? 'dark' : ''}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Balance />
        <IncomeExpenses />
        <ExpenseChart />
        <FilterBar />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App