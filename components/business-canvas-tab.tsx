"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  MessageSquare,
  Heart,
  DollarSign,
  Wrench,
  Zap,
  Handshake,
  TrendingUp,
  Building2,
  BarChart3,
  Shield,
} from "lucide-react";

export function BusinessCanvasTab() {
  const canvasBlocks = [
    {
      title: "Propuesta de Valor",
      icon: Target,
      priority: "high",
      content: [
        "Automatización 100% del inventario de datos personales con ML",
        "Autenticación y trazabilidad vía blockchain inviolable para auditorías SIC",
        "Cumplimiento normativo en tiempo real (Ley 1581/2012)",
        "ROI 300% en primer año por reducción de riesgo legal",
        "Time-to-compliance: 30 días vs 6+ meses manual",
      ],
    },
    {
      title: "Segmentos de Clientes",
      icon: Users,
      priority: "high",
      content: [
        "Sector Financiero: 1,200 empresas ($800-2,000/mes)",
        "Salud & Seguros: 800 empresas ($600-1,500/mes)",
        "Retail & E-commerce: 300 empresas ($400-1,000/mes)",
        "Firmas Legales: 100 partners white-label ($1,500-5,000/mes)",
        "Total TAM: $180M USD en Colombia",
      ],
    },
    {
      title: "Canales de Distribución",
      icon: MessageSquare,
      priority: "medium",
      content: [
        "Ventas directas B2B (LinkedIn Sales Navigator, eventos)",
        "Partners legales con modelo white-label (40% revenue share)",
        "Content marketing: webinars sobre cambios normativos SIC",
        "Referral program: 20% comisión por cliente referido",
        "Presencia en eventos FinTech y LegalTech Colombia",
      ],
    },
    {
      title: "Relación con Clientes",
      icon: Heart,
      priority: "high",
      content: [
        "Customer Success Manager dedicado (clientes >$1,000/mes)",
        "Onboarding guiado de 30 días con garantía de éxito",
        "Servicio 'Compliance Concierge' para alertas críticas",
        "Portal de autoservicio con documentación técnica",
        "SLA 99.9% uptime con penalizaciones por incumplimiento",
      ],
    },
    {
      title: "Fuentes de Ingresos",
      icon: DollarSign,
      priority: "high",
      content: [
        "SaaS mensual: $300 base + $0.05 por registro activo",
        "Add-ons: Auditorías ($2,000), integraciones custom ($5,000)",
        "Licencia white-label: $1,500/mes + 30% revenue share",
        "Servicios profesionales: implementación ($10,000-50,000)",
        "LTV/CAC ratio objetivo: 5:1 con payback 12 meses",
      ],
    },
    {
      title: "Recursos Clave",
      icon: Wrench,
      priority: "high",
      content: [
        "Equipo legal especializado en protección de datos Colombia",
        "Ingenieros DevSecOps con experiencia en compliance",
        "Infraestructura multi-cloud certificada (ISO 27001, SOC2)",
        "Motor propietario de crawling legal y ML para PII",
        "Base de conocimiento normativo actualizada en tiempo real",
      ],
    },
    {
      title: "Actividades Clave",
      icon: Zap,
      priority: "medium",
      content: [
        "Desarrollo de producto y mantenimiento de la plataforma",
        "Monitoreo 24/7 de cambios normativos (SIC, Congreso)",
        "Ventas B2B y desarrollo de partnerships estratégicos",
        "Customer success y soporte técnico especializado",
        "I+D en ML para detección automática de PII",
      ],
    },
    {
      title: "Socios Clave",
      icon: Handshake,
      priority: "medium",
      content: [
        "Bufetes especializados en protección de datos (white-label)",
        "Proveedores cloud: AWS, GCP (créditos y soporte técnico)",
        "Universidades: investigación en ML y certificaciones",
        "Consultoras Big4: canal de distribución enterprise",
        "Startups de ciberseguridad: integraciones tecnológicas",
      ],
    },
    {
      title: "Estructura de Costos",
      icon: TrendingUp,
      priority: "high",
      content: [
        "Infraestructura cloud: $15,000/mes (30% de ingresos)",
        "Salarios equipo: $45,000/mes (9 personas clave)",
        "Ventas y marketing: $12,000/mes (CAC objetivo $800)",
        "Legal y compliance: $8,000/mes (auditorías, certificaciones)",
        "Margen bruto objetivo: 85% (típico SaaS B2B)",
      ],
    },
  ];

  const keyMetrics = [
    {
      label: "TAM Colombia",
      value: "$180M",
      description: "Mercado total direccionable",
      source: "https://www.statista.com/outlook/tmo/software/colombia",
    },
    {
      label: "SAM",
      value: "$54M",
      description: "Mercado serviceable",
      source:
        "https://www.expertmarketresearch.com/es/reports/colombia-software-market",
    },
    {
      label: "SOM Año 3",
      value: "$2.1M",
      description: "Market share objetivo",
      source:
        "https://www.verifiedmarketreports.com/es/product/compliance-management-software-market/",
    },
    {
      label: "Unit Economics",
      value: "LTV $18K",
      description: "CAC $800, Payback 12m",
      source:
        "https://www.verifiedmarketreports.com/es/product/compliance-management-software-market/",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="px-4 py-2">
          <Building2 className="h-4 w-4 mr-2" />
          Business Model Canvas - Análisis Estratégico
        </Badge>
        <h1 className="text-3xl font-bold">TuData Cloud - Modelo de Negocio</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Análisis detallado del modelo de negocio SaaS B2B para el mercado de
          compliance en Colombia
        </p>
      </div>

      {/* Key Business Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => (
          <Card
            key={index}
            className="text-center border-2 border-primary/20 bg-primary/5"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-primary">
                {metric.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-medium text-sm">{metric.label}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {metric.description}
                <a
                  href={metric.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-primary hover:underline"
                >
                  📊
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Canvas Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {canvasBlocks.map((block, index) => {
          const IconComponent = block.icon;
          return (
            <Card
              key={index}
              className={`border-2 border-primary/20 bg-primary/5 transition-all hover:shadow-lg ${
                block.priority === "high" ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <IconComponent className="h-6 w-6" />
                  {block.title}
                  {block.priority === "high" && (
                    <Badge variant="secondary" className="ml-auto text-xs">
                      Crítico
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {block.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm leading-relaxed flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Strategic Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Fortalezas Competitivas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="font-medium text-sm">Especialización Local</div>
              <div className="text-xs text-muted-foreground">
                Único SaaS diseñado específicamente para normativa colombiana
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-sm">Tecnología Propietaria</div>
              <div className="text-xs text-muted-foreground">
                Motor de crawling legal + autenticación y trazabilidad vía
                blockchain
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-sm">Network Effects</div>
              <div className="text-xs text-muted-foreground">
                Cada cliente mejora la base de conocimiento legal
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Métricas de Éxito
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium">ARR Año 1</div>
                <div className="text-primary">$180K</div>
              </div>
              <div>
                <div className="font-medium">Clientes Año 1</div>
                <div className="text-primary">15 pagando</div>
              </div>
              <div>
                <div className="font-medium">CAC Target</div>
                <div className="text-primary">$800</div>
              </div>
              <div>
                <div className="font-medium">LTV Target</div>
                <div className="text-primary">$18,000</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Executive Summary */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Resumen Ejecutivo del Modelo
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Posicionamiento estratégico en el mercado de compliance colombiano
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              TuData Cloud se posiciona como{" "}
              <strong>el líder en automatización de compliance</strong> para
              protección de datos en Colombia, dirigiéndose a un mercado de{" "}
              <strong>$180M USD</strong> con una propuesta de valor única:{" "}
              <strong>reducir el riesgo legal en 90%</strong> mientras se
              automatiza completamente el cumplimiento normativo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">
                  Margen Bruto Objetivo
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">5:1</div>
                <div className="text-sm text-muted-foreground">
                  Ratio LTV/CAC
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">12m</div>
                <div className="text-sm text-muted-foreground">
                  Payback Period
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
