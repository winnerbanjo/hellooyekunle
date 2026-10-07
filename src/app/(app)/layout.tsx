import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://hellooyekunle.com"),
  title: {
    default: "Winner Oyekunle Oyebanjo — Founder of Nile",
    template: "%s | Winner Oyekunle Oyebanjo",
  },
  description:
    "Founder of Nile. Building digital commerce and business-management software for merchants across Africa from Lagos.",
  keywords: [
    "Winner Oyekunle Oyebanjo",
    "Winner Oyebanjo",
    "Winner Oyekunle",
    "Founder of Nile",
    "Nile Africa Technologies",
    "African technology founder",
    "Sena",
    "Booq",
    "Lagos startup founder",
  ],
  authors: [{ name: "Winner Oyekunle Oyebanjo", url: "https://hellooyekunle.com" }],
  creator: "Winner Oyekunle Oyebanjo",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://hellooyekunle.com",
    title: "Winner Oyekunle Oyebanjo — Founder of Nile",
    description:
      "Founder of Nile. Building digital commerce and business-management software for merchants across Africa from Lagos.",
    siteName: "hellooyekunle.com",
    images: [
      {
        url: "/images/hero/winner-hero.png",
        width: 1200,
        height: 630,
        alt: "Winner Oyekunle — Founder × Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winner Oyekunle — Founder × Creator",
    description:
      "Founder building technology companies for African businesses. Creator documenting business from Lagos.",
    creator: "@winnerbanjo",
    images: ["/images/hero/winner-hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans flex flex-col custom-cursor-active transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CustomCursor />
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
