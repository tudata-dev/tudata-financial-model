"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
} from "recharts"
import { type FinancialProjection, formatCurrency, formatNumber } from "@/lib/financial-model"

interface FinancialChartsProps {
  projections: FinancialProjection[]
}

export function FinancialCharts({ projections }: FinancialChartsProps) {
  // Prepare data for charts
  const revenueData = projections.map((p) => ({
    month: `M${p.month}`,
    revenue: p.revenue.total,
    costs: p.costs.total,
    profit: p.profit,
    arr: p.arr,
  }))

  const customerData = projections.map((p) => ({
    month: `M${p.month}`,
    basic: p.customers.basic,
    pro: p.customers.pro,
    enterprise: p.customers.enterprise,
    total: p.customers.total,
  }))

  const profitabilityData = projections.map((p) => ({
    month: `M${p.month}`,
    cumulativeProfit: p.cumulativeProfit,
    monthlyProfit: p.profit,
  }))

  const costBreakdownData = projections.map((p) => ({
    month: `M${p.month}`,
    development: p.costs.development,
    infrastructure: p.costs.infrastructure,
    sales: p.costs.sales,
    marketing: p.costs.marketing,
    legal: p.costs.legal,
    operations: p.costs.operations,
  }))

  const revenueBreakdownData = projections.map((p) => ({
    month: `M${p.month}`,
    basic: p.revenue.basic,
    pro: p.revenue.pro,
    enterprise: p.revenue.enterprise,
  }))

  return (
    <div className="space-y-6">
      {/* Revenue vs Costs */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue vs Costs</CardTitle>
          <CardDescription>Monthly revenue and cost breakdown with profit margin</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
              costs: {
                label: "Costs",
                color: "hsl(var(--chart-4))",
              },
              profit: {
                label: "Profit",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => formatCurrency(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  fill="var(--color-revenue)"
                  fillOpacity={0.2}
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="costs"
                  fill="var(--color-costs)"
                  fillOpacity={0.2}
                  stroke="var(--color-costs)"
                  strokeWidth={2}
                />
                <Line type="monotone" dataKey="profit" stroke="var(--color-profit)" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown by Plan</CardTitle>
          <CardDescription>Monthly revenue contribution from each subscription plan</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              basic: {
                label: "Basic Plan",
                color: "hsl(var(--chart-3))",
              },
              pro: {
                label: "Pro Plan",
                color: "hsl(var(--chart-1))",
              },
              enterprise: {
                label: "Enterprise Plan",
                color: "hsl(var(--chart-5))",
              },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueBreakdownData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => formatCurrency(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />} />
                <Area
                  type="monotone"
                  dataKey="basic"
                  stackId="1"
                  stroke="var(--color-basic)"
                  fill="var(--color-basic)"
                  fillOpacity={0.8}
                />
                <Area
                  type="monotone"
                  dataKey="pro"
                  stackId="1"
                  stroke="var(--color-pro)"
                  fill="var(--color-pro)"
                  fillOpacity={0.8}
                />
                <Area
                  type="monotone"
                  dataKey="enterprise"
                  stackId="1"
                  stroke="var(--color-enterprise)"
                  fill="var(--color-enterprise)"
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Customer Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Growth by Plan</CardTitle>
          <CardDescription>Customer acquisition across different subscription plans</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              basic: {
                label: "Basic",
                color: "hsl(var(--chart-3))",
              },
              pro: {
                label: "Pro",
                color: "hsl(var(--chart-1))",
              },
              enterprise: {
                label: "Enterprise",
                color: "hsl(var(--chart-5))",
              },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={customerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatNumber(Number(value))} />} />
                <Area
                  type="monotone"
                  dataKey="basic"
                  stackId="1"
                  stroke="var(--color-basic)"
                  fill="var(--color-basic)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="pro"
                  stackId="1"
                  stroke="var(--color-pro)"
                  fill="var(--color-pro)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="enterprise"
                  stackId="1"
                  stroke="var(--color-enterprise)"
                  fill="var(--color-enterprise)"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cost Breakdown Analysis</CardTitle>
          <CardDescription>Monthly operating expenses by category</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              development: {
                label: "Development",
                color: "hsl(var(--chart-1))",
              },
              infrastructure: {
                label: "Infrastructure",
                color: "hsl(var(--chart-2))",
              },
              sales: {
                label: "Sales",
                color: "hsl(var(--chart-3))",
              },
              marketing: {
                label: "Marketing",
                color: "hsl(var(--chart-4))",
              },
              legal: {
                label: "Legal",
                color: "hsl(var(--chart-5))",
              },
              operations: {
                label: "Operations",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costBreakdownData.slice(0, 12)}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => formatCurrency(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />} />
                <Bar dataKey="development" stackId="costs" fill="var(--color-development)" />
                <Bar dataKey="infrastructure" stackId="costs" fill="var(--color-infrastructure)" />
                <Bar dataKey="sales" stackId="costs" fill="var(--color-sales)" />
                <Bar dataKey="marketing" stackId="costs" fill="var(--color-marketing)" />
                <Bar dataKey="legal" stackId="costs" fill="var(--color-legal)" />
                <Bar dataKey="operations" stackId="costs" fill="var(--color-operations)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* ARR Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Annual Recurring Revenue (ARR)</CardTitle>
          <CardDescription>Projected annual recurring revenue growth trajectory</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              arr: {
                label: "ARR",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => formatCurrency(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />} />
                <Area
                  type="monotone"
                  dataKey="arr"
                  stroke="var(--color-arr)"
                  fill="var(--color-arr)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Profitability */}
      <Card>
        <CardHeader>
          <CardTitle>Profitability Analysis</CardTitle>
          <CardDescription>Monthly and cumulative profit trends with break-even analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              monthlyProfit: {
                label: "Monthly Profit",
                color: "hsl(var(--chart-2))",
              },
              cumulativeProfit: {
                label: "Cumulative Profit",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={profitabilityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => formatCurrency(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />} />
                <Bar dataKey="monthlyProfit" fill="var(--color-monthlyProfit)" fillOpacity={0.6} />
                <Line
                  type="monotone"
                  dataKey="cumulativeProfit"
                  stroke="var(--color-cumulativeProfit)"
                  strokeWidth={3}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
