import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpenses = () => {
  const { income, expense } = useContext(GlobalContext)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex justify-between text-center">
        {/* Income */}
        <div className="flex-1 border-r border-gray-300 dark:border-gray-700">
          <h4 className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide">
            Income
          </h4>
          <p className="text-lg font-semibold text-green-500"> ₹ : {income}</p>
        </div>

        {/* Expense */}
        <div className="flex-1">
          <h4 className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide">
            Expense
          </h4>
          <p className="text-lg font-semibold text-red-500"> ₹ :  {expense}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpenses
