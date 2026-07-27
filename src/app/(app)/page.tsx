import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RichText } from "@/components/RichText";

export const metadata: Metadata = {
  title: "Oyekunle | Founder, Builder and Visual Creative",
  description: "Oyekunle is the founder of Nile Africa Technologies, a visual creative, Computer Science graduate, and lifelong student documenting the journey of building products, companies, and infrastructure for African entrepreneurs.",
};

export default async function Home() {
  const payload = await getPayload({ config });
  const homeData = await payload.findGlobal({ slug: 'home-page' });
  const siteSettings = await payload.findGlobal({ slug: 'site-settings' });

  // Use CMS data or fallback to defaults if not yet configured
  const hero = homeData.hero || { tagline: 'Founder. Operator. Visual Creative.', heading: 'Building companies, creating stories, and documenting the journey.' };
  const metrics = siteSettings.metrics || { usersReached: '50K+', processedEcosystem: '₦2B', teamSize: '4', funding: 'Self-funded' };
  const intro = homeData.introduction || { tagline: "Hello, I'm Oyekunle", heading: 'I have been around computers for as long as I can remember.' };
  const currentFocus = homeData.currentFocus || { tagline: "Right Now", heading: 'What I am focused on today.', focusAreas: [] };
  const philosophy = homeData.philosophy || { tagline: "What I Believe", heading: 'Progress is proof.', quotes: [] };
  const closing = homeData.closing || { heading: 'I am still becoming.', subtext: 'This website is not a finished story.' };

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12 pb-24">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center pt-12">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 block">{hero.tagline}</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
            {hero.heading}
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2} className="max-w-2xl text-lg md:text-xl text-neutral-500 font-light mb-12 leading-relaxed">
          {hero.subtext ? (
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            <RichText data={hero.subtext as any} />
          ) : (
            <>I am Oyekunle, founder of Nile Africa Technologies.<br className="hidden md:block"/><br className="hidden md:block"/>I build products for African entrepreneurs, create visual stories, study how great companies are built, and share the lessons I learn along the way.</>
          )}
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center text-xs font-semibold uppercase tracking-widest mb-24">
          <Link href="/journal" className="group flex items-center gap-2 border-b border-foreground pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
            Read the Journal <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <Link href="/projects" className="group flex items-center gap-2 text-neutral-500 hover:text-foreground transition-colors">
            Explore My Work
          </Link>
          <Link href="/newsletter" className="group flex items-center gap-2 text-neutral-500 hover:text-foreground transition-colors">
            Join Founder Diary
          </Link>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-md border border-neutral-200 dark:border-neutral-800">
            <div>
              <p className="font-serif text-3xl md:text-4xl">{metrics.usersReached}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mt-2">Community and users reached</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl">{metrics.processedEcosystem}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mt-2">Processed across the ecosystem</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl">{metrics.teamSize}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mt-2">People currently building Nile</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl">{metrics.funding}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mt-2">Built without external funding</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Introduction Section */}
      <section className="py-32 border-t border-neutral-200/20 dark:border-neutral-800/20">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 block">{intro.tagline}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            {intro.heading}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {intro.content ? (
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            <RichText data={intro.content as any} className="col-span-2 md:col-span-1" />
          ) : (
            <FadeIn delay={0.2} className="space-y-6 text-lg text-neutral-500 font-light leading-relaxed">
              <p>Configure this content in Payload CMS under Globals - Home Page.</p>
            </FadeIn>
          )}
          <FadeIn delay={0.3} className="flex flex-col justify-end">
            <Link href="/about" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border-b border-foreground pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors w-max mt-4 text-foreground">
              Read My Story <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-32 border-t border-neutral-200/20 dark:border-neutral-800/20">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 block">{currentFocus.tagline}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 leading-tight">{currentFocus.heading}</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {currentFocus.focusAreas && currentFocus.focusAreas.map((focus: any, i: number) => (
            <FadeIn key={i} delay={0.1 * i}>
              <h3 className="font-serif text-2xl mb-4">{focus.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-lg">{focus.description}</p>
            </FadeIn>
          ))}
          {(!currentFocus.focusAreas || currentFocus.focusAreas.length === 0) && (
            <p className="text-neutral-500">Add focus areas in Payload CMS.</p>
          )}
        </div>
        <FadeIn delay={0.5} className="mt-16">
          <Link href="/now" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border-b border-foreground pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors w-max">
            See What I&apos;m Doing Now <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 border-t border-neutral-200/20 dark:border-neutral-800/20 text-center">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 block">{philosophy.tagline}</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-12 leading-tight">{philosophy.heading}</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl font-serif text-neutral-600 dark:text-neutral-400 mb-16 leading-relaxed">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {philosophy.quotes && philosophy.quotes.map((q: any, i: number) => (
              <p key={i}>&quot;{q.quote}&quot;</p>
            ))}
            {(!philosophy.quotes || philosophy.quotes.length === 0) && (
              <p>Add quotes in Payload CMS.</p>
            )}
          </div>
        </FadeIn>
      </section>
      
      {/* Closing Section */}
      <section className="py-32 border-t border-neutral-200/20 dark:border-neutral-800/20 flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">{closing.heading}</h2>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-500 font-light mb-12 leading-relaxed">
            {closing.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center text-xs font-semibold uppercase tracking-widest">
            <Link href="/journal" className="group flex items-center gap-2 border-b border-foreground pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
              Read the Journal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/newsletter" className="group flex items-center gap-2 text-neutral-500 hover:text-foreground transition-colors">
              Join Founder Diary
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
