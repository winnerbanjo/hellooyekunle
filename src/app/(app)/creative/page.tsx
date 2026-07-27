import { FadeIn } from "@/components/animations/FadeIn";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'creative' } },
    limit: 1,
  });
  const pageData = result.docs[0];
  if (!pageData) return { title: 'Creative | Oyekunle' };
  
  return {
    title: pageData.metaTitle || 'Creative Work',
    description: pageData.metaDescription || 'Photography, Film and Visual Storytelling.',
  };
}

export default async function CreativePage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'creative' } },
    limit: 1,
  });

  const pageData = result.docs[0];


  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <RichText data={pageData?.content as any} />
      </FadeIn>
    </main>
  );
}
