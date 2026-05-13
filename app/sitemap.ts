import type { MetadataRoute } from 'next'

const BASE_URL = 'https://firstskout.com'

const blogPosts = [
  { slug: 'influencer-marketing-strategy-2026', date: '2026-05-14', priority: 0.85 },
  { slug: 'how-to-grow-instagram-2026', date: '2026-05-17', priority: 0.85 },
  { slug: 'influencer-rate-card-india-2026', date: '2026-05-20', priority: 0.75 },
  { slug: 'micro-vs-macro-influencers-roi', date: '2026-05-23', priority: 0.75 },
  { slug: 'viral-reels-formula-2026', date: '2026-05-26', priority: 0.75 },
  { slug: 'tier-2-tier-3-influencer-marketing-india', date: '2026-05-29', priority: 0.85 },
  { slug: 'first-brand-deal-creator', date: '2026-06-01', priority: 0.75 },
  { slug: 'personal-brand-content-creator', date: '2026-06-04', priority: 0.85 },
  { slug: 'measure-influencer-marketing-roi', date: '2026-06-07', priority: 0.85 },
  { slug: 'ugc-vs-traditional-ads', date: '2026-06-10', priority: 0.75 },
  { slug: 'media-kit-influencer', date: '2026-06-13', priority: 0.75 },
  { slug: 'product-launch-influencer-marketing', date: '2026-06-16', priority: 0.75 },
  { slug: 'festive-season-influencer-marketing', date: '2026-06-19', priority: 0.75 },
  { slug: 'creator-revenue-streams-2026', date: '2026-06-22', priority: 0.75 },
  { slug: 'content-creator-burnout', date: '2026-06-25', priority: 0.75 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/about-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/appointment`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/creators`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/legal`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: post.priority,
  }))

  return [...staticPages, ...blogPages]
}
