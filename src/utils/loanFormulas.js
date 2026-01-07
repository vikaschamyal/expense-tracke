/**
 * Calculate EMI using the standard formula:
 * EMI = P × R × (1 + R)^N / ((1 + R)^N - 1)
 * 
 * Where:
 * P = Principal loan amount
 * R = Monthly interest rate (annualRate / 12 / 100)
 * N = Total number of months (years × 12)
 */
export function calculateEMI(principal, annualRate, years) {
  if (!principal || !annualRate || !years || principal <= 0 || annualRate <= 0 || years <= 0) {
    return 0
  }

  const monthlyRate = annualRate / 12 / 100
  const numMonths = years * 12

  if (monthlyRate === 0) {
    return principal / numMonths
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numMonths)) /
    (Math.pow(1 + monthlyRate, numMonths) - 1)

  return emi
}

/**
 * Calculate total interest payable
 */
export function calculateTotalInterest(principal, annualRate, years) {
  const emi = calculateEMI(principal, annualRate, years)
  const totalPayment = emi * years * 12
  return totalPayment - principal
}

/**
 * Calculate total repayment amount
 */
export function calculateTotalRepayment(principal, annualRate, years) {
  const emi = calculateEMI(principal, annualRate, years)
  return emi * years * 12
}

/**
 * Get loan calculation summary
 */
export function getLoanSummary(principal, annualRate, years) {
  const emi = calculateEMI(principal, annualRate, years)
  const totalRepayment = calculateTotalRepayment(principal, annualRate, years)
  const totalInterest = calculateTotalInterest(principal, annualRate, years)

  return {
    emi: Number(emi.toFixed(2)),
    totalRepayment: Number(totalRepayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    principal: Number(principal.toFixed(2)),
  }
}

