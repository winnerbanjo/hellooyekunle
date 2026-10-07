import fs from 'fs';

const dirs = [
  'public/images/hero',
  'public/images/founder',
  'public/images/building',
  'public/images/archive',
  'public/images/nile',
  'public/images/sena',
  'public/images/booq',
  'public/images/life',
  'public/images/lagos',
  'public/images/camera-roll'
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

function createSvg(title, subtitle, badge, accentColor = '#B8FF3D', bgGradient = ['#111114', '#08080A']) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient[0]}"/>
      <stop offset="100%" stop-color="${bgGradient[1]}"/>
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.2"/>
    </linearGradient>
    <radialGradient id="radialBeam" cx="30%" cy="30%" r="60%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222226" stroke-width="0.8"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect width="1200" height="800" fill="url(#grid)" opacity="0.6"/>
  <circle cx="350" cy="300" r="450" fill="url(#radialBeam)"/>

  <!-- UI Window Container -->
  <g transform="translate(100, 100)">
    <rect width="1000" height="600" rx="16" fill="#121216" stroke="#24242C" stroke-width="1.5" />
    
    <!-- Top bar -->
    <rect width="1000" height="50" rx="16" fill="#18181F" />
    <circle cx="35" cy="25" r="6" fill="#FF5F56" />
    <circle cx="55" cy="25" r="6" fill="#FFBD2E" />
    <circle cx="75" cy="25" r="6" fill="#B8FF3D" />

    <text x="500" y="32" fill="#777788" font-family="'Inter', sans-serif" font-size="13" font-weight="600" text-anchor="middle" letter-spacing="2">HELLOOYEKUNLE.COM / SYSTEM</text>

    <!-- Content area -->
    <!-- Badge -->
    <g transform="translate(60, 100)">
      <rect width="160" height="32" rx="16" fill="#1C1F16" stroke="${accentColor}" stroke-opacity="0.5" stroke-width="1"/>
      <text x="80" y="21" fill="${accentColor}" font-family="'Inter', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" text-anchor="middle">${badge.toUpperCase()}</text>
    </g>

    <!-- Title & Subtitle -->
    <text x="60" y="190" fill="#F5F3EE" font-family="'Inter', sans-serif" font-size="44" font-weight="800" letter-spacing="-1">${title}</text>
    <text x="60" y="235" fill="#9999AA" font-family="'Inter', sans-serif" font-size="20" font-weight="400">${subtitle}</text>

    <!-- Simulated UI Components -->
    <g transform="translate(60, 280)">
      <!-- Card 1 -->
      <rect width="270" height="240" rx="12" fill="#16161B" stroke="#24242E" stroke-width="1"/>
      <text x="24" y="40" fill="#777788" font-size="12" font-family="'Inter', monospace">METRIC_01</text>
      <text x="24" y="85" fill="#FFFFFF" font-size="36" font-weight="800" font-family="'Inter', sans-serif">₦200M+</text>
      <text x="24" y="115" fill="#888899" font-size="14" font-family="'Inter', sans-serif">Processed Ecosystem</text>
      <path d="M 24 200 L 70 170 L 120 185 L 180 140 L 246 120" fill="none" stroke="${accentColor}" stroke-width="3" stroke-linecap="round"/>

      <!-- Card 2 -->
      <rect x="300" y="0" width="270" height="240" rx="12" fill="#16161B" stroke="#24242E" stroke-width="1"/>
      <text x="324" y="40" fill="#777788" font-size="12" font-family="'Inter', monospace">SYSTEM_STATUS</text>
      <text x="324" y="85" fill="#B8FF3D" font-size="36" font-weight="800" font-family="'Inter', sans-serif">ACTIVE</text>
      <text x="324" y="115" fill="#888899" font-size="14" font-family="'Inter', sans-serif">Lagos Edge Gateway</text>
      <rect x="324" y="150" width="220" height="8" rx="4" fill="#22222E"/>
      <rect x="324" y="150" width="180" height="8" rx="4" fill="#B8FF3D"/>
      <text x="324" y="180" fill="#9999AA" font-size="12" font-family="'Inter', monospace">99.98% Latency SLA</text>

      <!-- Card 3 -->
      <rect x="600" y="0" width="270" height="240" rx="12" fill="#16161B" stroke="#24242E" stroke-width="1"/>
      <text x="624" y="40" fill="#777788" font-size="12" font-family="'Inter', monospace">COMMERCE_OS</text>
      <text x="624" y="85" fill="#FFFFFF" font-size="36" font-weight="800" font-family="'Inter', sans-serif">1,500+</text>
      <text x="624" y="115" fill="#888899" font-size="14" font-family="'Inter', sans-serif">Active Businesses</text>
      <circle cx="640" cy="180" r="16" fill="${accentColor}" fill-opacity="0.2"/>
      <circle cx="680" cy="180" r="16" fill="#F5F3EE" fill-opacity="0.1"/>
      <circle cx="720" cy="180" r="16" fill="#B8FF3D" fill-opacity="0.2"/>
    </g>
  </g>
