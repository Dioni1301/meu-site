import { SEO } from "@/components/seo";
import { MapPin, Clock, Navigation, Map as MapIcon, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const neighborhoods = [
  "Vila Iolanda", "Lajeado", "Itaim Paulista", "Vila Curuçá",
  "Guaianases", "Cidade Tiradentes", "Ermelino Matarazzo",
  "São Miguel Paulista", "Itaquera", "Artur Alvim"
];

export default function Location() {
  return (
    <>
      <SEO 
        title="Onde Estamos - Mestre das TVs | Localização em São Paulo" 
        description="Venha nos visitar! Nossa assistência técnica está localizada na Vila Mariana, São Paulo. Atendemos diversas regiões do ABC e zona sul." 
      />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Nossa Localização
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Traga sua TV para uma avaliação presencial em nosso laboratório equipado ou verifique nossa área de atendimento para coleta.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative">
        <div className="absolute inset-0 opacity-[0.02] z-0" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/tech-pattern.png)` }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <Card className="border-border shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Endereço</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Rua Martim Correia de Sá, 370<br />
                        Vila Iolanda (Lajeado)<br />
                        São Paulo - SP<br />
                        CEP: 08451-090
                      </p>
                      <a 
                        href="https://maps.google.com/maps?q=Rua+Martim+Correia+de+Sa+370,+Vila+Iolanda,+Lajeado,+Sao+Paulo,+SP" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:underline"
                      >
                        <Navigation className="w-4 h-4" />
                        Como chegar
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <Card className="border-border shadow-md bg-secondary/30">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-3 text-lg">Horário de Atendimento</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex justify-between gap-4">
                          <span>Seg – Sex:</span>
                          <span className="font-medium text-foreground text-right">09:00–12:00 / 13:00–18:00</span>
                        </li>
                        <li className="flex justify-between gap-4">
                          <span>Sábado:</span>
                          <span className="font-medium text-foreground">09:00–12:00</span>
                        </li>
                        <li className="flex justify-between gap-4">
                          <span>Domingo:</span>
                          <span className="text-destructive font-medium">Fechado</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Map Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 h-[400px] lg:h-[500px] bg-secondary rounded-2xl overflow-hidden shadow-lg border border-border relative"
            >
              {/* Simulated Map iframe - replacing with a visual placeholder for aesthetic purposes if actual iframe fails, but providing real iframe format */}
              <iframe 
                src="https://maps.google.com/maps?q=Rua+Martim+Correia+de+Sa+370,+Lajeado,+Sao+Paulo,+SP,+08451-090,+Brasil&output=embed&hl=pt-BR" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                title="Mapa de localização Mestre das TVs"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md border border-white flex items-center gap-2">
                <MapIcon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Laboratório Principal</span>
              </div>
            </motion.div>
          </div>

          {/* Service Areas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-border"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Compass className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Áreas de Coleta e Entrega</h2>
              <p className="text-muted-foreground">
                Oferecemos serviço de retirada e devolução do seu aparelho. Consulte a taxa de deslocamento para sua região. Atendemos principalmente:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((bairro, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-secondary text-secondary-foreground border border-border/60 rounded-full text-sm font-medium shadow-sm hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                >
                  {bairro}
                </span>
              ))}
              <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium border-dashed">
                + Regiões próximas
              </span>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
