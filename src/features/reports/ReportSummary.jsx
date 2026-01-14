import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ReportSummary = () => {
  const { income, expense, balance } = useContext(GlobalContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 p-5">
        <p className="text-xs font-semibold text-green-700 dark:text-green-400">
          Income
        </p>
        <p className="text-2xl font-extrabold text-green-600 dark:text-green-400">
          ₹{Number(income).toLocaleString()}
        </p>
      </div>

      <div className="rounded-2xl bg-red-50 dark:bg-red-900/20 p-5">
        <p className="text-xs font-semibold text-red-700 dark:text-red-400">
          Expense
        </p>
        <p className="text-2xl font-extrabold text-red-600 dark:text-red-400">
          ₹{Number(expense).toLocaleString()}
        </p>
      </div>

      <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
          Balance
        </p>
        <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
          ₹{Number(balance).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ReportSummary;
