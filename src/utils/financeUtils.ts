
/**
 * Calculates the monthly payment for a loan
 * @param principal The loan amount
 * @param ratePerYear Annual interest rate (as a decimal, e.g., 0.05 for 5%)
 * @param termInYears Loan term in years
 * @returns Monthly payment amount
 */
export const calculateMonthlyPayment = (
  principal: number,
  ratePerYear: number,
  termInYears: number
): number => {
  // Convert annual rate to monthly and years to months
  const monthlyRate = ratePerYear / 12;
  const termInMonths = termInYears * 12;
  
  // Calculate monthly payment using the formula: P * (r(1+r)^n) / ((1+r)^n - 1)
  // where P = principal, r = monthly rate, n = number of months
  if (monthlyRate === 0) {
    return principal / termInMonths;
  }
  
  const x = Math.pow(1 + monthlyRate, termInMonths);
  return (principal * monthlyRate * x) / (x - 1);
};

/**
 * Calculates the total interest paid over the life of a loan
 * @param principal The loan amount
 * @param ratePerYear Annual interest rate (as a decimal)
 * @param termInYears Loan term in years
 * @returns Total interest paid
 */
export const calculateTotalInterest = (
  principal: number,
  ratePerYear: number,
  termInYears: number
): number => {
  const monthlyPayment = calculateMonthlyPayment(principal, ratePerYear, termInYears);
  const totalPaid = monthlyPayment * termInYears * 12;
  return totalPaid - principal;
};

/**
 * Calculates the total cost of equity financing
 * @param amount Amount raised
 * @param equityPercentage Percentage of equity given
 * @param projectedValuation Projected company valuation at exit
 * @returns The dollar value of the equity given
 */
export const calculateEquityCost = (
  amount: number,
  equityPercentage: number,
  projectedValuation: number
): number => {
  const equityValue = projectedValuation * (equityPercentage / 100);
  return equityValue - amount;
};

/**
 * Compares financing options to determine the optimal structure
 * @param debtAmount Amount of debt financing
 * @param debtRate Interest rate for debt
 * @param debtTerm Term for debt in years
 * @param equityAmount Amount of equity financing
 * @param equityPercentage Percentage of equity given
 * @param projectedValuation Projected valuation at exit
 * @returns Object containing metrics for comparison
 */
export const compareFinancingOptions = (
  debtAmount: number,
  debtRate: number,
  debtTerm: number,
  equityAmount: number,
  equityPercentage: number,
  projectedValuation: number
): {
  totalCost: number;
  monthlyPayment: number;
  equityCost: number;
  weightedCostOfCapital: number;
} => {
  const monthlyPayment = calculateMonthlyPayment(debtAmount, debtRate, debtTerm);
  const totalInterest = calculateTotalInterest(debtAmount, debtRate, debtTerm);
  const equityCost = calculateEquityCost(equityAmount, equityPercentage, projectedValuation);
  
  const totalFinancing = debtAmount + equityAmount;
  const totalCost = totalInterest + equityCost;
  
  // Calculate weighted average cost of capital
  const debtWeight = debtAmount / totalFinancing;
  const equityWeight = equityAmount / totalFinancing;
  const equityRate = equityCost / equityAmount;
  
  const weightedCostOfCapital = (debtRate * debtWeight) + (equityRate * equityWeight);
  
  return {
    totalCost,
    monthlyPayment,
    equityCost,
    weightedCostOfCapital,
  };
};

/**
 * Determines the optimal blend of debt and equity financing
 * @param totalNeeded Total amount needed
 * @param maxDebtRate Maximum interest rate acceptable
 * @param maxEquityDilution Maximum equity dilution acceptable
 * @param creditScore Business credit score
 * @param projectedValuation Projected company valuation
 * @returns Optimal allocation between debt and equity
 */
export const calculateOptimalFinancingMix = (
  totalNeeded: number,
  maxDebtRate: number,
  maxEquityDilution: number,
  creditScore: number,
  projectedValuation: number
): {
  debtAmount: number;
  equityAmount: number;
  debtPercentage: number;
  equityPercentage: number;
  effectiveRate: number;
} => {
  // This is a simplified model that would be much more complex in reality
  
  // Determine debt capacity based on credit score
  // Higher credit score allows for more debt
  const creditFactor = (creditScore - 300) / 550; // Normalize 300-850 to 0-1
  const maxDebtPercentage = 0.3 + (creditFactor * 0.5); // 30% to 80% debt
  
  // Calculate initial allocation
  let debtPercentage = Math.min(maxDebtPercentage, 0.7);
  let equityPercentage = 1 - debtPercentage;
  
  // Adjust based on maximum equity dilution
  if (equityPercentage * totalNeeded / projectedValuation > maxEquityDilution / 100) {
    // Too much equity dilution, increase debt if possible
    equityPercentage = (maxEquityDilution / 100) * projectedValuation / totalNeeded;
    debtPercentage = 1 - equityPercentage;
  }
  
  // Calculate amounts
  const debtAmount = debtPercentage * totalNeeded;
  const equityAmount = equityPercentage * totalNeeded;
  
  // Calculate effective interest rate for the mix
  // This is simplified; actual calculation would be more complex
  const effectiveRate = debtPercentage * maxDebtRate + 
                        equityPercentage * (maxEquityDilution / 100) * projectedValuation / equityAmount;
  
  return {
    debtAmount,
    equityAmount,
    debtPercentage,
    equityPercentage,
    effectiveRate,
  };
};

/**
 * Calculates the break-even point for a financing decision
 * @param totalInvestment Total investment amount
 * @param annualRevenue Projected annual revenue
 * @param operatingMargin Operating margin as a decimal
 * @param growthRate Annual growth rate as a decimal
 * @returns Months to break even
 */
export const calculateBreakEven = (
  totalInvestment: number,
  annualRevenue: number,
  operatingMargin: number,
  growthRate: number
): number => {
  const monthlyProfit = (annualRevenue * operatingMargin) / 12;
  
  // Simple break-even calculation without growth
  if (growthRate === 0) {
    return Math.ceil(totalInvestment / monthlyProfit);
  }
  
  // Break-even with compound growth
  // This is a simplified model
  const monthlyGrowthRate = Math.pow(1 + growthRate, 1/12) - 1;
  
  let cumulativeProfit = 0;
  let months = 0;
  let currentMonthlyProfit = monthlyProfit;
  
  while (cumulativeProfit < totalInvestment) {
    cumulativeProfit += currentMonthlyProfit;
    currentMonthlyProfit *= (1 + monthlyGrowthRate);
    months += 1;
    
    // Safety valve to prevent infinite loops
    if (months > 240) {
      return 240; // 20 years max
    }
  }
  
  return months;
};
