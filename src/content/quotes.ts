export interface LessonCard {
  id: string;
  quote: string;
  context: string;
  articleSlug?: string;
  rotation?: number;
}

export const lessonsLearned: LessonCard[] = [
  {
    id: 'l-01',
    quote: 'Distribution beats beautiful products.',
    context: 'Every single time. You can have the cleanest code and the smoothest Figma prototypes, but if you do not have a repeatable engine to put your product in front of buyers, you do not have a business.',
    articleSlug: 'why-distribution-matters-more-than-founders-admit',
    rotation: -2
  },
  {
    id: 'l-02',
    quote: 'Revenue ends many philosophical debates.',
    context: 'When your team is arguing for two hours over whether a button should be blue or black, ask which one made the merchant complete the checkout today. Money talks; opinions whisper.',
    articleSlug: 'what-building-nile-has-taught-me',
    rotation: 1.5
  },
  {
    id: 'l-03',
    quote: 'Nigerian customers will tell you the truth very quickly.',
    context: 'In Silicon Valley, users cancel politely or churn in silence. In Lagos, an upset merchant will voice note you with raw, unfiltered precision. It hurts at first, but it is the greatest gift in product discovery.',
    articleSlug: 'what-building-nile-has-taught-me',
    rotation: -1
  },
  {
    id: 'l-04',
    quote: 'Your first version should probably embarrass you.',
    context: 'If you look back at v1 and don’t cringe, you waited too long to launch. We shipped Nile v1 with hardcoded CSS and missing edge cases. We learned more in 48 hours of real traffic than 6 months of planning.',
    articleSlug: 'what-building-nile-has-taught-me',
    rotation: 2.5
  },
  {
    id: 'l-05',
    quote: 'Businesses don’t buy features. They buy relief.',
    context: 'A merchant does not wake up dreaming of "multi-channel inventory sync." They wake up terrified of selling an out-of-stock dress and having an angry customer blast them on Instagram. Sell the relief from the nightmare.',
    articleSlug: 'why-im-betting-on-african-businesses',
    rotation: -1.8
  },
  {
    id: 'l-06',
    quote: 'Speed is a feature.',
    context: 'Slow software feels broken even when it works. Fast software feels premium even when it lacks features. In African connectivity conditions, latency is the difference between revenue and a closed tab.',
    articleSlug: 'building-software-for-nigerian-internet',
    rotation: 2
  },
  {
    id: 'l-07',
    quote: 'If nobody is paying, something is wrong.',
    context: 'People will tell you your idea is revolutionary because being polite is free. Proof only begins when someone reaches into their wallet and transfers money into your corporate account.',
    articleSlug: 'why-im-betting-on-african-businesses',
    rotation: -2.2
  },
  {
    id: 'l-08',
    quote: 'Shipping teaches more than planning.',
    context: 'You can write 40-page Notion PRDs, but real users will break your assumptions within 90 seconds of release. Build the smallest testable slice, ship it, and let the real world educate you.',
    articleSlug: 'what-visiting-a-sena-customer-taught-me',
    rotation: 1
  }
];
