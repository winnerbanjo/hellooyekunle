# hellooyekunle.com

Digital Headquarters of **Winner Oyekunle** — Founder × Creator.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Brand Positioning

- **Founder**: Founder of Nile Africa Technologies (Commerce OS), Sena (Hospitality PMS), and Booq (POS & Accounting).
- **Creator**: Documenting business, marketing, product architecture, and startup realities from Lagos.
- **Philosophy**: *Build it. Talk about it. Repeat.*

---

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Local Development

Run the local dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Mobile / LAN Testing (Wi-Fi)

To test on your mobile device on the same local network:

```bash
npm run dev -- --hostname 0.0.0.0
```

---

## Tech Stack & Architecture

- **Framework**: Next.js 16+ (App Router, Server Components)
- **Styling**: Tailwind CSS v4 with dark luxury aesthetic (`#080808`, `#F5F3EE`, `#315BFF`, `#B8FF3D`)
- **Typography**: Inter Tight (Display) & Inter (Body)
- **Motion**: Framer Motion for staggered word reveals, interactive parallax, and draggable pinboard
- **CMS**: Sanity CMS client with complete typed local fallback in `src/content/`
- **Images**: Centralized configuration in `content/images.ts` for quick asset swapping
- **Audio**: Web Audio API tactile haptics synthesizer (disabled by default, toggleable in header)
- **Easter Eggs**: Secret triggers for typing `money` or `lagos`, Konami code, and docked `I'M BORED` random generator

---

## Routes

- `/` — Full cinematic homepage with all 16 interactive sections
- `/work/nile` — Case study: Nile Africa Technologies (Commerce OS)
- `/work/sena` — Case study: Sena Hospitality Infrastructure
- `/work/booq` — Case study: Booq Mobile POS & Accounting
- `/content` — Creator dispatches & video hub with platform & category filters
- `/story` — Founder autobiography, timeline, philosophy & press kit
- `/notes` — Long-form essays on African SaaS, pricing, and distribution
- `/notes/[slug]` — Reader view with pull quotes, tags & JSON-LD
- `/contact` — Interactive category dispatch form
- `/now` — Live status board based on Derek Sivers' concept

---

## Production Build & Verification

```bash
npm run lint
npm run build
```
