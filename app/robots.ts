import type { MetadataRoute } from 'next'
import { SITE } from '@/components/kp/data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: 'www.drkamalpandey.com',
  }
}
