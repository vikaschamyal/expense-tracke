import { FaTrash } from "react-icons/fa";
import { formatDate } from "../utils/formatters";

/* Format amount professionally */
const formatAmount = (amount) => {
  const abs = Math.abs(amount);

  if (abs >= 1_000_000) return `₹${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `₹${(abs / 1_000).toFixed(1)}K`;

  return `₹${abs.toLocaleString()}`;
};

const TransactionItem = ({ transaction, onDelete }) => {
  const isExpense = transaction.amount < 0;

  return (
    <li
      className="
        group flex items-center justify-between gap-4
        rounded-xl px-4 py-3
        bg-white dark:bg-slate-900
        hover:bg-slate-50 dark:hover:bg-slate-800
        transition-colors
      "
    >
      {/* LEFT: INFO */}
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 dark:text-gray-100 truncate">
          {transaction.text}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span>{formatDate(transaction.date)}</span>

          {transaction.category && (
            <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-2 py-0.5 font-medium text-slate-700 dark:text-slate-300">
              {transaction.category}
            </span>
          )}
        </div>
      </div>

      {/* RIGHT: AMOUNT + ACTION */}
      <div className="flex items-center gap-4">

        {/* AMOUNT */}
        <span
          className={`text-sm font-extrabold ${
            isExpense
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {isExpense ? "-" : "+"}
          {formatAmount(transaction.amount)}
        </span>

        {/* DELETE (on hover) */}
        <button
          onClick={() => onDelete(transaction.id)}
          aria-label="Delete transaction"
          className="
            opacity-0 group-hover:opacity-100
            text-slate-400 hover:text-red-500
            transition
          "
        >
          <FaTrash size={14} />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
