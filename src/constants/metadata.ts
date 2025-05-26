import { Metadata } from "next";

const SITE_URL = "https://ahmed-elmadany.vercel.app";
const SITE_NAME = "Ahmed Elmadany";
const SITE_NAME_AR = "أحمد المدني";

const DESCRIPTION_EN =
  "Ahmed Elmadany - Front-end Developer & Engineer. Expert in React, Next.js, TypeScript, and modern web technologies. Building scalable, efficient, and beautiful web applications.";

const DESCRIPTION_AR =
  "أحمد المدني - مطور واجهات أمامية ومهندس برمجيات. خبرة في React و Next.js و TypeScript وتقنيات الويب الحديثة. بناء تطبيقات ويب قابلة للتوسع وفعالة وجميلة.";

const KEYWORDS = [
  // English
  "Ahmed Elmadany",
  "Front-end Developer",
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript",
  "JavaScript",
  "Web Developer",
  "UI Developer",
  "Software Engineer",
  "Portfolio",
  // Arabic
  "أحمد المدني",
  "مطور واجهات أمامية",
  "مطور ويب",
  "مهندس برمجيات",
  "مطور React",
  "مطور Next.js",
  "بورتفوليو",
];

export const metadata: Metadata = {
  // Basic
  title: {
    default: `${SITE_NAME} | Front-end Developer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION_EN,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // Canonical
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-EG": "/",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Front-end Developer & Engineer`,
    description: DESCRIPTION_EN,
    images: [
      {
        url: `${SITE_URL}/Elmadany.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Portfolio`,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Front-end Developer`,
    description: DESCRIPTION_EN,
    images: [`${SITE_URL}/Elmadany.png`],
    creator: "@AhmedElmadany",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/Logo.png", sizes: "180x180", type: "image/png" }],
  },

  // Manifest
  manifest: "/manifest.webmanifest",

  // Theme
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],

  // Robots
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

  // Verification (add your IDs when available)
  //   verification: {
  //     google: "your-google-verification-id",
  //     yandex: "your-yandex-verification-id",
  //   },

  // Category
  category: "technology",
};

// Export for reuse
export const siteConfig = {
  url: SITE_URL,
  name: SITE_NAME,
  nameAr: SITE_NAME_AR,
  descriptionEn: DESCRIPTION_EN,
  descriptionAr: DESCRIPTION_AR,
  keywords: KEYWORDS,
};
