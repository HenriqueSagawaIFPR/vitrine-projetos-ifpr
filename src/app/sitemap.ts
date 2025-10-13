import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://repositorio-projetos-ifpr.vercel.app'
  
  // Página principal
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Páginas de projetos individuais (se existirem)
  projects.forEach((project) => {
    routes.push({
      url: `${baseUrl}/projeto/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  })

  // Páginas de categorias
  const categories = ['IIW2023A', 'IIW2024A']
  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/categoria/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })
  })

  return routes
}
