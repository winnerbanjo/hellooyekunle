import { FadeIn } from "@/components/animations/FadeIn";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'nile' } },
    limit: 1,
  });
  const pageData = result.docs[0];
  if (!pageData) return { title: 'Building Nile | Oyekunle' };
  
  return {
    title: pageData.metaTitle || 'Building Nile Africa',
    description: pageData.metaDescription || 'The story of Nile.',
  };
}

export default async function NilePage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'nile',
      },
    },
    limit: 1,
  });

  const pageData = result.docs[0];


  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Founder Journal</span>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          {pageData?.title || 'Building Nile, one decision at a time.'}
        </h1>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-8">
        {pageData?.content ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <RichText data={pageData?.content as any} />
        ) : (
          <>
            <p className="text-xl text-neutral-500 font-light leading-relaxed mb-16 max-w-2xl">
              An honest record of the milestones, customer lessons, product decisions, mistakes, systems, and difficult days behind building technology for African entrepreneurs.
            </p>
            <div className="text-neutral-500 font-light leading-relaxed space-y-4 mb-24 max-w-3xl">
              <p>Please log into Payload CMS, go to Pages, and create a page with slug <strong>nile</strong> to populate this content.</p>
            </div>
          </>
        )}
      </FadeIn>
    </main>
  );
}
