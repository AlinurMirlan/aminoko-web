const outlineBackground = "bg-background border border-outline/30";

const colorVariants = {
  solid: {
    primary: {
      background: "bg-primary-container",
      text: "text-on-primary-container",
      fill: "fill-on-primary-container",
    },
    secondary: {
      background: "bg-secondary-container",
      text: "text-on-secondary-container",
      fill: "fill-on-secondary-container",
    },
    tertiary: {
      background: "bg-tertiary-container",
      text: "text-on-tertiary-container",
      fill: "fill-on-tertiary-container",
    },
    error: {
      background: "bg-error-container",
      text: "text-on-error-container",
      fill: "fill-on-error-container",
    },
  },
  outline: {
    primary: {
      background: outlineBackground,
      text: "text-primary",
      fill: "fill-primary",
    },
    secondary: {
      background: outlineBackground,
      text: "text-secondary",
      fill: "fill-secondary",
    },
    tertiary: {
      background: outlineBackground,
      text: "text-tertiary",
      fill: "fill-tertiary",
    },
    error: {
      background: outlineBackground,
      text: "text-error",
      fill: "fill-error",
    },
  },
};

const buttonFlatColorVariants = {
  primary: {
    inactive: {
      text: "text-primary",
      fill: "fill-primary",
      bg: "bg-none",
    },
    active: {
      text: "text-on-primary",
      fill: "fill-on-primary",
      bg: "bg-primary",
    },
  },
  secondary: {
    inactive: {
      text: "text-secondary",
      fill: "fill-secondary",
      bg: "bg-none",
    },
    active: {
      text: "text-on-secondary",
      fill: "fill-on-secondary",
      bg: "bg-secondary",
    },
  },
  tertiary: {
    inactive: {
      text: "text-tertiary",
      fill: "fill-tertiary",
      bg: "bg-none",
    },
    active: {
      text: "text-on-tertiary",
      fill: "fill-on-tertiary",
      bg: "bg-tertiary",
    },
  },
};

const defaultButtonColorVariant = "secondary";

export { colorVariants, buttonFlatColorVariants, defaultButtonColorVariant };
