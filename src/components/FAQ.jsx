import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqData = [
  {
    question: 'What is CashoraOne?',
    answer:
      'CashoraOne is a personal finance dashboard that helps you track expenses, income, savings, and understand your financial habits through clear insights and reports.',
  },
  {
    question: 'Is my data stored securely?',
    answer:
      'All your data is stored locally in your browser using localStorage. No data is sent to any server.',
  },
  {
    question: 'Can I use CashoraOne for business expenses?',
    answer:
      'Yes. CashoraOne is suitable for personal use, freelancers, and small professionals who want a simple expense tracking system.',
  },
  {
    question: 'Does this app support dark mode?',
    answer:
      'Yes. You can toggle dark mode anytime from the header, and your preference is saved.',
  },
  {
    question: 'What happens if I log out?',
    answer:
      'Logging out clears local session data. Your saved transactions remain unless you manually clear browser storage.',
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Everything you need to know about using CashoraOne.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index

          return (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <button
                onClick={() =>
                  setActiveIndex(isOpen ? null : index)
                }
                className="w-full text-left focus:outline-none"
              >
                <h3 className="text-base font-medium text-gray-800 dark:text-gray-200">
                  {item.question}
                </h3>
              </button>

              {isOpen && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Back to Home */}
      <div className="mt-10">
        <Link
          to="/tracker"
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  )
}

export default FAQ
