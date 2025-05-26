import type { Metadata } from "next";
import { Cairo_Play, Cairo } from "next/font/google";
import "../styles/globals.css";
import "../styles/phone-input-styles.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";
import ParticlesComponent from "@/components/ui/Particles";
import ScrollUp from "@/components/ui/scrollUp";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/providers/LanguageContextProvider";
import { ThemeProvider } from "@/providers/theme-provider";
import { metadata as siteMetadata } from "@/constants/metadata";
import { MultiJsonLd } from "@/components/seo/JsonLd";
import { personJsonLd, websiteJsonLd, profilePageJsonLd } from "@/lib/jsonld";

const FontCairoPlay = Cairo_Play({
  variable: "--FontCairoPlay",
  subsets: ["latin"],
});

const FontCairo = Cairo({
  variable: "--FontCairo",
  subsets: ["latin"],
});

// Re-export metadata for Next.js
export const metadata: Metadata = siteMetadata;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${FontCairo.variable} ${FontCairoPlay.variable} antialiased`}
      >
        {/* JSON-LD Structured Data for SEO */}
        <MultiJsonLd
          schemas={[personJsonLd, websiteJsonLd, profilePageJsonLd]}
        />

        <ParticlesComponent />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            {children}
            <ScrollUp />
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
