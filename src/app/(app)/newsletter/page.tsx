import { FadeIn } from "@/components/animations/FadeIn";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder Diary | Oyekunle's Weekly Newsletter",
  description: "Join Founder Diary, Oyekunle's weekly newsletter about building Nile, entrepreneurship, systems, creativity, learning, and personal growth.",
};

export default function NewsletterPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Founder Diary</span>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          One honest note from the journey, every week.
        </h1>
        <p className="text-xl text-neutral-500 font-light leading-relaxed mb-12">
          Founder Diary is a weekly letter about building Nile, becoming a better founder, making difficult decisions, learning new things, creating meaningful work, and pursuing progress without pretending to have everything figured out.
        </p>
        
        <NewsletterForm />
        
        <p className="text-xs text-neutral-400">One thoughtful email each week. Unsubscribe at any time.</p>
      </FadeIn>
    </main>
  );
}
