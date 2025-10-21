import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, User, GraduationCap, Eye } from "lucide-react"
import { LikeButton } from "@/components/like-button"
import { ProjectRating } from "@/components/project-rating"
import type { Project } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"

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

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          {project.siteUrl ? (
            <Link href={project.siteUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir site de ${project.name}`}>
              <Image
                src={project.previewImage || "/placeholder.svg"}
                alt={`Preview do projeto ${project.name} - ${project.description.substring(0, 100)}...`}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                priority={false}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          ) : (
            <Image
              src={project.previewImage || "/placeholder.svg"}
              alt={`Preview do projeto ${project.name} - ${project.description.substring(0, 100)}...`}
              width={400}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              priority={false}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {project.category}
            </Badge>
          </div>
          <div className="absolute top-3 left-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1">
              <LikeButton projectId={project.id} />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 text-balance">{project.name}</h3>

        <p className="text-muted-foreground text-sm mb-4 text-pretty leading-relaxed">{project.description}</p>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">{project.author}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{project.class}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Avaliação do projeto */}
        <div className="mt-4 pt-4 border-t border-border">
          <ProjectRating projectId={project.id} />
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild className="flex-1">
          <Link href={`/projetos/${generateSlug(project.name)}`} className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Ver Detalhes
          </Link>
        </Button>

        {project.siteUrl && (
          <Button asChild variant="outline" className="flex-1">
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Ver Site
            </a>
          </Button>
        )}

        {project.githubUrl && (
          <Button asChild variant="outline" className="flex-1">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
