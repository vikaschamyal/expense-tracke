import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { exportToCSV, exportToJSON } from "../utils/exporters";

const FilterBar = () => {
  const { updateFilters, clearFilters, filters, allTransactions } =
    useContext(GlobalContext);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const categories = [
    ...new Set(allTransactions.map((t) => t.category).filter(Boolean)),
  ];

  const userName = localStorage.getItem("userName") || "User";

  const handleChange = (e) => {
    updateFilters({ [e.target.name]: e.target.value });
  };

  const hasActiveFilters = Object.keys(filters).some(
    (key) => filters[key] && key !== "text"
  );

  return (
    <div className="relative bg-slate-900 rounded-3xl shadow-xl p-6 text-white">

      {/* TOP TOOLBAR */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

        {/* SEARCH */}
        <div className="flex-1">
          <input
            type="text"
            name="text"
            value={filters.text}
            onChange={handleChange}
            placeholder="Search transactions"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap items-center gap-3">

          <button
            onClick={() => setShowAdvanced((prev) => !prev)}
            className="px-5 py-3 rounded-xl text-sm font-semibold border border-slate-700 text-white hover:bg-slate-800 transition"
          >
            {showAdvanced ? "Hide filters" : "Filters"}
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-5 py-3 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-900/30 transition"
            >
              Clear
            </button>
          )}

          {/* EXPORT GROUP */}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                exportToCSV(allTransactions, {
                  fileName: "transactions",
                  userName,
                })
              }
              className="px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Export CSV
            </button>

            <button
              onClick={() =>
                exportToJSON(allTransactions, {
                  fileName: "transactions",
                  userName,
                })
              }
              className="px-5 py-3 rounded-xl text-sm font-semibold border border-slate-700 text-white hover:bg-slate-800 transition"
            >
              JSON
            </button>
          </div>
        </div>
      </div>

      {/* ADVANCED FILTERS */}
      {showAdvanced && (
        <div className="mt-6 rounded-2xl bg-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* CATEGORY */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Category
            </label>
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
            >
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* TYPE */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Type
            </label>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
            >
              <option value="all">All types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* START DATE */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Start date
            </label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate || ""}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
            />
          </div>

          {/* END DATE */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              End date
            </label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate || ""}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
