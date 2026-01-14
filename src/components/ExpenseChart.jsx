import { useContext, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  "#EF4444",
  "#3B82F6",
  "#F59E0B",
  "#10B981",
  "#8B5CF6",
  "#F43F5E",
  "#22D3EE",
  "#A78BFA",
  "#F97316",
];

const ExpenseChart = () => {
  const { expenseCategories } = useContext(GlobalContext);

  const hasData =
    expenseCategories &&
    Object.keys(expenseCategories).length > 0;

  /* ❌ If no real data → show empty state */
  if (!hasData) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 min-h-[420px] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Expense Analytics
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm">
          No expense data available yet. Add expenses to view category-wise
          spending analytics.
        </p>
      </div>
    );
  }

  const labels = Object.keys(expenseCategories);
  const values = Object.values(expenseCategories);

  const totalExpense = useMemo(
    () => values.reduce((sum, v) => sum + v, 0),
    [values]
  );

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: COLORS.slice(0, labels.length),
        borderWidth: 4,
        borderColor: "#0f172a",
        hoverOffset: 10,
        cutout: "72%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#020617",
        titleColor: "#fff",
        bodyColor: "#e5e7eb",
        padding: 14,
        cornerRadius: 12,
        callbacks: {
          label: (ctx) =>
            `${ctx.label}: ₹${ctx.raw.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 min-h-[480px]">

      {/* HEADER */}
      <div className="mb-6">
        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Expense Analytics
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Category-wise spending distribution
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

        {/* CHART */}
        <div className="relative h-[320px] flex items-center justify-center">
          <Doughnut data={data} options={options} />

          {/* CENTER TOTAL */}
          <div className="absolute text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Spent
            </p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
              ₹{totalExpense.toLocaleString()}
            </p>
          </div>
        </div>

        {/* LEGEND / KPI LIST */}
        <div className="flex flex-col justify-center gap-4">
          {labels.map((label, index) => {
            const value = values[index];
            const percent = ((value / totalExpense) * 100).toFixed(1);

            return (
              <div
                key={label}
                className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: COLORS[index],
                    }}
                  />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {label}
                  </span>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    ₹{value.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {percent}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
