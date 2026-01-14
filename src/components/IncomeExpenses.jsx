import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

/* 🔹 Format amount: 1K, 1.2K, 1M */
const formatAmount = (amount) => {
  if (amount >= 1_000_000) {
    return `₹${(amount / 1_000_000).toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `₹${(amount / 1_000).toFixed(1)}K`;
  }
  return `₹${amount.toLocaleString()}`;
};

const IncomeExpenses = () => {
  const { income, expense } = useContext(GlobalContext);

  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">

      {/* HEADER */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Cash Flow Overview
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Total income vs spending
        </p>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-2 gap-6">

        {/* INCOME */}
        <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 p-5">
          <p className="text-xs uppercase tracking-wide text-green-700 dark:text-green-400 font-semibold">
            Income
          </p>
          <p className="mt-2 text-3xl font-extrabold text-green-600 dark:text-green-400 truncate">
            {formatAmount(income)}
          </p>
        </div>

        {/* EXPENSE */}
        <div className="rounded-2xl bg-red-50 dark:bg-red-900/20 p-5">
          <p className="text-xs uppercase tracking-wide text-red-700 dark:text-red-400 font-semibold">
            Expense
          </p>
          <p className="mt-2 text-3xl font-extrabold text-red-600 dark:text-red-400 truncate">
            {formatAmount(expense)}
          </p>
        </div>
      </div>

      {/* FOOTER INSIGHT */}
      <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        {income >= expense ? (
          <span>
            You are operating at a{" "}
            <strong className="text-green-600 dark:text-green-400">
              positive cash flow
            </strong>.
          </span>
        ) : (
          <span>
            Your expenses are higher than income. Consider reviewing your
            spending.
          </span>
        )}
      </div>
    </div>
  );
};

export default IncomeExpenses;
