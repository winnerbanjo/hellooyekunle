import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';

export const metadata: Metadata = {
  title: "Journal | Oyekunle",
  description: "Essays and founder notes from Oyekunle about building Nile, entrepreneurship, creativity, technology, education, systems, and personal growth.",
};

export default async function JournalPage() {
  const payload = await getPayload({ config });
  
  // Fetch published articles
  const articlesResult = await payload.find({
    collection: 'journal',
    where: {
      status: {
        equals: 'published'
      }
    },
    sort: '-date', // newest first
  });

  const articles = articlesResult.docs;

  // Fetch all categories
  const categoriesResult = await payload.find({
    collection: 'categories',
  });
  
  const categories = categoriesResult.docs;

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <section className="mb-32">
        <FadeIn>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Ideas from the work.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
            Essays, reflections, lessons, observations, and founder notes from building companies, creating content, studying, and becoming better at the work.
          </p>
        </FadeIn>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-24">
        <div>
          <FadeIn delay={0.3}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-12">Featured Journal</h2>
          </FadeIn>
          <div className="flex flex-col gap-24">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {articles.length > 0 ? articles.map((article: any) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const categoryName = typeof article.category === 'object' && article.category ? (article.category as any).name : 'Uncategorized';
              return (
                <FadeIn key={article.slug} delay={0.1} className="group">
                  <Link href={`/journal/${article.slug}`} className="block">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{categoryName}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                      <span className="text-xs text-neutral-400">{new Date(article.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-neutral-500 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-base text-neutral-500 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground group-hover:text-neutral-500 transition-colors">
                      Read Essay <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </FadeIn>
              )
            }) : (
              <p className="text-neutral-500">No journal entries found. Log into Payload CMS to create one.</p>
            )}
          </div>
        </div>

        <aside>
          <FadeIn delay={0.4}>
            <div className="sticky top-32">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-8 border-b border-neutral-200/20 dark:border-neutral-800/20 pb-4">Categories</h2>
              <ul className="flex flex-col gap-4">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {categories.map((category: any) => (
                  <li key={category.id}>
                    <Link href={`/journal/category/${category.slug}`} className="text-sm text-neutral-500 hover:text-foreground transition-colors">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </aside>
      </section>
    </main>
  );
}
