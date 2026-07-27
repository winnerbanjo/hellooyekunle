import { FadeIn } from "@/components/animations/FadeIn";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'now' } },
    limit: 1,
  });
  const pageData = result.docs[0];
  if (!pageData) return { title: 'Now | Oyekunle' };
  
  return {
    title: pageData.metaTitle || 'What I am doing now',
    description: pageData.metaDescription || 'Current focus and priorities.',
  };
}

export default async function NowPage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'now',
      },
    },
    limit: 1,
  });

  const pageData = result.docs[0];


  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Currently</span>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          {pageData?.title || 'What I am doing now.'}
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.2} className="mt-8">
        {pageData?.content ? (
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          <RichText data={pageData?.content as any} />
        ) : (
          <>
            <p className="text-xl text-neutral-500 font-light leading-relaxed mb-24 max-w-2xl">
              This is a living page that serves as a public declaration of my current focus, priorities, and projects. If it is not on this list, I am probably saying no to it.
            </p>
            <p className="text-neutral-500 font-light leading-relaxed space-y-4 mb-24 max-w-3xl">
              Please log into Payload CMS, go to Pages, and create a page with slug <strong>now</strong> to populate this content.
            </p>
          </>
        )}
      </FadeIn>
    </main>
  );
}
