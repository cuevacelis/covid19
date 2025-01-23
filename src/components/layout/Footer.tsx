import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-muted-foreground flex items-center">
            Desarrollado con
            <Heart
              className="h-4 w-4 mx-1 text-red-500 fill-current"
              aria-hidden="true"
            />
            en Javascript
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Covid-19 Tracker. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
