import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export interface BlogMetadata {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  tags: string;
  author: string;
  featuredImage: string;
}

export interface BlogPost {
  metadata: BlogMetadata;
  content: string;
}

export function getAllBlogs(): BlogPost[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames
    .filter(fileName => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        metadata: {
          title: matterResult.data.Title || "",
          slug: matterResult.data.Slug || `/blog/${fileName.replace(/\.md$/, "")}`,
          metaTitle: matterResult.data["Meta Title"] || "",
          metaDescription: matterResult.data["Meta Description"] || "",
          category: matterResult.data.Category || "General",
          tags: matterResult.data.Tags || "",
          author: matterResult.data.Author || "Hardik Yadav",
          featuredImage: matterResult.data["Featured Image"] || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        },
        content: matterResult.content,
      };
    });

  return allBlogsData;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const allBlogs = getAllBlogs();
  // Match slug ignoring trailing/leading slashes for safety
  return allBlogs.find(blog => blog.metadata.slug.replace(/^\/|\/$/g, '') === slug.replace(/^\/|\/$/g, ''));
}
