import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
          <span>Desenvolvido com</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>pelos estudantes do IFPR</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 Instituto Federal do Paraná - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
