import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, Briefcase } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Briefcase, value: "7+", label: "Anos de Experiência" },
    { icon: Calendar, value: "5+", label: "Empresas Atendidas" },
    { icon: MapPin, value: "Brasília", label: "Localização" },
  ];

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-hero-accent/20 rounded-full blur-2xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="animate-bounce-in mb-6">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2 glow-effect">
              ✨ Disponível para Novas Oportunidades
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-6 animate-fade-in-up">
            Arthur Henrique
            <span className="block text-gradient mt-2"></span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Analista de Sistemas & Especialista em TI
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Com mais de <strong>7 anos de experiência</strong>, sou um profissional de Tecnologia da Informação 
            apaixonado por otimizar processos e gerenciar projetos. Especialista em análise de sistemas, 
            desenvolvimento e Business Intelligence.
          </p>


          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-hero-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-2/2 transform -translate-x-2/2 animate-bounce">
        <div className="w-7 h-11 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;