import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hardik.dev"),
  title: {
    default: "Hardik — Full-Stack Developer, AI Builder & Digital Coach",
    template: "%s | Hardik",
  },
  description:
    "Hardik is a full-stack developer, AI product builder, and digital skills coach. Building futuristic web apps, teaching modern tech, and crafting digital experiences.",
  keywords: [
    "Hardik",
    "full-stack developer",
    "AI developer",
    "web development India",
    "React developer",
    "Next.js developer",
    "portfolio",
    "web design",
    "digital marketing",
    "AI SaaS",
    "coding coach",
    "freelance developer India",
  ],
  authors: [{ name: "Hardik" }],
  creator: "Hardik",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hardik.dev",
    siteName: "Hardik — Developer & Coach",
    title: "Hardik — Full-Stack Developer, AI Builder & Digital Coach",
    description:
      "Building futuristic web apps, AI products, and teaching the next generation of developers.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hardik — Developer & Coach" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardik — Full-Stack Developer, AI Builder & Digital Coach",
    description:
      "Building futuristic web apps, AI products, and teaching the next generation of developers.",
    creator: "@hardik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://hardik.dev" />
      </head>
      <body className={`${inter.variable} bg-[#050510] text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Ambient background blobs */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[120px]" />
            <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[100px]" />
            <div className="absolute -bottom-40 right-1/3 w-[600px] h-[600px] rounded-full bg-pink-600/8 blur-[120px]" />
          </div>

          <Navbar />

          <main className="relative z-10">
            {children}
          </main>

          <CinematicFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
