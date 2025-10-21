"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProjectFilters } from "@/components/project-filters"
import { ProjectCard } from "@/components/project-card"
import { Footer } from "@/components/footer"
import { projects } from "@/data/projects"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />

      <main id="projetos" className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 text-balance">Repositório de Projetos Finais de Curso - IFPR</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-6">
            <p className="text-lg text-pretty mb-4">
              Bem-vindo ao repositório oficial de projetos finais de curso do <strong>Instituto Federal do Paraná (IFPR)</strong> - Campus Assis Chateaubriand. 
              Este espaço digital foi criado para celebrar e compartilhar a excelência acadêmica dos nossos estudantes do curso técnico em 
              <strong> Informática para Internet</strong>.
            </p>
            
            <p className="text-pretty mb-4">
              Aqui você encontrará uma coleção diversificada de projetos que demonstram o talento, criatividade e competência técnica dos nossos alunos. 
              Cada projeto representa meses de dedicação, pesquisa e desenvolvimento, culminando em soluções inovadoras que abordam desafios reais 
              da sociedade e do mercado de trabalho.
            </p>
            
            <p className="text-pretty mb-4">
              Nossos estudantes utilizam as mais modernas tecnologias de desenvolvimento web, incluindo <strong>React</strong>, <strong>Next.js</strong>, 
              <strong> JavaScript</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong> e muitas outras ferramentas 
              essenciais para o desenvolvimento de aplicações web robustas e escaláveis.
            </p>
            
            <p className="text-pretty mb-6">
              O IFPR é uma instituição de ensino pública que oferece educação técnica e tecnológica de qualidade, formando profissionais 
              capacitados para atender às demandas do mercado de trabalho. Nossos projetos refletem não apenas o conhecimento técnico adquirido, 
              mas também o compromisso com a inovação e o desenvolvimento sustentável da região.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold text-foreground mb-2">Projetos dos Estudantes</h2>
          <p className="text-muted-foreground text-pretty">Filtre por categoria para encontrar projetos específicos e explore o portfólio completo de trabalhos desenvolvidos pelos nossos alunos</p>
        </div>

        <ProjectFilters selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
