# 🦷 DESIGN SYSTEM — DENTIQUE LUXURY DENTAL CLINIC & SMILE STUDIO (Google Stitch Specification)

> **Brand Identity:** Dentique — Modern Dentistry & Aesthetic Smile Studio  
> **Design Direction:** Light Luxury Clinical Excellence, Sunlit Clean Hygiene, Trust & Warmth.  
> **Reference Model:** Dentox / Dentique Premium Healthcare Design.  
> **Target Audience:** Patients seeking world-class, pain-free dental care (Cosmetic Smile Makeover, Orthodontics, Dental Implants, Root Canal, Pediatric Care).

---

## 🎨 1. Color Palette (Google Stitch & Dentique Tokens)

### Core Brand Tokens
- **`--color-primary`**: `#33A9B1` (Dentique Signature Radiant Cyan/Teal — Primary CTA buttons, icon circles, active states)
- **`--color-primary-dark`**: `#288C93` (Deep Teal — Hover CTA, pressed states)
- **`--color-primary-light`**: `#E6F7F8` (Soft Cyan Mist — Subtle badges, pill backgrounds)
- **`--color-secondary`**: `#1F3D3F` (Dentique Deep Forest Teal / Navy — Modal header, footer accent)
- **`--color-secondary-dark`**: `#132728` (Deeper Midnight Teal — Footer base, contrasts)

### Surfaces & Neutrals
- **`--color-surface-white`**: `#FFFFFF` (Sterile Clean White — Card surfaces, primary body)
- **`--color-surface-hero`**: `#F4F9F9` (Dentique Sunlit Light Mist — Light, bright, airy Hero background)
- **`--color-surface-shade`**: `#DEE8DE` (Dentique Sage Tint — Feature blocks, section separators)
- **`--color-surface-mute`**: `#F5F7FA` (Cool Off-White — Form containers, subtle cards)
- **`--color-headings`**: `#050C14` (Deep Obsidian Ink — H1, H2, H3 high contrast headings)
- **`--color-body`**: `#47697B` (Muted Slate Cyan — Smooth readable paragraphs)
- **`--color-border`**: `#D8DDE1` (Crisp Medical Border — Hairline dividers & input borders)
- **`--color-success`**: `#23E219` (Vibrant Verified Green — Open status, BMDC certification)

---

## ✍️ 2. Typography Hierarchy (DM Sans + Modern Heading Standard)

- **Hero Display H1:** `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#050c14] leading-[1.15]`
- **Section Heading H2:** `text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#050c14]`
- **Card Heading H3:** `text-lg sm:text-xl font-semibold text-[#050c14]`
- **Section Subtitle / Badge:** `inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1]`
- **Body Text:** `text-base text-[#47697b] leading-relaxed`
- **Caption / Meta:** `text-xs sm:text-sm text-[#47697b]/80`

---

## 🔘 3. Interactive Components & States (Vercel Guidelines)

### Button Design Tokens
1. **Primary Dentox Pill Button (Make Appointment / Book Consultation):**
   - Base: `inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#33a9b1] text-white font-semibold text-sm shadow-sm transition-all duration-300 hover:bg-[#288c93] hover:shadow-md active:scale-[0.98]`
   - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33a9b1] focus-visible:ring-offset-2`
   - Touch Target: `min-h-[44px] min-w-[44px]`

2. **Secondary Outlined Pill Button:**
   - Base: `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#d8dde1] bg-white text-[#050c14] font-semibold text-sm transition-all duration-300 hover:bg-[#f5f7fa] hover:border-[#33a9b1] hover:text-[#33a9b1] active:scale-[0.98]`

3. **Input & Select Controls:**
   - Base: `w-full px-4 py-3.5 bg-white border border-[#d8dde1] rounded-xl text-[#050c14] placeholder-[#47697b]/60 text-sm transition-all duration-200 focus:outline-none focus:border-[#33a9b1] focus:ring-2 focus:ring-[#33a9b1]/20`

---

## 🚫 4. Impeccable Anti-Slop Safeguards
- ❌ **No Cliché Nested Cards:** Clean flat structural dividers and gentle whitespace.
- ❌ **No Muddy `shadow-2xl`:** Clean crisp light shadows (`shadow-sm`, `shadow-md` on hover only).
- ❌ **No Placeholder or Incomplete Code:** Fully functional interactive components with real validation and state.
- ❌ **No Tacky Sparkles:** Purposeful dental clinic iconography and Dentox graphic assets.
- ❌ **No Layout Shifts:** Explicit sizing and aspect ratios on all dental photography.

---

## 📱 5. Multi-Device Responsive Breakpoints
- **Mobile (<640px):** Single-column stack, accessible tap targets, offcanvas menu drawer, sticky mobile booking CTA.
- **Tablet (640px - 1024px):** 2-column balanced layouts, smooth swipeable touch carousels.
- **Desktop (>1024px):** Rich multi-column grid, interactive Before & After slider, brand marquee, sticky header navigation.
