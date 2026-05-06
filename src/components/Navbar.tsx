import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/70 shadow-[0_10px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#hero")}
            className="group text-left text-lg font-bold text-foreground transition-colors hover:text-primary md:text-xl"
          >
            <span className="aurora-text">Ashley Van Rooyen</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground group-hover:text-cyan-200">
              Cybersecurity • Data • Development
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-200"
              >
                {item.label}
              </button>
            ))}
            <a href="/Ashley-Van-Rooyen-CV-2025.pdf" download>
              <Button variant="default" size="sm" className="rounded-full shadow-[0_0_24px_rgba(34,211,238,0.25)]">
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="py-2 text-left text-muted-foreground transition-colors hover:text-cyan-200"
              >
                {item.label}
              </button>
            ))}
            <a href="/Ashley-Van-Rooyen-CV-2025.pdf" download>
              <Button variant="default" className="w-full rounded-full">
                Download CV
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
