"use client"

import { useState, useMemo } from "react"
import { FinancialControls } from "@/components/financial-controls"
import { FinancialCharts } from "@/components/financial-charts"
import { FinancialMetrics } from "@/components/financial-metrics"
import { ScenarioComparison } from "@/components/scenario-comparison"
import { GeneralTab } from "@/components/general-tab"
import { BusinessCanvasTab } from "@/components/business-canvas-tab"
import { MvpTab } from "@/components/mvp-tab"
import { ThemeToggle } from "@/components/theme-toggle"
import { defaultInputs, calculateProjections, type FinancialInputs } from "@/lib/financial-model"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw, BarChart3, GitCompare, Home, Briefcase, Target, Calculator } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, AreaChart, Area, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

export default function TuDataCloudApp() {
  const [inputs, setInputs] = useState<FinancialInputs>(defaultInputs)
  const [projectionMonths, setProjectionMonths] = useState(36)

  // Calculate projections based on current inputs
  const projections = useMemo(() => {
    return calculateProjections(inputs, projectionMonths)
  }, [inputs, projectionMonths])

  const resetToDefaults = () => {
    console.log("[v0] Resetting to defaults:", defaultInputs)
    setInputs({ ...defaultInputs })
    setProjectionMonths(36)
  }

  const exportData = () => {
    const dataStr = JSON.stringify(projections, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)

    const exportFileDefaultName = "tudata-proyecciones-financieras.json"

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  const revenuePreviewData = projections.slice(0, 12).map((p) => ({
    month: `M${p.month}`,
    revenue: p.revenue.total,
  }))

  const customerPreviewData = projections.slice(0, 12).map((p) => ({
    month: `M${p.month}`,
    customers: p.customers.total,
  }))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">TuData Cloud</h1>
              <p className="text-muted-foreground text-pretty mt-2">
                Plataforma SaaS de Gobernanza de Datos y Cumplimiento para Colombia
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general" className="flex items-center gap-2 cursor-pointer">
              <Home className="h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="business-canvas" className="flex items-center gap-2 cursor-pointer">
              <Briefcase className="h-4 w-4" />
              Business Model Canvas
            </TabsTrigger>
            <TabsTrigger value="mvp" className="flex items-center gap-2 cursor-pointer">
              <Target className="h-4 w-4" />
              MVP
            </TabsTrigger>
            <TabsTrigger value="financial-model" className="flex items-center gap-2 cursor-pointer">
              <Calculator className="h-4 w-4" />
              Modelo Financiero
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <GeneralTab />
          </TabsContent>

          <TabsContent value="business-canvas">
            <BusinessCanvasTab />
          </TabsContent>

          <TabsContent value="mvp">
            <MvpTab />
          </TabsContent>

          <TabsContent value="financial-model">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Controls Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Parámetros del Modelo
                      </CardTitle>
                      <CardDescription>
                        Ajusta los parámetros a continuación para ver cómo impactan tus proyecciones financieras
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Período de Proyección</label>
                          <div className="flex gap-2 mt-2">
                            {[12, 24, 36].map((months) => (
                              <Button
                                key={months}
                                variant={projectionMonths === months ? "default" : "outline"}
                                size="sm"
                                onClick={() => setProjectionMonths(months)}
                              >
                                {months / 12}A
                              </Button>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" onClick={resetToDefaults} className="flex-1 bg-transparent">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Restablecer
                          </Button>
                          <Button onClick={exportData} className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Exportar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6">
                    <FinancialControls inputs={inputs} onInputsChange={setInputs} />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="overview" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview" className="cursor-pointer">
                      Resumen
                    </TabsTrigger>
                    <div className="w-px bg-border  mx-1" />
                    <TabsTrigger value="charts" className="cursor-pointer">
                      Gráficos
                    </TabsTrigger>
                    <div className="w-px bg-border  mx-1" />
                    <TabsTrigger value="metrics" className="cursor-pointer">
                      Métricas
                    </TabsTrigger>
                    <div className="w-px bg-border  mx-1" />
                    <TabsTrigger value="scenarios" className="cursor-pointer">
                      <GitCompare className="h-4 w-4 mr-2" />
                      Escenarios
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <FinancialMetrics projections={projections} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Crecimiento de Ingresos (Año 1)</CardTitle>
                          <CardDescription>Progresión mensual de ingresos</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={{
                              revenue: {
                                label: "Ingresos",
                                color: "hsl(var(--chart-1))",
                              },
                            }}
                            className="h-[200px]"
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={revenuePreviewData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                                <YAxis
                                  stroke="hsl(var(--muted-foreground))"
                                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                                />
                                <ChartTooltip
                                  content={
                                    <ChartTooltipContent formatter={(value) => `$${Number(value).toLocaleString()}`} />
                                  }
                                />
                                <Line
                                  type="monotone"
                                  dataKey="revenue"
                                  stroke="var(--color-revenue)"
                                  strokeWidth={2}
                                  dot={false}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </ChartContainer>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Adquisición de Clientes (Año 1)</CardTitle>
                          <CardDescription>Crecimiento total de clientes</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={{
                              customers: {
                                label: "Clientes",
                                color: "hsl(var(--chart-2))",
                              },
                            }}
                            className="h-[200px]"
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={customerPreviewData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                                <YAxis stroke="hsl(var(--muted-foreground))" />
                                <ChartTooltip
                                  content={
                                    <ChartTooltipContent formatter={(value) => Number(value).toLocaleString()} />
                                  }
                                />
                                <Area
                                  type="monotone"
                                  dataKey="customers"
                                  stroke="var(--color-customers)"
                                  fill="var(--color-customers)"
                                  fillOpacity={0.3}
                                />
                              </AreaChart>
                            </ResponsiveContainer>
                          </ChartContainer>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="charts">
                    <FinancialCharts projections={projections} />
                  </TabsContent>

                  <TabsContent value="metrics" className="space-y-6">
                    <FinancialMetrics projections={projections} />

                    {/* Additional detailed metrics */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Tabla de Proyecciones Detalladas</CardTitle>
                        <CardDescription>Desglose mes a mes de métricas clave</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Mes</th>
                                <th className="text-right p-2">Clientes</th>
                                <th className="text-right p-2">Ingresos</th>
                                <th className="text-right p-2">Costos</th>
                                <th className="text-right p-2">Ganancia</th>
                                <th className="text-right p-2">ARR</th>
                              </tr>
                            </thead>
                            <tbody>
                              {projections.slice(0, 12).map((projection) => (
                                <tr key={projection.month} className="border-b">
                                  <td className="p-2">M{projection.month}</td>
                                  <td className="text-right p-2">{projection.customers.total.toLocaleString()}</td>
                                  <td className="text-right p-2">${projection.revenue.total.toLocaleString()}</td>
                                  <td className="text-right p-2">${projection.costs.total.toLocaleString()}</td>
                                  <td
                                    className={`text-right p-2 ${projection.profit >= 0 ? "text-green-500" : "text-red-500"}`}
                                  >
                                    ${projection.profit.toLocaleString()}
                                  </td>
                                  <td className="text-right p-2">${projection.arr.toLocaleString()}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="scenarios">
                    <ScenarioComparison baseInputs={inputs} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
