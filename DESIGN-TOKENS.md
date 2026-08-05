# Design Tokens — LONESTAR Bin Cleaners

Forked from `master-bin-exterior-cleaning` (Template Zero lineage) at Owen's request — reuse the
proven section skeleton, but rebuild the palette, type, and several structural decisions around
LONESTAR's own real brand and real facts. Not a reskin: LONESTAR has assets Master Bin didn't
(a real branded truck photo, real before/after photos, a real logo, real 3-tier pricing), which
changes the structural calls below, not just the colors.

## 1. Identity

LONESTAR Bin Cleaners — Frisco, TX (6160 Warren Parkway Suite 100, Frisco, TX 75034). Est. 2022.
Recurring trash-bin cleaning (interior + exterior, sanitize/disinfect/deodorize, 200°F rinse)
plus residential pressure washing as a secondary line. BBB A+ rated (not accredited). Real,
current promo: 20% off first cleaning, code `LONESTAR20`, no long-term contract. This is a
confident, established local operator — not a brand-new one-person outfit like Master Bin —
so the tone can be bolder and more declarative than Master Bin's deliberately calm, minimal one.

## 2. Palette — pulled directly from the real logo/truck livery, not invented

Source: LONESTAR's actual logo (`images/logo.png`) and truck wrap (`images/truck.png`), sampled
via computed styles on the live site (nav links, Sign Up/Login buttons). This *is* their real
brand red/blue — Texas-flag-adjacent by coincidence of their own naming and mark, not a
theme applied on top. Per the "don't avoid obvious industry colors reflexively" note, using the
business's own real colors is the correct default, not a cliché to route around.

| Name | Hex | Role |
|---|---|---|
| **Navy** | `#1E2A5E` | Base dark surface — deepened from the site's raw `rgb(40,56,145)` button blue for better contrast at scale |
| **Paper** | `#F8F6F1` | Base light surface — warm off-white, distinct from Master Bin's cooler `#F2F5F4` |
| **Ink** | `#171A22` | Body text on light surfaces |
| **Star Red** | `#C31F30` | Primary accent — CTAs, the signature "star" motif, deals callout. Their real logo/truck red (`rgb(191,30,46)`), deepened slightly for AA contrast on paper |
| **Steel** | `#5B6472` | Muted support — secondary text, borders |

Two-accent restraint kept from Master Bin's approach (one warm, one cool would fight the real
brand mark, which is strictly navy + red + white) — no third accent color introduced.

## 3. Type pairing — deliberately different from Master Bin's Baloo 2/Inter

- **Display:** Barlow Condensed (600/700/800) — confident, upright, slightly civic/signage in
  feel. Reads as established and trustworthy rather than playful-rounded (Master Bin's Baloo 2
  was chosen for "low-stress," which is wrong here — LONESTAR is bigger, older, and has a fleet
  truck; the type should read competent, not cute).
- **Body:** Work Sans (400/500/600/700) — clean and warm without being as neutral-generic as
  Inter, which several sibling builds already use.

## 4. Signature element: The Star Rail

Master Bin's Checklist Rail (a fixed column of squares that fill in as you scroll) is reused
mechanically but reskinned to the one piece of real brand iconography LONESTAR already owns —
their logo's five-pointed star. Same fixed left-edge rail, same scroll-linked fill behavior,
but each cell is star-shaped (CSS `clip-path`) and fills Star Red instead of a plain green
square. This ties the signature element to the client's *actual* mark instead of a generic
motif — restrained (one shape, one color, no animation flourish beyond the existing fill).

## 5. Structural changes from the Master Bin template

- **Hero is now photo-led, not typography-only.** Master Bin had no usable photo (mediocre
  generic stock only) and went type/icon-led as a deliberate workaround. LONESTAR has a strong
  real asset — their actual branded service truck (`images/truck.png`) — so the hero leads with
  it. This is the single biggest structural divergence from the source template.
- **H1 trick (per Owen, same pattern as Brick by Brick):** the real `<h1>` is one tag containing
  two visually distinct spans — a small, uppercase `.eyebrow` span carrying every SEO-important
  fact (service + all six service-area cities), and large `.hero-line` spans carrying a short,
  punchy tagline. Crawlers read the full, keyword-rich `<h1>` text regardless of which part is
  styled small; visually, the *tagline* is what reads as "the H1" to a human. Real content used:
  eyebrow = "Trash Bin Cleaning & Pressure Washing in Frisco, McKinney, Plano, Allen, Celina &
  Prosper, TX"; hero lines = "Your trash cans," / "Texas clean."