</svg>`;
}

const assets = [
  // Nile (Clean emerald / acid green)
  { path: 'public/images/nile/nile-dashboard.svg', title: 'Nile Commerce OS', sub: 'The business OS powering 1,500+ merchants across Nigeria', badge: 'Business OS', color: '#10B981' },
  { path: 'public/images/nile/nile-checkout.svg', title: 'Nile Instant Checkout', sub: 'Zero-dropoff mobile payments built for African bandwidth', badge: 'Payments', color: '#10B981' },
  { path: 'public/images/nile/nile-merchants.svg', title: 'Merchant Growth Engine', sub: 'Inventory, orders, multi-channel sales and customer analytics', badge: 'Merchant OS', color: '#10B981' },

  // Sena (Warm Gold / Amber Hospitality)
  { path: 'public/images/sena/sena-hospitality.svg', title: 'Sena Hospitality OS', sub: 'Infrastructure for modern hotels, short-stays & luxury resorts', badge: 'Hospitality', color: '#F59E0B' },
  { path: 'public/images/sena/sena-calendar.svg', title: 'Dynamic Room Management', sub: 'Unified reservations, calendar sync & automated guest check-in', badge: 'Calendar Engine', color: '#F59E0B' },

  // Booq (Acid Green)
  { path: 'public/images/booq/booq-pos.svg', title: 'Booq POS & Accounting', sub: 'Know your numbers. Mobile-first reconciliation for African businesses', badge: 'Fintech / POS', color: '#B8FF3D' },
  { path: 'public/images/booq/booq-ledger.svg', title: 'Real-time Cash Ledger', sub: 'Automated daily reconciliation, tax compliance & profit tracking', badge: 'Ledger Core', color: '#B8FF3D' },

  // Lagos & Life (Gold & Green)
  { path: 'public/images/lagos/lagos-night.svg', title: 'Lagos Island at Night', sub: 'Where ambition meets raw operational hustle. 18:21 WAT', badge: 'Lagos Energy', color: '#F59E0B' },
  { path: 'public/images/lagos/lagos-tech.svg', title: 'Building from Lagos', sub: 'Solving real problems for real people with leverage', badge: 'Infrastructure', color: '#B8FF3D' },
  { path: 'public/images/life/life-workspace.svg', title: 'Late Night Workspace', sub: 'Terminal, Figma, coffee, and unreasonable curiosity', badge: 'Behind The Work', color: '#B8FF3D' },
  { path: 'public/images/life/life-travel.svg', title: 'Movement & Exploration', sub: 'Between Accra, Nairobi, London and Lagos', badge: 'Movement', color: '#F59E0B' },

  // Building & Archive
  { path: 'public/images/building/building-team.svg', title: 'Shipping Under Pressure', sub: 'Rapid iteration with small obsessed product teams', badge: 'Execution', color: '#B8FF3D' },
  { path: 'public/images/building/building-code.svg', title: 'The Next Architecture', sub: 'Distributed backend designed to survive erratic Nigerian internet', badge: 'Engineering', color: '#10B981' },
  { path: 'public/images/archive/archive-v1.svg', title: 'First Nile Prototype', sub: 'Your first version should embarrass you. Shipped anyway.', badge: 'Archive 2023', color: '#888899' },
  { path: 'public/images/archive/archive-sketch.svg', title: 'Original Whiteboard Wireframes', sub: 'From a single irritating merchant problem to an operating system', badge: 'Archive 2023', color: '#888899' },

  // Camera roll
  { path: 'public/images/camera-roll/cr-01.svg', title: 'Customer Visit / Victoria Island', sub: 'Watching our merchant process 300 orders before lunch', badge: 'On The Ground', color: '#F59E0B' },
  { path: 'public/images/camera-roll/cr-02.svg', title: 'Midnight Deploy', sub: 'Fixing checkout bottleneck. Bugs caused: probably 2.', badge: 'Production', color: '#B8FF3D' },
  { path: 'public/images/camera-roll/cr-03.svg', title: 'Content Shoot in Lekki', sub: 'Documenting the real operational breakdown behind software', badge: 'Creator', color: '#EC4899' },
  { path: 'public/images/camera-roll/cr-04.svg', title: 'Airport Boarding Pass', sub: 'Heading to Kenya for East Africa merchant discovery', badge: 'Transit', color: '#F59E0B' }
];

assets.forEach(a => {
  const svg = createSvg(a.title, a.sub, a.badge, a.color);
  fs.writeFileSync(a.path, svg);
});
console.log('Regenerated all assets without any blue!');
