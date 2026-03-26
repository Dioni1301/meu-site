import { useState } from "react";
import { SEO } from "@/components/seo";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle2, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(10, "Informe um telefone com DDD, ex: (11) 91234-5678"),
  brand: z.string().min(2, "Informe a marca da TV, ex: Samsung, LG..."),
  model: z.string().min(1, "Informe o modelo da TV"),
  problem: z.string().min(10, "Descreva o problema com mais detalhes"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    const message =
      `Olá! Gostaria de um orçamento grátis.\n\n` +
      `👤 *Nome:* ${data.name}\n` +
      `📱 *WhatsApp/Tel:* ${data.phone}\n` +
      `📺 *Marca:* ${data.brand}\n` +
      `🔢 *Modelo:* ${data.model}\n` +
      `🔧 *Problema:* ${data.problem}`;

    window.open(
      `https://wa.me/5511961435941?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setIsSuccess(true);
    reset();
  };

  return (
    <>
      <SEO
        title="Solicitar Orçamento - Conserto de TV | Mestre das TVs"
        description="Preencha o formulário com o problema da sua TV e envie direto para o WhatsApp da Mestre das TVs. Orçamento grátis e resposta rápida em São Paulo!"
      />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-whatsapp/20 text-green-300 border border-green-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              Orçamento 100% Grátis pelo WhatsApp
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Solicite seu Orçamento
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Preencha o formulário abaixo. Ao clicar em enviar, seu WhatsApp abrirá com a mensagem pronta — é só mandar!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Sidebar info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-4 space-y-5"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Outros canais</h2>

              <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-whatsapp/10 rounded-full text-whatsapp shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">WhatsApp Direto</h3>
                      <p className="text-muted-foreground text-sm mb-2">Prefere chamar direto sem preencher formulário?</p>
                      <a href="https://wa.me/5511961435941" target="_blank" rel="noreferrer" className="text-xl font-bold text-foreground hover:text-whatsapp transition-colors">
                        (11) 96143-5941
                      </a>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white"
                    onClick={() => window.open("https://wa.me/5511961435941", "_blank")}
                  >
                    Iniciar Conversa
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">Ligação</h3>
                      <p className="text-muted-foreground text-sm mb-2">Seg–Sex, 9h–12h / 13h–18h | Sáb, 9h–12h</p>
                      <a href="tel:+5511961435941" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                        (11) 96143-5941
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-full text-foreground shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">Horário de Atendimento</h3>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>Seg – Sex: 9h às 12h / 13h às 18h</li>
                        <li>Sábado: 9h às 12h</li>
                        <li className="text-destructive font-medium">Domingo: Fechado</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-full text-foreground shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">Endereço</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Rua Martim Correia de Sá, 370<br />
                        Vila Iolanda (Lajeado)<br />
                        São Paulo – SP, CEP 08451-090
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-8"
            >
              <Card className="border-border shadow-xl shadow-black/5 bg-white">
                <CardContent className="p-8 md:p-10">

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-4"
                    >
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-800">WhatsApp aberto!</h3>
                      <p className="text-green-700">
                        Sua mensagem foi montada e o WhatsApp foi aberto com os dados preenchidos. Basta clicar em <strong>Enviar</strong> no WhatsApp para concluir o pedido de orçamento.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4 border-green-300 text-green-700 hover:bg-green-100"
                        onClick={() => setIsSuccess(false)}
                      >
                        Preencher novamente
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Pré-orçamento pelo WhatsApp</h2>
                        <p className="text-muted-foreground">
                          Preencha os campos abaixo. Ao clicar em <strong>"Enviar pelo WhatsApp"</strong>, seu app vai abrir com a mensagem já pronta — é só apertar enviar!
                        </p>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Seu Nome *</Label>
                            <Input
                              id="name"
                              placeholder="Ex: João da Silva"
                              className={`bg-secondary/30 ${errors.name ? "border-destructive" : ""}`}
                              {...register("name")}
                            />
                            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Seu WhatsApp / Telefone *</Label>
                            <Input
                              id="phone"
                              placeholder="(11) 90000-0000"
                              className={`bg-secondary/30 ${errors.phone ? "border-destructive" : ""}`}
                              {...register("phone")}
                            />
                            {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="brand">Marca da TV *</Label>
                            <Input
                              id="brand"
                              placeholder="Ex: Samsung, LG, Sony..."
                              className={`bg-secondary/30 ${errors.brand ? "border-destructive" : ""}`}
                              {...register("brand")}
                            />
                            {errors.brand && <p className="text-xs text-destructive">{errors.brand.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="model">Modelo da TV *</Label>
                            <Input
                              id="model"
                              placeholder="Ex: UN50TU8000G (atrás da TV)"
                              className={`bg-secondary/30 ${errors.model ? "border-destructive" : ""}`}
                              {...register("model")}
                            />
                            {errors.model && <p className="text-xs text-destructive">{errors.model.message}</p>}
                            <p className="text-[11px] text-muted-foreground">O modelo exato permite um orçamento mais preciso.</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="problem">Descreva o Problema *</Label>
                          <Textarea
                            id="problem"
                            placeholder="Ex: A TV liga, tem som normal, mas a tela fica completamente preta. Isso começou do nada ontem à noite..."
                            className={`min-h-[150px] bg-secondary/30 resize-y ${errors.problem ? "border-destructive" : ""}`}
                            {...register("problem")}
                          />
                          {errors.problem && <p className="text-xs text-destructive">{errors.problem.message}</p>}
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-14 text-lg rounded-xl bg-whatsapp hover:bg-whatsapp/90 text-white shadow-lg shadow-whatsapp/20 hover:-translate-y-0.5 transition-all"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Enviar pelo WhatsApp
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          Ao clicar, o WhatsApp abrirá com sua mensagem pronta. Nenhum dado é armazenado em nossos servidores.
                        </p>
                      </form>
                    </>
                  )}

                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
