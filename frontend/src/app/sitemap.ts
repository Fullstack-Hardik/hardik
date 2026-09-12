import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hardikyadav.vercel.app';

  // Read all blog files to generate dynamic sitemap entries
  const blogsDir = path.join(process.cwd(), 'src/content/blogs');
  let blogEntries: MetadataRoute.Sitemap = [];
  
  if (fs.existsSync(blogsDir)) {
    const files = fs.readdirSync(blogsDir).filter((file) => file.endsWith('.md'));
    
    blogEntries = files.map((file) => {
      // Remove .md extension for the slug
      const slug = file.replace(/\.md$/, '');
      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      };
    });
  }

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];

  return [...staticEntries, ...blogEntries];
}
