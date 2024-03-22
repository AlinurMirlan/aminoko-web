/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "rgb(var(--color-logo) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        outline: "rgb(var(--color-outline) / <alpha-value>)",
        "primary-container":
          "rgb(var(--color-primary-container) / <alpha-value>)",
        "secondary-container":
          "rgb(var(--color-secondary-container) / <alpha-value>)",
        "tertiary-container":
          "rgb(var(--color-tertiary-container) / <alpha-value>)",
        "error-container": "rgb(var(--color-error-container) / <alpha-value>)",
        "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
        "on-error": "rgb(var(--color-on-error) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-background) / <alpha-value>)",
        "on-primary-container":
          "rgb(var(--color-on-primary-container) / <alpha-value>)",
        "on-secondary-container":
          "rgb(var(--color-on-secondary-container) / <alpha-value>)",
        "on-tertiary-container":
          "rgb(var(--color-on-tertiary-container) / <alpha-value>)",
        "on-error-container":
          "rgb(var(--color-on-error-container) / <alpha-value>)",
        "on-surface-variant":
          "rgb(var(--color-on-surface-variant) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
