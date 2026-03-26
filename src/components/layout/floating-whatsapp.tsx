import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5511961435941"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp text-whatsapp-foreground rounded-full shadow-lg shadow-whatsapp/30 hover:shadow-xl hover:shadow-whatsapp/40 hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Contato pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full border-2 border-whatsapp animate-ping opacity-20 group-hover:opacity-40"></span>
    </motion.a>
  );
}
