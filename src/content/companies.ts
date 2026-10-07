export interface Company {
  id: string;
  slug: string;
  name: string;
  headline: string;
  tagline: string;
  thesis: string;
  description: string;
  role: string;
  location: string;
  status: 'Building' | 'Scaling' | 'Active';
  year: string;
  websiteUrl: string;
  externalCta: string;
  metrics: {
    label: string;
    value: string;
    detail?: string;
  }[];
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    features: {
      name: string;
      desc: string;
    }[];
  };
  traction: string;
  customerExamples: {
    name: string;
    type: string;
    quote: string;
    metric: string;
  }[];
  lessons: string[];
  whatsNext: string;
  heroImage: string;
  screenshots: string[];
  accentColor: string;
}

export const companies: Company[] = [
  {
    id: 'nile',
    slug: 'nile',
    name: 'NILE',
    headline: 'THE BUSINESS OS FOR AFRICA.',
    tagline: 'Commerce, operations, checkout and customer retention for African merchants.',
    thesis: 'African businesses do not need another bloated Silicon Valley SaaS. They need an operating system that accepts payment on spotty 3G, syncs across WhatsApp and physical stores, and does not require a tech degree to operate.',
    description: 'Nile helps businesses create websites, sell online, manage orders, reach customers and operate their entire business from one place.',
    role: 'Founder & CEO',
    location: 'Lagos, Nigeria',
    status: 'Building',
    year: '2023 - Present',
    websiteUrl: 'https://nile.ng',
    externalCta: 'Visit Nile ↗',
    accentColor: '#10B981',
    heroImage: '/images/nile/nile-dashboard.svg',
    screenshots: [
      '/images/nile/nile-dashboard.svg',
      '/images/nile/nile-checkout.svg',
      '/images/nile/nile-merchants.svg'
    ],
    metrics: [
      { label: 'Businesses Powered', value: '1,500+', detail: 'Verified active merchants' },
      { label: 'Merchant GMV Processed', value: '₦200M+', detail: 'Across retail and digital' },
      { label: 'Orders Generated', value: '85,000+', detail: 'Completed checkouts' },
      { label: 'Products Created', value: '14,000+', detail: 'Active catalog items' }
    ],
    problem: {
      title: 'The Real Nigerian Commerce Bottleneck',
      description: 'Most African commerce happens on Instagram, WhatsApp, and in physical markets. But selling through DMs is chaotic, manual, and unscalable.',
      points: [
        'Merchants spend hours confirming bank transfers and sending account numbers via DM.',
        'Inventory desynchronizes between physical shops and social channels, causing double-selling.',
        'High cart drop-off rates on mobile because international checkout software is too heavy and slow.',
        'Zero automated customer retention: merchants lose repeat buyers the moment they close the chat.'
      ]
    },
    solution: {
      title: 'One Unified Operating System',
      description: 'Nile replaces eight messy tools with a single fast, mobile-first operating system designed specifically for African trade.',
      features: [
        { name: 'Instant Storefront Creation', desc: 'Deploy a high-converting, lightning-fast store in less than 5 minutes without code.' },
        { name: 'Ultra-Low Latency Checkout', desc: 'Optimized payment flows that succeed even on slow cellular connections.' },
        { name: 'Automated WhatsApp & SMS Order Alerts', desc: 'Instant order confirmations and tracking sent directly to the customer’s preferred channel.' },
        { name: 'Multi-Location Inventory Sync', desc: 'Centralized stock management across in-store walk-ins and online orders.' }
      ]
    },
    traction: 'Over 1,500 African merchants processed ₦200M+ in gross merchandise value, growing organically through merchant word-of-mouth and aggressive product iteration.',
    customerExamples: [
      {
        name: 'Luxe Fragrance Co.',
        type: 'Retail Merchant, Lagos',
        quote: 'Nile took our DM order chaos and gave us an automated machine. Checkout speed tripled our conversions.',
        metric: '4.2x monthly order volume'
      },
      {
        name: 'Oshodi Fashion Hub',
        type: 'Multi-channel Apparel',
        quote: 'We stopped losing money on unconfirmed transfers. Nile verified payments instantly.',
        metric: '99.4% payment confirmation rate'
      }
    ],
    lessons: [
      'Distribution beats beautiful products every single time.',
      'Nigerian merchants don’t care about technology buzzwords; they care about whether money entered the bank account.',
      'If your checkout requires more than 3 steps on mobile, 60% of African customers will abandon the cart.'
    ],
    whatsNext: 'Deepening our banking APIs, localized shipping courier automation across 36 Nigerian states, and cross-border settlement for West Africa.'
  },
  {
    id: 'sena',
    slug: 'sena',
    name: 'SENA',
    headline: 'HOSPITALITY, SIMPLIFIED.',
    tagline: 'Modern software infrastructure for hotels, short-stays and hospitality businesses.',
    thesis: 'African hospitality properties lose 20-30% of revenue to overbooked rooms, manual front-desk notebooks, and fragmented payment reconciliation. Sena turns boutique hotels and short-stays into modern digital operations.',
    description: 'Sena combines property management, reservations, payments, websites and hospitality operations into one platform.',
    role: 'Founder',
    location: 'Lagos, Nigeria',
    status: 'Building',
    year: '2024 - Present',
    websiteUrl: 'https://sena.africa',
    externalCta: 'Explore Sena ↗',
    accentColor: '#6366F1',
    heroImage: '/images/sena/sena-hospitality.svg',
    screenshots: [
      '/images/sena/sena-hospitality.svg',
      '/images/sena/sena-calendar.svg'
    ],
    metrics: [
      { label: 'Properties Managed', value: '45+', detail: 'Boutique hotels & luxury short-stays' },
      { label: 'Booking Nights Handled', value: '12,500+', detail: 'Automated calendar sync' },
      { label: 'Direct Booking Lift', value: '+35%', detail: 'Saved OTA commission fees' },
      { label: 'Check-in Time', value: '< 2 mins', detail: 'Digital guest arrival flow' }
    ],
    problem: {
      title: 'The Fragmented State of African Hospitality',
      description: 'Hoteliers in Lagos, Accra, and Abuja juggle paper guest logbooks, endless phone calls, and high commission OTA platforms that delay payouts for weeks.',
      points: [
        'Overbookings happen constantly because Airbnb, Booking.com, and walk-in reservations do not sync in real time.',
        'High OTA commission fees (up to 20%) eat the property owners’ operating margins.',
        'Front-desk staff struggle with manual payment matching, leading to leakage and guest disputes.',
        'No direct communication channel to offer guests room upgrades or return stays.'
      ]
    },
    solution: {
      title: 'The Operating Core for Hotels & Stays',
      description: 'A dedicated hospitality PMS that bridges physical properties with digital guest experiences.',
      features: [
        { name: 'Two-Way Channel Calendar Sync', desc: 'Instant calendar synchronization across all booking channels with zero double-bookings.' },
        { name: 'Direct Guest Booking Engine', desc: 'Custom property booking portal that allows guests to book and pay directly without OTA middleman fees.' },
        { name: 'Front Desk POS & Folio Management', desc: 'Track room charges, bar tabs, and restaurant bills on a single guest folio.' },
        { name: 'Automated WhatsApp Concierge', desc: 'Send Wi-Fi details, directions, and check-in codes directly to the guest’s phone.' }
      ]
    },
    traction: 'Powering high-occupancy boutique properties in Lekki, Victoria Island, and Abuja with 99.9% uptime and zero overbooking incidents.',
    customerExamples: [
      {
        name: 'The Haven Boutique Residences',
        type: '18-Key Luxury Short-Stay, Lekki',
        quote: 'Before Sena, we had two double-bookings a month. Since switching, zero errors and our direct website bookings jumped 38%.',
        metric: '₦18M+ direct bookings saved'
      }
    ],
    lessons: [
      'In hospitality, you have to spend time on the ground behind the reception desk to see where front-desk staff actually get confused.',
      'Software must work even when the hotel Wi-Fi dips for 10 minutes.'
    ],
    whatsNext: 'Self-service digital keyless room entry and unified procurement marketplace for hotel supplies across West Africa.'
  },
  {
    id: 'booq',
    slug: 'booq',
    name: 'BOOQ',
    headline: 'BUSINESS NUMBERS WITHOUT THE HEADACHE.',
    tagline: 'Mobile-first POS and accounting infrastructure for modern African businesses.',
    thesis: 'Most African small business owners don’t know their actual profit margin at the end of the month because paper ledgers get lost and desktop accounting software is overly complex. Booq gives merchants pure financial clarity in 3 taps.',
    description: 'A mobile-first POS and accounting product for African businesses. Real-time cash flow, inventory sync, expense tracking and tax compliance.',
    role: 'Product',
    location: 'Lagos, Nigeria',
    status: 'Building',
    year: '2025 - Present',
    websiteUrl: 'https://booq.ng',
    externalCta: 'Discover Booq ↗',
    accentColor: '#10B981',
    heroImage: '/images/booq/booq-pos.svg',
    screenshots: [
      '/images/booq/booq-pos.svg',
      '/images/booq/booq-ledger.svg'
    ],
    metrics: [
      { label: 'Transactions Tracked', value: '250K+', detail: 'Cash & transfer receipts' },
      { label: 'Reconciliation Time', value: '4 mins/day', detail: 'Down from 2 hours' },
      { label: 'Discrepancies Caught', value: '₦14M+', detail: 'Unmatched transfers prevented' },
      { label: 'Active Devices', value: '800+', detail: 'Android, iOS & web POS' }
    ],
    problem: {
      title: 'Accounting Shouldn’t Require an MBA',
      description: 'Small African retailers manage cash, bank transfers, credit debts, and stock in their heads or spiral notebooks. By month’s end, nobody knows what was truly earned vs what is owed.',
      points: [
        'Paper records get damaged, misplaced, or manipulated by staff.',
        'Bank transfer confirmations get faked by fraudulent shoppers (fake credit alerts).',
        'Business owners fail to separate personal bank accounts from business money.',
        'Traditional accounting packages require weeks of onboarding and complex charts of accounts.'
      ]
    },
    solution: {
      title: 'Radically Simple Financial Clarity',
      description: 'Booq is designed for the phone in your pocket, turning everyday sales into automated balance sheets.',
      features: [
        { name: 'One-Tap Sale Logging', desc: 'Log cash, POS, or bank transfer sales in under 5 seconds.' },
        { name: 'Live Bank Webhook Verification', desc: 'Real-time alert when transfer funds hit the merchant account.' },
        { name: 'Debtor Reminder Engine', desc: 'Automated respectful SMS/WhatsApp payment reminders to customers with pending balances.' },
        { name: 'Profit & Loss Snapshot', desc: 'Know your exact net margin every evening before you lock the doors.' }
      ]
    },
    traction: 'Adopted rapidly by electronics distributors, supermarkets, and specialty retailers across Lagos, Ibadan, and Port Harcourt.',
    customerExamples: [
      {
        name: 'Apex Supermarket',
        type: 'Retail Supermarket, Ikeja',
        quote: 'My staff logs every shift in Booq. I can check daily sales and profit from my phone while traveling.',
        metric: '100% daily reconciliation rate'
      }
    ],
    lessons: [
      'Simple beats comprehensive. If logging an item takes more than 10 seconds, the store clerk will stop using it.',
      'Protecting merchants from fake transfer alerts builds immediate evangelism.'
    ],
    whatsNext: 'Automated invoice factoring and working capital credit based on verified cash flow velocity.'
  }
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find(c => c.slug === slug);
}
