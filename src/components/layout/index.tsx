import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FloatingWhatsApp } from "./floating-whatsapp";
import { ScrollToTop } from "@/components/scroll-to-top";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/20">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
