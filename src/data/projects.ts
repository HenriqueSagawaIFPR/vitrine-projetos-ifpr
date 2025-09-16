export interface Project {
  id: string
  name: string
  description: string
  author: string
  class: string
  previewImage: string
  siteUrl?: string
  githubUrl: string
  technologies: string[]
  category: string
}

export const projects: Project[] = [
  {
    id: "1",
    name: "História em Quadrinhos como Ferramenta Didática para o Ensino de Cinemática",
    description:
      "Elaboramos uma história em quadrinhos como ferramenta pedagógica para abordar os conceitos fundamentais da cinemática, conteúdo programático de Física I, visando aprimorar a compreensão e o engajamento dos estudantes recém-ingressos.",
    author: "Mariani Denig, Isabela Castro, Maria Sagava",
    class: "Técnico em Informática para Internet - 3º Ano",
    previewImage: "/pfc-1.png",
    siteUrl: "https://hqcinematic.netlify.app/",
    githubUrl: "",
    technologies: ["HTML", "CSS", "JavaScript", "Node.Js", "MongoDB"],
    category: "IIW2023A",
  },
  {
    id: "2",
    name: "IFCode",
    description:
      "Desenvolvemos a plataforma IFCode, um ambiente colaborativo para os alunos do curso Técnico em Informática para Internet, projetado para centralizar e facilitar o compartilhamento de conhecimentos.",
    author: "Henrique Tutomu Sagawa, João Victor Nogueira Calassara",
    class: "Técnico em Informática para Internet - 3º Ano",
    previewImage: "/pfc-2.png",
    siteUrl: "https://ifcode.com.br",
    githubUrl: "https://github.com/henriquesagawa/ifcode",
    technologies: ["TypeScript", "Next.Js", "React.Js", "Firebase", "Node.Js"],
    category: "IIW2023A",
  },
  {
    id: "3",
    name: "Elas por Elas",
    description:
      "Projeto de extensão do IFPR (Instituto Federal do Paraná) com intuito de ser um espaço acolhedor feminino, não apenas ouvindo mulheres, mas também organizando discussões a respeito do papel das mesmas na sociedade, assim contribuindo para essa causa.",
    author: "Heloisa Oliveira, Fabiola Dutra, Camila Bezerra",
    class: "Técnico em Informática para Internet - 3º Ano",
    previewImage: "/pfc-3.png",
    siteUrl: "https://elasporelas-ifpr.netlify.app/",
    githubUrl: "",
    technologies: ["HTML", "CSS", "JavaScript", "Node.Js"],
    category: "IIW2023A",
  },
  {
    id: "4",
    name: "TalkTalk",
    description:
      "Aplicação web para tradução instantânea em conversas por chat, projetada para ser acessível a todos os usuários.",
    author: "Gustavo Preti",
    class: "Técnico em Informática para Internet - 3° ano",
    previewImage: "/pfc-4.png",
    siteUrl: "https://talktalkchat.com.br/",
    githubUrl: "https://github.com/GustavoGPreti/talktalk",
    technologies: ["TypeScript", "Next.Js", "Node.Js", "React.Js", "Socket.Io", "SQL"],
    category: "IIW2023A",
  },
  {
    id: "5",
    name: "HUB Sabiá",
    description:
      "Hub de administração para chatbots que auxiliaram no atendimento de dúvidas sobre as campanhas acadêmicas",
    author: "Heitor Gavioli, Carlos Lopes, Kallel Motta",
    class: "Técnico em Informática para Internet - 3º Ano",
    previewImage: "/pfc-5.png",
    siteUrl: "https://hub-sabia-front-e-back.vercel.app/",
    githubUrl: "",
    technologies: ["JavaScript", "Node.Js", "Vue.Js", "MongoDB"],
    category: "IIW2023A",
  },
  {
    id: "6",
    name: "Repositório Digital IFPR",
    description:
      "Desenvolvimento de um repositório digital para centralizar, preservar e dar ampla visibilidade aos Trabalhos de Conclusão de Curso (TCCs) produzidos no IFPR Campus Assis Chateaubriand.",
    author: "Rafael Alcantara, Matheus Oliveira",
    class: "Técnico em Informática em Informática - 3º Ano",
    previewImage: "/pfc-6.png",
    siteUrl: "https://repositorio-digital-ifpr.vercel.app/",
    githubUrl: "",
    technologies: ["React", "Node.Js", "JavaScript", "MongoDB"],
    category: "IIW2023A",
  },
  {
    id: "7",
    name: "Guia ao Dispor",
    description: "Guia ao Dispor - Plataforma que busca facilitar o contato entre pessoas que necessitam de cuidados específicos e qualificados que o provém.",
    author: "Rhuam Ramos, Lucas Schultz",
    class: "Técnico em Informática para Internet - 3° ano",
    previewImage: "/pfc-7.png",
    siteUrl: "https://guiaaodisp.netlify.app/",
    githubUrl: "https://github.com/Rhuam7282/GuiaAoDispor-PFC",
    technologies: ["React.Js", "JavaScript", "Node.Js", "MongoDB"],
    category: "IIW2023A"
  },
  {
    id: "8",
    name: "Website voltado à coleta seletiva de resíduos no município de Assis Chateaubriand",
    description: "Juntos por uma Assis Chateaubriand mais limpa e sustentável! Este site é a nossa central de informações para fortalecer a coleta seletiva na cidade. Descubra como sua participação é fundamental para o meio ambiente e para apoiar as cooperativas de reciclagem locais. Explore, informe-se e faça parte dessa transformação. O futuro da nossa cidade passa pelas suas mãos.",
    author: "Maria Fernando, Mariah",
    class: "Técnico em Informática para Internet - 3° ano",
    previewImage: "/pfc-8.png",
    siteUrl: "https://coletareact.vercel.app/",
    githubUrl: "",
    technologies: ["React.Js", "JavaScript", "Node.Js"],
    category: "IIW2023A"
  }
]

export const categories = ["Todos", "IIW2023A", "IIW2024A"]
