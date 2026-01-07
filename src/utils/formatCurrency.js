/**
 * Format currency with support for multiple currencies
 */
export function formatCurrency(amount, currency = 'INR') {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return '₹0'
  }

  const currencyMap = {
    INR: { symbol: '₹', code: 'INR' },
    USD: { symbol: '$', code: 'USD' },
    EUR: { symbol: '€', code: 'EUR' },
    GBP: { symbol: '£', code: 'GBP' },
  }

  const config = currencyMap[currency] || currencyMap.INR

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: config.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format number with commas
 */
export function formatNumber(num) {
  if (num === null || num === undefined || isNaN(num)) {
    return '0'
  }
  return new Intl.NumberFormat('en-IN').format(num)
}

