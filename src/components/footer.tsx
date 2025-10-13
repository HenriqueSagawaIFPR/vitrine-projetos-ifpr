export function Footer() {
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
          <span>Desenvolvido com</span>
          ☕
          <span>pelos estudantes do IFPR</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Instituto Federal do Paraná - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

