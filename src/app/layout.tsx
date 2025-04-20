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

const FontCairoPlay = Cairo_Play({
  variable: "--FontCairoPlay",
  subsets: ["latin"],
});

const FontCairo = Cairo({
  variable: "--FontCairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elmadany",
  description:
    "I'm Front-end Developer | My solid foundation in data structures, algorithms, object-oriented programming, and design patterns has allowed me to develop efficient, maintainable, and scalable code. I am proficient in JavaScript and TypeScript and have extensive experience working with React and Redux. I have also worked with Next.js, GraphQl, Sass, Tailwind CSS, and other front-end technologies.",
  icons: ["/favicon-32x32.png"],
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${FontCairo.variable} ${FontCairoPlay.variable} antialiased`}
      >
        <ParticlesComponent />
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <ScrollUp />
            <Footer />
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
