import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firstskout.com"),

  title: {
    default: "FirstSkout - A Global Influencer Marketing Agency",
    template: "%s | FirstSkout",
  },

  description:
    "FirstSkout is a leading influencer marketing agency that connects brands with the right creators in real time. No guesswork, no middlemen — just fast, results-driven campaigns handled end to end.",

  keywords: [
    "Influencer Marketing",
    "Influencer Agency",
    "Creator Marketing",
    "Brand Collaborations",
    "Social Media Marketing",
    "Influencer Campaigns",
    "FirstSkout",
  ],

  authors: [{ name: "FirstSkout" }],

  creator: "FirstSkout",

  publisher: "FirstSkout",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firstskout.com",
    siteName: "FirstSkout",

    title: "FirstSkout - A Global Influencer Marketing Agency",

    description:
      "Connect with the right creators and launch high-performing influencer campaigns with FirstSkout.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FirstSkout",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FirstSkout - A Global Influencer Marketing Agency",

    description:
      "Connect brands with creators using data-driven influencer marketing campaigns.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],

    apple: [
      { url: "/apple-touch-icon.png" },
      {
        url: "/apple-touch-icon-152x152.png",
        sizes: "152x152",
      },
      {
        url: "/apple-touch-icon-167x167.png",
        sizes: "167x167",
      },
      {
        url: "/apple-touch-icon-180x180.png",
        sizes: "180x180",
      },
    ],

    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#be185d",
      },
    ],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", bodoni.variable, manrope.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
