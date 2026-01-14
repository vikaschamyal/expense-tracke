import { useState, useEffect, useCallback } from "react";
import { GlobalProvider } from "./context/GlobalContext";

import Header from "./components/layout/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import FilterBar from "./components/FilterBar";
import ExpenseChart from "./components/ExpenseChart";
import SavingsInvestments from "./components/SavingsInvestments";
import MonthlyTrendChart from "./components/MonthlyTrendChart";
import Footer from "./components/Footer";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Modal from "./components/ui/Modal";
import ChatBotWidget from "./components/chatbot/ChatBotWidget";

import DashboardLoader from "./components/ui/DashboardLoader";
import QuickOverviewModal from "./components/ui/QuickOverviewModal";

const TrackerPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showOverview, setShowOverview] = useState(false);

  const userName = localStorage.getItem("userName") || "User";

  /* Dark mode */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* Dashboard loader */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  /* One-time overview popup */
  useEffect(() => {
    const seen = localStorage.getItem("ledgerly_overview_seen");
    if (!seen) {
      setShowOverview(true);
    }
  }, []);

  const closeOverview = () => {
    localStorage.setItem("ledgerly_overview_seen", "true");
    setShowOverview(false);
  };

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  /* Loader screen */
  if (loading) {
    return <DashboardLoader />;
  }

  return (
    <GlobalProvider>
      {showOverview && <QuickOverviewModal onClose={closeOverview} />}

      <div
        className={`min-h-screen bg-slate-50 dark:bg-slate-950 transition-all duration-300
        ${showOverview ? "blur-sm pointer-events-none" : ""}`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Welcome back, {userName}
          </h2>

          <div className="flex justify-end">
            <Button onClick={openModal}>+ Add transaction</Button>
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal} title="Add transaction">
            <AddTransaction onClose={closeModal} />
          </Modal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Balance">
              <Balance />
            </Card>
            <Card title="Income & expenses">
              <IncomeExpenses />
            </Card>
            <Card title="Savings & investments">
              <SavingsInvestments />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Expense breakdown">
              <ExpenseChart />
            </Card>
            <Card title="Monthly trend">
              <MonthlyTrendChart />
            </Card>
          </div>

          <Card title="Filters">
            <FilterBar />
          </Card>

          <Card title="Transactions" className="max-h-[450px] overflow-y-auto">
            <TransactionList />
          </Card>

          <Footer />
          <ChatBotWidget />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default TrackerPage;
