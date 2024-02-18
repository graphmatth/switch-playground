import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      fonts: {
        Inter: { value: "Inter, sans-serif" },
        Novela: { value: "Novela, serif" },
      },
    },
    extend: {
      breakpoints: {
        bp1: "768px",
      },
    },
  },
  // The output directory for your css system
  outdir: "styled-system",
});
