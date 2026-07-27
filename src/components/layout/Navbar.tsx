"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/journal", label: "Journal" },
  { path: "/nile", label: "Building Nile" },
  { path: "/projects", label: "Work" },
  { path: "/creative", label: "Creative" },
  { path: "/learning", label: "Learning" },
  { path: "/courses", label: "Courses" },
  { path: "/now", label: "Now" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-8 backdrop-blur-md bg-background/80 border-b border-neutral-200/20 dark:border-neutral-800/20">
      <Link href="/" className="text-sm font-semibold tracking-tight whitespace-nowrap mr-8">
        Oyekunle
      </Link>
      <nav className="hidden lg:flex flex-wrap gap-x-6 gap-y-2 justify-center flex-grow">
        {navItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== "/" && pathname?.startsWith(item.path));
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative text-[10px] sm:text-xs uppercase tracking-widest transition-colors ${
                isActive ? "text-foreground font-semibold" : "text-neutral-500 hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-[calc(100%+4px)] block h-[1px] w-full bg-foreground"
                />
              )}
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-6 ml-8">
        <Link href="/newsletter" className="hidden sm:block text-xs font-semibold uppercase tracking-widest text-foreground hover:text-neutral-500 transition-colors whitespace-nowrap border-b border-foreground pb-0.5">
          Subscribe
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-neutral-500 hover:text-foreground transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
}
