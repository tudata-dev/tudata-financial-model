export interface FinancialInputs {
  // Pricing Model
  basicPlanPrice: number
  proPlanPrice: number
  enterprisePlanPrice: number

  // Customer Acquisition
  monthlyNewCustomers: number
  customerGrowthRate: number
  churnRate: number

  // Cost Structure
  monthlyCosts: {
    development: number
    infrastructure: number
    sales: number
    marketing: number
    legal: number
    operations: number
  }

  // Market Mix
  basicPlanPercentage: number
  proPlanPercentage: number
  enterprisePlanPercentage: number
}

export interface FinancialProjection {
  month: number
  year: number
  customers: {
    basic: number
    pro: number
    enterprise: number
    total: number
  }
  revenue: {
    basic: number
    pro: number
    enterprise: number
    total: number
  }
  costs: {
    development: number
    infrastructure: number
    sales: number
    marketing: number
    legal: number
    operations: number
    total: number
  }
  profit: number
  cumulativeProfit: number
  arr: number // Annual Recurring Revenue
}

export const defaultInputs: FinancialInputs = {
  basicPlanPrice: 299, // USD per month
  proPlanPrice: 899,
  enterprisePlanPrice: 2499,
  monthlyNewCustomers: 15,
  customerGrowthRate: 0.15, // 15% monthly growth
  churnRate: 0.05, // 5% monthly churn
  monthlyCosts: {
    development: 25000,
    infrastructure: 8000,
    sales: 15000,
    marketing: 12000,
    legal: 5000,
    operations: 8000,
  },
  basicPlanPercentage: 0.6, // 60% basic
  proPlanPercentage: 0.3, // 30% pro
  enterprisePlanPercentage: 0.1, // 10% enterprise
}

export function calculateProjections(inputs: FinancialInputs, months = 36): FinancialProjection[] {
  const projections: FinancialProjection[] = []
  let cumulativeProfit = 0

  // Starting customers
  let basicCustomers = 0
  let proCustomers = 0
  let enterpriseCustomers = 0

  for (let month = 1; month <= months; month++) {
    // Calculate new customers with growth
    const growthMultiplier = Math.pow(1 + inputs.customerGrowthRate, month - 1)
    const newCustomersThisMonth = Math.round(inputs.monthlyNewCustomers * growthMultiplier)

    // Distribute new customers across plans
    const newBasic = Math.round(newCustomersThisMonth * inputs.basicPlanPercentage)
    const newPro = Math.round(newCustomersThisMonth * inputs.proPlanPercentage)
    const newEnterprise = Math.round(newCustomersThisMonth * inputs.enterprisePlanPercentage)

    // Add new customers
    basicCustomers += newBasic
    proCustomers += newPro
    enterpriseCustomers += newEnterprise

    // Apply churn
    basicCustomers = Math.round(basicCustomers * (1 - inputs.churnRate))
    proCustomers = Math.round(proCustomers * (1 - inputs.churnRate))
    enterpriseCustomers = Math.round(enterpriseCustomers * (1 - inputs.churnRate))

    // Calculate revenue
    const basicRevenue = basicCustomers * inputs.basicPlanPrice
    const proRevenue = proCustomers * inputs.proPlanPrice
    const enterpriseRevenue = enterpriseCustomers * inputs.enterprisePlanPrice
    const totalRevenue = basicRevenue + proRevenue + enterpriseRevenue

    // Calculate costs
    const totalCosts = Object.values(inputs.monthlyCosts).reduce((sum, cost) => sum + cost, 0)

    // Calculate profit
    const profit = totalRevenue - totalCosts
    cumulativeProfit += profit

    // Calculate ARR (Annual Recurring Revenue)
    const arr = totalRevenue * 12

    projections.push({
      month,
      year: Math.ceil(month / 12),
      customers: {
        basic: basicCustomers,
        pro: proCustomers,
        enterprise: enterpriseCustomers,
        total: basicCustomers + proCustomers + enterpriseCustomers,
      },
      revenue: {
        basic: basicRevenue,
        pro: proRevenue,
        enterprise: enterpriseRevenue,
        total: totalRevenue,
      },
      costs: {
        ...inputs.monthlyCosts,
        total: totalCosts,
      },
      profit,
      cumulativeProfit,
      arr,
    })
  }

  return projections
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num)
}
