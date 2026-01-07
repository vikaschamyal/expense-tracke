import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [loanMenuOpen, setLoanMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const userMenuRef = useRef(null)
  const loanMenuRef = useRef(null)

  const location = useLocation()
  const userName = localStorage.getItem('userName') || 'User'

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
      if (loanMenuRef.current && !loanMenuRef.current.contains(e.target)) {
        setLoanMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const loanItems = [
    { label: 'Home Loan', path: '/loans/home' },
    { label: 'Student Loan', path: '/loans/student' },
    { label: 'Vehicle Loan', path: '/loans/vehicle' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/tracker" className="text-xl font-semibold text-gray-900">
            CashoraOne
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Expense Tracker', path: '/tracker' },
              { label: 'Reports', path: '/reports' },
              { label: 'FAQ', path: '/faq' },
              { label: 'About', path: '/about' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-3 py-2 text-sm rounded-lg transition ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Loans Dropdown */}
            <div className="relative" ref={loanMenuRef}>
              <button
                onClick={() => setLoanMenuOpen((prev) => !prev)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Loans
                <svg
                  className={`w-4 h-4 transition-transform ${
                    loanMenuOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {loanMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg">
                  {loanItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setLoanMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-800">
                  {userName}
                </span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border rounded-xl shadow-lg overflow-hidden">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-medium text-gray-800">
                      {userName}
                    </p>
                    <p className="text-xs text-gray-500">Account</p>
                  </div>

                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Settings
                  </Link>

                  <button
                    onClick={() => {
                      localStorage.clear()
                      window.location.href = '/'
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            
            <Link to="/tracker" className="block px-3 py-2">
              Expense Tracker
            </Link>

            <div className="px-3">
              <p className="text-sm font-medium text-gray-500">Loans</p>
              {loanItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block pl-4 py-1 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to="/faq" className="block px-3 py-2">
              FAQ
            </Link>
            <Link to="/reports" className="block px-3 py-2">
              Reports
            </Link>
            <Link to="/about" className="block px-3 py-2">
              About
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
