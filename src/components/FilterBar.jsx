import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'
import { exportToCSV, exportToJSON } from '../utils/exporters'

const FilterBar = () => {
  const { updateFilters, clearFilters, filters, allTransactions } = useContext(GlobalContext)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const categories = [...new Set(allTransactions.map(t => t.category).filter(Boolean))]
  const types = ['income', 'expense']
  const userName = localStorage.getItem('userName') || 'Guest'

  const handleChange = e => {
    updateFilters({ [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto space-y-5">
      {/* Top Row */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Search Box */}
        <div className="relative flex-1 min-w-[200px]">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="text"
            value={filters.text}
            onChange={handleChange}
            placeholder="Search transactions..."
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Toggle Advanced Filters */}
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-200"
        >
          <FaFilter /> {showAdvanced ? 'Hide Filters' : 'More Filters'}
        </button>

        {/* Clear Button */}
        {Object.keys(filters).some(key => filters[key] && key !== 'text') && (
          <button
            type="button"
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition duration-200"
          >
            <FaTimes /> Clear
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Type</label>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
              ))}
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate || ''}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate || ''}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Export Buttons */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <button
          type="button"
          onClick={() => exportToCSV(allTransactions, { fileName: 'transactions', userName })}
          className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 transition"
        >
          Export to CSV
        </button>
        <button
          type="button"
          onClick={() => exportToJSON(allTransactions, { fileName: 'transactions', userName })}
          className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 transition"
        >
          Export to JSON
        </button>
      </div>
    </div>
  )
}

export default FilterBar
