import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import TransactionItem from './TransactionItem'

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext)

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-3xl mx-auto sm:p-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 text-center sm:text-left">
        Transactions
      </h3>

      {transactions.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg py-8">
          No transactions yet
        </p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={deleteTransaction}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TransactionList
