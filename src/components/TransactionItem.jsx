import { FaTrash } from 'react-icons/fa'
import { formatDate } from '../utils/formatters'

const TransactionItem = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+'
  const amountColor =
    transaction.amount < 0 ? 'text-red-500' : 'text-green-500'

  return (
    <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
      {/* Transaction Info */}
      <div className="flex flex-col">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {transaction.text}
        </span>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-2">
          <span>{formatDate(transaction.date)}</span>
          {transaction.category && (
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
              {transaction.category}
            </span>
          )}
        </div>
      </div>

      {/* Amount + Delete */}
      <div className="flex items-center space-x-3">
        <span className={`font-semibold ${amountColor}`}>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => onDelete(transaction.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Delete transaction"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
