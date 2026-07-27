import { FadeIn } from "@/components/animations/FadeIn";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'courses' } },
    limit: 1,
  });
  const pageData = result.docs[0];
  if (!pageData) return { title: 'Courses | Oyekunle' };
  
  return {
    title: pageData.metaTitle || 'Courses',
    description: pageData.metaDescription || 'Practical courses for founders and creators.',
  };
}

export default async function CoursesPage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'courses' } },
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
