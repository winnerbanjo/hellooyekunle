import { FadeIn } from "@/components/animations/FadeIn";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'tech-in-yoruba' } },
    limit: 1,
  });
  const pageData = result.docs[0];
  if (!pageData) return { title: 'Tech in Yoruba | Oyekunle' };
  
  return {
    title: pageData.metaTitle || 'Tech in Yoruba',
    description: pageData.metaDescription || 'Technology Explained in Yoruba.',
  };
}

export default async function TechInYorubaPage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'tech-in-yoruba' } },
    limit: 1,
  });

  const pageData = result.docs[0];

  if (!pageData) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <RichText data={pageData.content as any} />
      </FadeIn>
    </main>
  );
}
