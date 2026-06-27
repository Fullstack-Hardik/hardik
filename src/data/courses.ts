export interface Course {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  color: string;
  borderColor: string;
  imageUrl: string;
  popular: boolean;
}

export const courses: Course[] = [
  {
    id: "basic-web-development",
    title: "Basic Web Development",
    price: "₹8,999",
    description: "HTML, CSS, JavaScript, React — build complete websites from scratch.",
    features: [
      "HTML5, CSS3 & Flexbox/Grid",
      "JavaScript fundamentals",
      "React & component design",
      "Build 5 real portfolio projects",
      "No prior coding experience needed"
    ],
    color: "rgba(97, 218, 251, 0.1)",
    borderColor: "rgba(97, 218, 251, 0.3)",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "advanced-web-development",
    title: "Advanced Web Development",
    price: "₹19,000",
    description: "Next.js, Node.js, databases, REST APIs, and full-stack projects.",
    features: [
      "Next.js 15 App Router",
      "Node.js + Express backend",
      "PostgreSQL / MongoDB integration",
      "Full-stack capstone project",
      "Deployment on Vercel & AWS"
    ],
    color: "rgba(51, 153, 51, 0.1)",
    borderColor: "rgba(51, 153, 51, 0.3)",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "ai-basics",
    title: "AI Basics",
    price: "₹5,999",
    description: "Learn how AI works, use ChatGPT, Midjourney, and prompt engineering.",
    features: [
      "ChatGPT mastery & prompt engineering",
      "Midjourney & AI image generation",
      "AI tools for productivity",
      "No coding required",
      "Build automated workflows"
    ],
    color: "rgba(16, 163, 127, 0.1)",
    borderColor: "rgba(16, 163, 127, 0.3)",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    price: "₹5,999",
    description: "SEO, Google Ads, Meta Ads, content strategy, and performance marketing.",
    features: [
      "Google Ads & Meta Ads campaigns",
      "SEO from zero to rank #1",
      "Content strategy & analytics",
      "Performance marketing ROI",
      "Email marketing automation"
    ],
    color: "rgba(237, 108, 2, 0.1)",
    borderColor: "rgba(237, 108, 2, 0.3)",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "fundamentals-of-computers",
    title: "Fundamentals of Computers",
    price: "₹9,999",
    description: "Computer fundamentals, internet, MS Office, and essential digital skills.",
    features: [
      "Computer operations & internet",
      "MS Office (Word, Excel, PPT)",
      "Google Workspace & Cloud tools",
      "Email & online communication",
      "Digital security basics"
    ],
    color: "rgba(36, 150, 237, 0.1)",
    borderColor: "rgba(36, 150, 237, 0.3)",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    price: "₹2,999",
    description: "Design principles, Canva, Figma, Photoshop, and brand identity.",
    features: [
      "Design principles & color theory",
      "Canva & Figma mastery",
      "Brand identity creation",
      "Social media & print design",
      "Portfolio building"
    ],
    color: "rgba(226, 50, 55, 0.1)",
    borderColor: "rgba(226, 50, 55, 0.3)",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    popular: false
  }
];
