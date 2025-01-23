import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Droplets,
  Home,
  Users,
  Thermometer,
  VenetianMaskIcon as Mask,
} from "lucide-react";

interface RecommendationProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const RecommendationCard = ({
  title,
  description,
  icon: Icon,
}: RecommendationProps) => (
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

export default function CovidRecommendations() {
  const recommendations = [
    {
      title: "Lávese las manos frecuentemente",
      description:
        "Use agua y jabón o un desinfectante de manos a base de alcohol.",
      icon: Droplets,
    },
    {
      title: "Mantenga el distanciamiento social",
      description:
        "Mantenga al menos 1 metro (3 pies) de distancia entre usted y otras personas.",
      icon: Users,
    },
    {
      title: "Use mascarilla",
      description:
        "Use una mascarilla cuando el distanciamiento físico no sea posible.",
      icon: Mask,
    },
    {
      title: "Quédese en casa si se siente mal",
      description:
        "Si tiene fiebre, tos y dificultad para respirar, busque atención médica.",
      icon: Home,
    },
    {
      title: "Controle su temperatura",
      description:
        "Monitoree su temperatura regularmente y busque atención médica si supera los 38°C (100.4°F).",
      icon: Thermometer,
    },
    {
      title: "Manténgase informado",
      description: "Siga las recomendaciones de su autoridad sanitaria local.",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recomendaciones para prevenir el COVID-19
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        Siga estas recomendaciones para protegerse a sí mismo y a los demás del
        COVID-19.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <RecommendationCard key={index} {...rec} />
        ))}
      </div>
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Recuerde:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Las vacunas contra el COVID-19 son seguras y efectivas.</li>
          <li>Incluso después de vacunarse, siga las medidas de prevención.</li>
          <li>Si presenta síntomas, aíslese y busque atención médica.</li>
        </ul>
      </div>
    </div>
  );
}
