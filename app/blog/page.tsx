"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { posts } from "./posts";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"All" | "Brand" | "Creator">("All");
  const [type, setType] = useState<"All" | "Pillar" | "Supporting">("All");

  const filtered = useMemo(() => {
    return posts
      .filter((p) => {
        const s = search.toLowerCase();
        const matchSearch =
          s === "" ||
          p.title.toLowerCase().includes(s) ||
          p.excerpt.toLowerCase().includes(s) ||
          p.keywords.some((k) => k.toLowerCase().includes(s));
        const matchCat = category === "All" || p.category === category;
        const matchType = type === "All" || p.type === type;
        return matchSearch && matchCat && matchType;
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }, [search, category, type]);

  const featured = filtered[0];
  const topPicks = filtered.slice(1, 4);
  const rest = filtered.slice(4);

  return (
    <main
      className="min-h-screen"
      style={{ background: "#FAFAF9", fontFamily: "var(--font-sans)" }}
    >
      {/* ─── Hero ─── */}
      <section
        style={{
          padding: "3rem 1.5rem 2rem",
          borderBottom: "0.5px solid rgba(10,10,10,0.08)",
          background: "linear-gradient(180deg, #EEEDFE 0%, #FAFAF9 100%)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#534AB7",
              background: "#EEEDFE",
              padding: "4px 12px",
              borderRadius: 999,
              marginBottom: 16,
            }}
          >
            FirstSkout Journal
          </span>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 500,
              margin: "0 0 12px",
              lineHeight: 1.1,
              color: "#0A0A0A",
              letterSpacing: "-0.02em",
            }}
          >
            The creator economy{" "}
            <em
              style={{
                fontFamily: "var(--font-serif, Georgia, serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#534AB7",
              }}
            >
              playbook.
            </em>
          </h1>
          <p style={{ fontSize: 14, color: "#6B6B70", margin: 0, lineHeight: 1.6, maxWidth: 520 }}>
            Insights, frameworks, and tactics for brands and creators building
            in India&apos;s influencer economy. Updated weekly.
          </p>
        </div>
      </section>

      {/* ─── Filters ─── */}
      <section
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "0.5px solid rgba(10,10,10,0.08)",
          padding: "1rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {/* Search */}
          <div style={{ position: "relative", marginBottom: 12 }}>
            <svg
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                width: 14,
                height: 14,
                opacity: 0.4,
              }}
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="7" cy="7" r="5" />
              <path d="M11 11l3 3" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles, topics, keywords..."
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "10px 14px 10px 38px",
                border: "0.5px solid rgba(10,10,10,0.12)",
                borderRadius: 999,
                fontSize: 13,
                color: "#0A0A0A",
                background: "#FAFAF9",
                outline: "none",
                fontFamily: "inherit",
              }}
              aria-label="Search articles"
            />
          </div>

          {/* Chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B70", marginRight: 4 }}>
              Audience
            </span>
            {(["All", "Brand", "Creator"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                style={{
                  fontSize: 12,
                  padding: "5px 12px",
                  borderRadius: 999,
                  border: "0.5px solid rgba(10,10,10,0.12)",
                  background: category === c ? "#0A0A0A" : "transparent",
                  color: category === c ? "#fff" : "#6B6B70",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                {c === "All" ? "All" : c === "Brand" ? "Brands" : "Creators"}
              </button>
            ))}
            <span style={{ width: 1, height: 14, background: "rgba(10,10,10,0.1)", margin: "0 6px" }} />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B70", marginRight: 4 }}>
              Type
            </span>
            {(["All", "Pillar", "Supporting"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                style={{
                  fontSize: 12,
                  padding: "5px 12px",
                  borderRadius: 999,
                  border: "0.5px solid rgba(10,10,10,0.12)",
                  background: type === t ? "#0A0A0A" : "transparent",
                  color: type === t ? "#fff" : "#6B6B70",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                {t === "Supporting" ? "Quick reads" : t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem" }}>

        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6B6B70", padding: "3rem 0", fontSize: 14 }}>
            No articles match your filters. Try a different combination.
          </p>
        ) : (
          <>
            {/* ─── Featured ─── */}
            {featured && (
              <section style={{ padding: "1.75rem 0 0" }}>
                <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6B70", marginBottom: 12 }}>
                  ▸ Featured article
                </p>
                <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, #EEEDFE 0%, #fff 100%)",
                      border: "0.5px solid rgba(10,10,10,0.08)",
                      borderRadius: 16,
                      padding: "1.5rem",
                      cursor: "pointer",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B6B70", marginBottom: 12 }}>
                      <span style={{ background: "#0A0A0A", color: "#fff", padding: "3px 9px", borderRadius: 6, fontSize: 10, fontWeight: 500 }}>{featured.category}</span>
                      {featured.type === "Pillar" && (
                        <span style={{ background: "#7F77DD", color: "#fff", padding: "3px 9px", borderRadius: 6, fontSize: 10, fontWeight: 500 }}>Pillar</span>
                      )}
                      <span>·</span>
                      <span>{featured.readTime} min read</span>
                      <span>·</span>
                      <span>{new Date(featured.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 500, margin: "0 0 10px", lineHeight: 1.2, color: "#0A0A0A", letterSpacing: "-0.015em" }}>
                      {featured.title}
                    </h2>
                    <p style={{ fontSize: 13, color: "#6B6B70", margin: "0 0 14px", lineHeight: 1.55 }}>{featured.excerpt}</p>
                    <span style={{ fontSize: 12, fontWeight: 500, color: "#0A0A0A" }}>Read article →</span>
                  </div>
                </Link>
              </section>
            )}

            {/* ─── Top Picks (Cards) ─── */}
            {topPicks.length > 0 && (
              <section style={{ padding: "1.75rem 0 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <p style={{ fontSize: 14, fontWeight: 500, color: "#0A0A0A", margin: 0 }}>Top picks</p>
                  <span style={{ fontSize: 11, color: "#6B6B70" }}>{filtered.length} articles</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {topPicks.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          background: "#fff",
                          border: "0.5px solid rgba(10,10,10,0.08)",
                          borderRadius: 14,
                          padding: "1rem 1.1rem",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          position: "relative",
                          height: "100%",
                          boxSizing: "border-box",
                        }}
                      >
                        <span style={{ position: "absolute", top: 12, right: 12, width: 26, height: 26, borderRadius: "50%", background: "#EEEDFE", color: "#534AB7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>↗</span>
                        <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B6B70", marginBottom: 8 }}>
                          {p.category} · {p.readTime} min
                        </div>
                        <h3 style={{ fontSize: 15, fontWeight: 500, margin: "0 0 8px", lineHeight: 1.3, color: "#0A0A0A", letterSpacing: "-0.01em" }}>{p.title}</h3>
                        <p style={{ fontSize: 12, color: "#6B6B70", margin: 0, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>{p.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* ─── Rest as text list ─── */}
            {rest.length > 0 && (
              <section style={{ padding: "1.75rem 0 2.5rem", borderTop: rest.length > 0 ? "0.5px solid rgba(10,10,10,0.08)" : "none", marginTop: "1.75rem" }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#0A0A0A", margin: "0 0 4px" }}>More from the journal</p>
                <div>
                  {rest.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          padding: "1rem 0",
                          borderBottom: "0.5px solid rgba(10,10,10,0.08)",
                          cursor: "pointer",
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                          transition: "padding-left 0.15s",
                        }}
                      >
                        <div style={{ flexShrink: 0, width: 72, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B6B70", paddingTop: 3 }}>
                          {new Date(p.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 5 }}>
                            <span style={{ background: "#0A0A0A", color: "#fff", padding: "2px 7px", borderRadius: 5, fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.category}</span>
                            {p.type === "Pillar" && (
                              <span style={{ background: "#7F77DD", color: "#fff", padding: "2px 7px", borderRadius: 5, fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Pillar</span>
                            )}
                            <span style={{ fontSize: 10, color: "#6B6B70", alignSelf: "center" }}>{p.readTime} min</span>
                          </div>
                          <h4 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 4px", lineHeight: 1.35, color: "#0A0A0A", letterSpacing: "-0.01em" }}>{p.title}</h4>
                          <p style={{ fontSize: 12, color: "#6B6B70", margin: 0, lineHeight: 1.5 }}>{p.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
}
