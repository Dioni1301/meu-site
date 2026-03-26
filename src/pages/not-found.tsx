import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tv, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO title="Página Não Encontrada | Mestre das TVs" description="A página que você procura não existe." />
      <div className="min-h-[70vh] flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <div className="relative inline-block mb-8">
            <Tv className="w-32 h-32 text-secondary-foreground opacity-20" />
            <AlertCircle className="w-12 h-12 text-destructive absolute -bottom-2 -right-2 bg-background rounded-full" />
          </div>
          
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Erro 404</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Parece que essa tela ficou preta. A página que você tentou acessar não existe ou foi movida.
          </p>
          
          <Button size="lg" className="rounded-xl" asChild>
            <Link href="/">Voltar para o Início</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
