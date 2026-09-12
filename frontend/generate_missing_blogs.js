const fs = require('fs');
const path = require('path');

const blogsDir = path.join(process.cwd(), 'src/content/blogs');
const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));

const missingLinks = new Map(); // slug -> title

files.forEach(f => {
  const content = fs.readFileSync(path.join(blogsDir, f), 'utf8');
  // Match [Title](/blog/slug)
  const regex = /\[([^\]]+)\]\(\/blog\/([^\)]+)\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const title = match[1];
    const slug = match[2];
    
    // Check if a file with this exact name or something ending in slug.md exists
    const exactMatch = files.find(file => file === `${slug}.md` || file.endsWith(`-${slug}.md`));
    
    if (!exactMatch) {
      missingLinks.set(slug, title);
    }
  }
});

missingLinks.forEach((title, slug) => {
  const filePath = path.join(blogsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    const defaultContent = `---
Title: "${title}"
Slug: "/blog/${slug}"
Meta Title: "${title} | Hardik Yadav"
Meta Description: "A comprehensive guide on ${title}. Learn the essentials of ${title} for web development."
Category: "General"
Tags: "Web Development"
Author: "Hardik Yadav"
Featured Image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
---

# ${title}

Welcome to the comprehensive guide on **${title}**. 

This article is currently a stub. We are working hard to bring you the best and most accurate content regarding ${title}. Check back soon for the full guide, including step-by-step tutorials, code examples, and best practices!

## Why is ${title} Important?

Understanding ${title} is crucial for modern web development. As the industry evolves, staying up to date with core concepts allows developers to build faster, more secure, and scalable applications.

Stay tuned for more updates!
`;
    fs.writeFileSync(filePath, defaultContent);
    console.log(`Created missing blog: ${slug}.md`);
  }
});
