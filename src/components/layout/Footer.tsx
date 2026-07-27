import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200/20 dark:border-neutral-800/20 py-12 mt-12">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Oyekunle. Building. Learning. Creating.
        </div>
        <div className="flex gap-6 text-sm uppercase tracking-widest text-xs">
          <Link href="https://www.linkedin.com/in/winner-oyebanjo-085ba3125/" target="_blank" className="text-neutral-500 hover:text-foreground transition-colors">LinkedIn</Link>
          <Link href="https://www.tiktok.com/@nileforbusiness?lang=en" target="_blank" className="text-neutral-500 hover:text-foreground transition-colors">TikTok</Link>
        </div>
      </div>
    </footer>
  );
}
