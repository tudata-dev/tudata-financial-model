"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type FinancialProjection, formatCurrency, formatNumber } from "@/lib/financial-model"
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Calendar } from "lucide-react"

interface FinancialMetricsProps {
  projections: FinancialProjection[]
}

export function FinancialMetrics({ projections }: FinancialMetricsProps) {
  if (projections.length === 0) return null

  const currentMonth = projections[projections.length - 1]
  const firstMonth = projections[0]
  const year1 = projections.slice(0, 12)
  const year2 = projections.slice(12, 24)
  const year3 = projections.slice(24, 36)

  // Calculate key metrics
  const totalCustomers = currentMonth.customers.total
  const monthlyRevenue = currentMonth.revenue.total
  const arr = currentMonth.arr
  const monthlyProfit = currentMonth.profit
  const cumulativeProfit = currentMonth.cumulativeProfit

  // Growth rates
  const revenueGrowth =
    projections.length > 1
      ? ((currentMonth.revenue.total - firstMonth.revenue.total) / firstMonth.revenue.total) * 100
      : 0

  const customerGrowth =
    projections.length > 1
      ? ((currentMonth.customers.total - firstMonth.customers.total) / Math.max(firstMonth.customers.total, 1)) * 100
      : 0

  // Break-even analysis
  const breakEvenMonth = projections.findIndex((p) => p.cumulativeProfit > 0)

  // Year summaries
  const year1Revenue = year1.reduce((sum, p) => sum + p.revenue.total, 0)
  const year2Revenue = year2.reduce((sum, p) => sum + p.revenue.total, 0)
  const year3Revenue = year3.reduce((sum, p) => sum + p.revenue.total, 0)

  const metrics = [
    {
      title: "Total de Clientes",
      value: formatNumber(totalCustomers),
      description: `${customerGrowth > 0 ? "+" : ""}${customerGrowth.toFixed(1)}% crecimiento`,
      icon: Users,
      trend: customerGrowth > 0 ? "up" : "down",
    },
    {
      title: "Ingresos Mensuales",
      value: formatCurrency(monthlyRevenue),
      description: `${revenueGrowth > 0 ? "+" : ""}${revenueGrowth.toFixed(1)}% crecimiento`,
      icon: DollarSign,
      trend: revenueGrowth > 0 ? "up" : "down",
    },
    {
      title: "Ingresos Recurrentes Anuales",
      value: formatCurrency(arr),
      description: "Basado en MRR actual",
      icon: Target,
      trend: "up",
    },
    {
      title: "Ganancia Mensual",
      value: formatCurrency(monthlyProfit),
      description: monthlyProfit > 0 ? "Rentable" : "Pérdida",
      icon: TrendingUp,
      trend: monthlyProfit > 0 ? "up" : "down",
    },
    {
      title: "Ganancia Acumulada",
      value: formatCurrency(cumulativeProfit),
      description: cumulativeProfit > 0 ? "Rentable en general" : "Aún en fase de inversión",
      icon: DollarSign,
      trend: cumulativeProfit > 0 ? "up" : "down",
    },
    {
      title: "Punto de Equilibrio",
      value: breakEvenMonth > 0 ? `Mes ${breakEvenMonth + 1}` : "Aún no",
      description: breakEvenMonth > 0 ? "Meses hasta rentabilidad" : "Ajustar parámetros",
      icon: Calendar,
      trend: breakEvenMonth > 0 && breakEvenMonth < 24 ? "up" : "down",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs flex items-center ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Year-by-Year Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen de Ingresos Año por Año</CardTitle>
          <CardDescription>Proyecciones de ingresos anuales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-500">{formatCurrency(year1Revenue)}</div>
              <div className="text-sm text-muted-foreground">Ingresos Año 1</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-500">{formatCurrency(year2Revenue)}</div>
              <div className="text-sm text-muted-foreground">Ingresos Año 2</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-500">{formatCurrency(year3Revenue)}</div>
              <div className="text-sm text-muted-foreground">Ingresos Año 3</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Distribución Actual de Clientes</CardTitle>
          <CardDescription>Desglose por tipo de plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-yellow-500">{formatNumber(currentMonth.customers.basic)}</div>
              <div className="text-sm text-muted-foreground">Plan Básico</div>
              <div className="text-xs text-muted-foreground">{formatCurrency(currentMonth.revenue.basic)} ingresos</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-500">{formatNumber(currentMonth.customers.pro)}</div>
              <div className="text-sm text-muted-foreground">Plan Pro</div>
              <div className="text-xs text-muted-foreground">{formatCurrency(currentMonth.revenue.pro)} ingresos</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-500">
                {formatNumber(currentMonth.customers.enterprise)}
              </div>
              <div className="text-sm text-muted-foreground">Plan Empresarial</div>
              <div className="text-xs text-muted-foreground">
                {formatCurrency(currentMonth.revenue.enterprise)} ingresos
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
