const fs = require('fs');
const path = require('path');

const blogsDir = path.join(process.cwd(), 'src/content/blogs');
const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));

const categorize = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes('react') || lower.includes('nextjs') || lower.includes('dom')) return 'Frontend React';
  if (lower.includes('javascript') || lower.includes('js')) return 'JavaScript';
  if (lower.includes('node') || lower.includes('express')) return 'Backend Node.js';
  if (lower.includes('database') || lower.includes('mongo') || lower.includes('sql')) return 'Databases';
  if (lower.includes('security') || lower.includes('jwt') || lower.includes('auth') || lower.includes('owasp')) return 'Web Security';
  if (lower.includes('api') || lower.includes('rest') || lower.includes('graphql')) return 'APIs & Integration';
  if (lower.includes('git') || lower.includes('deploy') || lower.includes('vercel')) return 'DevOps & Tools';
  if (lower.includes('python')) return 'Python & AI';
  if (lower.includes('html') || lower.includes('css') || lower.includes('frontend')) return 'Web Fundamentals';
  if (lower.includes('backend') || lower.includes('full-stack')) return 'Full-Stack Architecture';
  return 'Tech & Programming';
};

const getTags = (title) => {
  const cat = categorize(title);
  const words = title.split(' ').filter(w => w.length > 3).map(w => w.replace(/[^a-zA-Z]/g, ''));
  return [cat.split(' ')[0], ...words.slice(0, 2), "2026", "Guide"].filter(t => t).join(', ');
};

const getFaq = (title) => {
  return `

## Frequently Asked Questions (FAQs)

**Q: Is ${title} difficult to learn for a beginner?**
A: Like any new tech concept, it has a learning curve. However, by breaking it down into smaller, practical exercises, you can master it within a few weeks. Consistency is key!

**Q: How does this fit into modern web development?**
A: It is a foundational pillar in today's tech stack. Companies worldwide rely on these principles to build scalable, secure, and fast digital products.

**Q: Are there any prerequisites?**
A: A basic understanding of web fundamentals (HTML, CSS, JavaScript) is usually enough to get started. From there, you can dive deeper into advanced architectures.
`;
};

const getMoreContent = (title) => {
  return `

### Deep Dive into ${title}
When building scalable applications in 2026, developers must prioritize performance, accessibility, and security. Understanding the nuances of **${title}** not only helps you write cleaner code but also significantly improves the overall architecture of your system. 

Whether you are building a small startup MVP or a large-scale enterprise application, these core principles remain exactly the same. Industry leaders emphasize the importance of mastering these fundamentals over chasing the latest syntax trends.
`;
}

files.forEach(f => {
  const filePath = path.join(blogsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Only update if it's one of the auto-generated ones (has "General" category or is a stub)
  if (content.includes('Category: "General"') || content.includes('This article is currently a stub')) {
    
    // Extract Title
    const titleMatch = content.match(/Title: "(.*?)"/);
    if (titleMatch) {
      const title = titleMatch[1];
      const category = categorize(title);
      const tags = getTags(title);

      // Replace Category and Tags
      content = content.replace(/Category: "General"/g, `Category: "${category}"`);
      content = content.replace(/Tags: "Web Development"/g, `Tags: "${tags}"`);
      
      // Append content if it hasn't been appended yet
      if (!content.includes('Frequently Asked Questions')) {
        content += getMoreContent(title);
        content += getFaq(title);
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${f} with category: ${category}`);
    }
  }
});

// Also let's create 3 new top-trending AI/Tech blogs
const trendingBlogs = [
  { slug: 'ai-development-in-2026', title: 'The State of AI Development in 2026', cat: 'Artificial Intelligence' },
  { slug: 'future-of-cloud-computing', title: 'The Future of Cloud Computing & DevOps', cat: 'Cloud Computing' },
  { slug: 'web3-and-blockchain-explained', title: 'Web3 and Blockchain Explained for Developers', cat: 'Web3 & Blockchain' }
];

trendingBlogs.forEach(blog => {
  const filePath = path.join(blogsDir, `${blog.slug}.md`);
  if (!fs.existsSync(filePath)) {
    const defaultContent = `---
Title: "${blog.title}"
Slug: "/blog/${blog.slug}"
Meta Title: "${blog.title} | Top Tech Trends"
Meta Description: "Discover the latest insights and trends on ${blog.title}. Stay ahead in the fast-paced tech industry."
Category: "${blog.cat}"
Tags: "${blog.cat.split(' ')[0]}, Tech Trends, 2026, Future"
Author: "Hardik Yadav"
Featured Image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
---

# ${blog.title}

Welcome to a comprehensive analysis of **${blog.title}**. As we navigate through 2026, the technology landscape continues to evolve at an unprecedented pace. 

${getMoreContent(blog.title)}

${getFaq(blog.title)}
`;
    fs.writeFileSync(filePath, defaultContent);
    console.log(`Created trending blog: ${blog.slug}.md`);
  }
});

