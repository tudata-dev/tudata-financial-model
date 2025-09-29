"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { type FinancialInputs, formatCurrency } from "@/lib/financial-model"

interface FinancialControlsProps {
  inputs: FinancialInputs
  onInputsChange: (inputs: FinancialInputs) => void
}

export function FinancialControls({ inputs, onInputsChange }: FinancialControlsProps) {
  const updateInput = (key: keyof FinancialInputs, value: any) => {
    onInputsChange({ ...inputs, [key]: value })
  }

  const updateCost = (costKey: keyof FinancialInputs["monthlyCosts"], value: number) => {
    onInputsChange({
      ...inputs,
      monthlyCosts: {
        ...inputs.monthlyCosts,
        [costKey]: value,
      },
    })
  }

  return (
    <div className="space-y-6">
      {/* Pricing Model */}
      <Card>
        <CardHeader>
          <CardTitle>Modelo de Precios</CardTitle>
          <CardDescription>Precios de suscripción mensual para cada plan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Plan Básico: {formatCurrency(inputs.basicPlanPrice)}/mes</Label>
            <Slider
              value={[inputs.basicPlanPrice]}
              onValueChange={([value]) => updateInput("basicPlanPrice", value)}
              max={1000}
              min={99}
              step={50}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label>Plan Pro: {formatCurrency(inputs.proPlanPrice)}/mes</Label>
            <Slider
              value={[inputs.proPlanPrice]}
              onValueChange={([value]) => updateInput("proPlanPrice", value)}
              max={2000}
              min={500}
              step={100}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label>Plan Empresarial: {formatCurrency(inputs.enterprisePlanPrice)}/mes</Label>
            <Slider
              value={[inputs.enterprisePlanPrice]}
              onValueChange={([value]) => updateInput("enterprisePlanPrice", value)}
              max={5000}
              min={1500}
              step={250}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Customer Acquisition */}
      <Card>
        <CardHeader>
          <CardTitle>Adquisición de Clientes</CardTitle>
          <CardDescription>Parámetros de crecimiento y retención</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Nuevos Clientes Mensuales: {inputs.monthlyNewCustomers}</Label>
            <Slider
              value={[inputs.monthlyNewCustomers]}
              onValueChange={([value]) => updateInput("monthlyNewCustomers", value)}
              max={100}
              min={5}
              step={5}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label>Tasa de Crecimiento Mensual: {(inputs.customerGrowthRate * 100).toFixed(1)}%</Label>
            <Slider
              value={[inputs.customerGrowthRate * 100]}
              onValueChange={([value]) => updateInput("customerGrowthRate", value / 100)}
              max={50}
              min={0}
              step={2.5}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label>Tasa de Abandono Mensual: {(inputs.churnRate * 100).toFixed(1)}%</Label>
            <Slider
              value={[inputs.churnRate * 100]}
              onValueChange={([value]) => updateInput("churnRate", value / 100)}
              max={20}
              min={1}
              step={0.5}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Plan Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Planes</CardTitle>
          <CardDescription>Porcentaje de clientes en cada plan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Plan Básico: {(inputs.basicPlanPercentage * 100).toFixed(0)}%</Label>
            <Slider
              value={[inputs.basicPlanPercentage * 100]}
              onValueChange={([value]) => {
                const remaining = 100 - value
                const proRatio = inputs.proPlanPercentage / (inputs.proPlanPercentage + inputs.enterprisePlanPercentage)
                updateInput("basicPlanPercentage", value / 100)
                updateInput("proPlanPercentage", (remaining * proRatio) / 100)
                updateInput("enterprisePlanPercentage", (remaining * (1 - proRatio)) / 100)
              }}
              max={80}
              min={20}
              step={5}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>Plan Pro: {(inputs.proPlanPercentage * 100).toFixed(0)}%</div>
            <div>Empresarial: {(inputs.enterprisePlanPercentage * 100).toFixed(0)}%</div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Costs */}
      <Card>
        <CardHeader>
          <CardTitle>Costos Mensuales</CardTitle>
          <CardDescription>Desglose de gastos operativos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(inputs.monthlyCosts).map(([key, value]) => {
            const costLabels: Record<string, string> = {
              development: "Desarrollo",
              marketing: "Marketing",
              operations: "Operaciones",
              support: "Soporte",
              infrastructure: "Infraestructura",
            }

            return (
              <div key={key} className="space-y-2">
                <Label>
                  {costLabels[key] || key}: {formatCurrency(value)}/mes
                </Label>
                <Slider
                  value={[value]}
                  onValueChange={([newValue]) => updateCost(key as keyof FinancialInputs["monthlyCosts"], newValue)}
                  max={50000}
                  min={1000}
                  step={1000}
                  className="w-full"
                />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
