import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'journal',
    where: { slug: { equals: slug } },
    limit: 1,
  });

  const article = result.docs[0];
  
  if (!article) {
    return { title: 'Not Found | Journal' };
  }

  return {
    title: article.metaTitle || `${article.title} | Journal`,
    description: article.metaDescription || (article.excerpt as string),
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'journal',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  const article = result.docs[0];

  if (!article) {
    notFound();
  }

  // Handle populated category
  const categoryName = typeof article.category === 'object' && article.category ? article.category.name : 'Uncategorized';

  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        <Link href="/journal" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground">{categoryName}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="text-xs text-neutral-400">{new Date(article.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
          {article.title}
        </h1>

        {article.heroImage && typeof article.heroImage === 'object' && article.heroImage.url && (
          <div className="relative w-full aspect-[16/9] mb-12 bg-neutral-100 dark:bg-neutral-900 rounded-sm overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={article.heroImage.url} 
              alt={article.heroImage.alt || article.title} 
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}
      </FadeIn>

      <FadeIn delay={0.2}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <RichText data={article.content as any} />
      </FadeIn>
      
      <FadeIn delay={0.3} className="mt-24 pt-12 border-t border-neutral-200/20 dark:border-neutral-800/20">
        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-md border border-neutral-200 dark:border-neutral-800 text-center">
          <h3 className="font-serif text-2xl mb-4">Follow the journey</h3>
          <p className="text-neutral-500 font-light mb-6">Join Founder Diary for weekly notes on building companies and making progress.</p>
          <Link href="/newsletter" className="inline-flex px-8 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
            Subscribe Free
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
