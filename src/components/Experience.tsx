import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: string;
  details: string[];
  skills: string[];
}

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const experiences: ExperienceItem[] = [
    {
      company: 'Grupo Tesoura de Ouro',
      role: 'Analista de Sistemas Pleno',
      period: 'Set 2021 - Presente',
      location: 'Brasília, DF',
      type: 'Tempo Integral',
      details: [
        'Liderança de projetos, desde a coleta de requisitos até a entrega dos resultados',
        'Análise de problemas e desenvolvimento de soluções para demandas específicas',
        'Suporte ao escritório e mais de 120 filiais (Lojas)',
        'Administração e infraestrutura de redes, servidores Windows, AD, Consultas SQL',
        'Utilização de PDVs e ferramentas de acesso remoto (VNC, AnyDesk, LogMeIn)',
        'Gerenciamento de chamados e suporte para usuários em plataformas: SAP, Humanas, Office 365, Power BI e Intranet'
      ],
      skills: ['SAP', 'Power BI', 'SQL', 'Windows Server', 'Gerenciamento de Projetos']
    },
    {
      company: 'AZ Gonzales Advogados',
      role: 'Analista de Sistemas Pleno',
      period: 'Jan 2022 - Presente',
      location: 'Brasília, DF',
      type: 'Serviços Paralelos',
      details: [
        'Serviços prestados em paralelo com o "Grupo Tesoura de Ouro"',
        'Resolução de problemas de hardware e software (Windows, Linux, Mac, Pacote Office)',
        'Atuação em Service Desk, prestando suporte remoto e presencial aos usuários',
        'Criação e gerenciamento de contas de usuário',
        'Instalação e configuração de softwares'
      ],
      skills: ['Service Desk', 'Suporte Técnico', 'Windows', 'Linux', 'Mac OS']
    },
    {
      company: 'Via Varejo',
      role: 'Analista de Sistemas Júnior',
      period: 'Abr 2019 - Jul 2021',
      location: 'Brasília, DF',
      type: 'Tempo Integral',
      details: [
        'Suporte ao sistema de "Ordem de Serviços" dos montadores e outras aplicações internas',
        'Resolução de problemas de hardware e software (Windows, Linux, Mac, Pacote Office)',
        'Reparo e manutenção de usuários e elementos de sistemas',
        'Suporte técnico de TI nos escritórios Casas Bahia e Ponto Frio',
        'Atendimento via Service Now, telefonia e WhatsApp'
      ],
      skills: ['Service Now', 'Suporte Técnico', 'Sistemas Internos', 'Atendimento ao Cliente']
    },
    {
      company: 'Universidade Presbiteriana Mackenzie',
      role: 'Analista de Sistemas Júnior',
      period: 'Jan 2016 - Fev 2019',
      location: 'Brasília, DF',
      type: 'Tempo Integral',
      details: [
        'Infraestrutura e Manutenção de redes, garantindo a conectividade e o serviço de telefonia e rede interna de todo o campus',
        'Atendimento em laboratórios, salas de aula e suporte em eventos',
        'Atendimento particular nas residências de membros da diretoria',
        'Suporte técnico e remoto aos alunos, professores e demais funcionários',
        'Gerenciamento de usuários no ambiente AD'
      ],
      skills: ['Active Directory', 'Infraestrutura de Redes', 'Suporte Técnico', 'Telefonia']
    },
    {
      company: 'Olé Consignado',
      role: 'Representante Bancário',
      period: 'Fev 2015 - Presente',
      location: 'Brasília, DF',
      type: 'Autônomo',
      details: [
        'Especializado na venda de contratos financeiros, oferecendo soluções personalizadas',
        'Atendimento a clientes de diversas categorias profissionais',
        'Portabilidade, Refinanciamento, Empréstimos, Margem consignável, Utilização do FGTS',
        'Categorias: Exército, Aposentados, Pensionistas, INSS, GOV.com'
      ],
      skills: ['Vendas', 'Atendimento ao Cliente', 'Produtos Financeiros', 'Relacionamento']
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-text mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 7 anos de experiência em tecnologia da informação e análise de sistemas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary/20"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  <Card className="ml-16 hover-lift group cursor-pointer" onClick={() => toggleExpanded(index)}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-primary mt-1">
                            {exp.company}
                          </CardDescription>
                          
                          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                            )}
                            {exp.type && (
                              <Badge variant="outline" className="text-xs">
                                {exp.type}
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="ml-4">
                          {expandedItems.includes(index) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    {expandedItems.includes(index) && (
                      <CardContent className="animate-fade-in-up">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                              Principais Responsabilidades
                            </h4>
                            <ul className="space-y-2">
                              {exp.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                              Tecnologias & Competências
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground">
            <Briefcase className="w-5 h-5 inline mr-2" />
            Experiência sólida em <strong className="text-primary">análise de sistemas</strong>, 
            <strong className="text-primary"> infraestrutura</strong> e 
            <strong className="text-primary"> gerenciamento de projetos</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;