import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const QuickInsights = () => {
  const { income, expense } = useContext(GlobalContext);

  if (income === 0 && expense === 0) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Add transactions to see insights.
      </p>
    );
  }

  return (
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
      {income > expense && (
        <li>You are saving more than you spend. Good financial control.</li>
      )}
      {expense > income && (
        <li>Your expenses exceed income. Review spending categories.</li>
      )}
      {expense > income * 0.7 && (
        <li>Expenses are consuming a large portion of income.</li>
      )}
    </ul>
  );
};

export default QuickInsights;
