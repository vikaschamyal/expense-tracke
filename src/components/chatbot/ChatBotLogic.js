export const getBotReply = (message) => {
    const text = message.toLowerCase()
  
    if (text.includes('add') && text.includes('transaction')) {
      return 'You can add a transaction by clicking the "+ Add transaction" button on the dashboard.'
    }
  
    if (text.includes('expense')) {
      return 'Expenses are tracked category-wise and visualized using charts for better clarity.'
    }
  
    if (text.includes('income')) {
      return 'Income entries help calculate your total balance and monthly trends.'
    }
  
    if (text.includes('loan')) {
      return 'Loan calculators help estimate EMI, interest, and total payable amount.'
    }
  
    if (text.includes('filter')) {
      return 'Use filters to search transactions by category, date, or type.'
    }
  
    if (text.includes('export')) {
      return 'You can export transactions as CSV or JSON from the filter section.'
    }
  
    return 'I can help with expenses, income, loans, filters, or app usage.'
  }
  