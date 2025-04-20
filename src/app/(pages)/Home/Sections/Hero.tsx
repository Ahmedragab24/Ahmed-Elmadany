
import ClientHero from "../Components/client-hero";
import { getAbout } from "@/lib/appwrite/api";
import { Suspense } from "react";

// Server component to fetch data
async function HeroServer() {
  // Fetch data on the server
  const aboutData = await getAbout();

  if (!aboutData) return null;

  return <ClientHero aboutData={aboutData} />;
}

// Loading fallback
function HeroSkeleton() {
  return (
    <div className="container mt-[4rem] md:mt-0 flex flex-col-reverse md:flex-row md:items-center md:justify-between md:h-[99vh]">
      {/* Text Skeleton */}
      <div className="animate-pulse flex flex-col gap-2 w-full md:w-1/2">
        <div className="h-6 bg-muted rounded w-24 mb-2"></div>
        <div className="h-10 bg-muted rounded w-64 mb-4"></div>
        <div className="h-4 bg-muted rounded w-full max-w-md mb-2"></div>
        <div className="h-4 bg-muted rounded w-full max-w-sm mb-4"></div>
        <div className="flex gap-2 mb-4">
          <div className="h-10 bg-muted rounded w-32"></div>
          <div className="h-10 bg-muted rounded w-32"></div>
        </div>
        <div className="flex gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-6 w-6 bg-muted rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Hexagon Skeleton */}
      <div className="relative w-[250px] sm:w-[320px] lg:w-[400px] aspect-[1.154] bg-muted mx-auto animate-pulse hexagon" />
    </div>
  );
}

// Main component with Suspense boundary
export default function Hero() {
  return (
    <section className="section !p-0" id="home">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroServer />
      </Suspense>
    </section>
  );
}
