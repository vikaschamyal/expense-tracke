import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Tracker", path: "/tracker" },
  { label: "Reports", path: "/reports" },
  { label: "FAQ", path: "/faq" },
  { label: "About", path: "/about" },
];

const LOANS = [
  { label: "Home Loan", path: "/loans/home" },
  { label: "Student Loan", path: "/loans/student" },
  { label: "Vehicle Loan", path: "/loans/vehicle" },
];

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "User";

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-600";

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/tracker" className="flex items-center gap-3">
            <img
              src="/rupee.png"
              alt="Ledgerly"
              className="w-30 h-89 object-contain"
            />
           
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`pb-1 text-sm font-medium transition-colors ${isActive(
                  item.path
                )}`}
              >
                {item.label}
              </Link>
            ))}

            {/* LOANS */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "loan" ? null : "loan")
                }
                className="text-sm font-medium text-gray-600"
              >
                Loans 
              </button>

              {openMenu === "loan" && (
                <div className="absolute left-0 mt-3 w-56 rounded-xl bg-white border border-gray-100 shadow-lg p-2">
                  {LOANS.map((loan) => (
                    <Link
                      key={loan.path}
                      to={loan.path}
                      className="block px-4 py-2 rounded-lg text-sm text-gray-700"
                    >
                      {loan.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* USER */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "user" ? null : "user")
                }
                className="flex items-center gap-2"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  {userName[0].toUpperCase()}
                </div>
                <span className="hidden sm:block text-sm text-gray-700">
                  {userName}
                </span>
              </button>

              {openMenu === "user" && (
                <div className="absolute right-0 mt-3 w-52 rounded-xl bg-white border border-gray-100 shadow-lg overflow-hidden">
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-sm text-gray-700"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-3 text-sm text-gray-700"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* MOBILE */}
            <button
              onClick={() =>
                setOpenMenu(openMenu === "mobile" ? null : "mobile")
              }
              className="md:hidden text-xl text-gray-700"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {openMenu === "mobile" && (
          <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-sm text-gray-700"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <p className="text-xs text-gray-400 mb-2">Loans</p>
              {LOANS.map((loan) => (
                <Link
                  key={loan.path}
                  to={loan.path}
                  className="block pl-2 py-1 text-sm text-gray-700"
                >
                  {loan.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
