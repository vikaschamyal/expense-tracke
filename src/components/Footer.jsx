const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-700 mt-10 py-6 border-t border-gray-300">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          
          {/* About App */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">About Expense Tracker</h3>
            <p>
              A simple yet powerful tool to track your income, expenses and savings.
              Designed for professionals and business owners to stay on top of their finances.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Dashboard</a></li>
              <li><a href="#" className="hover:underline">Add Transaction</a></li>
              <li><a href="#" className="hover:underline">Savings & Investments</a></li>
             
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
            <ul className="space-y-1">
              <li>Email: <a href="mailto:support@expensetracker.com" className="hover:underline">vikaschamyal@gmail.com</a></li>
              
              <li></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-200 pt-4">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </div>
      </footer>
    )
  }
  
  export default Footer
  