import type { Metadata } from "next";
import { Cairo_Play, Cairo } from "next/font/google";
import "./globals.css";
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
    "I'm Front-end Developer| My solid foundation in data structures, algorithms, object-oriented programming, and design patterns has allowed me to develop efficient, maintainable, and scalable code. I am proficient in JavaScript and TypeScript and have extensive experience working with React and Redux. I have also worked with Next.js, GraphQl, Sass, Tailwind CSS, and other front-end technologies.",
  icons: ["/favicon-32x32.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FontCairo.variable} ${FontCairoPlay.variable} antialiased`}
      >
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
