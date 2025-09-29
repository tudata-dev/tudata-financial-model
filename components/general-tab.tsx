"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  DollarSign,
  Users,
  Target,
  BarChart3,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  Building2,
  Scale,
  Clock,
} from "lucide-react";

export function GeneralTab() {
  return (
    <div className="space-y-12">
      {/* Executive Summary Header */}
      <div className="text-center space-y-6 py-8">
        <Badge variant="secondary" className="px-6 py-3 text-lg">
          <Building2 className="h-5 w-5 mr-2" />
          Informe Ejecutivo
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-balance">
          TuData Cloud
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-4xl mx-auto">
          <span className="text-primary font-semibold">
            Plataforma SaaS B2B
          </span>{" "}
          que automatiza el cumplimiento de protección de datos{" "}
          <span className="text-primary font-semibold">
            Data Governance & Compliance
          </span>{" "}
          enfocada 100 % en el marco colombiano -{" "}
          <span className="text-primary font-semibold">
            Mercado de $180M USD
          </span>
        </p>
      </div>

      {/* Key Investment Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-primary flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              TAM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$180M</div>
            <div className="text-sm text-muted-foreground">
              Mercado Colombia 2024
              <a
                href="https://www.statista.com/outlook/tmo/software/colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-primary hover:underline"
              >
                📊
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-primary flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              CAGR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28%</div>
            <div className="text-sm text-muted-foreground">
              Crecimiento anual
              <a
                href="https://www.statista.com/outlook/tmo/software/colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-primary hover:underline"
              >
                📊
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-primary flex items-center gap-2">
              <Users className="h-5 w-5" />
              ICP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,400</div>
            <div className="text-sm text-muted-foreground">
              Empresas objetivo
              <a
                href="https://www.dane.gov.co/index.php/estadisticas-por-tema/mercado-laboral/empleo-y-desempleo/geih-historico"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-primary hover:underline"
              >
                📊
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-primary flex items-center gap-2">
              <Clock className="h-5 w-5" />
              MVP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4 meses</div>
            <div className="text-sm text-muted-foreground">Time to market</div>
          </CardContent>
        </Card>
      </div>

      {/* Market Opportunity */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Oportunidad de Mercado
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Problema Crítico</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <div>
                    <strong>62.3% de empresas</strong> no cumplen completamente
                    con Ley 1581/2012
                    <a
                      href="https://www.itechsas.com/blog/proteccion-de-datos/el-62-de-las-empresas-en-colombia-no-cumplen-con-la-ley-de-proteccion-de-datos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline"
                    >
                      📊
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <div>
                    <strong>Sanciones multi-millonarias</strong> por
                    incumplimiento
                    <a
                      href="https://www.sic.gov.co/sanciones-proteccion-datos-personales-2020"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline"
                    >
                      📊
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <div>
                    <strong>Procesos manuales</strong> consumen 40+ horas/mes
                    por empresa
                    <a
                      href="https://www.itechsas.com/blog/proteccion-de-datos/el-62-de-las-empresas-en-colombia-no-cumplen-con-la-ley-de-proteccion-de-datos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline"
                    >
                      📊
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Nuestra Solución</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <div>
                    <strong>Automatización 100%</strong> del inventario de datos
                    personales
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <div>
                    <strong>Autenticación y trazabilidad vía blockchain</strong>{" "}
                    a prueba de auditorías SIC
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <div>
                    <strong>ROI 300%</strong> en primer año por reducción de
                    riesgo legal
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Target Segments */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Segmentos de Alto Valor</h2>
          <p className="text-muted-foreground text-lg">
            Sectores con mayor exposición regulatoria y capacidad de pago
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Sector Financiero
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">
                    1,200 empresas
                    <a
                      href="https://www.expertmarketresearch.com/es/reports/colombia-software-market"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline"
                    >
                      📊
                    </a>
                  </div>
                  <div className="text-muted-foreground">
                    Bancos, fintech, cooperativas
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    $800-2,000/mes
                  </div>
                  <div className="text-muted-foreground">Ticket promedio</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Mayor exposición regulatoria, presupuestos dedicados a
                compliance
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Salud & Seguros
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">
                    800 empresas
                    <a
                      href="https://www.expertmarketresearch.com/es/reports/colombia-software-market"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline"
                    >
                      📊
                    </a>
                  </div>
                  <div className="text-muted-foreground">
                    EPS, aseguradoras, clínicas
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    $600-1,500/mes
                  </div>
                  <div className="text-muted-foreground">Ticket promedio</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Datos sensibles de salud, regulación estricta
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Retail & E-commerce
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">
                    300 empresas
                    <a
                      href="https://www.expertmarketresearch.com/es/reports/colombia-software-market"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline"
                    >
                      📊
                    </a>
                  </div>
                  <div className="text-muted-foreground">
                    +10,000 clientes activos
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    $400-1,000/mes
                  </div>
                  <div className="text-muted-foreground">Ticket promedio</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Grandes bases de datos de clientes, marketing directo
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Servicios Legales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">
                    100 firmas
                    <a
                      href="https://www.expertmarketresearch.com/es/reports/colombia-software-market"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline"
                    >
                      📊
                    </a>
                  </div>
                  <div className="text-muted-foreground">
                    White-label partners
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    $1,500-5,000/mes
                  </div>
                  <div className="text-muted-foreground">
                    Licencia + revenue share
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Reventa a sus clientes, modelo de partnership
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Competitive Advantage */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            Ventaja Competitiva Defensible
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Especialización Local</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Único SaaS diseñado específicamente para normativa colombiana
                (Ley 1581/2012, Decretos SIC)
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Tecnología Propietaria</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Motor de crawling legal + autenticación y trazabilidad vía
                blockchain para evidencia inviolable
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Network Effects</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Cada cliente mejora la base de conocimiento legal y patrones de
                compliance
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Projections Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">Año 1</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">$180K</div>
            <div className="text-sm text-muted-foreground">ARR proyectado</div>
            <div className="text-xs text-muted-foreground">
              15 clientes pagando
            </div>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">Año 3</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">$2.1M</div>
            <div className="text-sm text-muted-foreground">ARR proyectado</div>
            <div className="text-xs text-muted-foreground">
              175 clientes activos
            </div>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">Año 5</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">$8.5M</div>
            <div className="text-sm text-muted-foreground">ARR proyectado</div>
            <div className="text-xs text-muted-foreground">
              Expansión regional
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
