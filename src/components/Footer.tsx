import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-text text-white py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero-text via-hero-text/95 to-primary/20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-hero-accent/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Arthur Henrique Gomes de Oliveira</h3>
            <p className="text-white/80 text-lg">Analista de Sistemas & Especialista em TI</p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-white/90">
            <a 
              href="mailto:arthur.hhee@gmail.com" 
              className="hover:text-primary-glow transition-colors"
            >
              arthur.hhee@gmail.com
            </a>
            <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
            <a 
              href="tel:+5561981076848" 
              className="hover:text-primary-glow transition-colors"
            >
              (61) 98107-6848
            </a>
            <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
            <span>Brasília, DF - Brasil</span>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">
              © {currentYear} Arthur Henrique Gomes de Oliveira. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-xs flex items-center justify-center gap-1">
              Desenvolvido com <Heart className="w-3 h-3 text-red-400 animate-pulse" /> usando React & Tailwind CSS
            </p>
          </div>

          {/* Scroll to top button */}
          <Button
            onClick={scrollToTop}
            size="sm"
            className="mt-6 bg-white/10 hover:bg-white/20 text-white border-white/20 hover-lift"
            variant="outline"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Voltar ao topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;