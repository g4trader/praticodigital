import { MetadataRoute } from 'next'
import produtos from '@/data/produtos.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://praticodigital.com.br'

  const produtosUrls = produtos.map((produto) => ({
    url: `${baseUrl}/produtos/${produto.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...produtosUrls,
  ]
}

