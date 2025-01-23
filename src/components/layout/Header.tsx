import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Sun, Moon, Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../assets/img/covid_19.svg";
import { useTheme } from "../theme-provider";

const NavItem = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <NavigationMenuItem>
    <Link
      to={to}
      className={`${navigationMenuTriggerStyle()} w-full justify-start`}
      onClick={onClick}
    >
      {children}
    </Link>
  </NavigationMenuItem>
);

const SocialNavItem = ({
  href,
  title,
  icon: Icon,
}: {
  href: string;
  title: string;
  icon: React.ElementType;
}) => (
  <a
    href={href}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex flex-col space-y-4">
      <NavItem to="/about" onClick={onClose}>
        About
      </NavItem>
      <NavItem to="/developers" onClick={onClose}>
        Developers
      </NavItem>
      <NavItem to="/recommendations" onClick={onClose}>
        Recommendations
      </NavItem>
    </div>
  );
};

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo || "/placeholder.svg"}
            alt="Covid-19 Logo"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <span className="text-lg sm:text-xl font-bold">Covid-19 Tracker</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/developers">Developers</NavItem>
            <NavItem to="/recommendations">Recommendations</NavItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-4">
            <SocialNavItem
              href="https://github.com/cuevacelis/covid19"
              title="GitHub"
              icon={Github}
            />
            <SocialNavItem
              href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw"
              title="Twitter"
              icon={Twitter}
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
                <div className="mt-auto pt-4 flex justify-center space-x-4 sm:hidden">
                  <SocialNavItem
                    href="https://github.com/cuevacelis/covid19"
                    title="GitHub"
                    icon={Github}
                  />
                  <SocialNavItem
                    href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw"
                    title="Twitter"
                    icon={Twitter}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
