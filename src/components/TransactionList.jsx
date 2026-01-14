import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl px-6 py-7 sm:px-8">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
            Transactions
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Recent income and expense activity
          </p>
        </div>
      </div>

      {/* CONTENT */}
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            No transactions yet
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Add your first transaction to get started
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={deleteTransaction}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
