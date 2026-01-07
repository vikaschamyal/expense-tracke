// Export transactions to CSV with user and export date
export const exportToCSV = (data, { fileName = 'export', userName = 'Guest' } = {}) => {
  if (!data || !data.length) return

  const exportDate = new Date().toLocaleString()

  // Add user and export date to each row
  const enrichedData = data.map(row => ({
    ...row,
    exportedBy: userName,
    exportedAt: exportDate,
  }))

  const headers = Object.keys(enrichedData[0])
  const csvRows = []

  // Add headers
  csvRows.push(headers.join(','))

  // Add data rows
  for (const row of enrichedData) {
    const values = headers.map(header => {
      const escaped = ('' + (row[header] ?? '')).replace(/"/g, '\\"')
      return `"${escaped}"`
    })
    csvRows.push(values.join(','))
  }

  const csvContent = csvRows.join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  // Download
  const link = document.createElement('a')
  link.href = url
  link.download = `${fileName}_${Date.now()}.csv`
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Export transactions to JSON with metadata
export const exportToJSON = (data, { fileName = 'export', userName = 'Guest' } = {}) => {
  const exportPayload = {
    meta: {
      exportedBy: userName,
      exportedAt: new Date().toISOString(),
      totalRecords: data.length,
    },
    data,
  }

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
    type: 'application/json',
  })

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${fileName}_${Date.now()}.json`
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
