import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Hardik Yadav",
  description: "Learn more about Hardik Yadav, a Full-Stack Developer and AI Enthusiast based in Saharanpur, India.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
