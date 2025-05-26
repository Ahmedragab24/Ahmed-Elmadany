const SITE_URL = "https://ahmed-elmadany.vercel.app";

// Person Schema - للظهور في بطاقة المعلومات في Google
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmed Elmadany",
  alternateName: "أحمد المدني",
  url: SITE_URL,
  image: `${SITE_URL}/me.png`,
  jobTitle: "Front-end Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  sameAs: [
    "https://github.com/AhmedElmadany",
    "https://linkedin.com/in/AhmedElmadany",
    // Add your social links here
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Front-end Development",
    "Web Development",
    "UI/UX",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Your University", // Update this
  },
};

// WebSite Schema - لتحسين ظهور الموقع في البحث
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ahmed Elmadany Portfolio",
  alternateName: "بورتفوليو أحمد المدني",
  url: SITE_URL,
  description:
    "Ahmed Elmadany - Front-end Developer & Engineer. Expert in React, Next.js, TypeScript.",
  inLanguage: ["en", "ar"],
  author: {
    "@type": "Person",
    name: "Ahmed Elmadany",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ProfilePage Schema - لصفحة البورتفوليو
export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Ahmed Elmadany",
    alternateName: "أحمد المدني",
    description:
      "Front-end Developer & Engineer specializing in React, Next.js, and TypeScript",
    image: `${SITE_URL}/me.png`,
    url: SITE_URL,
  },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

// BreadcrumbList Schema - للتنقل
export const createBreadcrumbJsonLd = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Project Schema - للمشاريع
export const createProjectJsonLd = (project: {
  name: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.name,
  description: project.description,
  image: project.image,
  url: project.url,
  author: {
    "@type": "Person",
    name: "Ahmed Elmadany",
  },
  keywords: project.technologies.join(", "),
});
