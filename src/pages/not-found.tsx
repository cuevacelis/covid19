import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="container px-4 py-16 text-center">
        <AlertCircle className="mx-auto h-24 w-24 text-muted-foreground mb-8" />
        <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild>
          <Link to="/">Volver a la página principal</Link>
        </Button>
      </div>
    </div>
  );
}
