import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Globe, BarChartIcon as ChartBar, Users } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Icon className="h-6 w-6 text-primary" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default function AboutPage() {
  const features = [
    {
      title: "Información Actualizada",
      description:
        "Proporcionamos datos en tiempo real sobre casos de COVID-19 a nivel mundial y en Perú.",
      icon: Globe,
    },
    {
      title: "Estadísticas Detalladas",
      description:
        "Ofrecemos gráficos y análisis detallados para una mejor comprensión de la situación.",
      icon: ChartBar,
    },
    {
      title: "Recomendaciones de Salud",
      description:
        "Compartimos las últimas recomendaciones de las autoridades sanitarias para prevenir el contagio.",
      icon: Info,
    },
    {
      title: "Proyecto Colaborativo",
      description:
        "Este es un esfuerzo conjunto de desarrolladores comprometidos con la información pública.",
      icon: Users,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Acerca del Proyecto COVID-19 Tracker
      </h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-center text-muted-foreground">
          El COVID-19 Tracker es una iniciativa para proporcionar información
          precisa y actualizada sobre la pandemia de COVID-19. Nuestro objetivo
          es mantener a la población informada y promover medidas de prevención
          efectivas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nuestra Misión</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Nuestra misión es proporcionar una fuente confiable de información
            sobre el COVID-19, ayudando a la comunidad a mantenerse informada y
            segura durante estos tiempos desafiantes. Creemos que el acceso a
            información precisa y actualizada es crucial para combatir la
            desinformación y promover prácticas de salud pública efectivas.
          </p>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quieres contribuir?</h2>
        <p className="text-muted-foreground">
          Si eres desarrollador y quieres contribuir a este proyecto, visita
          nuestro
          <a
            href="https://github.com/cuevacelis/covid19"
            className="text-primary hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            repositorio en GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
