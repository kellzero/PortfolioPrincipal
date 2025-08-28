import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import { UserInfo } from "@/types";

interface HeaderProps {
  userInfo: UserInfo;
}

export default function Header({ userInfo }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background border-b border-border z-10">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">
          {userInfo.firstName} {userInfo.lastName}
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Sobre
          </a>
          <a
            href="#skills"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
          <Button asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resumo
            </a>
          </Button>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
