import { FadeIn } from "@/components/animations/FadeIn";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";
import { ContactForm } from "@/components/forms/ContactForm";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'contact' } },
    limit: 1,
  });
  const pageData = result.docs[0];
  if (!pageData) return { title: 'Contact | Oyekunle' };
  
  return {
    title: pageData.metaTitle || 'Contact Oyekunle',
    description: pageData.metaDescription || 'Contact Oyekunle for business, partnerships, media, creative collaborations, research, and general enquiries.',
  };
}

export default async function ContactPage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'contact',
      },
    },
    limit: 1,
  });

  const pageData = result.docs[0];

  if (!pageData) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <FadeIn>
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Get in Touch</span>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          {pageData.title || "Let's build something meaningful."}
        </h1>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-8">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <RichText data={pageData.content as any} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div>
            <h2 className="font-serif text-3xl mb-8">Send an Enquiry</h2>
            <ContactForm />
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 border-b border-neutral-200/20 dark:border-neutral-800/20 pb-2">Direct Contact</h2>
              <p className="text-lg text-neutral-500 font-light">winner@nile.ng</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 border-b border-neutral-200/20 dark:border-neutral-800/20 pb-2">Response Expectation</h2>
              <p className="text-lg text-neutral-500 font-light leading-relaxed">Due to current commitments, responses may take 48–72 hours.</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
