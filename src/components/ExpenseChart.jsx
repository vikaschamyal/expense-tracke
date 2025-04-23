import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const ExpenseChart = () => {
  const { expenseCategories } = useContext(GlobalContext)

  if (Object.keys(expenseCategories).length === 0) return null

  const data = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#8AC24A',
          '#F06292',
          '#7986CB'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#8AC24A',
          '#F06292',
          '#7986CB'
        ]
      }
    ]
  }

  const options = {
    plugins: {
      legend: {
        position: 'right'
      }
    },
    maintainAspectRatio: false
  }

  return (
    <div className="card">
      <h3>Expense Breakdown</h3>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default ExpenseChart