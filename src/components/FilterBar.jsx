import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'
import { exportToCSV, exportToJSON } from '../utils/exporters'

const FilterBar = () => {
  const { updateFilters, clearFilters, filters, allTransactions } = useContext(GlobalContext)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const categories = [...new Set(allTransactions.map(t => t.category).filter(Boolean))]
  const types = ['income', 'expense']

  const handleChange = e => {
    updateFilters({ [e.target.name]: e.target.value })
  }

  return (
    <div className="card">
      <div className="filter-bar">
        <div style={{ position: 'relative', flex: 1 }}>
          <FaSearch style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#777'
          }} />
          <input
            type="text"
            name="text"
            value={filters.text}
            onChange={handleChange}
            placeholder="Search transactions..."
            className="form-control"
            style={{ paddingLeft: '35px' }}
          />
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <FaFilter /> {showAdvanced ? 'Hide Filters' : 'More Filters'}
        </button>

        {Object.keys(filters).some(key => filters[key] && key !== 'text') && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={clearFilters}
          >
            <FaTimes /> Clear
          </button>
        )}
      </div>

      {showAdvanced && (
        <div style={{ marginTop: '15px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div className="form-control" style={{ flex: 1 }}>
              <label className="form-label">Category</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleChange}
                className="form-control"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control" style={{ flex: 1 }}>
              <label className="form-label">Type</label>
              <select
                name="type"
                value={filters.type}
                onChange={handleChange}
                className="form-control"
              >
                <option value="all">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control" style={{ flex: 1 }}>
              <label className="form-label">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={filters.startDate || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-control" style={{ flex: 1 }}>
              <label className="form-label">End Date</label>
              <input
                type="date"
                name="endDate"
                value={filters.endDate || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
        </div>
      )}

      <div className="export-buttons">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => exportToCSV(allTransactions, 'transactions')}
        >
          Export to CSV
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => exportToJSON(allTransactions, 'transactions')}
        >
          Export to JSON
        </button>
      </div>
    </div>
  )
}

export default FilterBar