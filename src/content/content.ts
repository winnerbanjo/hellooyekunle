export interface ContentItem {
  id: string;
  slug: string;
  title: string;
  category: 'BUSINESS' | 'MARKETING' | 'BUILDING NILE' | 'FOUNDER DIARIES' | 'PRODUCT' | 'LIFE';
  platform: 'YouTube' | 'TikTok' | 'Instagram' | 'X' | 'LinkedIn';
  views: string;
  date: string;
  duration: string;
  thumbnail: string;
  summary: string;
  keyTakeaway: string;
  featured: boolean;
  videoUrl?: string;
  youtubeId?: string;
}

export const contentItems: ContentItem[] = [
  {
    id: 'c-01',
    slug: 'grow-nigerian-business-zero',
    title: "How I'd Grow a Nigerian Business From Zero",
    category: 'BUSINESS',
    platform: 'YouTube',
    views: '84K views',
    date: 'September 2026',
    duration: '14:20',
    thumbnail: '/images/camera-roll/cr-03.svg',
    summary: 'A raw, tactical breakdown of how to build distribution in Lagos when you have zero marketing budget, no connections, and an untested product. The 3 steps: direct WhatsApp outreach, high-utility social content, and relentless speed.',
    keyTakeaway: 'In Nigeria, attention is cheap but trust is extremely expensive. Solve one embarrassing problem for 10 people for free, turn them into your salesforce, and charge person #11.',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'c-02',
    slug: 'best-product-equal-marketing',
    title: "Your Best Product Shouldn't Get Equal Marketing",
    category: 'MARKETING',
    platform: 'TikTok',
    views: '142K views',
    date: 'August 2026',
    duration: '01:45',
    thumbnail: '/images/building/building-team.svg',
    summary: 'Why founders kill their own momentum by dividing their marketing budget equally across 5 offerings. You need an aggressive wedge product that drags the rest of your business along with it.',
    keyTakeaway: 'Double down on the single thing that makes people pull out their debit cards without hesitating. Market that violently, and cross-sell the rest quietly.',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'c-03',
    slug: 'friends-terrible-business-testers',
    title: 'Why Your Friends Are Terrible Business Testers',
    category: 'PRODUCT',
    platform: 'Instagram',
    views: '96K views',
    date: 'August 2026',
    duration: '02:30',
    thumbnail: '/images/archive/archive-sketch.svg',
    summary: 'Your friends will tell you your app looks incredible because they love you. Strangers in Balogun market will scream that your checkout button is broken. Listen to the screamers.',
    keyTakeaway: 'Compliments are worthless currency. Proof is when someone you have never met deposits money into your company account.',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'c-04',
    slug: 'what-building-nile-taught-me',
    title: 'What Building Nile Has Taught Me',
    category: 'BUILDING NILE',
    platform: 'YouTube',
    views: '118K views',
    date: 'July 2026',
    duration: '18:40',
    thumbnail: '/images/nile/nile-dashboard.svg',
    summary: 'From writing the first prototype lines in a small Lagos apartment to processing hundreds of millions in merchant volume. The operational scars, the servers crashing on Black Friday, and the joy of seeing African merchants win.',
    keyTakeaway: 'You cannot innovate until you stabilize the baseline. Nigerian merchants do not want artificial intelligence until their basic payment reconciliations work 100% of the time.',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'c-05',
    slug: 'nigerian-businesses-need-better-software',
    title: 'Why Nigerian Businesses Need Better Software',
    category: 'FOUNDER DIARIES',
    platform: 'X',
    views: '230K impressions',
    date: 'September 2026',
    duration: 'Thread',
    thumbnail: '/images/lagos/lagos-tech.svg',
    summary: 'Foreign SaaS copies forget that internet dips, power cuts, and WhatsApp-first communication are not edge cases—they are the default operating reality of Africa. If your app only works on 5G fiber, you built for a fictional country.',
    keyTakeaway: 'Local context is not a filter; it is the entire software architecture.',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'c-06',
    slug: 'visiting-sena-customer-first-time',
    title: 'Visiting a Sena Customer for the First Time',
    category: 'LIFE',
    platform: 'TikTok',
    views: '88K views',
    date: 'October 2026',
    duration: '01:58',
    thumbnail: '/images/camera-roll/cr-01.svg',
    summary: 'A day in the life visiting a 24-room boutique hotel in Lekki using Sena. Standing at the front desk at 7:00 AM watching the receptionist handle 12 check-ins and seeing where our UI failed in real life.',
    keyTakeaway: 'Get out of Figma. The most informative 30 minutes in product development is watching a tired front-desk staff member click through your software with an angry guest staring at them.',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'c-07',
    slug: 'why-most-saas-pricing-fails',
    title: 'Why Most African SaaS Pricing Models Fail',
    category: 'BUSINESS',
    platform: 'YouTube',
    views: '62K views',
    date: 'June 2026',
    duration: '11:15',
    thumbnail: '/images/booq/booq-pos.svg',
    summary: 'Why monthly subscription charging is an uphill battle in Africa and how transaction-based or revenue-share models align incentives with business owners.',
    keyTakeaway: 'Take a tiny slice of success, not a fixed tax on survival.',
    featured: false,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'c-08',
    slug: 'how-we-ship-at-speed',
    title: 'How We Ship at Unreasonable Speed',
    category: 'PRODUCT',
    platform: 'LinkedIn',
    views: '45K views',
    date: 'May 2026',
    duration: 'Article & Video',
    thumbnail: '/images/building/building-code.svg',
    summary: 'Our internal engineering cadence: 48-hour build loops, direct customer feedback channels on Telegram, and deleting code that does not deliver leverage.',
    keyTakeaway: 'Speed is not rushing. Speed is eliminating bureaucracy between the person writing the code and the person paying for the result.',
    featured: false,
    youtubeId: 'dQw4w9WgXcQ'
  }
];

export const socialLinks = {
  tiktok: 'https://tiktok.com/@winnerbanjo',
  instagram: 'https://instagram.com/winnerbanjo',
  youtube: 'https://youtube.com/@winneroyekunle',
  x: 'https://x.com/winnerbanjo',
  linkedin: 'https://linkedin.com/in/winneroyekunle',
  whatsapp: 'https://wa.me/2348000000000',
  email: 'hello@hellooyekunle.com'
};

export function getFeaturedContent(): ContentItem[] {
  return contentItems.filter(item => item.featured);
}

export function getContentByCategory(category: string): ContentItem[] {
  if (category === 'ALL') return contentItems;
  return contentItems.filter(item => item.category === category);
}

export function getContentByPlatform(platform: string): ContentItem[] {
  if (platform === 'ALL') return contentItems;
  return contentItems.filter(item => item.platform === platform);
}
