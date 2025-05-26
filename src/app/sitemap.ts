import { MetadataRoute } from "next";
import { getData } from "@/lib/appwrite/api";

const SITE_URL = "https://ahmed-elmadany.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Dynamic project pages
  try {
    const projects = await getData();
    const projectPages: MetadataRoute.Sitemap = projects.map(
      (project: { $id: string; $updatedAt?: string }) => ({
        url: `${SITE_URL}/${project.$id}`,
        lastModified: project.$updatedAt
          ? new Date(project.$updatedAt)
          : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })
    );

    return [...staticPages, ...projectPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticPages;
  }
}
