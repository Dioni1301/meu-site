import { Link } from "wouter";
import { MapPin, Phone, Clock, Facebook, Instagram, Tv } from "lucide-react";
import logoImg from "/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Mestre das TVs"
                className="h-20 w-20 object-contain rounded-full shadow-md"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Especialistas em conserto de televisores de todas as marcas e modelos. Serviço rápido, transparente e com garantia em São Paulo.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="/servicos" className="hover:text-primary transition-colors">Nossos Serviços</Link></li>
              <li><Link href="/localizacao" className="hover:text-primary transition-colors">Área de Atendimento</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="https://wa.me/5511961435941" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">(11) 96143-5941</a>
                  <p className="text-xs text-white/50 mt-1">WhatsApp e Ligações</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>Rua Martim Correia de Sá, 370<br/>Vila Iolanda (Lajeado), São Paulo - SP<br/>CEP: 08451-090</p>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Horário de Funcionamento</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Segunda a Sexta</p>
                  <p className="text-sm">09:00 - 12:00 | 13:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0" />
                <div>
                  <p className="text-white">Sábado</p>
                  <p className="text-sm">09:00 - 12:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0" />
                <div>
                  <p className="text-white/50">Domingo</p>
                  <p className="text-sm text-primary">Fechado</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Mestre das TVs. Todos os direitos reservados.</p>
          <p>Assistência Técnica Especializada em São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
