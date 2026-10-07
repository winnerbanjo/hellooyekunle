export interface BoredItem {
  id: string;
  type: 'quote' | 'confession' | 'idea' | 'lesson' | 'easter-egg';
  text: string;
  tag: string;
}

export const boredItems: BoredItem[] = [
  {
    id: 'b-1',
    type: 'confession',
    text: "Current browser tab count: irresponsible. (Somewhere north of 80).",
    tag: "Behind The Scenes"
  },
  {
    id: 'b-2',
    type: 'quote',
    text: "Somebody once told me Nile wouldn't work in Nigeria. They said merchants prefer WhatsApp chats forever. We shipped anyway.",
    tag: "Founder Memory"
  },
  {
    id: 'b-3',
    type: 'lesson',
    text: "Good products don’t sell themselves. Anyone who told you that was either subsidized by $50M in VC or lying.",
    tag: "Hard Truth"
  },
  {
    id: 'b-4',
    type: 'confession',
    text: "I've probably redesigned this website three times at 3:00 AM because the line breaks weren't dramatic enough.",
    tag: "Design Obsession"
  },
  {
    id: 'b-5',
    type: 'lesson',
    text: "Lagos will teach you operational resilience faster than any business school on earth.",
    tag: "Lagos Reality"
  },
  {
    id: 'b-6',
    type: 'idea',
    text: "Currently thinking about another product idea. I should probably stop and sleep.",
    tag: "Midnight Brain"
  },
  {
    id: 'b-7',
    type: 'easter-egg',
    text: "Try typing 'money' on your keyboard. Or 'lagos'.",
    tag: "Secret Trigger"
  },
  {
    id: 'b-8',
    type: 'lesson',
    text: "If your software checkout takes more than 3 taps on a Tecno phone on 3G, you don't have a checkout. You have a barrier.",
    tag: "Engineering Rule"
  },
  {
    id: 'b-9',
    type: 'quote',
    text: "Speed is a feature. Slow software feels like a scam in a low-trust market.",
    tag: "Product Thesis"
  }
];
