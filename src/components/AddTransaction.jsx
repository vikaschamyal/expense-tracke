import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { v4 as uuidv4 } from 'uuid'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [type, setType] = useState('expense')

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: type === 'income' ? +amount : -amount,
      category,
      date,
      type
    }

    addTransaction(newTransaction)
    setText('')
    setAmount('')
    setCategory('')
    setDate(new Date().toISOString().split('T')[0])
  }

  return (
    <div className="card">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            className="form-control"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="category" className="form-label">
            Category (optional)
          </label>
          <input
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)}
            placeholder="Enter category..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" style={{ marginTop: '10px' }}>
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default AddTransaction