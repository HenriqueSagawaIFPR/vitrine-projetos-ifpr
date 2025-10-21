import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

// Função para gerar slug a partir do nome do projeto
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://repositorio-projetos-ifpr.vercel.app'
  
  // Página principal
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  // Páginas dinâmicas dos projetos
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projetos/${generateSlug(project.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages]
}