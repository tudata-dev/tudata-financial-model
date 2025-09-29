"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Target,
  Database,
  Shield,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
  Code,
  Server,
  Smartphone,
  Lock,
  DollarSign,
  TrendingUp,
  Zap,
  Palette,
} from "lucide-react";

export function MvpTab() {
  const phases = [
    {
      phase: "Fase 1 (0-4 meses)",
      title: "MVP Fundacional",
      status: "En Desarrollo",
      progress: 0,
      investment: "$75K",
      modules: [
        {
          name: "Data Discovery Engine",
          description: "Conectores automáticos con ML para detección de PII",
          icon: Database,
          businessValue: "Reduce 40h/mes de trabajo manual por cliente",
          features: [
            "Conectores PostgreSQL/MySQL/NoSQL",
            "ML para clasificación PII",
            "API de integración",
          ],
        },
        {
          name: "Consent Management SDK",
          description: "SDK multiplataforma para gestión de consentimientos",
          icon: Smartphone,
          businessValue: "Centraliza consentimientos de múltiples canales",
          features: [
            "SDK JavaScript/React",
            "Plugin Flutter/React Native",
            "API RESTful",
          ],
        },
        {
          name: "Cryptographic Audit Trail",
          description:
            "Sistema de trazabilidad con autenticación y trazabilidad vía blockchain",
          icon: Shield,
          businessValue:
            "Autenticación y trazabilidad inviolable para auditorías SIC",
          features: [
            "Autenticación blockchain",
            "Logging inmutable",
            "Exportación forense",
          ],
        },
        {
          name: "Compliance Dashboard",
          description: "Panel ejecutivo con métricas y reportes SIC",
          icon: BarChart3,
          businessValue: "Reportes automáticos para reguladores",
          features: [
            "Dashboard ejecutivo",
            "Alertas en tiempo real",
            "Exportación PDF/CSV",
          ],
        },
      ],
    },
    {
      phase: "Fase 2 (4-8 meses)",
      title: "Automatización Inteligente",
      status: "Planificado",
      progress: 0,
      investment: "$200K",
      modules: [
        {
          name: "Legal Intelligence Engine",
          description:
            "Motor de crawling legal con actualizaciones automáticas",
          icon: Code,
          businessValue:
            "Elimina necesidad de seguimiento manual de normativas",
          features: [
            "Crawler SIC automático",
            "Alertas normativas",
            "Políticas dinámicas",
          ],
        },
        {
          name: "ARCO Rights Automation",
          description: "Automatización completa de derechos ARCO",
          icon: Users,
          businessValue: "Reduce tiempo de respuesta ARCO de días a minutos",
          features: [
            "Portal autoservicio",
            "Workflows automáticos",
            "Integración bases",
          ],
        },
      ],
    },
    {
      phase: "Fase 3 (8-12 meses)",
      title: "Expansión y Escalabilidad",
      status: "Futuro",
      progress: 0,
      investment: "$300K",
      modules: [
        {
          name: "Regional Compliance Hub",
          description: "Expansión a Chile, Perú, México",
          icon: Target,
          businessValue: "Multiplica TAM por 4x ($720M USD regional)",
          features: ["Normativas regionales", "Localización", "Multi-país"],
        },
        {
          name: "Partner Ecosystem",
          description: "Marketplace de integraciones y servicios",
          icon: Server,
          businessValue: "Revenue share con partners (30% adicional)",
          features: ["API marketplace", "White-label", "Templates legales"],
        },
      ],
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      tech: "Next.js 14 + TypeScript + Tailwind",
      icon: Code,
      justification: "Performance, SEO, developer experience",
    },
    {
      category: "Backend",
      tech: "Node.js (NestJS) + TypeScript",
      icon: Server,
      justification: "Escalabilidad, microservicios, type safety",
    },
    {
      category: "Base de datos",
      tech: "PostgreSQL + Redis",
      icon: Database,
      justification: "ACID compliance, performance, caching",
    },
    {
      category: "Blockchain",
      tech: "Hyperledger Fabric",
      icon: Lock,
      justification:
        "Autenticación y trazabilidad vía blockchain, auditabilidad",
    },
    {
      category: "Cloud",
      tech: "AWS (ECS, RDS, S3)",
      icon: Shield,
      justification: "Certificaciones SOC2, ISO 27001",
    },
    {
      category: "ML/AI",
      tech: "Python + TensorFlow",
      icon: Zap,
      justification: "Detección PII, clasificación automática",
    },
  ];

  const milestones = [
    {
      month: "Mes 1",
      milestone: "Arquitectura técnica + setup infraestructura",
      deliverable: "Documentación técnica, ambiente dev/staging",
      budget: "$12K",
    },
    {
      month: "Mes 2",
      milestone: "Data Discovery Engine + Consent SDK",
      deliverable: "Conectores funcionales, SDK beta",
      budget: "$25K",
    },
    {
      month: "Mes 3",
      milestone: "Audit Trail + Dashboard MVP",
      deliverable: "Sistema de trazabilidad, UI funcional",
      budget: "$25K",
    },
    {
      month: "Mes 4",
      milestone: "Testing + Piloto con clientes",
      deliverable: "3 clientes piloto, métricas validadas",
      budget: "$13K",
    },
  ];

  const successMetrics = [
    {
      metric: "3 clientes piloto",
      description: "Validación product-market fit",
      icon: Users,
      target: "Fintech, salud, retail",
    },
    {
      metric: "$15K MRR",
      description: "Ingresos recurrentes mensuales",
      icon: DollarSign,
      target: "Promedio $5K por cliente",
    },
    {
      metric: "99.9% uptime",
      description: "Confiabilidad de la plataforma",
      icon: Shield,
      target: "SLA enterprise-grade",
    },
    {
      metric: "100% compliance",
      description: "Auditoría legal exitosa",
      icon: CheckCircle,
      target: "Validación por bufete aliado",
    },
  ];

  const riskMitigation = [
    {
      risk: "Cambios normativos inesperados",
      mitigation: "Motor de crawling legal automático desde Fase 1",
      probability: "Media",
      impact: "Alto",
    },
    {
      risk: "Competencia de players internacionales",
      mitigation: "Especialización local + partnerships legales",
      probability: "Alta",
      impact: "Medio",
    },
    {
      risk: "Adopción lenta del mercado",
      mitigation: "Pilotos gratuitos + ROI demostrable",
      probability: "Media",
      impact: "Alto",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="px-4 py-2">
          <Target className="h-4 w-4 mr-2" />
          Plan de Desarrollo MVP - Análisis de Inversión
        </Badge>
        <h1 className="text-3xl font-bold">Roadmap Técnico y Financiero</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Plan detallado para desarrollar un MVP viable en 4 meses con{" "}
          <strong>$75K de inversión</strong> y generar <strong>$15K MRR</strong>{" "}
          con 3 clientes piloto
        </p>
      </div>

      {/* Investment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-primary flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Inversión MVP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$75K</div>
            <div className="text-sm text-muted-foreground">
              4 meses desarrollo
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-primary flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              MRR Objetivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15K</div>
            <div className="text-sm text-muted-foreground">
              Mes 4 post-lanzamiento
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-primary flex items-center gap-2">
              <Users className="h-5 w-5" />
              Clientes Piloto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-muted-foreground">
              Sectores regulados
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-primary flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Time to Market
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4 meses</div>
            <div className="text-sm text-muted-foreground">MVP funcional</div>
          </CardContent>
        </Card>
      </div>

      {/* Development Phases */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Fases de Desarrollo e Inversión
        </h2>
        {phases.map((phase, index) => (
          <Card
            key={index}
            className="overflow-hidden border-2 border-primary/20 bg-primary/5"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {phase.phase} - {phase.title}
                  </CardTitle>
                  <CardDescription>
                    Inversión: <strong>{phase.investment}</strong> | Estado:{" "}
                    {phase.status}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {phase.progress}%
                  </div>
                  <Progress value={phase.progress} className="w-24" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.modules.map((module, moduleIndex) => {
                  const IconComponent = module.icon;
                  return (
                    <Card key={moduleIndex} className="border-muted">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <IconComponent className="h-5 w-5 text-primary" />
                          {module.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {module.description}
                        </CardDescription>
                        <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          💰 {module.businessValue}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-1">
                          {module.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-xs text-muted-foreground flex items-center gap-2"
                            >
                              <CheckCircle className="h-3 w-3 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Stack Justification */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            Stack Tecnológico - Decisiones de Arquitectura
          </CardTitle>
          <CardDescription>
            Tecnologías seleccionadas para maximizar velocidad de desarrollo y
            escalabilidad
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                >
                  <IconComponent className="h-6 w-6 text-primary mt-1" />
                  <div className="space-y-1">
                    <div className="font-medium">{item.category}</div>
                    <div className="text-sm text-primary">{item.tech}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.justification}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Timeline & Budget */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6" />
            Cronograma Detallado y Presupuesto
          </CardTitle>
          <CardDescription>
            Desglose mensual de entregables y asignación de recursos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg"
              >
                <Badge variant="outline" className="min-w-fit mt-1">
                  {item.month}
                </Badge>
                <div className="flex-1 space-y-2">
                  <div className="font-medium">{item.milestone}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.deliverable}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">{item.budget}</div>
                  <div className="text-xs text-muted-foreground">
                    Presupuesto
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Metrics */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <BarChart3 className="h-6 w-6" />
            Métricas de Éxito del MVP
          </CardTitle>
          <CardDescription>
            KPIs críticos para validar product-market fit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successMetrics.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <IconComponent className="h-8 w-8 text-primary mt-1" />
                  <div className="space-y-1">
                    <div className="font-semibold text-primary">
                      {item.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.description}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Target: {item.target}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Risk Analysis */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Shield className="h-6 w-6" />
            Análisis de Riesgos y Mitigación
          </CardTitle>
          <CardDescription>
            Principales riesgos identificados y estrategias de mitigación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskMitigation.map((item, index) => (
              <div
                key={index}
                className="p-4 border-2 border-primary/20 bg-primary/5 rounded-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="font-medium">{item.risk}</div>
                  <div className="flex gap-2">
                    <Badge
                      variant={
                        item.probability === "Alta"
                          ? "destructive"
                          : item.probability === "Media"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {item.probability}
                    </Badge>
                    <Badge
                      variant={
                        item.impact === "Alto" ? "destructive" : "default"
                      }
                    >
                      {item.impact}
                    </Badge>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Mitigación:</strong> {item.mitigation}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cost Breakdown - Colombia Market */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            Desglose de Costos - Mercado Colombiano
          </CardTitle>
          <CardDescription>
            Costos optimizados para el mercado local colombiano
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Equipo Mínimo (4 meses)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium">Full-Stack Developer</div>
                    <div className="text-sm text-muted-foreground">
                      Senior/Mid-level
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$2,500/mes</div>
                    <div className="text-xs text-muted-foreground">
                      $10K total
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium">UI/UX Designer</div>
                    <div className="text-sm text-muted-foreground">
                      Mid-level
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$1,800/mes</div>
                    <div className="text-xs text-muted-foreground">
                      $7.2K total
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium">Legal Specialist</div>
                    <div className="text-sm text-muted-foreground">
                      Part-time
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$1,200/mes</div>
                    <div className="text-xs text-muted-foreground">
                      $4.8K total
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Infraestructura y Herramientas
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium">Cloud Infrastructure</div>
                    <div className="text-sm text-muted-foreground">AWS/GCP</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$300/mes</div>
                    <div className="text-xs text-muted-foreground">
                      $1.2K total
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium">
                      Herramientas de Desarrollo
                    </div>
                    <div className="text-sm text-muted-foreground">
                      GitHub, Figma, etc.
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$200/mes</div>
                    <div className="text-xs text-muted-foreground">
                      $800 total
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium">Marketing y Ventas</div>
                    <div className="text-sm text-muted-foreground">
                      LinkedIn, eventos
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$500/mes</div>
                    <div className="text-xs text-muted-foreground">
                      $2K total
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">Total MVP (4 meses)</div>
              <div className="text-2xl font-bold text-primary">$75K</div>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Ahorro del 50% vs mercado internacional gracias a costos locales
              optimizados
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Structure */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            Estructura del Equipo MVP
          </CardTitle>
          <CardDescription>
            Equipo mínimo optimizado para desarrollo en Colombia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Full-Stack Developer */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      Full-Stack Developer
                    </CardTitle>
                    <CardDescription>Senior/Mid-level</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Responsabilidades:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Arquitectura backend (Node.js/Python)</li>
                    <li>• Frontend React/Next.js</li>
                    <li>• Integración APIs y bases de datos</li>
                    <li>• Implementación de seguridad</li>
                    <li>• DevOps básico (Docker, CI/CD)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Requisitos:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 3+ años experiencia</li>
                    <li>• Conocimiento Ley 1581/2012</li>
                    <li>• Experiencia con APIs REST</li>
                    <li>• Conocimiento de blockchain (plus)</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Costo Total:</span>
                    <span className="text-lg font-bold text-primary">$10K</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    $2,500/mes × 4 meses
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UI/UX Designer */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Palette className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">UI/UX Designer</CardTitle>
                    <CardDescription>Mid-level</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Responsabilidades:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Diseño de interfaz de usuario</li>
                    <li>• Experiencia de usuario (UX)</li>
                    <li>• Prototipos interactivos</li>
                    <li>• Sistema de diseño</li>
                    <li>• Testing de usabilidad</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Requisitos:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 2+ años experiencia</li>
                    <li>• Dominio de Figma/Adobe XD</li>
                    <li>• Conocimiento de accesibilidad</li>
                    <li>• Experiencia B2B SaaS (plus)</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Costo Total:</span>
                    <span className="text-lg font-bold text-primary">
                      $7.2K
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    $1,800/mes × 4 meses
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Specialist */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Legal Specialist</CardTitle>
                    <CardDescription>Part-time</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Responsabilidades:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Compliance con Ley 1581/2012</li>
                    <li>• Políticas de privacidad</li>
                    <li>• Términos y condiciones</li>
                    <li>• Validación legal del producto</li>
                    <li>• Asesoría regulatoria</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Requisitos:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Abogado especializado</li>
                    <li>• Experiencia en protección de datos</li>
                    <li>• Conocimiento SIC</li>
                    <li>• Experiencia en tech (plus)</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Costo Total:</span>
                    <span className="text-lg font-bold text-primary">
                      $4.8K
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    $1,200/mes × 4 meses
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Summary */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">
                  Miembros del Equipo
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">
                  Meses de Desarrollo
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$22K</div>
                <div className="text-sm text-muted-foreground">
                  Costo Total Equipo
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$5.5K</div>
                <div className="text-sm text-muted-foreground">
                  Costo Promedio/Mes
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">
                Ventajas del Equipo Mínimo:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground">
                <div className="space-y-1">
                  <div>• Comunicación ágil y directa</div>
                  <div>• Decisiones rápidas</div>
                  <div>• Menor overhead administrativo</div>
                </div>
                <div className="space-y-1">
                  <div>• Especialización en roles clave</div>
                  <div>• Conocimiento del mercado local</div>
                  <div>• Costos optimizados para Colombia</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Próximos Pasos para Ejecutar el MVP</CardTitle>
          <CardDescription>
            Acciones inmediatas para iniciar el desarrollo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <div className="font-medium">Seed Funding</div>
                <div className="text-sm text-muted-foreground">
                  Consecucion de fondos para MVP.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <div className="font-medium">Team Assembly</div>
                <div className="text-sm text-muted-foreground">
                  Equipo mínimo: 1 Full-Stack Dev, 1 UI/UX Designer, 1 Legal
                  Specialist
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <div className="font-medium">Customer Discovery</div>
                <div className="text-sm text-muted-foreground">
                  5 entrevistas por sector objetivo para validar pricing y
                  features
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
