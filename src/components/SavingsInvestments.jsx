import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const SavingsInvestments = () => {
  const { savings, investments } = useContext(GlobalContext)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-md mx-auto mt-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Savings & Investments
      </h3>
      <div className="flex justify-between text-gray-700 dark:text-gray-300">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-green-600">₹ {savings}</span>
          <span className="text-sm">Savings (10% of Salary)</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-blue-600">₹ {investments}</span>
          <span className="text-sm">Investments (10% of Salary)</span>
        </div>
      </div>
    </div>
  )
}

export default SavingsInvestments
