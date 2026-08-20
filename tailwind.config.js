/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#0b513d",
        "tertiary-container": "#424546",
        "tertiary-fixed-dim": "#c5c7c8",
        "surface-dim": "#d0daef",
        "on-error-container": "#93000a",
        "secondary-fixed": "#ffe088",
        "primary-fixed-dim": "#95d3ba",
        "background": "#f9f9ff",
        "on-tertiary-fixed": "#191c1d",
        "surface-container-highest": "#d9e3f7",
        "secondary-fixed-dim": "#e9c349",
        "on-surface-variant": "#404944",
        "surface-variant": "#d9e3f7",
        "on-secondary-container": "#745c00",
        "on-tertiary-container": "#b0b2b3",
        "on-secondary": "#ffffff",
        "on-secondary-fixed-variant": "#574500",
        "primary": "#003527",
        "inverse-on-surface": "#ebf1ff",
        "outline-variant": "#bfc9c3",
        "on-background": "#121c2a",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed-variant": "#454748",
        "secondary-container": "#fed65b",
        "surface-container-low": "#eff3ff",
        "on-secondary-fixed": "#241a00",
        "surface-container-high": "#dee9fd",
        "primary-fixed": "#b0f0d6",
        "tertiary": "#2c2f30",
        "tertiary-fixed": "#e1e3e4",
        "on-primary": "#ffffff",
        "inverse-primary": "#95d3ba",
        "surface": "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#121c2a",
        "surface-container": "#e6eeff",
        "surface-bright": "#f9f9ff",
        "on-primary-container": "#80bea6",
        "outline": "#707974",
        "error-container": "#ffdad6",
        "inverse-surface": "#273140",
        "primary-container": "#064e3b",
        "on-primary-fixed": "#002117",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "secondary": "#735c00",
        "surface-tint": "#2b6954"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "gutter": "24px",
        "container-max": "1280px",
        "margin-mobile": "16px",
        "unit": "8px",
        "margin-desktop": "40px"
      },
      fontFamily: {
        "label-md": [
          "Plus Jakarta Sans"
        ],
        "body-md": [
          "Plus Jakarta Sans"
        ],
        "quran-text": [
          "Noto Serif"
        ],
        "headline-lg": [
          "Libre Caslon Text"
        ],
        "headline-md": [
          "Libre Caslon Text"
        ],
        "headline-xl": [
          "Libre Caslon Text"
        ],
        "body-lg": [
          "Plus Jakarta Sans"
        ],
        "headline-lg-mobile": [
          "Libre Caslon Text"
        ]
      },
      fontSize: {
        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.05em",
            fontWeight: "600"
          }
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400"
          }
        ],
        "quran-text": [
          "28px",
          {
            lineHeight: "48px",
            fontWeight: "400"
          }
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "600"
          }
        ],
        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600"
          }
        ],
        "headline-xl": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "700"
          }
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400"
          }
        ],
        "headline-lg-mobile": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600"
          }
        ]
      }
    }
  }
}
