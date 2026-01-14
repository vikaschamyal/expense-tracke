import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const TopCategories = () => {
  const { expenseCategories } = useContext(GlobalContext);

  const categories = Object.entries(expenseCategories)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  if (categories.length === 0) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        No expense data available.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {categories.map(([category, amount]) => (
        <div
          key={category}
          className="flex justify-between items-center rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-3"
        >
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {category}
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            ₹{amount.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TopCategories;
