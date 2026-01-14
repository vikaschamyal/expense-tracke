import { GlobalProvider } from "../context/GlobalContext";
import Header from "../components/layout/Header";
import Card from "../components/ui/Card";
import { useState, useEffect } from "react";

function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <GlobalProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">

          {/* PAGE HEADER */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              About Ledgerly
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
              A modern personal finance platform designed to bring clarity,
              control, and confidence to your financial life.
            </p>
          </div>

          {/* OVERVIEW */}
          <Card title="What is Ledgerly?">
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                <strong>Ledgerly</strong> is a personal finance dashboard built
                to help individuals track income, manage expenses, and analyze
                financial behavior in a simple, structured way.
              </p>
              <p>
                The platform focuses on clarity and usability — presenting your
                financial data through clean dashboards, analytics, and
                actionable insights without unnecessary complexity.
              </p>
            </div>
          </Card>

          {/* FEATURES */}
          <Card title="Core Features">
            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <li className="rounded-xl bg-slate-50 dark:bg-slate-800 p-4">
                Track income and expenses with clear categorization
              </li>
              <li className="rounded-xl bg-slate-50 dark:bg-slate-800 p-4">
                Visualize spending trends and monthly activity
              </li>
              <li className="rounded-xl bg-slate-50 dark:bg-slate-800 p-4">
                Monitor savings and investments alongside daily expenses
              </li>
              <li className="rounded-xl bg-slate-50 dark:bg-slate-800 p-4">
                Filter, search, and export transaction history
              </li>
            </ul>
          </Card>

          {/* LOANS */}
          <Card title="Loan Calculators">
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                Ledgerly includes built-in loan calculators for common financial
                scenarios such as home loans, student loans, and vehicle loans.
              </p>
              <p>
                These tools use standard EMI formulas to help you estimate
                monthly payments, total interest, and repayment timelines —
                enabling informed financial planning.
              </p>
            </div>
          </Card>

          {/* PRIVACY */}
          <Card title="Privacy & Data">
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                Ledgerly is designed with privacy in mind. All financial data is
                stored locally in your browser.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                No personal data is transmitted to external servers or third
                parties.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default About;
