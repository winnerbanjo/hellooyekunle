import { MetadataRoute } from 'next';
import { companies } from '@/content/companies';
import { notes } from '@/content/notes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hellooyekunle.com';
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/content`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const companyRoutes: MetadataRoute.Sitemap = companies.map((c) => ({
    url: `${baseUrl}/work/${c.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const noteRoutes: MetadataRoute.Sitemap = notes.map((n) => ({
    url: `${baseUrl}/notes/${n.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...companyRoutes, ...noteRoutes];
}
