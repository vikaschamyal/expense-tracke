import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpenses = () => {
  const { income, expense } = useContext(GlobalContext)
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpenses