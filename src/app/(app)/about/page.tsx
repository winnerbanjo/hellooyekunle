import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'about' } },
    limit: 1,
  });
  const pageData = result.docs[0];
  if (!pageData) return { title: 'About | Oyekunle' };
  
  return {
    title: pageData.metaTitle || 'About Oyekunle',
    description: pageData.metaDescription || 'About Oyekunle',
  };
}

export default async function AboutPage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'about',
      },
    },
    limit: 1,
  });

  const pageData = result.docs[0];


  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">My Story</span>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-8">
          {pageData?.title || "From taking apart computers in Lagos to building for the world."}
        </h1>
      </FadeIn>

      <FadeIn delay={0.2} className="mb-24">
        <div className="relative w-full aspect-[4/5] md:aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 rounded-sm overflow-hidden">
          <Image 
            src="/oyekunle.jpg" 
            alt="Portrait of Oyekunle" 
            fill 
            priority
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 ease-out" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </FadeIn>

      <div className="flex flex-col gap-20">
        <FadeIn>
          {pageData?.content ? (
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            <RichText data={pageData?.content as any} />
          ) : (
            <div className="text-neutral-500 font-light leading-relaxed space-y-4">
              <p>Please log into Payload CMS, go to Pages, and create a page with slug <strong>about</strong> to populate this content.</p>
            </div>
          )}
        </FadeIn>
      </div>
    </main>
  );
}
