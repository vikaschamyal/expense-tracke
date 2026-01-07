import { useState, useEffect } from 'react'
import { getLoanSummary } from '../utils/loanFormulas'
import { useLocalStorage } from './useLocalStorage'

export function useLoanCalculator(loanType = 'home') {
  const [principal, setPrincipal] = useLocalStorage(`loan_${loanType}_principal`, '')
  const [annualRate, setAnnualRate] = useLocalStorage(`loan_${loanType}_rate`, '')
  const [years, setYears] = useLocalStorage(`loan_${loanType}_years`, '')

  const [summary, setSummary] = useState({
    emi: 0,
    totalRepayment: 0,
    totalInterest: 0,
    principal: 0,
  })

  useEffect(() => {
    const p = parseFloat(principal) || 0
    const r = parseFloat(annualRate) || 0
    const y = parseFloat(years) || 0

    if (p > 0 && r > 0 && y > 0) {
      const result = getLoanSummary(p, r, y)
      setSummary(result)
    } else {
      setSummary({ emi: 0, totalRepayment: 0, totalInterest: 0, principal: 0 })
    }
  }, [principal, annualRate, years])

  return {
    principal,
    setPrincipal,
    annualRate,
    setAnnualRate,
    years,
    setYears,
    summary,
  }
}

