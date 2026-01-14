import { useContext, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

/* 🔹 Sample fallback (professional monthly trend) */
const SAMPLE_MONTHLY_DATA = {
  Jan: 8200,
  Feb: 7600,
  Mar: 9100,
  Apr: 8800,
  May: 10200,
  Jun: 9700,
};

const MonthlyTrendChart = () => {
  const { expenseCategories } = useContext(GlobalContext);

  const hasRealData =
    expenseCategories && Object.keys(expenseCategories).length > 0;

  const chartSource = hasRealData
    ? expenseCategories
    : SAMPLE_MONTHLY_DATA;

  const labels = Object.keys(chartSource);
  const values = Object.values(chartSource);

  const data = {
    labels,
    datasets: [
      {
        label: hasRealData
          ? "Expense distribution"
          : "Sample monthly expense trend",
        data: values,
        borderColor: "#2563EB", // blue-600
        backgroundColor: "rgba(37, 99, 235, 0.08)",
        tension: 0.45,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#2563EB",
        pointBorderColor: "#FFFFFF",
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#020617",
        titleColor: "#fff",
        bodyColor: "#E5E7EB",
        padding: 12,
        cornerRadius: 10,
        callbacks: {
          label: (ctx) =>
            `₹ ${ctx.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280",
          font: { weight: "500" },
        },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: "#6B7280",
          callback: (value) => `₹${value / 1000}k`,
        },
        grid: {
          color: "rgba(148, 163, 184, 0.2)",
          borderDash: [6, 6],
        },
      },
    },
  };

  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 min-h-[420px]">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Monthly Expense Trend
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Spending movement over time
          </p>
        </div>

        {!hasRealData && (
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            Sample data
          </span>
        )}
      </div>

      {/* CHART */}
      <div className="h-[280px]">
        <Line data={data} options={options} />
      </div>

      {/* FOOT NOTE */}
      {!hasRealData && (
        <p className="absolute bottom-5 right-8 text-xs text-gray-400">
          Add expenses to see your actual monthly trend
        </p>
      )}
    </div>
  );
};

export default MonthlyTrendChart;
