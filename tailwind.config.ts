import type {Config} from "tailwindcss";

import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // daisyUI documentation: https://daisyui.com/docs
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          primary: "oklch(64.38% 0.1276 81.58)",
          secondary: "oklch(82.58% 0.1605 95.45)",
          "secondary-content": "oklch(98.71% 0.0106 342.55)",
          accent: "oklch(76.76% 0.184 183.61)",
          neutral: "#2B3440",
          "neutral-content": "#D7DDE4",
          "base-100": "oklch(100% 0 0)",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1f2937",
        },
      },
      {
        dark: {
          "color-scheme": "dark",
          primary: "oklch(64.38% 0.1276 81.58)",
          secondary: "oklch(82.58% 0.1605 95.45)",
          accent: "oklch(74.51% 0.167 183.61)",
          neutral: "#2a323c",
          "neutral-content": "#A6ADBB",
          "base-100": "#1d232a",
          "base-200": "#191e24",
          "base-300": "#15191e",
          "base-content": "#A6ADBB",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {
      borderRadius: {
        "0.5rem": "0.5rem",
        "0.75rem": "0.75rem",
        "1rem": "1rem",
        "1.5rem": "1.5rem",
        "2rem": "2rem",
        "2.5rem": "2.5rem",
        "22.5rem": "22.5rem",
      },
      lineHeight: {
        "0.75rem": "0.75rem",
        "1rem": "1rem",
        "1.125rem": "1.125rem",
        "1.25rem": "1.25rem",
        "1.5rem": "1.5rem",
        "1.75rem": "1.75rem",
        "2rem": "2rem",
        "2.25rem": "2.25rem",
        "2.375rem": "2.375rem",
        "2.5rem": "2.5rem",
        "3rem": "3rem",
        "3.5rem": "3.5rem",
        "3.625rem": "3.625rem",
      },
      fontSize: {
        default: "1rem",
        56: "4rem",
        48: "3rem",
        44: "2.75",
        40: "2.5rem",
        36: "2.25rem",
        32: "2rem",
        28: "1.75rem",
        24: "1.5rem",
        20: "1.25rem",
        18: "1.125rem",
        16: "1rem",
        14: "0.875rem",
        13: "0.813rem",
        12: "0.75rem",
        11: "0.688rem",
      },
      spacing: {
        "0.25rem": "0.25rem",
        "0.5rem": "0.5rem",
        "0.75rem": "0.75rem",
        "1rem": "1rem",
        "1.25rem": "1.25rem",
        "1.5rem": "1.5rem",
        "1.75rem": "1.75rem",
        "2rem": "2rem",
        "2.25rem": "2.25rem",
        "2.5rem": "2.5rem",
        "2.75rem": "2.75rem",
        "3rem": "3rem",
        "3.25rem": "3.25rem",
        "3.5rem": "3.5rem",
        "3.75rem": "3.75rem",
        "4rem": "4rem",
        "4.25rem": "4.25rem",
        "4.5rem": "4.5rem",
        "4.75rem": "4.75rem",
        "5rem": "5rem",
        "5.25rem": "5.25rem",
        "5.5rem": "5.5rem",
        "5.75rem": "5.75rem",
        "6rem": "6rem",
        "6.25rem": "6.25rem",
        "6.5rem": "6.5rem",
        "6.75rem": "6.75rem",
        "7rem": "7rem",
        "7.25rem": "7.25rem",
        "7.5rem": "7.5rem",
        "7.75rem": "7.75rem",
        "8rem": "8rem",
        "8.25rem": "8.25rem",
        "8.5rem": "8.5rem",
        "8.75rem": "8.75rem",
        "9rem": "9rem",
        "9.25rem": "9.25rem",
        "9.5rem": "9.5rem",
        "9.75rem": "9.75rem",
        "10rem": "10rem",
        "sidebar-width": "16rem",
        "sidebar-width-sm": "4.7rem",
        "header-height": "5rem",
        "footer-height": "4rem",
        "cell-height": "3.5rem",
        "content-margin": "1.5rem",
        content: "2rem",
        "content-min-width": "calc(100vw - 3rem)",
        "content-min-height": "calc(100vh - 3rem)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({addVariant}) {
      addVariant("peer-nested", ":merge(.peer-nested):checked ~ * &");
    }),

    plugin(function ({addUtilities, theme}) {
      const fontSize = theme("fontSize");

      if (!fontSize) return;

      const fontSizeUtilities = Object.entries(fontSize).reduce((acc, [key, value]) => {
        // @ts-ignore
        acc[`.font-${key}`] = {fontSize: value};
        return acc;
      }, {});

      addUtilities(fontSizeUtilities);
    }),
  ],
};
export default config;
