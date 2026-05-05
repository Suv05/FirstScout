import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.firstskout.com/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://www.firstskout.com/about-us', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.firstskout.com/creators', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.firstskout.com/tools', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.firstskout.com/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://www.firstskout.com/appointment', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.firstskout.com/legal', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
 
