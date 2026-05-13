// app/blog/posts.ts

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Brand" | "Creator";
  type: "Pillar" | "Supporting";
  readTime: number;
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedSlugs: string[];
  content: string; // Full article content (markdown or HTML)
};

export const posts: Post[] = [
  {
    slug: "influencer-marketing-strategy-2026",
    title: "How to Build a High-ROI Influencer Marketing Strategy in 2026",
    excerpt:
      "The 7-step framework Indian brands are using to deliver real ROI from creator campaigns. No theory — just what's working.",
    category: "Brand",
    type: "Pillar",
    readTime: 9,
    publishedAt: "2026-05-05",
    metaTitle:
      "Influencer Marketing Strategy 2026: 7-Step Framework for High ROI",
    metaDescription:
      "Build a data-backed influencer marketing strategy that delivers real ROI in 2026. Step-by-step framework, budget splits, and metrics that actually matter.",
    keywords: [
      "influencer marketing strategy 2026",
      "influencer marketing ROI",
      "creator marketing framework",
      "influencer campaign planning",
    ],
    relatedSlugs: [
      "micro-vs-macro-influencers-roi",
      "measure-influencer-marketing-roi",
      "ugc-vs-traditional-ads",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "tier-2-tier-3-influencer-marketing-india",
    title: "Tier 2 & Tier 3 India: The Hidden Goldmine of Influencer Marketing",
    excerpt:
      "Why Lucknow creators are out-performing Mumbai stars by 3-5x. The structural shift that's quietly changing Indian creator marketing.",
    category: "Brand",
    type: "Pillar",
    readTime: 8,
    publishedAt: "2026-05-06",
    metaTitle:
      "Tier 2 & Tier 3 India Influencer Marketing 2026: The Complete Brand Guide",
    metaDescription:
      "Why Tier 2 & 3 creators are outperforming Mumbai-Bangalore stars in 2026. Real ROI data, winning categories, and execution playbook for Indian brands.",
    keywords: [
      "tier 2 tier 3 influencer marketing India",
      "regional influencer marketing",
      "Bharat creators",
      "vernacular content marketing India",
    ],
    relatedSlugs: [
      "influencer-marketing-strategy-2026",
      "micro-vs-macro-influencers-roi",
      "festive-season-influencer-marketing",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "micro-vs-macro-influencers-roi",
    title:
      "Micro vs Macro Influencers: Which Delivers Better ROI for Indian Brands?",
    excerpt:
      "500+ campaigns analyzed. The data-backed comparison every brand marketer needs before their next budget meeting.",
    category: "Brand",
    type: "Supporting",
    readTime: 7,
    publishedAt: "2026-05-08",
    metaTitle:
      "Micro vs Macro Influencers 2026: Which Delivers Better ROI for Indian Brands?",
    metaDescription:
      "Data-backed comparison of micro vs macro influencers for Indian brands. Rates, ROI, engagement metrics, and the hybrid strategy that beats both.",
    keywords: [
      "micro vs macro influencers ROI",
      "nano influencers India",
      "micro influencer rates",
      "creator ROI analysis",
    ],
    relatedSlugs: [
      "influencer-marketing-strategy-2026",
      "measure-influencer-marketing-roi",
      "influencer-rate-card-india-2026",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "measure-influencer-marketing-roi",
    title: "The Ultimate Guide to Measuring Influencer Marketing ROI",
    excerpt:
      "5 attribution methods, the metric hierarchy that wins boardroom debates, and reporting templates leadership actually approves.",
    category: "Brand",
    type: "Pillar",
    readTime: 9,
    publishedAt: "2026-05-10",
    metaTitle:
      "How to Measure Influencer Marketing ROI: The Complete 2026 Framework",
    metaDescription:
      "Master influencer ROI with 5 attribution methods, a full metric hierarchy, and reporting templates that actually get leadership buy-in.",
    keywords: [
      "how to measure influencer marketing ROI",
      "influencer attribution",
      "creator campaign metrics",
      "UTM tracking",
    ],
    relatedSlugs: [
      "influencer-marketing-strategy-2026",
      "micro-vs-macro-influencers-roi",
      "ugc-vs-traditional-ads",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "festive-season-influencer-marketing",
    title: "Festive Season Influencer Marketing: The Complete 2026 Playbook",
    excerpt:
      "Diwali isn't won in October. It's won in May. The 6-month timeline, regional strategies, and budget splits that capture festive revenue.",
    category: "Brand",
    type: "Supporting",
    readTime: 8,
    publishedAt: "2026-05-12",
    metaTitle:
      "Festive Season Influencer Marketing India 2026: Complete Diwali Playbook",
    metaDescription:
      "The complete festive influencer marketing playbook for Indian brands. Six-month timeline, regional strategies, formats, and budget tips for 2026.",
    keywords: [
      "festive season influencer marketing India",
      "Diwali influencer campaign",
      "regional festival marketing India",
    ],
    relatedSlugs: [
      "tier-2-tier-3-influencer-marketing-india",
      "product-launch-influencer-marketing",
      "influencer-marketing-strategy-2026",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "ugc-vs-traditional-ads",
    title: "UGC vs Traditional Ads: Why User-Generated Content Wins in 2026",
    excerpt:
      "Why a phone-shot Reel out-performs a polished commercial 4-8x. The complete UGC engine playbook for D2C brands.",
    category: "Brand",
    type: "Supporting",
    readTime: 7,
    publishedAt: "2026-05-14",
    metaTitle:
      "UGC vs Traditional Ads 2026: Why User-Generated Content Wins Every Time",
    metaDescription:
      "Data-backed comparison of UGC vs traditional ads. Real performance metrics, when to use which, and a playbook to build a UGC content engine.",
    keywords: [
      "UGC vs traditional ads",
      "user-generated content marketing",
      "UGC content strategy",
      "UGC creators India",
    ],
    relatedSlugs: [
      "influencer-marketing-strategy-2026",
      "micro-vs-macro-influencers-roi",
      "product-launch-influencer-marketing",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "product-launch-influencer-marketing",
    title: "Product Launch Strategy: How to Go Viral with Influencer Marketing",
    excerpt:
      "How a Korean razor brand got 10M impressions in 30 days with zero brand recognition. The 90-day viral launch framework.",
    category: "Brand",
    type: "Supporting",
    readTime: 8,
    publishedAt: "2026-05-16",
    metaTitle:
      "Product Launch with Influencer Marketing: The Viral 2026 Strategy Guide",
    metaDescription:
      "Complete 90-day framework to launch products virally using influencer marketing. Creator mix, messaging pillars, and tactics that drive 10M+ impressions.",
    keywords: [
      "product launch influencer marketing strategy",
      "viral product launch India",
      "D2C launch strategy",
    ],
    relatedSlugs: [
      "influencer-marketing-strategy-2026",
      "festive-season-influencer-marketing",
      "ugc-vs-traditional-ads",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "how-to-grow-instagram-2026",
    title: "How to Grow from 0 to 10K Followers on Instagram in 2026",
    excerpt:
      "The 5% who actually hit 10K aren't more talented. They have specific habits the other 95% don't. Here's the complete playbook.",
    category: "Creator",
    type: "Pillar",
    readTime: 9,
    publishedAt: "2026-05-18",
    metaTitle:
      "How to Grow on Instagram in 2026: 0 to 10K Followers Complete Guide",
    metaDescription:
      "The complete, practical guide to growing 0-10K Instagram followers in 2026. Content system, Reel formula, hashtag strategy, and a 6-month path.",
    keywords: [
      "how to grow on Instagram 2026",
      "grow Instagram followers",
      "Instagram growth strategy",
      "10K followers Instagram",
    ],
    relatedSlugs: [
      "viral-reels-formula-2026",
      "personal-brand-content-creator",
      "media-kit-influencer",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "influencer-rate-card-india-2026",
    title: "Influencer Rate Card 2026: What Indian Creators Should Charge",
    excerpt:
      "The honest, data-backed creator rate card for 2026. By tier, platform, and niche — with negotiation tactics that actually work.",
    category: "Creator",
    type: "Supporting",
    readTime: 8,
    publishedAt: "2026-05-20",
    metaTitle:
      "Influencer Rate Card India 2026: What Creators Should Charge (Data-Backed)",
    metaDescription:
      "The complete 2026 Indian creator rate card. Reels, YouTube, Stories, LinkedIn pricing by tier, niche multipliers, and real negotiation tactics.",
    keywords: [
      "influencer rate card India 2026",
      "how much do influencers charge",
      "creator rates India",
      "Instagram Reel pricing",
    ],
    relatedSlugs: [
      "first-brand-deal-creator",
      "creator-revenue-streams-2026",
      "media-kit-influencer",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "first-brand-deal-creator",
    title: "The Complete Guide to Landing Your First Paid Brand Deal",
    excerpt:
      "Pitch templates, contract checklists, and the negotiation tactics that protect your rate. Everything for your first deal — done right.",
    category: "Creator",
    type: "Supporting",
    readTime: 8,
    publishedAt: "2026-05-22",
    metaTitle:
      "How to Get Your First Brand Deal as a Creator: The Complete 2026 Guide",
    metaDescription:
      "Step-by-step guide to landing your first paid brand deal. Media kit, pitch templates, negotiation tactics, and contract essentials.",
    keywords: [
      "how to get brand deals as a creator",
      "first brand deal creator",
      "pitch brands influencer",
      "paid partnership Instagram",
    ],
    relatedSlugs: [
      "influencer-rate-card-india-2026",
      "personal-brand-content-creator",
      "media-kit-influencer",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "viral-reels-formula-2026",
    title: "How to Create Viral Reels: The 2026 Formula That Actually Works",
    excerpt:
      "Frame-by-frame breakdown of what's working on Instagram in 2026. 7 winning formats, hook structures, and the 30-day testing framework.",
    category: "Creator",
    type: "Supporting",
    readTime: 8,
    publishedAt: "2026-05-24",
    metaTitle:
      "How to Make Viral Reels in 2026: The Complete Formula That Works",
    metaDescription:
      "Frame-by-frame viral Reel formula for 2026. Hook structure, 7 winning formats, audio strategy, and the 30-day testing framework.",
    keywords: [
      "how to make viral Reels 2026",
      "viral Instagram Reels",
      "Reel algorithm 2026",
      "Instagram Reel hooks",
    ],
    relatedSlugs: [
      "how-to-grow-instagram-2026",
      "personal-brand-content-creator",
      "influencer-rate-card-india-2026",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "personal-brand-content-creator",
    title:
      "Building a Personal Brand as a Content Creator: Step-by-Step Guide",
    excerpt:
      "Followers are rented. Personal brand is owned. The 5-pillar framework and 6-month plan that builds creator careers that last.",
    category: "Creator",
    type: "Pillar",
    readTime: 8,
    publishedAt: "2026-05-26",
    metaTitle:
      "How to Build a Personal Brand as a Content Creator: Step-by-Step 2026 Guide",
    metaDescription:
      "The complete 6-month personal brand framework for content creators. 5 pillars, audit checklists, and the signals that show your brand is working.",
    keywords: [
      "how to build personal brand as creator",
      "personal branding Instagram",
      "creator personal brand",
      "brand building social media",
    ],
    relatedSlugs: [
      "how-to-grow-instagram-2026",
      "viral-reels-formula-2026",
      "creator-revenue-streams-2026",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "content-creator-burnout",
    title: "Content Creator Burnout: Signs, Causes & Recovery Strategies",
    excerpt:
      "78% of creators say burnout affects their work. The signs, the causes nobody talks about, and the 3-level recovery framework.",
    category: "Creator",
    type: "Supporting",
    readTime: 8,
    publishedAt: "2026-05-28",
    metaTitle:
      "Content Creator Burnout: Signs, Causes & Recovery Strategies for 2026",
    metaDescription:
      "Complete guide to creator burnout. Warning signs, hidden causes, a 3-level recovery framework, and burnout-proof systems for sustainable careers.",
    keywords: [
      "content creator burnout",
      "influencer mental health",
      "creator fatigue",
      "sustainable creator career",
    ],
    relatedSlugs: [
      "personal-brand-content-creator",
      "creator-revenue-streams-2026",
      "how-to-grow-instagram-2026",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "creator-revenue-streams-2026",
    title: "7 Revenue Streams Every Content Creator Should Build in 2026",
    excerpt:
      "If your only income is brand deals, you're one algorithm change from a problem. The 7-stream diversification playbook for 2026.",
    category: "Creator",
    type: "Supporting",
    readTime: 8,
    publishedAt: "2026-05-30",
    metaTitle: "7 Revenue Streams Every Content Creator Should Build in 2026",
    metaDescription:
      "The complete creator income guide. 7 revenue streams, realistic earnings, when to launch each, and the order to build sustainable creator businesses.",
    keywords: [
      "creator revenue streams 2026",
      "creator monetization",
      "influencer income streams",
      "how creators make money",
    ],
    relatedSlugs: [
      "influencer-rate-card-india-2026",
      "first-brand-deal-creator",
      "personal-brand-content-creator",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
  {
    slug: "media-kit-influencer",
    title: "Media Kit Mastery: How to Create a Media Kit That Wins Brand Deals",
    excerpt:
      "Your media kit is your creator résumé. The 8-section template that turns inquiries into deals worth 3-5x your usual rate.",
    category: "Creator",
    type: "Supporting",
    readTime: 7,
    publishedAt: "2026-06-01",
    metaTitle:
      "How to Make a Media Kit for Influencers: The 2026 Guide That Wins Deals",
    metaDescription:
      "Complete media kit guide for content creators. 8 essential sections, design rules, what to avoid, and advanced tactics that win premium brand deals.",
    keywords: [
      "how to make media kit influencer",
      "creator media kit template",
      "influencer media kit India",
      "content creator portfolio",
    ],
    relatedSlugs: [
      "influencer-rate-card-india-2026",
      "first-brand-deal-creator",
      "personal-brand-content-creator",
    ],
    content: `<!-- Paste full article HTML here -->`,
  },
];

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);

export const getRelatedPosts = (slugs: string[]) =>
  slugs.map((s) => posts.find((p) => p.slug === s)).filter(Boolean) as Post[];
