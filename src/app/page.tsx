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
          <p className="text-lg text-muted-foreground text-pretty mb-6">
            Explore projetos desenvolvidos por estudantes do curso técnico em Informática para Internet do Instituto Federal do Paraná. 
            Descubra trabalhos inovadores em React, Next.js, JavaScript, TypeScript e outras tecnologias modernas.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Projetos dos Estudantes</h2>
          <p className="text-muted-foreground text-pretty">Filtre por categoria para encontrar projetos específicos</p>
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
