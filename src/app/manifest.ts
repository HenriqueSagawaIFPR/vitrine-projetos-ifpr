import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Repositório de Projetos IIW - IFPR',
    short_name: 'Projetos IIW',
    description: 'Repositório oficial de projetos finais de curso do Instituto Federal do Paraná (IFPR).',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/logo-if.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
