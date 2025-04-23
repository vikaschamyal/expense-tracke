import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import TransactionItem from './TransactionItem'

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext)

  return (
    <div className="card">
      <h3>Transactions</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <ul style={{ listStyle: 'none' }}>
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