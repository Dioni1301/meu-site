import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Wrench, ShieldCheck, Clock, Star, Zap, Cpu, Power, RefreshCw, Gift } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Zap,
    title: "Troca de LED",
    href: "/servicos#troca-led",
    description: "Tela preta com som? Substituímos o barramento de LEDs com peças de qualidade e garantia de 90 dias."
  },
  {
    icon: Cpu,
    title: "Conserto de Placas",
    href: "/servicos#conserto-placas",
    description: "Reparo a nível de componente na placa principal. TV travada, tela azul ou sem resposta ao controle."
  },
  {
    icon: Power,
    title: "Fonte de TV",
    href: "/servicos#fonte-tv",
    description: "TV que não liga, LED não acende ou cheiro de queimado. Reparo ou troca da placa fonte."
  },
  {
    icon: RefreshCw,
    title: "Atualização de Software",
    href: "/servicos#atualizacao-software",
    description: "Smart TV travada no logo, apps não funcionam? Regravamos o firmware original do fabricante."
  },
  {
    icon: Wrench,
    title: "Manutenção Geral",
    href: "/servicos#manutencao-geral",
    description: "Limpeza completa, inspeção de componentes e prevenção de falhas por superaquecimento."
  }
];

const features = [
  {
    icon: Gift,
    title: "Orçamento Grátis",
    description: "Diagnóstico e orçamento 100% gratuito, sem compromisso. Resposta rápida pelo WhatsApp."
  },
  {
    icon: ShieldCheck,
    title: "Garantia de 90 Dias",
    description: "Todos os serviços possuem garantia total de 3 meses para sua total tranquilidade."
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Avaliação ágil. Diagnóstico rápido e prazo de entrega informado no orçamento."
  },
  {
    icon: Star,
    title: "Técnico Especializado",
    description: "Ícaro Mendes, especialista em eletrônica com experiência desde 2021 em São Paulo."
  }
];

export default function Home() {
  return (
    <>
      <SEO 
        title="Conserto de TV em São Paulo - Mestre das TVs | Assistência Técnica" 
        description="Especialistas em conserto de TV, troca de LED, TV que não liga e problemas de tela. Assistência técnica de TV em São Paulo com garantia. Orçamento via WhatsApp!" 
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Fundo abstrato tecnológico Mestre das TVs" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-semibold mb-6 backdrop-blur-sm">
                Assistência Técnica Especializada
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                A sua TV parou? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Nós resolvemos.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Conserto de TV em São Paulo com peças originais, preço justo e garantia. Especialistas em TV que não liga, sem imagem ou com troca de LED.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-xl h-14 px-8 text-lg shadow-xl shadow-whatsapp/20 hover:-translate-y-1 transition-all"
                  onClick={() => window.open("https://wa.me/5511961435941", "_blank")}
                >
                  <MessageCircleIcon className="w-5 h-5 mr-2" />
                  Fazer Orçamento Agora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-xl h-14 px-8 text-lg backdrop-blur-sm"
                  asChild
                >
                  <Link href="/servicos">
                    Ver Serviços <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-border relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl shadow-xl shadow-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-24 bg-secondary/50 relative">
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/tech-pattern.png)` }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossas Especialidades</h2>
            <p className="text-lg text-muted-foreground">
              Resolvemos os problemas mais comuns das Smart TVs modernas com agilidade e transparência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full bg-white border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Link href={service.href} className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                        Saber mais <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform" asChild>
              <Link href="/servicos">Ver todos os serviços detalhados</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Sua TV merece o melhor cuidado
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Não tente consertar sozinho e evite prejuízos maiores. Fale com um técnico especializado agora mesmo e agende uma avaliação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp/90 text-white rounded-xl h-14 px-10 text-lg shadow-xl shadow-whatsapp/20"
              onClick={() => window.open("https://wa.me/5511961435941", "_blank")}
            >
              <MessageCircleIcon className="w-5 h-5 mr-2" />
              Chamar no WhatsApp
            </Button>
            <span className="text-white/60 mx-2 hidden sm:inline">ou</span>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 rounded-xl h-14 px-10 text-lg"
              asChild
            >
              <Link href="/contato">Preencher Formulário</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// Temporary icon to avoid importing MessageCircle repeatedly
function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}
