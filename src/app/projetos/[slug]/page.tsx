import { notFound } from "next/navigation"
import { Metadata } from "next"
import { projects } from "@/data/projects"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, User, GraduationCap, Calendar, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CommentsSection } from "@/components/comments-section"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

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

// Função para encontrar projeto pelo slug
function findProjectBySlug(slug: string) {
  return projects.find(project => generateSlug(project.name) === slug)
}

// Gerar metadados dinâmicos
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = findProjectBySlug(slug)
  
  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "O projeto solicitado não foi encontrado."
    }
  }

  const title = `${project.name} | Repositório de Projetos IIW - IFPR`
  const description = `${project.description} Desenvolvido por ${project.author} do curso ${project.class}. Tecnologias: ${project.technologies.join(", ")}.`

  return {
    title,
    description,
    keywords: [
      project.name,
      ...project.technologies,
      "IFPR",
      "projeto final de curso",
      "TCC",
      project.author,
      project.category,
      "desenvolvimento web",
      "programação"
    ],
    authors: [{ name: project.author }],
    openGraph: {
      title,
      description,
      url: `https://repositorio-projetos-ifpr.vercel.app/projetos/${slug}`,
      siteName: 'Repositório de Projetos IIW - IFPR',
      images: [
        {
          url: project.previewImage,
          width: 1200,
          height: 630,
          alt: `Preview do projeto ${project.name}`,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.previewImage],
    },
    alternates: {
      canonical: `/projetos/${slug}`,
    },
  }
}

// Gerar slugs estáticos para SSG
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: generateSlug(project.name),
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = findProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Início
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/#projetos" className="hover:text-foreground transition-colors">
                Projetos
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium truncate max-w-xs">
              {project.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagem do projeto */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={project.previewImage || "/placeholder.svg"}
                alt={`Preview do projeto ${project.name}`}
                width={600}
                height={400}
                className="w-full h-96 object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {project.category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Informações do projeto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4 text-balance">
                {project.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {project.description}
              </p>
            </div>

            {/* Informações do autor */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Informações do Projeto</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium text-foreground">Autor(es):</span>
                      <p className="text-muted-foreground">{project.author}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium text-foreground">Curso:</span>
                      <p className="text-muted-foreground">{project.class}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium text-foreground">Categoria:</span>
                      <p className="text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tecnologias */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.siteUrl && (
                <Button asChild size="lg" className="flex-1">
                  <a 
                    href={project.siteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visitar Site
                  </a>
                </Button>
              )}
              
              {project.githubUrl && (
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    Ver Código
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Seção de Comentários e Avaliações */}
        <div className="mt-12">
          <CommentsSection projectId={project.id} />
        </div>

        {/* Navegação para outros projetos */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Outros Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <Card key={otherProject.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Link href={`/projetos/${generateSlug(otherProject.name)}`}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={otherProject.previewImage || "/placeholder.svg"}
                        alt={`Preview do projeto ${otherProject.name}`}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 text-balance line-clamp-2">
                        {otherProject.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {otherProject.description}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

