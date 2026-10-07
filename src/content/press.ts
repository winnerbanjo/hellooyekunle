export interface PressKit {
  name: string;
  titles: string[];
  shortBio: string;
  formalBio: string;
  headshots: {
    title: string;
    url: string;
    dimensions: string;
    type: string;
  }[];
  companyLogos: {
    name: string;
    url: string;
    type: string;
  }[];
  keyFacts: {
    label: string;
    value: string;
  }[];
  mediaContacts: {
    purpose: string;
    email: string;
  }[];
}

export const pressKitData: PressKit = {
  name: 'Winner Oyekunle',
  titles: [
    'Technology Founder',
    'Founder & CEO, Nile Africa Technologies',
    'Product Builder',
    'Creator & Operator'
  ],
  shortBio: 'Winner Oyekunle is a Nigerian technology founder and creator building products designed to help African businesses operate, sell, grow, and scale. He is the founder of Nile Africa Technologies, Sena, and Booq.',
  formalBio: 'Winner Oyekunle is a Nigerian technology founder, product builder, and digital creator based in Lagos. He is the Founder and CEO of Nile Africa Technologies, the commerce operating system powering over 1,500 African merchants with more than ₦200M in processed merchandise value. In addition to Nile, Oyekunle is the creator of Sena, a hospitality infrastructure platform for boutique hotels and short-stays, and Booq, a mobile POS and accounting system. As a creator, he documents business realities, product architecture, and startup operations from Lagos across social platforms to hundreds of thousands of operators.',
  headshots: [
    {
      title: 'Winner Oyekunle - Main Editorial Portrait (PNG)',
      url: '/images/founder/winner-portrait.png',
      dimensions: '1024 x 1536 px',
      type: 'High-Res Studio Portrait'
    },
    {
      title: 'Winner Oyekunle - Profile Headshot (JPG)',
      url: '/images/founder/winner-studio.jpg',
      dimensions: '682 x 1024 px',
      type: 'Official Headshot'
    }
  ],
  companyLogos: [
    { name: 'Nile Africa Technologies', url: '/images/nile/nile-dashboard.svg', type: 'Vector SVG' },
    { name: 'Sena Hospitality', url: '/images/sena/sena-hospitality.svg', type: 'Vector SVG' },
    { name: 'Booq POS & Accounting', url: '/images/booq/booq-pos.svg', type: 'Vector SVG' }
  ],
  keyFacts: [
    { label: 'Primary Location', value: 'Lagos, Nigeria' },
    { label: 'Core Products', value: 'Nile, Sena, Booq' },
    { label: 'Ecosystem Merchants', value: '1,500+ active businesses' },
    { label: 'Transaction GMV', value: '₦200M+ processed' },
    { label: 'Focus Areas', value: 'Commerce OS, Hospitality PMS, POS Accounting, Creator Media' }
  ],
  mediaContacts: [
    { purpose: 'Press, Interviews & Speaking', email: 'press@hellooyekunle.com' },
    { purpose: 'Strategic Partnerships & Commercial', email: 'partnerships@hellooyekunle.com' },
    { purpose: 'General Inquiries', email: 'hello@hellooyekunle.com' }
  ]
};
