import type { MetadataRoute } from 'next'
import { CANONICAL_URL } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: CANONICAL_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${CANONICAL_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${CANONICAL_URL}/camping-car`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${CANONICAL_URL}/a-propos`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${CANONICAL_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
