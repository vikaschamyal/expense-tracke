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
          '#EF4444', '#3B82F6', '#F59E0B', '#10B981',
          '#8B5CF6', '#F43F5E', '#22D3EE', '#A78BFA', '#F97316'
        ],
        hoverBackgroundColor: [
          '#B91C1C', '#1E40AF', '#78350F', '#047857',
          '#6D28D9', '#BE123C', '#0E7490', '#6D28D9', '#C2410C'
        ],
        borderWidth: 1,
        borderColor: '#fff'
      }
    ]
  }

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#374151', // Tailwind gray-700
          font: { size: 14, weight: '600' }
        }
      }
    },
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        Expense Breakdown
      </h3>
      <div className="h-64 md:h-80">
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default ExpenseChart
