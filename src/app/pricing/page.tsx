import type { Metadata } from "next";
import PricingSection from "@/components/home/PricingSection";
import CoursesSection from "@/components/home/CoursesSection";

export const metadata: Metadata = {
  title: "Pricing — Web Dev, AI, Courses",
  description: "Transparent pricing for web development, AI SaaS products, graphic design, video editing, and all tech courses. Starting from ₹3,999.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen pb-24">
      <div className="pt-8 text-center px-4">
        <div className="inline-block px-4 py-1.5 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-semibold mb-4">
          100% Transparent
        </div>
        <h1 className="text-5xl md:text-6xl font-black gradient-text mb-4">Pricing</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Clear, honest pricing with no surprises. Pick the plan that fits your needs, or mix and match services.
        </p>
      </div>
      <PricingSection />
      <CoursesSection />
    </main>
  );
}
