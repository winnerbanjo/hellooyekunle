export interface TimelineCard {
  step: string;
  title: string;
  subtitle: string;
  body: string;
  highlight?: string;
  image?: string;
  year: string;
}

export const storyTimeline: TimelineCard[] = [
  {
    step: '01',
    title: 'START',
    subtitle: 'Building from curiosity',
    body: "I didn't start with some grand Silicon Valley master plan. I was just obsessed with computers and liked the idea that one person with a laptop could write something thousands of people could use.",
    highlight: 'Building things people would actually pay for.',
    image: '/images/archive/archive-sketch.svg',
    year: '2021'
  },
  {
    step: '02',
    title: 'EARLY DAYS',
    subtitle: 'From client websites to repeatable software',
    body: 'Websites turned into products. Products turned into real customers. Customers turned into brutal operational problems. And those problems demanded better software.',
    highlight: 'One website turned into a platform.',
    image: '/images/archive/archive-v1.svg',
    year: '2022'
  },
  {
    step: '03',
    title: 'NILE',
    subtitle: 'The turning point',
    body: 'At some point Nile stopped feeling like a weekend experiment. Real African merchants with families were relying on it to run their stores and get paid every single day. That changed how I looked at software forever.',
    highlight: 'Real businesses depended on it.',
    image: '/images/nile/nile-dashboard.svg',
    year: '2023'
  },
  {
    step: '04',
    title: 'MORE PRODUCTS',
    subtitle: 'One problem kept unlocking the next',
    body: 'Commerce led directly to payments. Selling products led to inventory and accounting—which became Booq. Speaking with hotel operators with messy front desks sparked Sena. Every business problem contained the seed of another product.',
    highlight: 'Commerce. Payments. Hospitality. Accounting.',
    image: '/images/sena/sena-hospitality.svg',
    year: '2024 - 2025'
  },
  {
    step: '05',
    title: 'TODAY',
    subtitle: 'Founder × Creator',
    body: "I'm still learning. Still building. Still making mistakes. Just at a bigger scale. And documenting every step of the journey publicly so others can skip the traps I fell into.",
    highlight: 'Still figuring it out. That’s the fun part.',
    image: '/images/founder/winner-portrait.png',
    year: '2026'
  },
  {
    step: '06',
    title: 'NEXT',
    subtitle: 'Unreasonable ambition',
    body: 'Lagos made the problems obvious. Technology makes the opportunity pan-African. Building institutions that outlive us.',
    highlight: 'AFRICA.',
    image: '/images/lagos/lagos-tech.svg',
    year: '2026+'
  }
];

export const founderBio = {
  name: 'Winner Oyekunle',
  role: 'Founder × Creator',
  location: 'Lagos, Nigeria',
  shortBio: 'Winner Oyekunle is a Nigerian technology founder and creator building products and companies designed to help African businesses operate, sell, grow, and scale. He is the founder of Nile Africa Technologies, Sena, and Booq.',
  longBio: [
    "I'm Winner Oyekunle. I'm a founder and creator based in Lagos, Nigeria.",
    "Most of my time goes into building technology products for African businesses, figuring out distribution, talking to customers, making content and trying not to create more problems than I solve.",
    "I started building on the internet because I liked the idea that one person with a laptop could create something thousands of people could use.",
    "That curiosity eventually became Nile. And Nile eventually became much bigger than a website project.",
    "Today I'm interested in commerce, hospitality, payments, software, AI, distribution and the infrastructure African businesses will use over the next decade.",
    "I also create content because I think the process is often more interesting than the finished result. I document the mistakes, the wins, the marketing strategies, and what operating a startup in Lagos actually looks like without the PR filter.",
    "I'm still figuring most of it out. This website documents some of that."
  ],
  principles: [
    { title: 'Distribution First', desc: 'A mediocre product with massive distribution beats a masterclass product nobody knows about.' },
    { title: 'Africa-First Engineering', desc: 'Design for low bandwidth, mobile browsers, spotty connections, and instant cash flow clarity.' },
    { title: 'Document Everything', desc: 'Building in public creates trust, attracts exceptional talent, and holds you accountable to reality.' },
    { title: 'Relentless Execution', desc: 'Speed is a feature. Ship, get embarrassed, learn, and iterate before the market shifts.' }
  ]
};
