import { FadeIn } from "@/components/animations/FadeIn";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'learning' } },
    limit: 1,
  });
  const pageData = result.docs[0];
  if (!pageData) return { title: 'Learning | Oyekunle' };
  
  return {
    title: pageData.metaTitle || 'Learning',
    description: pageData.metaDescription || 'My learning journey.',
  };
}

export default async function LearningPage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'learning' } },
    limit: 1,
  });

  const pageData = result.docs[0];


  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <RichText data={pageData?.content as any} />
      </FadeIn>
    </main>
  );
}
