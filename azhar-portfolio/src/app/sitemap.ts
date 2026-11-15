import { MetadataRoute } from 'next';
import { projects } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://azhar-data.github.io';
  const currentDate = new Date();

  // Root homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Case study pages
  projects.forEach((project) => {
    routes.push({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return routes;
}
