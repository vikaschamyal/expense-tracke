import { useState, useEffect } from 'react'
import { useLoanCalculator } from '../../hooks/useLoanCalculator'
import { formatCurrency } from '../../utils/formatCurrency'
import Card from '../../components/ui/Card'
import Header from '../../components/layout/Header'

function HomeLoan() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])
  const { principal, setPrincipal, annualRate, setAnnualRate, years, setYears, summary } =
    useLoanCalculator('home')

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Home Loan Calculator
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Calculate your monthly EMI and total repayment for a home loan.
        </p>
        <br />
        <div className="rounded-xl bg-gray-50 p-4 text-xs text-gray-600">
                  <strong>How EMI works:</strong> Your EMI remains fixed every month,
                  but the interest portion is higher in early years and reduces over time
                  as principal repayment increases.
                </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Loan Details">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Loan Amount (Principal)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="e.g., 5000000"
                min="0"
                step="1000"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                placeholder="e.g., 8.5"
                min="0"
                step="0.1"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Loan Tenure (Years)
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="e.g., 20"
                min="1"
                max="30"
                step="1"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
              />
            </div>
          </div>
        </Card>

        <Card title="Loan Summary">
          {summary.emi > 0 ? (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly EMI</div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {formatCurrency(summary.emi)}
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Principal Amount</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {formatCurrency(summary.principal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Interest</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {formatCurrency(summary.totalInterest)}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    Total Repayment
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {formatCurrency(summary.totalRepayment)}
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400">
                <strong>EMI</strong> (Equated Monthly Installment) is the fixed amount you pay each
                month towards your loan. It includes both principal and interest components.

                
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              Enter loan details to see calculations
            </div>
          )}
        </Card>
      </div>
      </div>
    </div>
  )
}

export default HomeLoan

