import { FaTrash } from 'react-icons/fa'
import { formatDate } from '../utils/formatters'

const TransactionItem = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+'
  const amountColor = transaction.amount < 0 ? 'minus' : 'plus'

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div>
        <span style={{ marginRight: '10px' }}>{transaction.text}</span>
        <small style={{ color: '#777' }}>{formatDate(transaction.date)}</small>
        {transaction.category && (
          <small style={{ marginLeft: '10px', color: '#777' }}>
            {transaction.category}
          </small>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className={`money ${amountColor}`}>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => onDelete(transaction.id)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--danger-color)',
            cursor: 'pointer',
            marginLeft: '10px'
          }}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem