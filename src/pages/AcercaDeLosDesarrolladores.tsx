import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Foto1 from "../assets/img/Un_wapo.jpg";
import Foto2 from "../assets/img/jose-cueva-celis.jpg";
import Foto3 from "../assets/img/ElPapiChurro.jpg";

interface DeveloperProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

const Developer = ({
  name,
  role,
  description,
  imageUrl,
  linkedinUrl,
}: DeveloperProps) => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <div className="flex justify-center mb-4">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="rounded-full w-32 h-32 object-cover border-4 border-primary"
        />
      </div>
      <CardTitle className="text-center">{name}</CardTitle>
      <p className="text-center text-muted-foreground">{role}</p>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-sm">{description}</p>
    </CardContent>
    <CardFooter className="justify-center">
      <Button asChild variant="outline">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          Ver más detalles
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default function DevelopersInfo() {
  const developers = [
    {
      name: "Adrian Alva Tiznado",
      role: "Diseñador Front-End y Desarrollador De Software",
      description:
        "Comencé principalmente este proyecto para brindar información a las personas sobre este virus. Me caracterizo principalmente por ayudar a mi equipo en completar las metas propuestas. También he liderado proyectos de este tipo, así como, proyectos de Software Libre. Me gusta mucho la programación, así como, el diseño de interfaces de Páginas Web.",
      imageUrl: Foto1,
      linkedinUrl: "https://www.linkedin.com/in/adrianalvatiznado/",
    },
    {
      name: "José Cueva Celis",
      role: "Programador FullStack JS",
      description:
        "Comencé este proyecto para brindar información a las personas. Me caracterizo por liderar proyectos, compartir mis conocimientos, y ayudar a mi equipo para completar las metas propuestas. Soy apasionado por Javascript.",
      imageUrl: Foto2,
      linkedinUrl: "https://www.linkedin.com/in/cuevacelis/",
    },
    {
      name: "Anderson Perales",
      role: "Programador Front-End, Base de Datos en SQLServer y Documentación de Proyectos",
      description:
        "Comencé principalmente este proyecto para brindar información a las personas sobre este virus llamado COVID-19. Me gusta mucho diseño de interfaces de Paginas Web.",
      imageUrl: Foto3,
      linkedinUrl:
        "https://pe.linkedin.com/in/anderson-nolberto-perales-l%C3%B3pez-8655b5193?trk=people-guest_people_search-card",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Acerca de los Desarrolladores
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((dev) => (
          <Developer key={dev.name} {...dev} />
        ))}
      </div>
    </div>
  );
}
