// app/blog/[slug]/page.tsx
// ✅ No header/footer here — inherited from app/layout.tsx automatically

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { posts, getPostBySlug, getRelatedPosts } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://www.firstskout.com/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: "FirstSkout",
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["FirstSkout"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedSlugs);
  const url = `https://www.firstskout.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "FirstSkout", url: "https://www.firstskout.com" },
    publisher: {
      "@type": "Organization",
      name: "FirstSkout",
      logo: { "@type": "ImageObject", url: "https://www.firstskout.com/logo-no-bg.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + url)}`;

  return (
    <main style={{ background: "#FAFAF9", minHeight: "100vh" }}>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── Article Header ─── */}
      <div style={{ background: "linear-gradient(180deg, #EEEDFE 0%, #FAFAF9 100%)", borderBottom: "0.5px solid rgba(10,10,10,0.08)", padding: "2rem 1.5rem 1.75rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: 11, color: "#6B6B70", marginBottom: "1.25rem", letterSpacing: "0.04em" }}>
            <Link href="/" style={{ color: "#6B6B70", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 6px" }}>/</span>
            <Link href="/blog" style={{ color: "#6B6B70", textDecoration: "none" }}>Blog</Link>
            <span style={{ margin: "0 6px" }}>/</span>
            <span style={{ color: "#0A0A0A" }}>{post.title.slice(0, 40)}...</span>
          </nav>

          {/* Meta */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B6B70", marginBottom: 14 }}>
            <span style={{ background: "#0A0A0A", color: "#fff", padding: "3px 9px", borderRadius: 6, fontSize: 10, fontWeight: 500 }}>{post.category}</span>
            {post.type === "Pillar" && (
              <span style={{ background: "#7F77DD", color: "#fff", padding: "3px 9px", borderRadius: 6, fontSize: 10, fontWeight: 500 }}>Pillar</span>
            )}
            <span>·</span>
            <span>{post.readTime} min read</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 500, margin: "0 0 14px", lineHeight: 1.1, color: "#0A0A0A", letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          <p style={{ fontSize: 15, color: "#6B6B70", lineHeight: 1.6, margin: 0, maxWidth: 580 }}>{post.excerpt}</p>
        </div>
      </div>

      {/* ─── Share Row ─── */}
      <div style={{ background: "#fff", borderBottom: "0.5px solid rgba(10,10,10,0.08)", padding: "12px 1.5rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: "#6B6B70", letterSpacing: "0.08em", textTransform: "uppercase" }}>Share:</span>
          {[
            { label: "Twitter", href: twitterUrl },
            { label: "LinkedIn", href: linkedinUrl },
            { label: "WhatsApp", href: whatsappUrl },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "5px 12px", borderRadius: 999, border: "0.5px solid rgba(10,10,10,0.12)", fontSize: 12, color: "#6B6B70", textDecoration: "none", fontFamily: "inherit" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ─── Article Body ─── */}
      <article style={{ maxWidth: 680, margin: "0 auto", padding: "2.5rem 1.5rem 1.5rem" }}>
        <div
          className="fs-article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ─── CTA Box ─── */}
        <div style={{ margin: "2.5rem 0 1rem", padding: "1.5rem", background: "#0A0A0A", borderRadius: 16, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, background: "#7F77DD", borderRadius: "50%", opacity: 0.4 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#EEEDFE", margin: "0 0 8px", opacity: 0.9 }}>▸ FirstSkout</p>
            <h3 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 8px", lineHeight: 1.25, color: "#fff", letterSpacing: "-0.015em" }}>
              Ready to put this into action?
            </h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0 0 14px", lineHeight: 1.5 }}>
              FirstSkout connects brands with the right creators — fast, end-to-end, no middlemen.
            </p>
            <Link href="/appointment" style={{ display: "inline-block", padding: "9px 18px", background: "#fff", color: "#0A0A0A", borderRadius: 999, fontSize: 12, fontWeight: 500, textDecoration: "none" }}>
              Get in Touch →
            </Link>
          </div>
        </div>
      </article>

      {/* ─── Related Articles ─── */}
      {related.length > 0 && (
        <section style={{ background: "#F4F4F2", borderTop: "0.5px solid rgba(10,10,10,0.08)", padding: "2rem 1.5rem 2.5rem" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6B70", margin: "0 0 4px" }}>▸ Continue reading</p>
            <h2 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 1.25rem", color: "#0A0A0A", letterSpacing: "-0.015em" }}>
              Related from the journal
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#fff", border: "0.5px solid rgba(10,10,10,0.08)", borderRadius: 14, padding: "1rem 1.1rem", cursor: "pointer", height: "100%", boxSizing: "border-box" as const }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B6B70", marginBottom: 8 }}>
                      {p.category} · {p.readTime} min
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 6px", lineHeight: 1.3, color: "#0A0A0A" }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: "#6B6B70", margin: 0, lineHeight: 1.5 }}>{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article body styles */}
      <style>{`
        .fs-article-content p { font-size: 15px; line-height: 1.75; color: #1A1A1A; margin: 0 0 1.25rem; }
        .fs-article-content p:first-child::first-letter { font-family: Georgia, serif; font-size: 42px; font-weight: 500; float: left; line-height: 1; padding: 4px 8px 0 0; color: #534AB7; }
        .fs-article-content h2 { font-size: 22px; font-weight: 500; margin: 2.5rem 0 0.75rem; color: #0A0A0A; line-height: 1.25; letter-spacing: -0.015em; position: relative; padding-left: 14px; }
        .fs-article-content h2::before { content: ""; position: absolute; left: 0; top: 5px; bottom: 5px; width: 3px; background: #7F77DD; border-radius: 2px; }
        .fs-article-content h3 { font-size: 17px; font-weight: 500; margin: 1.75rem 0 0.5rem; color: #0A0A0A; }
        .fs-article-content ul { margin: 0 0 1.25rem; padding-left: 1.25rem; }
        .fs-article-content li { font-size: 15px; line-height: 1.7; color: #1A1A1A; margin-bottom: 6px; }
        .fs-article-content li::marker { color: #7F77DD; }
        .fs-article-content strong { font-weight: 500; color: #0A0A0A; }
        .fs-article-content table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; font-size: 14px; }
        .fs-article-content th { text-align: left; padding: 10px 12px; background: #EEEDFE; border-bottom: 0.5px solid rgba(10,10,10,0.08); font-weight: 500; color: #0A0A0A; }
        .fs-article-content td { padding: 10px 12px; border-bottom: 0.5px solid rgba(10,10,10,0.06); color: #1A1A1A; }
        .fs-article-content blockquote { margin: 1.75rem 0; padding: 1.25rem 1.5rem; background: #EEEDFE; border-left: 3px solid #7F77DD; border-radius: 0 10px 10px 0; font-family: Georgia, serif; font-style: italic; font-size: 16px; line-height: 1.55; color: #534AB7; }
      `}</style>
    </main>
  );
}
