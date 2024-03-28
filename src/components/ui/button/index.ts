import { type VariantProps, cva } from "class-variance-authority";
export { default as Button } from "./Button.vue";
export { default as ButtonActionDropdown } from "./ButtonActionDropdown.vue";
export { default as IconButton } from "./IconButton.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "text-white bg-black",
        outline:
          "text-black border border-black dark:text-white dark:border-white",
        translucent: "text-gray-400 bg-black/10 text-center ",
        link: "text-black",
        text: "text-black",
      },
      color: {
        primary:
          "text-white bg-primary border-transparent hover:bg-primary-darker",
        secondary:
          "text-text-400 bg-secondary border-transparent hover:bg-secondary-darker",
        info: "bg-info border-transparent hover:bg-info-darker",
        success: "bg-success border-transparent hover:bg-success-darker",
        warning: "bg-warning border-transparent hover:bg-warning-darker",
        error: "bg-error border-transparent hover:bg-error-darker",
      },
      size: {
        medium: "py-[15px] px-[20px]",
        small: "py-[5px] px-[20px]",
        xsmall: "py-[4px] px-[10px]",
        none: "py-[0px] px-[0px]",
      },
    },

    compoundVariants: [
      // Outline Buttons
      {
        variant: "outline",
        color: "primary",
        class:
          "text-primary bg-transparent border-primary outline-none hover:text-white hover:bg-primary dark:border-primary dark:text-primary dark:hover:text-white dark:hover:border-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        class:
          "text-text-400 bg-transparent border-text-400 outline-none hover:text-white hover:bg-text-400 dark:hover:bg-white dark:hover:text-black",
      },
      {
        variant: "outline",
        color: "info",
        class:
          "text-info bg-transparent border-info outline-none hover:text-white hover:bg-info dark:border-info dark:text-info dark:hover:text-white dark:hover:border-info",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "text-success bg-transparent border-success outline-none hover:text-white hover:bg-success dark:border-success dark:text-success dark:hover:text-white dark:hover:border-success",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "text-warning bg-transparent border-warning outline-none hover:text-white hover:bg-warning dark:border-warning dark:text-warning dark:hover:text-white dark:hover:border-warning",
      },
      {
        variant: "outline",
        color: "error",
        class:
          "text-error bg-transparent border-error outline-none hover:text-white hover:bg-error dark:border-error dark:text-error dark:hover:text-white dark:hover:border-error",
      },

      // Translucent Buttons
      {
        variant: "translucent",
        color: "primary",
        class:
          "text-primary bg-primary/15 border-transparent hover:text-primary-darker hover:bg-primary/40 dark:text-primary",
      },
      {
        variant: "translucent",
        color: "secondary",
        class:
          "text-slate-400 bg-secondary border-transparent hover:text-black hover:bg-text-400/20  dark:text-gray-500 dark:hover:bg-white dark:hover:text-gray-500",
      },
      {
        variant: "translucent",
        color: "info",
        class:
          "text-info bg-info/15 border-transparent hover:text-info-darker hover:bg-info/40 dark:hover:text-info",
      },
      {
        variant: "translucent",
        color: "success",
        class:
          "text-success bg-success/15 border-transparent hover:text-success-darker hover:bg-success/40 dark:hover:text-success",
      },
      {
        variant: "translucent",
        color: "warning",
        class:
          "text-warning bg-warning/15 border-transparent hover:text-warning-darker hover:bg-warning/40 dark:hover:text-warning",
      },
      {
        variant: "translucent",
        color: "error",
        class:
          "text-error bg-error/15 border-transparent hover:text-error-darker hover:bg-error/40 dark:hover:text-error",
      },

      // Links
      {
        variant: "link",
        color: "primary",
        class:
          "text-primary hover:text-primary-darker bg-transparent hover:bg-transparent",
      },
      {
        variant: "link",
        color: "secondary",
        class:
          "text-slate-400 hover:text-slate-600 bg-transparent hover:bg-transparent ",
      },

      {
        variant: "text",
        color: "primary",
        class: "text-primary bg-transparent hover:bg-transparent",
      },
      {
        variant: "text",
        color: "secondary",
        class: "text-muted bg-transparent hover:bg-transparent",
      },
    ],

    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "medium",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
