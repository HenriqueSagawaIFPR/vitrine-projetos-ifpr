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
  },
  {
    id: "9",
    name: "Hyperium",
    description: "Loja de jogos online desenvolvida com Next.js, Prisma e TypeScript. O projeto utiliza TailwindCSS e shadcn para a interface, além de ESLint para padronização e qualidade do código.",
    author: "Artur, Brayan e Welington",
    class: "IIW2024A",
    previewImage: "https://xhwdonvhshbzdtdjzase.supabase.co/storage/v1/object/public/games/hyperium-logo.png",
    siteUrl: "https://hyperiumgamestore.vercel.app",
    githubUrl: "https://github.com/hhartur/hyperium",
    technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "shadcn", "ESLint"],
    category: "IIW2024A"
  },
  {
    id: "10",
    name: "Jogo da Memória do Computaria",
    description: "Um jogo da memória online com cartas temáticas de computação, simples e divertido.",
    author: "Rafael Henrique Rodrigues de Alcantara",
    class: "IIW2023A",
    previewImage: "/jogo-da-memoria.png",
    siteUrl: "https://computariamemoria.netlify.app/",
    githubUrl: "https://github.com/RafaelAlcantara1/Jogo-da-mem-ria",
    technologies: ["JavaScript", "CSS", "HTML"],
    category: "IIW2023A"
  },
  {
    id: '11',
    name: "Jogo Torre de Blocos",
    description: "Um jogo simples onde o objetivo é empilhar blocos o mais alto possível sem deixar cair.",
    author: "Henrique Tutomu Sagawa",
    class: "IIW2023A",
    previewImage: "/torre-de-blocos.png",
    siteUrl: "https://torre-de-blocos-three.vercel.app/",
    githubUrl: "https://github.com/HenriqueSagawa/Torre-de-Blocos",
    technologies: ["JavaScript", "CSS", "HTML"],
    category: "IIW2023A"
  },
  {
    id: '12',
    name: "E-Commerce para Venda de Chopp",
    description: "Um e-commerce simples para venda de chopp, com catálogo de produtos, carrinho de compras e checkout.",
    author: "Henrique Tutomu Sagawa",
    class: "IIW2023A",
    previewImage: "/chopp-benteo.png",
    siteUrl: "https://chopbenteo.netlify.app/",
    githubUrl: "https://github.com/HenriqueSagawa/Projeto-Chopp-Benteo",
    technologies: ["JavaScript", "CSS", "HTML" ],
    category: "IIW2023A"
  },
  {
    id: "13",
    name: "Cine Search",
    description: "Aplicação web para busca e exibição de filmes utilizando uma API externa.",
    author: "Henrique Tutomu Sagawa",
    class: "IIW2023A",
    previewImage: "/cine-search.png",
    siteUrl: "https://cine-search-teal.vercel.app/",
    githubUrl: "https://github.com/HenriqueSagawaIFPR/cine-search",
    technologies: ["Next.Js", "React.Js", "TypeScript", "TailwindCSS", "Node.Js"],
    category: "IIW2023A"
  },
  {
    id: "14",
    name: "Flor de CSS",
    description: "Uma flor bonita e moderna, desenvolvida apenas com HTML, CSS e um pouco de javaScript.",
    author: "Henrique Tutomu Sagawa",
    class: "IIW2023A",
    previewImage: "/flor.png",
    siteUrl: "https://palmeiras.netlify.app/",
    githubUrl: "",
    technologies: ["CSS", "HTML", "JavaScript"],
    category: "IIW2023A"
  }
]

export const categories = ["Todos", "IIW2023A", "IIW2024A"]

