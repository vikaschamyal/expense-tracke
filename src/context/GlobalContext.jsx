import { createContext, useReducer, useEffect } from 'react'
import AppReducer from '../reducer/AppReducer'

const initialState = {
  transactions: [],
  filters: {
    text: '',
    category: 'all',
    type: 'all',
    startDate: null,
    endDate: null
  }
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem('expenseTracker')
    return localData ? JSON.parse(localData) : initialState
  })

  useEffect(() => {
    localStorage.setItem('expenseTracker', JSON.stringify(state))
  }, [state])

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  function updateFilters(filters) {
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: filters
    })
  }

  function clearFilters() {
    dispatch({
      type: 'CLEAR_FILTERS'
    })
  }

  // Filter transactions based on current filters
  const filteredTransactions = state.transactions.filter(transaction => {
    const textMatch = transaction.text.toLowerCase().includes(state.filters.text.toLowerCase())
    const categoryMatch = state.filters.category === 'all' || transaction.category === state.filters.category
    const typeMatch = state.filters.type === 'all' || transaction.type === state.filters.type
    const dateMatch = 
      (!state.filters.startDate || new Date(transaction.date) >= new Date(state.filters.startDate)) &&
      (!state.filters.endDate || new Date(transaction.date) <= new Date(state.filters.endDate))

    return textMatch && categoryMatch && typeMatch && dateMatch
  })

  // Calculate totals from filtered transactions
  const amounts = filteredTransactions.map(transaction => transaction.amount)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2)
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  // Expense categories for pie chart
  const expenseCategories = filteredTransactions
    .filter(t => t.amount < 0)
    .reduce((acc, transaction) => {
      const category = transaction.category || 'Uncategorized'
      if (!acc[category]) {
        acc[category] = 0
      }
      acc[category] += Math.abs(transaction.amount)
      return acc
    }, {})

  // New: Detect salary transaction
  const salaryTransaction = state.transactions.find(t => 
    t.text.toLowerCase().includes('salary') && t.amount > 0
  )
  const salaryAmount = salaryTransaction ? salaryTransaction.amount : 0

  // Calculate savings and investments as 10% of salary
  const savings = +(salaryAmount * 0.10).toFixed(2)
  const investments = +(salaryAmount * 0.10).toFixed(2)

  return (
    <GlobalContext.Provider
      value={{
        transactions: filteredTransactions,
        allTransactions: state.transactions,
        balance,
        income,
        expense,
        expenseCategories,
        savings,
        investments,
        filters: state.filters,
        deleteTransaction,
        addTransaction,
        updateFilters,
        clearFilters
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
