import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center flex-col gap-2 text-muted-foreground mb-2">
          <span>Desenvolvido com</span>
          ☕
          <span>pelos estudantes do IFPR e mantido pelos servidores</span>
          <Link href="https://github.com/HenriqueSagawaIFPR/vitrine-projetos-ifpr" target="_blank"></Link>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Instituto Federal do Paraná - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}


