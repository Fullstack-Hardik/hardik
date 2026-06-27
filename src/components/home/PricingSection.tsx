import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Static Presence",
    price: "₹5,000",
    description: "Perfect for portfolios & landing pages.",
    features: [
      "3-4 Page Static Website",
      "Premium UI/UX Design",
      "Basic On-Page SEO",
      "Deployment & Setup",
      "Domain & Email (Billed separately)",
    ],
    popular: false,
  },
  {
    title: "Basic Full-Stack",
    price: "₹11,999",
    description: "Functional web apps with databases.",
    features: [
      "Everything in Static",
      "Custom Admin Panel",
      "Server & Database Setup",
      "Advanced SEO Optimization",
      "2 Weeks Free Maintenance",
    ],
    popular: true,
  },
  {
    title: "Advanced AI SaaS",
    price: "₹25,000+",
    description: "Scale your business with AI.",
    features: [
      "Fully Functional SaaS Product",
      "LLM / AI API Integrations",
      "Complex Dashboards",
      "Advanced Tools & Features",
      "Scalable Architecture",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-32 px-4 relative bg-black overflow-hidden" id="pricing">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none border-dashed opacity-50 animate-[spin_120s_linear_infinite]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-black uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
            Investment
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-2xl">
            Clear <span className="text-zinc-600">Value</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mt-6 text-lg font-medium">
            World-class development and design at competitive rates. Choose the plan that fits your vision.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "group relative flex flex-col bg-zinc-950/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border transition-all duration-500",
                plan.popular 
                  ? "border-white shadow-[0_0_40px_-15px_rgba(255,255,255,0.3)] md:-translate-y-4" 
                  : "border-white/10 hover:border-white/40 hover:-translate-y-2"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-white rounded-full text-[10px] font-black text-black uppercase tracking-widest shadow-xl">
                  Most Selected
                </div>
              )}
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white tracking-tight">{plan.title}</h3>
                <p className="text-zinc-500 text-sm mt-2 mb-8 h-10">{plan.description}</p>
                <div className="mb-10 pb-10 border-b border-white/10">
                  <span className="text-5xl font-black text-white tracking-tighter drop-shadow-lg">{plan.price}</span>
                </div>
                
                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-4 text-sm text-zinc-300 font-medium">
                      <div className={cn(
                        "mt-0.5 p-1 rounded-full transition-colors",
                        plan.popular ? "bg-white text-black" : "bg-white/10 text-white"
                      )}>
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={cn(
                  "group/btn relative w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden",
                  plan.popular 
                    ? "bg-white text-black hover:bg-zinc-200" 
                    : "bg-transparent border border-white text-white hover:bg-white hover:text-black"
                )}>
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