- **New: dedicated Deals section.** Master Bin had no active promo to feature. LONESTAR's real,
  current 20%-off-first-cleaning + `LONESTAR20` offer gets its own section immediately after
  the hero, not just a top-bar mention — per Owen's explicit ask to "include their deals."
- **New: real 3-tier Plans & Pricing section**, replacing Master Bin's generic 4-item services
  checklist. Exact real pricing (see §6) with the "Regular / every 6 weeks" plan marked Most
  Popular, matching the client's own site.
- **New: Before & After section** using LONESTAR's own real photos (`bin-before.jpg` /
  `bin-after.jpg`) instead of Master Bin's single About-section photo — LONESTAR has genuinely
  strong proof images Master Bin didn't, so proof gets a full section rather than a small aside.
- **Trust bar swapped from an unverifiable star rating to verified facts.** Master Bin's hero
  used "5.0★ rated" (real, small review count). LONESTAR's homepage displays a 5-star graphic,
  but it's part of their own promo badge artwork, not a review-platform rating — no verified
  aggregate rating was found (Facebook shows 3 reviews; no public star count confirmed). Used
  "BBB A+ Rated" and "Est. 2022" instead, both independently verifiable.
- **Services trimmed to the two real service lines** (bin cleaning; residential pressure
  washing) instead of a 4-item checklist — LONESTAR only actually offers two distinct service
  categories, so a padded list would misrepresent scope.
- **FAQ section added** using condensed, real answers pulled from the client's own `/faqs/`
  page, with matching `FAQPage` JSON-LD — direct SEO value the Master Bin template didn't need
  (that build had no FAQ section at all).

## 6. Real facts used (verified against lonestarbincleaners.com, 2026-08-05)

- **Plans:** Regular (every 6 weeks) $25/visit, 2 bins, $20 first cleaning — Most Popular ·
  Quarterly (every 12 weeks) $45/visit, $36 first cleaning · One-Time $75/visit, $60 first
  cleaning. Additional bins +$10 each on every plan. No long-term contracts, cancel anytime,
  100% satisfaction guaranteed.
- **Deal:** 20% off first cleaning on any recurring plan sign-up, code `LONESTAR20`.
- **Services:** Trash bin cleaning (200°F pressure-washed interior, exterior wipe-down,
  sanitize, disinfect, deodorize) · Residential pressure washing (patios, pergolas, porches,
  driveways, house exteriors — brick or wood).
- **Service area:** Frisco, McKinney, Allen, Celina, Plano, Prosper, TX (zip range
  75009–75070 per client FAQ).
- **Contact:** 972-777-4243 · info@lonestarbincleaners.com · 6160 Warren Parkway Suite 100,
  Frisco, TX 75034.
- **Hours:** Mon–Fri 8am–6pm, Sat 9am–2pm, Sun closed. The client's own site labels these hours
  "PST," which is very likely a WordPress-plugin default left unconfigured — Frisco, TX is
  Central time. Corrected silently to plain hours with no timezone claim rather than repeating
  a probable bug or guessing "CT" wasn't explicitly confirmed anywhere.
- **Trust signals:** BBB A+ rating (not BBB-accredited), established 2022. Real social profiles
  exist on Facebook, Instagram, and YouTube (linked in the header, matching the client's own
  site).

## 7. Flags for Owen

- **No owner/founder name found anywhere public** (site, BBB, Facebook, Instagram) — About
  section stays intentionally generic rather than inventing a name or story. Flag before any
  personalized copy is added.
- **No verified aggregate review rating.** The 5-star graphic on the client's homepage is their
  own promo-badge artwork advertising the discount, not a real review-platform score. Facebook
  shows 3 reviews; Yelp exists but returned a 403 on fetch (not independently confirmed here).
  If Owen has the real Google rating from the GBP dashboard, it should replace "BBB A+ Rated"
  as the hero trust tick — a real star count would out-convert a BBB mention.
- **Real logo, truck, and before/after photos were pulled directly from the client's own site**
  (their own IP, used to pitch their own business back to them — standard for this workflow) and
  saved locally in `images/`. Before shipping this as a live client site (not just a pitch demo),
  confirm image usage/licensing status with the client rather than assuming indefinite reuse.
