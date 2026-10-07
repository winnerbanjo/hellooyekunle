export interface WallItem {
  id: string;
  type: 'note' | 'photo' | 'tweet' | 'customer' | 'quote' | 'metric';
  content: string;
  author?: string;
  handle?: string;
  date?: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  rotation?: number;
  width?: string;
  x?: number;
  y?: number;
}

export const wallItems: WallItem[] = [
  {
    id: 'w-01',
    type: 'note',
    content: 'Product without distribution is just an expensive hobby on a server.',
    bgColor: '#1E2338',
    textColor: '#818CF8',
    rotation: -3,
    x: 20,
    y: 40
  },
  {
    id: 'w-02',
    type: 'customer',
    author: 'Titi K. (Lagos Fashion Store)',
    handle: 'WhatsApp Message',
    content: 'Winner, your new Nile checkout cut our abandoned orders in half this weekend. We did ₦1.8M directly on web without answering 50 DMs. God bless you bro!',
    date: 'Friday 9:42 PM',
    rotation: 2,
    x: 280,
    y: 20
  },
  {
    id: 'w-03',
    type: 'photo',
    content: 'Late night architecture sprint with terminal & Figma open.',
    image: '/images/building/building-code.svg',
    date: 'Lagos • 02:14 WAT',
    rotation: -1,
    x: 640,
    y: 50
  },
  {
    id: 'w-04',
    type: 'tweet',
    author: 'Winner Oyekunle',
    handle: '@winnerbanjo',
    content: 'Your best product shouldn’t get equal marketing. Pick your sharpest wedge, market it aggressively, and cross-sell everything else in the background.',
    date: 'Sep 24',
    rotation: 2.5,
    x: 1000,
    y: 30
  },
  {
    id: 'w-05',
    type: 'metric',
    content: '1,500+ MERCHANTS',
    author: 'Verified active ecosystem',
    bgColor: '#12251D',
    textColor: '#10B981',
    rotation: -2,
    x: 40,
    y: 260
  },
  {
    id: 'w-06',
    type: 'note',
    content: 'Lagos traffic = 2 hours of strategic product thinking if you don’t let it break you.',
    bgColor: '#2E2214',
    textColor: '#FBBF24',
    rotation: 3,
    x: 320,
    y: 280
  },
  {
    id: 'w-07',
    type: 'photo',
    content: 'First Sena hotel visit in Lekki.',
    image: '/images/camera-roll/cr-01.svg',
    date: 'Customer on-site',
    rotation: -2.5,
    x: 660,
    y: 270
  },
  {
    id: 'w-08',
    type: 'quote',
    content: 'Bugs caused: ∞. Probably.',
    author: 'Self-awareness metric',
    bgColor: '#26172E',
    textColor: '#F472B6',
    rotation: 1.5,
    x: 1020,
    y: 290
  }
];
