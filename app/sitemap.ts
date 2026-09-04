import type { MetadataRoute } from 'next'
import { SITE } from '@/components/kp/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain
  const t = new Date()
  return [
    { url: base, lastModified: t, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/work`, lastModified: t, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/recognition`, lastModified: t, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/research`, lastModified: t, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/experience`, lastModified: t, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/consulting`, lastModified: t, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: t, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: t, changeFrequency: 'weekly', priority: 0.5 },
  ]
}
