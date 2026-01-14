import { GlobalProvider } from "../context/GlobalContext";
import Header from "../components/layout/Header";
import Card from "../components/ui/Card";
import { useState, useEffect } from "react";

import ReportSummary from "../features/reports/ReportSummary";
import TopCategories from "../features/reports/TopCategories";
import QuickInsights from "../features/reports/QuickInsights";
import TransactionList from "../components/TransactionList";
import FilterBar from "../components/FilterBar";




function Reports() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <GlobalProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Reports
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Financial summary and insights
            </p>
          </div>
          <Card>
            <FilterBar/>


          </Card>

          <Card title="Summary">
            <ReportSummary />
          </Card>

          <Card title="Top Expense Categories">
            <TopCategories />
          </Card>

          <Card title="Insights">
            <QuickInsights />
          </Card>
          {/* <Card>
            <TransactionList />
          </Card> */}

        </div>
      </div>
    </GlobalProvider>
  );
}

export default Reports;
