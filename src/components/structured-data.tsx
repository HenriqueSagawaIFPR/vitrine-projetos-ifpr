import { projects } from '@/data/projects'

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Instituto Federal do Paraná - Campus Assis Chateaubriand",
    "alternateName": "IFPR",
    "url": "https://repositorio-projetos-ifpr.vercel.app",
    "logo": "https://repositorio-projetos-ifpr.vercel.app/logo-if.png",
    "description": "Repositório oficial de projetos finais de curso do Instituto Federal do Paraná (IFPR).",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Assis Chateaubriand",
      "addressRegion": "Paraná",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.ifpr.edu.br"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Repositório de Projetos IIW - IFPR",
    "url": "https://repositorio-projetos-ifpr.vercel.app",
    "description": "Repositório oficial de projetos finais de curso do Instituto Federal do Paraná (IFPR).",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Instituto Federal do Paraná - Campus Assis Chateaubriand"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://repositorio-projetos-ifpr.vercel.app?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const projectSchemas = projects.map(project => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.description,
    "author": {
      "@type": "Person",
      "name": project.author
    },
    "dateCreated": "2023",
    "genre": "Educational Project",
    "keywords": project.technologies.join(", "),
    "url": project.siteUrl || `https://repositorio-projetos-ifpr.vercel.app/projeto/${project.id}`,
    "image": project.previewImage.startsWith('http') 
      ? project.previewImage 
      : `https://repositorio-projetos-ifpr.vercel.app${project.previewImage}`,
    "programmingLanguage": project.technologies,
    "isPartOf": {
      "@type": "Collection",
      "name": "Repositório de Projetos IIW - IFPR"
    }
  }))

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://repositorio-projetos-ifpr.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projetos",
        "item": "https://repositorio-projetos-ifpr.vercel.app#projetos"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {projectSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  )
}
