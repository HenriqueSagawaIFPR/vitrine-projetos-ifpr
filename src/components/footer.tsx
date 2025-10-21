import { Button } from "@/components/ui/button"
import { ExternalLink, GraduationCap, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre o IFPR */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Sobre o IFPR</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O Instituto Federal do Paraná é uma instituição de ensino superior pública que oferece 
              educação técnica e tecnológica de qualidade, formando profissionais capacitados para 
              o mercado de trabalho.
            </p>
            <Button asChild variant="outline" size="sm">
              <a href="https://www.ifpr.edu.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Site Oficial
              </a>
            </Button>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Campus Assis Chateaubriand</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@ifpr.edu.br</span>
              </div>
            </div>
            <Button asChild variant="outline" size="sm">
              <a href="mailto:contato@ifpr.edu.br" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Entrar em Contato
              </a>
            </Button>
          </div>

          {/* CTA Principal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Interessado no Curso?</h3>
            <p className="text-sm text-muted-foreground">
              Conheça mais sobre o curso técnico em Informática para Internet e como você pode 
              fazer parte da nossa comunidade acadêmica.
            </p>
            <Button asChild className="w-full">
              <a href="https://www.ifpr.edu.br/assis-chateaubriand" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Saiba Mais
              </a>
            </Button>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span>Desenvolvido com</span>
              ☕
              <span>pelos estudantes do IFPR</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Instituto Federal do Paraná - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

