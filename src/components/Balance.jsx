import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
  const { balance } = useContext(GlobalContext)

  const scrollToAddTransaction = () => {
    const element = document.getElementById('add-transaction')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center space-y-6">
      <h4 className="text-lg font-medium opacity-90 tracking-wide">Your Balance</h4>
      <h1 className="text-5xl font-extrabold mt-3">₹ {balance}</h1>

      <button
        onClick={scrollToAddTransaction}
        className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Add Transaction
      </button>
    </div>
  )
}

export default Balance
