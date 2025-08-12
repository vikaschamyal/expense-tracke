import { useState } from 'react';
import { FaBars, FaTimes, FaMoneyBillWave, FaChartPie, FaPiggyBank, FaList } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-8 left-7 z-50 p-2 bg-green-500 text-white rounded-lg shadow-md md:hidden"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:translate-x-0`}
      >
        <div className="p-7 ml-8 left-9 flex items-center gap-2 border-b border-gray-700">
          <br />
          <br />
          <h1 className="text-lg font-bold ">    Expense Tracker</h1>
        </div>

        <nav className="p-5 space-y-4">
          <a href="#" className="flex items-center gap-2 hover:text-green-400">
            <FaChartPie /> Dashboard
          </a>

          {/* Dropdown */}
          <div>
            <button
              onClick={toggleDropdown}
              className="flex justify-between w-full items-center hover:text-green-400"
            >
              <span className="flex items-center gap-2">
                <FaPiggyBank /> Savings & Investments
              </span>
              <span>{dropdownOpen ? '▲' : '▼'}</span>
            </button>
            {dropdownOpen && (
              <div className="ml-6 mt-2 space-y-2">
                <a href="#" className="block hover:text-green-400">View Savings</a>
                <a href="#" className="block hover:text-green-400">Add Investment</a>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center gap-2 hover:text-green-400">
            <FaList /> Transactions
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
