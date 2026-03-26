import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, AlertTriangle, Zap, Cpu, Power, RefreshCw, Wrench, Gift, Video, MonitorCheck } from "lucide-react";
import { motion } from "framer-motion";

const detailedServices = [
  {
    id: "troca-led",
    title: "Troca de LED / Backlight",
    icon: Zap,
    tagline: "Tela apagada? A gente resolve.",
    description: "O barramento de LEDs é responsável pela iluminação da tela. Com o tempo, os LEDs queimam e a TV perde totalmente a imagem — mas ainda funciona. Fazemos a substituição completa com kit de LEDs de qualidade e sem gambiarra.",
    symptoms: [
      "TV tem som mas a tela fica preta",
      "Manchas claras (tipo farol) na tela",
      "Imagem aparece brevemente ao acender, depois apaga",
      "Metade da tela mais escura que a outra",
    ],
    solution: "Substituição completa do barramento de LEDs por kit novo e testado. Garantia de 90 dias no serviço.",
    videoProof: true,
    image: `${import.meta.env.BASE_URL}images/servico-troca-led.png`,
    whatsappText: "Olá! Minha TV tem som mas a tela ficou preta (possível problema de LED/Backlight). Gostaria de um orçamento grátis.",
  },
  {
    id: "conserto-placas",
    title: "Conserto de Placas",
    icon: Cpu,
    tagline: "Diagnóstico preciso, reparo garantido.",
    description: "A placa principal (Main Board) é o cérebro da TV. Quando ela falha, a TV pode apresentar sintomas variados: tela azul, sem resposta ao controle, loop de reinicialização ou apenas o LED piscando. Fazemos reparo a nível de componente.",
    symptoms: [
      "TV não responde ao controle remoto",
      "Tela azul fixa sem imagem",
      "TV reinicia sozinha em loop",
      "Botões da TV não funcionam",
    ],
    solution: "Reparo eletrônico na placa principal com substituição de capacitores, transistores e CI's danificados. Garantia de 90 dias.",
    image: `${import.meta.env.BASE_URL}images/servico-conserto-placa.png`,
    whatsappText: "Olá! Minha TV está com problema na placa (não responde / reiniciando). Gostaria de um orçamento grátis.",
  },
  {
    id: "fonte-tv",
    title: "Fonte de TV",
    icon: Power,
    tagline: "TV que não liga? Pode ser a fonte.",
    description: "A placa fonte (Power Supply) converte a energia da tomada para os voltagens utilizadas pela TV. É um dos componentes mais sujeitos a falhas por variações de tensão e raios. Trabalhamos com reparo ou substituição.",
    symptoms: [
      "TV não liga de jeito nenhum",
      "LED de standby não acende",
      "Estouro ou cheiro de queimado",
      "TV liga mas desliga imediatamente",
    ],
    solution: "Análise e reparo da placa fonte com substituição dos componentes danificados (capacitores, fusíveis, transistores). Garantia de 90 dias.",
    image: `${import.meta.env.BASE_URL}images/servico-fonte.png`,
    whatsappText: "Olá! Minha TV não liga / acho que é a fonte. Gostaria de um orçamento grátis.",
  },
  {
    id: "atualizacao-software",
    title: "Atualização de Software",
    icon: RefreshCw,
    tagline: "Smart TV travada? A gente destrava.",
    description: "Smart TVs podem travar no logo da marca, apresentar apps que não funcionam ou perder funções após uma atualização mal-sucedida. Fazemos a regravação do firmware diretamente no chip de memória da TV.",
    symptoms: [
      "TV travada no logo da marca",
      "Aplicativos como Netflix e YouTube não abrem",
      "TV não conecta no Wi-Fi",
      "Menu da TV em branco ou com erros",
    ],
    solution: "Regravação de firmware (memória flash) com arquivo original do fabricante. TV volta ao estado de fábrica sem perda de hardware. Garantia de 90 dias.",
    image: `${import.meta.env.BASE_URL}images/servico-software.png`,
    whatsappText: "Olá! Minha Smart TV está travada no logo / com problema de software. Gostaria de um orçamento grátis.",
  },
  {
    id: "manutencao-geral",
    title: "Manutenção Geral",
    icon: Wrench,
    tagline: "Prevenção vale mais que remédio.",
    description: "Com o uso contínuo, poeira e umidade se acumulam internamente na TV, causando superaquecimento e falhas prematuras. A manutenção preventiva limpa, verifica e protege todos os componentes.",
    symptoms: [
      "TV desliga sozinha após algum tempo de uso",
      "TV aquece demais na parte traseira",
      "Som com chiado ou distorcido",
      "Imagem com cores levemente erradas",
    ],
    solution: "Limpeza completa interna, inspeção de todos os componentes, verificação de solda e aplicação de pasta térmica onde necessário. Garantia de 90 dias.",
    image: `${import.meta.env.BASE_URL}images/servico-manutencao.png`,
    whatsappText: "Olá! Gostaria de fazer uma manutenção geral na minha TV. Qual o valor do orçamento grátis?",
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Nossos Serviços - Conserto de TV em São Paulo | Mestre das TVs"
        description="Troca de LED, conserto de placas, fonte de TV, atualização de software e manutenção geral. Orçamento grátis! Assistência técnica especializada em São Paulo."
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/sobre-oficina.png)` }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-whatsapp/20 text-green-300 border border-green-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Gift className="w-4 h-4" />
              Orçamento 100% Grátis e Sem Compromisso
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Nossos Serviços de<br />
              <span className="text-primary">Assistência Técnica</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Atendemos todas as marcas: Samsung, LG, Sony, TCL, Philips, Philco, AOC e mais. Peças originais e garantia em todos os reparos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Estimate Banner */}
      <div className="bg-whatsapp text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <span className="font-semibold text-lg">🎁 Orçamento Grátis pelo WhatsApp — resposta rápida!</span>
          <Button
            className="bg-white text-whatsapp hover:bg-gray-100 font-bold rounded-full px-6 shrink-0"
            onClick={() => window.open("https://wa.me/5511961435941?text=Olá! Gostaria de um orçamento grátis para minha TV.", "_blank")}
          >
            Solicitar Agora
          </Button>
        </div>
      </div>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 aspect-[4/3] group">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">{service.tagline}</p>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50">
                    <h4 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      Sintomas Comuns:
                    </h4>
                    <ul className="space-y-3">
                      {service.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.videoProof && (
                    <div className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-2xl p-5">
                      <div className="p-2 bg-blue-100 rounded-xl text-blue-600 shrink-0">
                        <Video className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900 text-sm mb-1">🎥 Transparência Total — Enviamos um Vídeo</p>
                        <p className="text-blue-700 text-sm leading-relaxed">
                          Durante a troca do LED, <strong>gravamos e enviamos um vídeo para você pelo WhatsApp</strong> mostrando exatamente o que está sendo feito na sua TV. Você acompanha o processo do início ao fim, com a garantia de que não existe gambiarra — só serviço de qualidade.
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-whatsapp" />
                      Nossa Solução:
                    </h4>
                    <p className="text-muted-foreground mb-6">{service.solution}</p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-xl shadow-lg shadow-whatsapp/20"
                        onClick={() => window.open(`https://wa.me/5511961435941?text=${encodeURIComponent(service.whatsappText)}`, "_blank")}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Orçamento Grátis
                      </Button>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-whatsapp shrink-0" />
                        <span>Sem compromisso · Resposta rápida</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-16 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl aspect-video"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/sobre-oficina.png`}
                alt="Oficina Mestre das TVs"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Por que escolher a Mestre das TVs?</h2>
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle2, text: "Orçamento 100% gratuito e sem compromisso" },
                  { icon: CheckCircle2, text: "Técnico especializado com anos de experiência" },
                  { icon: CheckCircle2, text: "Garantia de 90 dias em todos os serviços" },
                  { icon: CheckCircle2, text: "Peças de qualidade e procedência garantida" },
                  { icon: CheckCircle2, text: "Atendemos todas as marcas e modelos" },
                  { icon: CheckCircle2, text: "Localizado na Zona Leste de São Paulo" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <item.icon className="w-5 h-5 text-whatsapp shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-xl shadow-lg shadow-whatsapp/20 h-14 px-8"
                onClick={() => window.open("https://wa.me/5511961435941?text=Olá! Gostaria de um orçamento grátis para minha TV.", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com o Técnico Agora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-6">Atendemos todas as marcas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Samsung", "LG", "Sony", "TCL", "Philips", "Philco", "AOC", "Hisense", "Panasonic", "Sharp"].map((brand) => (
              <span key={brand} className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-semibold text-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Display Recovery + Warning */}
      <section className="py-16 bg-background border-y border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Display Recovery — green card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 border border-green-200 rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-5">
                <MonitorCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
                Recuperação de Display
              </h2>
              <p className="text-green-800 mb-4 leading-relaxed">
                Se a sua tela apresenta <strong>linhas, manchas, imagem distorcida ou cores erradas — mas não está fisicamente trincada</strong>, temos solução! Realizamos o reparo da placa T-CON e do painel para recuperar a imagem sem precisar trocar o display inteiro.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Linhas horizontais ou verticais na tela",
                  "Manchas escuras sem queda ou impacto",
                  "Cores distorcidas ou imagem \"negativa\"",
                  "Metade da tela sem imagem",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-800 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                className="bg-whatsapp hover:bg-whatsapp/90 text-white w-full"
                onClick={() => window.open("https://wa.me/5511961435941?text=Olá! Minha TV está com problema na tela (linhas / manchas / cores erradas) mas não está quebrada. Gostaria de um orçamento grátis.", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Verificar se tem conserto
              </Button>
            </motion.div>

            {/* Broken Screen Warning — amber card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-amber-50 border border-amber-200 rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-5">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-3">
                Tela Fisicamente Quebrada
              </h2>
              <p className="text-amber-800 mb-4 leading-relaxed">
                Se a TV sofreu uma <strong>queda ou impacto e a tela está trincada</strong> (riscos em forma de teia de aranha), infelizmente o conserto na maioria dos casos <strong>não compensa</strong> — um display novo tem custo próximo ao de uma TV nova.
              </p>
              <p className="text-amber-900 font-semibold text-sm bg-amber-100 border border-amber-300 rounded-xl px-4 py-3">
                ⚠️ Em caso de dúvida, nos mande uma foto da tela pelo WhatsApp que avaliamos gratuitamente!
              </p>
              <Button
                variant="outline"
                className="mt-6 w-full border-amber-300 text-amber-800 hover:bg-amber-100"
                onClick={() => window.open("https://wa.me/5511961435941?text=Olá! Minha TV sofreu uma queda e a tela pode estar quebrada. Posso enviar uma foto para avaliação?", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Enviar foto para avaliação
              </Button>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
