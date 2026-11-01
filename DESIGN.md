# 🦷 DESIGN SYSTEM — DENTAL CLINIC MODERN SUITE (Google Stitch Specification)

> **Design Direction:** Clinical Excellence, Pristine Hygiene, Trust & Modern Warmth.  
> **Target Audience:** Patients seeking reliable, pain-free dental care (Root Canal, Implants, Braces, Teeth Whitening) in urban areas.

---

## 🎨 1. Color Palette (Google Stitch Tokens)

### Primary Medical Brand Tokens
- **`--color-primary-50`**: `#F0FDFA` (Softest Mint/Teal Tint — Section backgrounds & Pill tags)
- **`--color-primary-100`**: `#CCFBF1` (Light Teal — Active states & soft badges)
- **`--color-primary-500`**: `#14B8A6` (Vibrant Teal — Secondary accents & highlights)
- **`--color-primary-600`**: `#0D9488` (Core Brand Teal — Primary CTA buttons, key icons)
- **`--color-primary-700`**: `#0F766E` (Deep Teal — Hover CTA, strong medical accents)
- **`--color-primary-900`**: `#134E4A` (Clinical Dark — High-emphasis medical headings)

### Healing & Secondary Accents
- **`--color-accent-sky-50`**: `#F0F9FF` (Ice Sky Tint — Alternative section backgrounds)
- **`--color-accent-sky-600`**: `#0284C7` (Sky Blue — Emergency helpline & secondary actions)
- **`--color-accent-sky-700`**: `#0369A1` (Deep Sky — Active buttons)
- **`--color-success-600`**: `#059669` (Clinical Safety & Verified Doctor BMDC Badge)

### Neutrals & High-Contrast Typography
- **`--color-surface-white`**: `#FFFFFF` (Pure Sterile White — Card surfaces & primary background)
- **`--color-surface-slate-50`**: `#F8FAFC` (Clean Cool Grey — Section alternation)
- **`--color-border-subtle`**: `#E2E8F0` (Slate 200 — Flat crisp card borders)
- **`--color-border-focused`**: `#0D9488` (Teal 600 — Accessible focus ring)
- **`--color-text-main`**: `#0F172A` (Slate 900 — Maximum readability for headlines)
- **`--color-text-body`**: `#334155` (Slate 700 — WCAG AAA compliant body text)
- **`--color-text-muted`**: `#64748B` (Slate 500 — Captions & metadata)

---

## ✍️ 2. Typography Hierarchy (Taste Skill v2 Standard)

- **Display Title (Hero):** `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900`
- **Section Heading (H2):** `text-2xl sm:text-3xl font-bold tracking-tight text-slate-900`
- **Card Heading (H3):** `text-lg sm:text-xl font-semibold text-slate-900`
- **Body Large:** `text-base sm:text-lg text-slate-700 leading-relaxed`
- **Body Regular:** `text-sm sm:text-base text-slate-600 leading-normal`
- **Micro Badge / Caption:** `text-xs font-semibold tracking-wide uppercase text-teal-800`

---

## 🔘 3. Interactive Components & States (Vercel Guidelines)

### Button Design Tokens
1. **Primary CTA (Book Appointment / Call):**
   - Base: `bg-teal-600 text-white font-semibold px-5 py-3 rounded-xl shadow-xs transition-all duration-200`
   - Hover: `hover:bg-teal-700 hover:shadow-md`
   - Active: `active:scale-[0.98]`
   - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2`
   - Min Touch Target: `min-h-[44px] min-w-[44px]`

2. **Secondary / Outlined Button:**
   - Base: `border border-slate-300 bg-white text-slate-800 font-medium px-4 py-2.5 rounded-xl transition-all duration-200`
   - Hover: `hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900`
   - Active: `active:scale-[0.98]`
   - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2`

3. **Input Fields:**
   - Base: `w-full px-4 py-3 text-slate-900 bg-white border border-slate-300 rounded-xl transition duration-150`
   - Focus: `focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 focus:outline-none`
   - Error: `border-red-500 focus:border-red-600 focus:ring-red-200`

---

## 🚫 4. Impeccable Anti-Slop Safeguards
- ❌ **No Nested Cards:** Flat borders with ample whitespace (`p-6 bg-white border border-slate-200/90 rounded-2xl`).
- ❌ **No Cliché AI Sparkles:** Clean medical icons only (ShieldCheck, Stethoscope, Clock, MapPin, Award, CheckCircle2).
- ❌ **No Overblown Shadows:** Strictly clean `shadow-xs` or `shadow-sm`, never muddy `shadow-2xl`.
- ❌ **No Layout Shifts:** Explicit aspect ratios (`aspect-video`, `aspect-[4/3]`) on clinical photos with fallback background.

---

## 📱 5. Multi-Device Responsive Breakpoints
- **Mobile (<640px):** Single column, 16px horizontal margins, sticky bottom appointment & emergency call bar.
- **Tablet (640px - 1024px):** 2-column grid, compact navigation.
- **Desktop (>1024px):** 3-column / 12-column grid layouts with generous white space and sticky doctor consultation card.
