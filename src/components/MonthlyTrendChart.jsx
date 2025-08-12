import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const MonthlyTrendChart = () => {
  const { expenseCategories } = useContext(GlobalContext);

  if (!expenseCategories || Object.keys(expenseCategories).length === 0) return null;

  const labels = Object.keys(expenseCategories); // Category names
  const values = Object.values(expenseCategories); // Amounts per category

  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses by Category',
        data: values,
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        tension: 0.4,
        pointBackgroundColor: '#1E40AF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#3B82F6',
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#374151' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#374151' },
        grid: { color: 'rgba(156, 163, 175, 0.2)' } // light gray grid
      },
      y: {
        ticks: { color: '#374151' },
        grid: { color: 'rgba(156, 163, 175, 0.2)' }
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        Expenses by Category (Line View)
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default MonthlyTrendChart;
