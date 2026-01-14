import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">
            Ledgerly
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
            Ledgerly helps you track income, manage expenses, analyze spending,
            and make smarter financial decisions — all from a single, clean
            dashboard.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-200 mb-4">
            Product
          </h4>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>
              <Link to="/tracker" className="hover:text-blue-600 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-blue-600 transition">
                Reports & Analytics
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-600 transition">
                Help & FAQ
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                About Ledgerly
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-200 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>
              <span className="block">Email</span>
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

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-100 dark:border-slate-800 py-5 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Ledgerly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
