---
name: Nurul Qur'an Digital Identity
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff3ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fd'
  surface-container-highest: '#d9e3f7'
  on-surface: '#121c2a'
  on-surface-variant: '#404944'
  inverse-surface: '#273140'
  inverse-on-surface: '#ebf1ff'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#2c2f30'
  on-tertiary: '#ffffff'
  tertiary-container: '#424546'
  on-tertiary-container: '#b0b2b3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f7'
typography:
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  quran-text:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 48px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system embodies a "Serene Modernist" aesthetic, blending the heritage of Islamic scholarship with the precision of contemporary educational technology. It prioritizes clarity, tranquility, and academic excellence.

The style leverages **Corporate Modernism** with a **Tactile** twist—using subtle gold accents and high-quality whitespace to create a premium, institutional feel. The UI should evoke a sense of calm focus (Sakina), using clean lines and a structured hierarchy to guide students and parents through educational journeys without cognitive overload.

## Colors
The palette is rooted in **Deep Emerald Green** (#064E3B), representing growth and Islamic tradition, used for primary actions and brand anchoring. **Gold** (#D4AF37) is used sparingly for accents, achievements, and highlighting "Premium" or "Sacred" content.

Backgrounds must remain clean white or very light grey (#F9FAFB) to ensure readability. Status indicators are semantic:
- **Sangat Lancar (Very Fluent):** Emerald Green (Success)
- **Lancar (Fluent):** Calm Blue (Progress)
- **Perlu Muraja'ah (Needs Review):** Amber (Cautionary focus)

## Typography
This design system utilizes a high-contrast typographic pairing. **Libre Caslon Text** provides an authoritative, literary feel for headings, suggesting a deep connection to classical texts. **Plus Jakarta Sans** is used for all functional UI elements and body copy to maintain a modern, friendly, and highly legible experience. 

For Arabic script or Quranic verses, use **Noto Serif** with increased line height to accommodate diacritics and ensure maximum clarity for students.

## Layout & Spacing
The design system employs a **Fixed Grid** for dashboard content and a **Fluid Content Column** for public-facing editorial pages.

- **Desktop:** 12-column grid with a 1280px max-width.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column grid with 16px margins.

Use a 1:1.5 spacing ratio for vertical rhythm. Dashboards should utilize a "Side-Rail" navigation pattern (240px width) to keep the main workspace expansive and focused on learning materials.

## Elevation & Depth
Depth is communicated through **Tonal Layers** rather than heavy shadows. 

- **Level 0 (Base):** Light Grey (#F9FAFB) for the main application background.
- **Level 1 (Cards):** Pure White (#FFFFFF) with a 1px border in #E5E7EB. 
- **Level 2 (Dropdowns/Modals):** Pure White with a very soft, diffused shadow (0px 10px 15px -3px rgba(6, 78, 59, 0.05)).

Avoid black shadows; instead, use a slight Emerald tint in the shadow color to maintain brand harmony.

## Shapes
The shape language is **Soft** and professional. Standard UI components like input fields and buttons use a 0.25rem (4px) radius to maintain a sense of precision and structure.

Larger containers, such as profile cards or student progress modules, can use `rounded-lg` (8px) to soften the aesthetic. Decorative elements, such as "Featured Ayah" blocks, may incorporate subtle geometric Islamic patterns (Star or Octagon) as low-opacity background watermarks.

## Components
- **Buttons:** Primary buttons are Solid Deep Emerald with white text. Secondary buttons are Gold outlines with Emerald text. All buttons use 16px horizontal padding and a semi-bold weight.
- **Status Chips:** Small, pill-shaped indicators for "Sangat Lancar," etc. Use a light background tint of the status color with a high-contrast text color (e.g., Light Green BG + Dark Green Text).
- **Cards:** White background, 1px grey border, and a subtle Gold top-border (2px) for "High Achievement" cards.
- **Inputs:** Minimalist with a 1px border. On focus, the border transitions to Deep Emerald with a 2px "Gold Halo" outer glow.
- **Progress Bars:** Dual-tone bars. The "filled" portion uses Emerald for general progress, but switches to the specific Status Color (Gold/Blue/Green) when displaying individual Surah mastery levels.
- **Navigation:** Vertical sidebar for dashboards with icons in Emerald. Hover states should use a soft Gold underline or left-border accent.