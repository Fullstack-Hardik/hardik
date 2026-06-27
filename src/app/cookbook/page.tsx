import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookbook",
  description: "Collection of code snippets, recipes, and developer tricks.",
};

export default function CookbookPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Cookbook</h1>
        <p className="text-zinc-400">Content coming soon...</p>
      </div>
    </div>
  );
}
