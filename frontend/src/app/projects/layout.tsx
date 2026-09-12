import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Hardik Yadav",
  description: "Explore the portfolio of Hardik Yadav, featuring full-stack applications, AI integrations, and digital platforms.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
