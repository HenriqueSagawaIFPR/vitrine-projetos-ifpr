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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-balance">Projetos dos Estudantes</h2>
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
