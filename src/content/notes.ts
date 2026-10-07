export interface Note {
  slug: string;
  title: string;
  subtitle: string;
  category: 'BUSINESS' | 'AFRICA' | 'PRODUCT' | 'TECH' | 'BUILDING' | 'LIFE';
  date: string;
  readingTime: string;
  heroImage: string;
  excerpt: string;
  content: string[];
  quotes: string[];
  tags: string[];
}

export const notes: Note[] = [
  {
    slug: 'why-im-betting-on-african-businesses',
    title: "Why I'm Betting on African Businesses",
    subtitle: 'The next generation of global institutions will be built by solving high-friction African everyday problems.',
    category: 'AFRICA',
    date: 'October 2026',
    readingTime: '6 min read',
    heroImage: '/images/lagos/lagos-tech.svg',
    excerpt: 'Silicon Valley investors often look at Africa through a lens of charity or insurmountable friction. They miss the sheer density of commercial grit on the ground.',
    quotes: [
      'Lagos does not wait for infrastructure. Lagos builds its own infrastructure every single morning.',
      'When software solves a real operational headache for an African merchant, they do not just use it—they defend it with their livelihood.'
    ],
    tags: ['Africa', 'SaaS', 'Commerce', 'Macro', 'Founders'],
    content: [
      'If you walk down Balogun Market or through the commercial avenues of Ikeja and Victoria Island, you do not see a lack of entrepreneurial energy. You see the highest concentration of commerce per square kilometer on earth.',
      'What you do see is extreme operational friction. Payment reconciliation is fractured. Inventory is managed on scraps of paper or WhatsApp voice notes. Power dips, cellular latency fluctuates, and trust between anonymous buyers and sellers is hard-won.',
      'Silicon Valley software products are built for an environment of assumed perfection: ultra-fast fiber internet, dispute-free banking, frictionless delivery, and buyers who pull out credit cards without a second thought.',
      'When you take that software and drop it into Lagos, Nairobi, or Accra, it shatters. It is too heavy, too expensive, and assumes conditions that do not exist.',
      'This is why I am building Nile, Sena, and Booq. We are not building copies of Stripe or Shopify. We are building software specifically engineered for the high-friction, cash-flow-conscious realities of African enterprises.',
      'African business owners are the most resilient operators in the world. When you hand them software that actually respects their daily reality, the leverage is exponential.'
    ]
  },
  {
    slug: 'what-building-nile-has-taught-me',
    title: 'What Building Nile Has Taught Me',
    subtitle: 'Three years of shipping software to merchants, breaking production, and discovering what businesses actually pay for.',
    category: 'BUILDING',
    date: 'September 2026',
    readingTime: '8 min read',
    heroImage: '/images/nile/nile-dashboard.svg',
    excerpt: 'I did not start Nile with a grand venture capital deck. I started with a simple question: why is it so damn hard for an African Instagram merchant to accept an order without 20 back-and-forth DMs?',
    quotes: [
      'Businesses do not buy software features. They buy relief from humiliation and chaos.',
      'Your first version should embarrass you. If it doesn’t, you waited too long to learn the truth.'
    ],
    tags: ['Building', 'Nile', 'Lessons', 'Startups'],
    content: [
      'When we launched Nile v1, it was ugly. The checkout was rudimentary, the dashboard was minimal, and half the analytics were hard-coded. But within 48 hours, merchants were processing real transactions.',
      'Lesson 1: Distribution beats beautiful products every single time. I have watched brilliant engineers spend 18 months perfecting an elegant tech stack only to discover nobody cares. Conversely, a flawed tool that sits directly inside the customer’s WhatsApp flow will make millions.',
      'Lesson 2: Nigerian customers will tell you the truth very quickly. In Western markets, polite users will churn quietly. In Nigeria, a merchant will call you at 11:30 PM on Sunday because their customer cannot complete a bank transfer. That feedback loop is brutal, but it is the fastest teacher on earth.',
      'Lesson 3: Revenue fixes many philosophical debates. Whenever our team spends two hours debating whether a feature should look like option A or option B, we stop and ask: which option helps the merchant get paid faster today? That clarity solves 90% of arguments.'
    ]
  },
  {
    slug: 'what-visiting-a-sena-customer-taught-me',
    title: 'What Visiting a Sena Customer Taught Me',
    subtitle: 'Why spending 4 hours at a hotel front desk in Lekki taught me more than 6 months of Figma designs.',
    category: 'PRODUCT',
    date: 'August 2026',
    readingTime: '5 min read',
    heroImage: '/images/sena/sena-hospitality.svg',
    excerpt: 'You can design the cleanest dark-mode UI in the world, but until you watch a stressed receptionist juggling two phone calls, a noisy printer, and an impatient guest, you do not understand UX.',
    quotes: [
      'Software built from an armchair in an air-conditioned room breaks the moment it encounters the frontline operator.',
      'If your UI requires instruction manual reading, it is broken.'
    ],
    tags: ['Hospitality', 'Product Design', 'Field Research', 'Sena'],
    content: [
      'Last month I spent half a day at a 20-room boutique hotel in Lekki that recently switched to Sena. I sat on a stool behind the reception counter.',
      'Within the first hour, two things became immediately clear:',
      'First: the button we thought was obvious was completely hidden behind the hotel’s POS terminal monitor. The receptionist had to physically reach around to click it.',
      'Second: guests do not want to fill out 8 form fields on their phone during check-in. They just arrived after two hours in Lagos traffic. They want to show a 4-digit code or QR code and get the room key immediately.',
      'We went back to the office that night, deleted three complex setup screens, and created our one-tap Quick Arrival flow. The next morning, check-in time dropped from 7 minutes to 90 seconds.',
      'Never trust an assumption you haven’t verified standing next to the person using your software.'
    ]
  },
  {
    slug: 'why-most-african-saas-pricing-is-wrong',
    title: 'Why Most African SaaS Pricing Is Wrong',
    subtitle: 'The standard US $29/month subscription model is dead on arrival for 90% of Nigerian SMEs.',
    category: 'BUSINESS',
    date: 'July 2026',
    readingTime: '7 min read',
    heroImage: '/images/booq/booq-pos.svg',
    excerpt: 'Why charging upfront recurring monthly fees alienates African merchants, and why revenue-aligned or micro-usage models win.',
    quotes: [
      'Take a tiny slice of success, not a fixed tax on survival.',
      'African business owners are cash-flow realists. They pay gladly when money flows in; they cancel immediately when fixed costs pile up.'
    ],
    tags: ['Pricing', 'Economics', 'Business Models', 'SaaS'],
    content: [
      'Silicon Valley SaaS grew up in an environment where businesses have predictable monthly recurring revenue, stable corporate credit cards, and low inflation.',
      'In Nigeria, currency fluctuations, seasonal retail dips, and unpredictable cash flow make a fixed monthly recurring charge feel like a predatory tax.',
      'When an entrepreneur has a slow week, the first thing they cut is recurring digital subscriptions that did not directly generate money that week.',
      'The winning model for Africa is alignment: charge per successful transaction, take a tiny basis-point commission on verified GMV, or provide free core tools and charge for instant settlement and growth leverage.',
      'When your customer only pays when they win, you don’t need a giant salesforce to convince them.'
    ]
  },
  {
    slug: 'building-software-for-nigerian-internet',
    title: 'Building Software for Nigerian Internet',
    subtitle: 'High packet loss, sudden edge dropouts, and extreme data consciousness: how to engineer for survival.',
    category: 'TECH',
    date: 'June 2026',
    readingTime: '6 min read',
    heroImage: '/images/building/building-code.svg',
    excerpt: 'If your web app ships 4 megabytes of uncompressed JavaScript and makes 14 sequential API waterfalls, you have built for nobody in Africa.',
    quotes: [
      'Speed is not an aesthetic luxury. In Lagos, latency is conversion.',
      'Optimistic UI and aggressive local caching are not optional optimizations; they are the entire architecture.'
    ],
    tags: ['Engineering', 'Performance', 'Architecture', 'Next.js'],
    content: [
      'The average Nigerian mobile user is on a metered data plan with variable cellular latency. When they tap "Pay Now" or "Save Inventory", their connection might drop for 1.5 seconds right in the middle of the request.',
      'If your system fails with a cryptic 500 error or requires them to re-enter all their details from scratch, they will close the browser and never return.',
      'At Nile and Booq, we design with three core rules:',
      '1. Aggressive optimistic updates with background retries. When a merchant logs an order or updates stock, the UI responds instantly.',
      '2. Sub-50KB initial payload budgets. Every unnecessary dependency gets cut.',
      '3. Resilient idempotency keys for all monetary transactions to prevent double charges when connections stutter.'
    ]
  },
  {
    slug: 'why-distribution-matters-more-than-founders-admit',
    title: 'Why Distribution Matters More Than Founders Admit',
    subtitle: 'The fatal myth that the best product automatically finds an audience, and how to build unfair distribution leverage.',
    category: 'BUSINESS',
    date: 'May 2026',
    readingTime: '9 min read',
    heroImage: '/images/camera-roll/cr-03.svg',
    excerpt: 'First-time founders obsess about the product. Second-time founders obsess about distribution. Great products with zero distribution go bankrupt every single day.',
    quotes: [
      'If a tree falls in the forest and nobody hears it, it doesn’t make a sound. If you build incredible software and nobody knows you exist, you are just an unemployed programmer.',
      'Content is not marketing. Content is your direct pipeline to trust.'
    ],
    tags: ['Distribution', 'Marketing', 'Creator Economy', 'Strategy'],
    content: [
      'I spend as much time creating content, breaking down business realities on camera, and talking to people on social media as I do writing code or directing product sprints.',
      'Why? Because building an audience is the only unfair advantage that cannot be copied by a competitor with more capital.',
      'When you document your journey, when you share the mistakes, the numbers, the customer visits, and the hard lessons, people don’t just buy your software. They become invested in your story.',
      'Distribution is not something you "turn on" after launch. Distribution is built into the product from day one.'
    ]
  }
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find(n => n.slug === slug);
}
