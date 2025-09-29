"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { type FinancialInputs, calculateProjections, formatCurrency, formatNumber } from "@/lib/financial-model"
import { Plus, Trash2, Copy } from "lucide-react"

interface Scenario {
  id: string
  name: string
  inputs: FinancialInputs
  color: string
}

interface ScenarioComparisonProps {
  baseInputs: FinancialInputs
}

const scenarioColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
]

export function ScenarioComparison({ baseInputs }: ScenarioComparisonProps) {
  const [scenarios, setScenarios] = useState<Scenario[]>([
    {
      id: "base",
      name: "Caso Base", // Translated "Base Case" to Spanish
      inputs: baseInputs,
      color: scenarioColors[0],
    },
  ])

  const addScenario = () => {
    const newScenario: Scenario = {
      id: `scenario-${Date.now()}`,
      name: `Escenario ${scenarios.length}`, // Translated "Scenario" to Spanish
      inputs: { ...baseInputs },
      color: scenarioColors[scenarios.length % scenarioColors.length],
    }
    setScenarios([...scenarios, newScenario])
  }

  const removeScenario = (id: string) => {
    if (id === "base") return // Don't allow removing base case
    setScenarios(scenarios.filter((s) => s.id !== id))
  }

  const updateScenario = (id: string, updates: Partial<Scenario>) => {
    setScenarios(scenarios.map((s) => (s.id === id ? { ...s, ...updates } : s)))
  }

  const duplicateScenario = (id: string) => {
    const scenario = scenarios.find((s) => s.id === id)
    if (!scenario) return

    const newScenario: Scenario = {
      id: `scenario-${Date.now()}`,
      name: `${scenario.name} Copia`, // Translated "Copy" to Spanish
      inputs: { ...scenario.inputs },
      color: scenarioColors[scenarios.length % scenarioColors.length],
    }
    setScenarios([...scenarios, newScenario])
  }

  // Calculate projections for all scenarios
  const scenarioProjections = scenarios.map((scenario) => ({
    ...scenario,
    projections: calculateProjections(scenario.inputs, 36),
  }))

  // Prepare comparison data
  const comparisonData = Array.from({ length: 36 }, (_, i) => {
    const month = i + 1
    const dataPoint: any = { month: `M${month}` }

    scenarioProjections.forEach((scenario) => {
      const projection = scenario.projections[i]
      dataPoint[`${scenario.id}_revenue`] = projection.revenue.total
      dataPoint[`${scenario.id}_customers`] = projection.customers.total
      dataPoint[`${scenario.id}_profit`] = projection.profit
      dataPoint[`${scenario.id}_arr`] = projection.arr
    })

    return dataPoint
  })

  // Calculate key metrics comparison
  const metricsComparison = scenarioProjections.map((scenario) => {
    const finalProjection = scenario.projections[35] // Month 36
    const year1Revenue = scenario.projections.slice(0, 12).reduce((sum, p) => sum + p.revenue.total, 0)
    const breakEvenMonth = scenario.projections.findIndex((p) => p.cumulativeProfit > 0)

    return {
      ...scenario,
      finalRevenue: finalProjection.revenue.total,
      finalCustomers: finalProjection.customers.total,
      finalARR: finalProjection.arr,
      year1Revenue,
      breakEvenMonth: breakEvenMonth >= 0 ? breakEvenMonth + 1 : null,
      cumulativeProfit: finalProjection.cumulativeProfit,
    }
  })

  return (
    <div className="space-y-6">
      {/* Scenario Management */}
      <Card>
        <CardHeader>
          <CardTitle>Gestión de Escenarios</CardTitle> {/* Translated title */}
          <CardDescription>Crea y compara diferentes escenarios de negocio</CardDescription>{" "}
          {/* Translated description */}
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Button onClick={addScenario} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Agregar Escenario {/* Translated button text */}
            </Button>
          </div>

          <div className="space-y-4">
            {scenarios.map((scenario, index) => (
              <div key={scenario.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: scenario.color }} />
                    <Input
                      value={scenario.name}
                      onChange={(e) => updateScenario(scenario.id, { name: e.target.value })}
                      className="w-48"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => duplicateScenario(scenario.id)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    {scenario.id !== "base" && (
                      <Button variant="outline" size="sm" onClick={() => removeScenario(scenario.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Quick scenario adjustments */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <Label>Nuevos Clientes Mensuales</Label> {/* Translated label */}
                    <Input
                      type="number"
                      value={scenario.inputs.monthlyNewCustomers}
                      onChange={(e) =>
                        updateScenario(scenario.id, {
                          inputs: { ...scenario.inputs, monthlyNewCustomers: Number(e.target.value) },
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Tasa de Crecimiento (%)</Label> {/* Translated label */}
                    <Input
                      type="number"
                      value={(scenario.inputs.customerGrowthRate * 100).toFixed(1)}
                      onChange={(e) =>
                        updateScenario(scenario.id, {
                          inputs: { ...scenario.inputs, customerGrowthRate: Number(e.target.value) / 100 },
                        })
                      }
                      className="mt-1"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <Label>Precio Plan Pro</Label> {/* Translated label */}
                    <Input
                      type="number"
                      value={scenario.inputs.proPlanPrice}
                      onChange={(e) =>
                        updateScenario(scenario.id, {
                          inputs: { ...scenario.inputs, proPlanPrice: Number(e.target.value) },
                        })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Tasa de Abandono (%)</Label> {/* Translated label */}
                    <Input
                      type="number"
                      value={(scenario.inputs.churnRate * 100).toFixed(1)}
                      onChange={(e) =>
                        updateScenario(scenario.id, {
                          inputs: { ...scenario.inputs, churnRate: Number(e.target.value) / 100 },
                        })
                      }
                      className="mt-1"
                      step="0.1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Metrics Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Comparación de Métricas de Escenarios</CardTitle> {/* Translated title */}
          <CardDescription>Indicadores clave de rendimiento en todos los escenarios</CardDescription>{" "}
          {/* Translated description */}
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Escenario</th> {/* Translated header */}
                  <th className="text-right p-3">Ingresos Año 1</th> {/* Translated header */}
                  <th className="text-right p-3">ARR Final</th> {/* Translated header */}
                  <th className="text-right p-3">Clientes Finales</th> {/* Translated header */}
                  <th className="text-right p-3">Punto de Equilibrio</th> {/* Translated header */}
                  <th className="text-right p-3">Ganancia 3A</th> {/* Translated header */}
                </tr>
              </thead>
              <tbody>
                {metricsComparison.map((scenario) => (
                  <tr key={scenario.id} className="border-b">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: scenario.color }} />
                        {scenario.name}
                      </div>
                    </td>
                    <td className="text-right p-3 font-mono">{formatCurrency(scenario.year1Revenue)}</td>
                    <td className="text-right p-3 font-mono">{formatCurrency(scenario.finalARR)}</td>
                    <td className="text-right p-3 font-mono">{formatNumber(scenario.finalCustomers)}</td>
                    <td className="text-right p-3">
                      {scenario.breakEvenMonth ? (
                        <span className="text-green-500">M{scenario.breakEvenMonth}</span>
                      ) : (
                        <span className="text-red-500">No alcanzado</span> // Translated "Not reached"
                      )}
                    </td>
                    <td
                      className={`text-right p-3 font-mono ${scenario.cumulativeProfit >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {formatCurrency(scenario.cumulativeProfit)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Comparación de Ingresos</CardTitle> {/* Translated title */}
          <CardDescription>Ingresos mensuales en todos los escenarios</CardDescription> {/* Translated description */}
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={scenarios.reduce(
              (config, scenario) => ({
                ...config,
                [`${scenario.id}_revenue`]: {
                  label: scenario.name,
                  color: scenario.color,
                },
              }),
              {},
            )}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => formatCurrency(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />} />
                {scenarios.map((scenario) => (
                  <Line
                    key={scenario.id}
                    type="monotone"
                    dataKey={`${scenario.id}_revenue`}
                    stroke={scenario.color}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Customer Growth Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Comparación de Crecimiento de Clientes</CardTitle> {/* Translated title */}
          <CardDescription>Adquisición total de clientes en todos los escenarios</CardDescription>{" "}
          {/* Translated description */}
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={scenarios.reduce(
              (config, scenario) => ({
                ...config,
                [`${scenario.id}_customers`]: {
                  label: scenario.name,
                  color: scenario.color,
                },
              }),
              {},
            )}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatNumber(Number(value))} />} />
                {scenarios.map((scenario) => (
                  <Line
                    key={scenario.id}
                    type="monotone"
                    dataKey={`${scenario.id}_customers`}
                    stroke={scenario.color}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* ARR Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Comparación de ARR</CardTitle> {/* Translated title */}
          <CardDescription>Proyecciones de Ingresos Recurrentes Anuales</CardDescription> {/* Translated description */}
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={scenarios.reduce(
              (config, scenario) => ({
                ...config,
                [`${scenario.id}_arr`]: {
                  label: scenario.name,
                  color: scenario.color,
                },
              }),
              {},
            )}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => formatCurrency(value)} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />} />
                {scenarios.map((scenario) => (
                  <Line
                    key={scenario.id}
                    type="monotone"
                    dataKey={`${scenario.id}_arr`}
                    stroke={scenario.color}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
