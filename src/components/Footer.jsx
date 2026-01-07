import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-600">
        
        {/* About */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">About CashoraOne</h3>
          <p className="leading-relaxed">
            CashoraOne helps you manage expenses, track income, analyze loans,
            and understand your financial health — all in one clean dashboard.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/tracker" className="hover:text-blue-600 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/tracker" className="hover:text-blue-600 transition">
                Add Transaction
              </Link>
            </li>
            <li>
              <Link to="/loans" className="hover:text-blue-600 transition">
                Loan Calculator
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-600 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>
              Email:{' '}
              <a
                href="mailto:vikaschamyal@gmail.com"
                className="hover:text-blue-600 transition"
              >
                vikaschamyal@gmail.com
              </a>
            </li>
            <li className="text-xs text-gray-500">
              Built with React & Tailwind CSS
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-100">
        © {new Date().getFullYear()} CashoraOne. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
