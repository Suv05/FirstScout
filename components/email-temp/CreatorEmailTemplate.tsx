import * as React from "react";

interface CreatorEmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  platform: string;
  platformLink: string;
  genre: string;
  message: string;
}

export function CreatorEmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  platform,
  platformLink,
  genre,
  message,
}: CreatorEmailTemplateProps): React.ReactNode {
  const fullName = `${firstName} ${lastName}`;
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const submittedAt = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const platformIcon: Record<string, string> = {
    YouTube: "▶",
    Instagram: "◈",
    TikTok: "♪",
    Twitter: "✦",
    LinkedIn: "in",
  };

  const genreEmoji: Record<string, string> = {
  "beauty & fashion": "💄",
  "entertainment & comedy": "🎭",
  travel: "✈️",
  technology: "💻",
  motivational: "🔥",
  food: "🍽️",
  music: "🎵",
  "business & finance": "📈",
  "health & fitness": "💪",
  gaming: "🎮",
};

const genreIcon = genre
  ? genreEmoji[genre.trim().toLowerCase()] ?? "🎯"
  : null;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Creator Inquiry — FirstSkout</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f0efe9",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ backgroundColor: "#f0efe9", padding: "48px 16px" }}
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  width="600"
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  style={{ maxWidth: 600, width: "100%" }}
                >
                  <tbody>
                    {/* ── HEADER ── */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#0a0a0a",
                          borderRadius: "16px 16px 0 0",
                          padding: "36px 40px 32px",
                        }}
                      >
                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          border={0}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <p
                                  style={{
                                    margin: 0,
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    letterSpacing: "-0.5px",
                                  }}
                                >
                                  First
                                  <span style={{ color: "#a3e635" }}>
                                    Skout
                                  </span>
                                </p>
                                <p
                                  style={{
                                    margin: "4px 0 0",
                                    fontSize: 12,
                                    color: "#6b7280",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  Creator Intelligence Platform
                                </p>
                              </td>
                              <td align="right">
                                <span
                                  style={{
                                    display: "inline-block",
                                    backgroundColor: "#1a1a1a",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: 999,
                                    padding: "6px 14px",
                                    fontSize: 12,
                                    color: "#a3e635",
                                    fontWeight: 500,
                                    letterSpacing: "0.04em",
                                  }}
                                >
                                  ● New Inquiry
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div
                          style={{
                            borderTop: "1px solid #1e1e1e",
                            margin: "28px 0",
                          }}
                        />

                        <p
                          style={{
                            margin: 0,
                            fontSize: 28,
                            fontWeight: 700,
                            color: "#ffffff",
                            lineHeight: 1.25,
                            letterSpacing: "-0.5px",
                          }}
                        >
                          You've got a new
                          <br />
                          <span style={{ color: "#a3e635" }}>
                            creator inquiry
                          </span>{" "}
                          🎯
                        </p>
                        <p
                          style={{
                            margin: "10px 0 0",
                            fontSize: 14,
                            color: "#9ca3af",
                            lineHeight: 1.6,
                          }}
                        >
                          Someone just submitted the creator form on your
                          website. Here's everything you need to know.
                        </p>
                      </td>
                    </tr>

                    {/* ── CREATOR CARD ── */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#ffffff",
                          padding: "32px 40px 0",
                        }}
                      >
                        <p
                          style={{
                            margin: "0 0 16px",
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#9ca3af",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          Creator Profile
                        </p>
                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          border={0}
                        >
                          <tbody>
                            <tr>
                              <td width={56} valign="top">
                                <div
                                  style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    backgroundColor: "#f0fdf4",
                                    border: "2px solid #a3e635",
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#3f6212",
                                    textAlign: "center",
                                    lineHeight: "48px",
                                  }}
                                >
                                  {initials}
                                </div>
                              </td>
                              <td valign="middle" style={{ paddingLeft: 14 }}>
                                <p
                                  style={{
                                    margin: 0,
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#0a0a0a",
                                    letterSpacing: "-0.3px",
                                  }}
                                >
                                  {fullName}
                                </p>
                                <p
                                  style={{
                                    margin: "2px 0 0",
                                    fontSize: 13,
                                    color: "#6b7280",
                                  }}
                                >
                                  {email}
                                </p>
                                {phone && (
                                  <p
                                    style={{
                                      margin: "2px 0 0",
                                      fontSize: 13,
                                      color: "#6b7280",
                                    }}
                                  >
                                    📞 {phone}
                                  </p>
                                )}
                              </td>
                              <td align="right" valign="middle">
                                <span
                                  style={{
                                    display: "inline-block",
                                    backgroundColor: genre
                                      ? "#f0fdf4"
                                      : "#f9fafb",
                                    border: `1px solid ${genre ? "#bbf7d0" : "#e5e7eb"}`,
                                    borderRadius: 999,
                                    padding: "5px 14px",
                                    fontSize: 12,
                                    color: genre ? "#15803d" : "#9ca3af",
                                    fontWeight: 600,
                                  }}
                                >
                                  {genre
                                    ? `${genreIcon} ${genre.trim()}`
                                    : "Genre not specified"}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* ── DETAILS GRID ── */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#ffffff",
                          padding: "24px 40px 0",
                        }}
                      >
                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          border={0}
                        >
                          <tbody>
                            <tr>
                              {/* Platform */}
                              <td width="50%" style={{ paddingRight: 8 }}>
                                <div
                                  style={{
                                    backgroundColor: "#fafafa",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: 12,
                                    padding: "16px 18px",
                                  }}
                                >
                                  <p
                                    style={{
                                      margin: "0 0 6px",
                                      fontSize: 11,
                                      color: "#9ca3af",
                                      fontWeight: 600,
                                      textTransform: "uppercase",
                                      letterSpacing: "0.08em",
                                    }}
                                  >
                                    Platform
                                  </p>
                                  <p
                                    style={{
                                      margin: 0,
                                      fontSize: 15,
                                      fontWeight: 700,
                                      color: "#0a0a0a",
                                    }}
                                  >
                                    {platformIcon[platform] ?? "◆"} {platform}
                                  </p>
                                </div>
                              </td>
                              {/* Creator Genre */}
                              <td width="50%" style={{ paddingLeft: 8 }}>
                                <div
                                  style={{
                                    backgroundColor: "#fafafa",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: 12,
                                    padding: "16px 18px",
                                  }}
                                >
                                  <p
                                    style={{
                                      margin: "0 0 6px",
                                      fontSize: 11,
                                      color: "#9ca3af",
                                      fontWeight: 600,
                                      textTransform: "uppercase",
                                      letterSpacing: "0.08em",
                                    }}
                                  >
                                    Creator Genre
                                  </p>
                                  <p
                                    style={{
                                      margin: 0,
                                      fontSize: 15,
                                      fontWeight: 700,
                                      color: genre ? "#0a0a0a" : "#9ca3af",
                                    }}
                                  >
                                    {genre
                                      ? `${genreIcon} ${genre}`
                                      : "Not specified"}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* ── CONTACT INFO ROW (phone, only if provided) ── */}
                    {phone && (
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#ffffff",
                            padding: "12px 40px 0",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#fafafa",
                              border: "1px solid #e5e7eb",
                              borderRadius: 12,
                              padding: "16px 18px",
                            }}
                          >
                            <p
                              style={{
                                margin: "0 0 4px",
                                fontSize: 11,
                                color: "#9ca3af",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                              }}
                            >
                              Phone Number
                            </p>
                            <p
                              style={{
                                margin: 0,
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#0a0a0a",
                              }}
                            >
                              📞 {phone}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}

                    {/* ── PLATFORM LINK ── */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#ffffff",
                          padding: "12px 40px 0",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#fafafa",
                            border: "1px solid #e5e7eb",
                            borderRadius: 12,
                            padding: "16px 18px",
                          }}
                        >
                          <table
                            width="100%"
                            cellPadding={0}
                            cellSpacing={0}
                            border={0}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <p
                                    style={{
                                      margin: "0 0 4px",
                                      fontSize: 11,
                                      color: "#9ca3af",
                                      fontWeight: 600,
                                      textTransform: "uppercase",
                                      letterSpacing: "0.08em",
                                    }}
                                  >
                                    Profile Link
                                  </p>
                                  <a
                                    href={platformLink}
                                    style={{
                                      fontSize: 14,
                                      color: "#2563eb",
                                      fontWeight: 500,
                                      wordBreak: "break-all",
                                    }}
                                  >
                                    {platformLink}
                                  </a>
                                </td>
                                <td
                                  align="right"
                                  style={{
                                    paddingLeft: 16,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <a
                                    href={platformLink}
                                    style={{
                                      display: "inline-block",
                                      backgroundColor: "#0a0a0a",
                                      color: "#ffffff",
                                      fontSize: 12,
                                      fontWeight: 600,
                                      padding: "8px 16px",
                                      borderRadius: 8,
                                      textDecoration: "none",
                                    }}
                                  >
                                    Visit →
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>

                    {/* ── MESSAGE ── */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#ffffff",
                          padding: "12px 40px 0",
                        }}
                      >
                        <div
                          style={{
                            borderLeft: "3px solid #a3e635",
                            borderRadius: "0 12px 12px 0",
                            backgroundColor: "#f9fafb",
                            padding: "18px 20px",
                          }}
                        >
                          <p
                            style={{
                              margin: "0 0 8px",
                              fontSize: 11,
                              color: "#9ca3af",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            Message
                          </p>
                          <p
                            style={{
                              margin: 0,
                              fontSize: 14,
                              color: "#374151",
                              lineHeight: 1.7,
                            }}
                          >
                            {message}
                          </p>
                        </div>
                      </td>
                    </tr>

                    {/* ── CTA ── */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#ffffff",
                          padding: "28px 40px",
                        }}
                      >
                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          border={0}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  href={`mailto:${email}`}
                                  style={{
                                    display: "inline-block",
                                    backgroundColor: "#a3e635",
                                    color: "#0a0a0a",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    padding: "14px 28px",
                                    borderRadius: 10,
                                    textDecoration: "none",
                                    letterSpacing: "-0.2px",
                                  }}
                                >
                                  Reply to {firstName} →
                                </a>
                              </td>
                              <td align="right" valign="middle">
                                <p
                                  style={{
                                    margin: 0,
                                    fontSize: 12,
                                    color: "#9ca3af",
                                  }}
                                >
                                  Received at
                                  <br />
                                  <span
                                    style={{
                                      color: "#6b7280",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {submittedAt}
                                  </span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* ── FOOTER ── */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#0a0a0a",
                          borderRadius: "0 0 16px 16px",
                          padding: "24px 40px",
                        }}
                      >
                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          border={0}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <p
                                  style={{
                                    margin: 0,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#ffffff",
                                  }}
                                >
                                  First
                                  <span style={{ color: "#a3e635" }}>
                                    Skout
                                  </span>
                                </p>
                                <p
                                  style={{
                                    margin: "4px 0 0",
                                    fontSize: 12,
                                    color: "#4b5563",
                                  }}
                                >
                                  This is an automated notification from your
                                  creator inquiry form.
                                </p>
                              </td>
                              <td align="right" valign="middle">
                                <p
                                  style={{
                                    margin: 0,
                                    fontSize: 12,
                                    color: "#374151",
                                  }}
                                >
                                  © {new Date().getFullYear()} FirstSkout
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
