export interface ImageItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  location: string;
  date: string;
  category: 'hero' | 'founder' | 'building' | 'archive' | 'nile' | 'sena' | 'booq' | 'life' | 'lagos' | 'camera-roll';
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export const siteImages: ImageItem[] = [
  // Founder Portraits
  {
    id: 'winner-hero',
    src: '/images/hero/winner-hero.png',
    alt: 'Winner Oyekunle - Founder and Creator',
    caption: 'Building companies for Africa from Lagos.',
    location: 'Lagos, Nigeria',
    date: 'October 2026',
    category: 'hero',
    aspectRatio: 'portrait'
  },
  {
    id: 'winner-portrait-main',
    src: '/images/founder/winner-portrait.png',
    alt: 'Winner Oyekunle Portrait',
    caption: 'Founder × Creator. Solving boring, expensive problems for African businesses.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'founder',
    aspectRatio: 'portrait'
  },
  {
    id: 'winner-studio',
    src: '/images/founder/winner-studio.jpg',
    alt: 'Winner in Studio',
    caption: 'Documenting the founder journey and business realities.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'founder',
    aspectRatio: 'portrait'
  },

  // Nile
  {
    id: 'nile-dash',
    src: '/images/nile/nile-dashboard.svg',
    alt: 'Nile Commerce OS Dashboard',
    caption: 'Helping 1,500+ businesses operate, sell, and grow from one place.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'nile',
    aspectRatio: 'landscape'
  },
  {
    id: 'nile-checkout-screen',
    src: '/images/nile/nile-checkout.svg',
    alt: 'Nile Checkout Architecture',
    caption: 'High-speed payment flow engineered for low-latency African networks.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'nile',
    aspectRatio: 'landscape'
  },
  {
    id: 'nile-merchants-growth',
    src: '/images/nile/nile-merchants.svg',
    alt: 'Nile Merchant Ecosystem',
    caption: 'Over ₦200M+ merchant order value processed.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'nile',
    aspectRatio: 'landscape'
  },

  // Sena
  {
    id: 'sena-hospitality-main',
    src: '/images/sena/sena-hospitality.svg',
    alt: 'Sena Hospitality OS',
    caption: 'Unified property management and automated check-ins for African hotels.',
    location: 'Lekki, Lagos',
    date: '2026',
    category: 'sena',
    aspectRatio: 'landscape'
  },
  {
    id: 'sena-calendar-view',
    src: '/images/sena/sena-calendar.svg',
    alt: 'Sena Multi-property Calendar',
    caption: 'Dynamic booking availability and operations in one screen.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'sena',
    aspectRatio: 'landscape'
  },

  // Booq
  {
    id: 'booq-pos-core',
    src: '/images/booq/booq-pos.svg',
    alt: 'Booq Mobile POS & Accounting',
    caption: 'Mobile-first POS and accounting built for the modern African merchant.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'booq',
    aspectRatio: 'landscape'
  },
  {
    id: 'booq-ledger-view',
    src: '/images/booq/booq-ledger.svg',
    alt: 'Booq Cash Ledger Engine',
    caption: 'Know your numbers without spreadsheet headaches.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'booq',
    aspectRatio: 'landscape'
  },

  // Building
  {
    id: 'building-team-ops',
    src: '/images/building/building-team.svg',
    alt: 'Late Night Product Sprint',
    caption: 'Shipping under pressure with small, obsessed product teams.',
    location: 'Yaba Tech Hub, Lagos',
    date: '2026',
    category: 'building',
    aspectRatio: 'landscape'
  },
  {
    id: 'building-code-arch',
    src: '/images/building/building-code.svg',
    alt: 'Next.js & Distributed Architecture',
    caption: 'Software designed to survive real Nigerian internet conditions.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'building',
    aspectRatio: 'landscape'
  },

  // Archive
  {
    id: 'archive-v1-prototype',
    src: '/images/archive/archive-v1.svg',
    alt: 'First Nile Prototype (2023)',
    caption: 'Your first version should embarrass you. Shipped anyway.',
    location: 'Ikeja, Lagos',
    date: '2023',
    category: 'archive',
    aspectRatio: 'landscape'
  },
  {
    id: 'archive-whiteboard',
    src: '/images/archive/archive-sketch.svg',
    alt: 'Original Whiteboard Wireframes',
    caption: 'I did not start with some grand Silicon Valley plan. I just wanted to build things people would pay for.',
    location: 'Lagos, Nigeria',
    date: '2023',
    category: 'archive',
    aspectRatio: 'landscape'
  },

  // Life & Lagos
  {
    id: 'lagos-night-skyline',
    src: '/images/lagos/lagos-night.svg',
    alt: 'Lagos Night Energy',
    caption: '18:21 WAT. The city that never sleeps and always negotiates.',
    location: 'Victoria Island, Lagos',
    date: 'September 2026',
    category: 'lagos',
    aspectRatio: 'landscape'
  },
  {
    id: 'lagos-tech-hub',
    src: '/images/lagos/lagos-tech.svg',
    alt: 'Building from Lagos',
    caption: 'Lagos built me. Technology gave me leverage.',
    location: 'Marina, Lagos',
    date: '2026',
    category: 'lagos',
    aspectRatio: 'landscape'
  },
  {
    id: 'life-workspace-desk',
    src: '/images/life/life-workspace.svg',
    alt: 'Late Night Desk Setup',
    caption: 'Terminal, Figma, coffee, and unreasonable curiosity.',
    location: 'Lagos, Nigeria',
    date: '2026',
    category: 'life',
    aspectRatio: 'landscape'
  },
  {
    id: 'life-travel-transit',
    src: '/images/life/life-travel.svg',
    alt: 'Between Cities',
    caption: 'Another airport. Learning market dynamics across borders.',
    location: 'Accra / Nairobi',
    date: '2026',
    category: 'life',
    aspectRatio: 'landscape'
  },

  // Camera Roll
  {
    id: 'cr-merchant-visit',
    src: '/images/camera-roll/cr-01.svg',
    alt: 'Merchant store visit',
    caption: 'First Sena customer visit. Watching operations in real-time.',
    location: 'Victoria Island, Lagos',
    date: 'September 2026',
    category: 'camera-roll',
    aspectRatio: 'landscape'
  },
  {
    id: 'cr-midnight-deploy',
    src: '/images/camera-roll/cr-02.svg',
    alt: 'Midnight Production Deploy',
    caption: 'Probably fixing something I broke earlier. Bugs caused: 2.',
    location: 'Lagos, Nigeria',
    date: 'October 2026',
    category: 'camera-roll',
    aspectRatio: 'landscape'
  },
  {
    id: 'cr-content-day',
    src: '/images/camera-roll/cr-03.svg',
    alt: 'Creator shoot in Lekki',
    caption: 'Content day. Explaining why distribution beats features.',
    location: 'Lekki Phase 1, Lagos',
    date: 'August 2026',
    category: 'camera-roll',
    aspectRatio: 'landscape'
  },
  {
    id: 'cr-flight-ticket',
    src: '/images/camera-roll/cr-04.svg',
    alt: 'East Africa exploration',
    caption: 'Heading out to study Kenyan commerce & mobile money integration.',
    location: 'Murtala Muhammed Airport',
    date: 'July 2026',
    category: 'camera-roll',
    aspectRatio: 'landscape'
  }
];

export function getImagesByCategory(category: ImageItem['category']): ImageItem[] {
  return siteImages.filter(img => img.category === category);
}

export function getImageById(id: string): ImageItem | undefined {
  return siteImages.find(img => img.id === id);
}
