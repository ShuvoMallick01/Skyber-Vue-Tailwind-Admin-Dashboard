import { type VariantProps, cva } from "class-variance-authority";

export { default as Dropdown } from "./Dropdown.vue";
export { default as DropdownButton } from "./DropdownButton.vue";
export { default as DropdownList } from "./DropdownList.vue";

// Button Varaiants
export const buttonVariants = cva(
  "leading-normal py-[10px] px-[24px] rounded text-sm font-semibold transition-300 ",
  {
    variants: {
      variant: {
        filled:
          "text-white  bg-black text-center focus:outline-none outline-none",
        outline:
          "text-black bg-transparent   text-center border outline-none focus:outline-none border-black dark:text-white dark:border-white",
        translucent:
          " text-gray-400  bg-black/10 text-center focus:outline-none outline-none",
      },

      color: {
        primary: "text-white bg-primary hover:bg-primary-darker ",
        secondary: "text-text-400 bg-secondary hover:bg-secondary-darker",
        info: "bg-info hover:bg-info-darker",
        success: "bg-success hover:bg-success-darker",
        warning: "bg-warning hover:bg-warning-darker",
        error: "bg-error hover:bg-error-darker",
      },
    },

    compoundVariants: [
      {
        variant: "outline",
        color: "primary",
        class:
          "text-primary bg-transparent border-primary outline-none hover:bg-gray-100 dark:border-primary dark:text-primary",
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
        class: "translucent-primary",
      },
      {
        variant: "translucent",
        color: "secondary",
        class: "translucent-secondary",
      },
      {
        variant: "translucent",
        color: "info",
        class: "translucent-info",
      },
      {
        variant: "translucent",
        color: "success",
        class: "translucent-success",
      },
      {
        variant: "translucent",
        color: "warning",
        class: "translucent-warning",
      },
      {
        variant: "translucent",
        color: "error",
        class: "translucent-error",
      },
    ],

    defaultVariants: {
      variant: "outline",
      color: "primary",
    },
  }
);

// Option Variants
export const optionVariants = cva(
  ["text-xs px-3 py-2 leading-normal transition-300 block"],
  {
    variants: {
      variant: {
        filled:
          "hover:bg-black text-white hover:text-white dark:hover:bg-white dark:hover:text-black",
        outline:
          "text-black bg-white outline-none  border-muted-300  focus:outline-none dark:text-white dark:border-white",
        translucent:
          " text-gray-400  bg-black/10  focus:outline-none outline-none",
      },

      color: {
        primary:
          "bg-primary text-white hover:bg-primary-darker dark:hover:bg-gray-600 dark:hover:text-white",
        secondary:
          "bg-secondary  text-text-400 bg-secondary hover:bg-secondary-darker",
        info: "bg-info  hover:bg-info-darker",
        success: "bg-success  hover:bg-success-darker",
        warning: "bg-warning  hover:bg-warning-darker",
        error: "bg-error hover:bg-error-darker",
      },
    },

    compoundVariants: [
      {
        variant: "outline",
        color: "primary",
        class:
          "text-muted-300 hover:text-primary bg-transparent border-primary outline-none hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-primary dark:text-white dark:hover:text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        class:
          "text-text-400 bg-transparent border-text-400 outline-none hover:text-white hover:bg-text-400 dark:hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black",
      },
      {
        variant: "outline",
        color: "info",
        class:
          "text-muted-300 hover:text-info bg-transparent border-info outline-none hover:bg-gray-100 dark:hover:bg-gray-100 dark:border-info dark:text-white dark:hover:text-info",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "text-muted-300 hover:text-success bg-transparent border-success outline-none hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-success dark:text-white dark:hover:text-success",
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
        class: "translucent-primary",
      },
      {
        variant: "translucent",
        color: "secondary",
        class: "translucent-secondary",
      },
      {
        variant: "translucent",
        color: "info",
        class: "translucent-info",
      },
      {
        variant: "translucent",
        color: "success",
        class: "translucent-success",
      },
      {
        variant: "translucent",
        color: "warning",
        class: "translucent-warning",
      },
      {
        variant: "translucent",
        color: "error",
        class: "translucent-error",
      },
    ],

    defaultVariants: {
      variant: "filled",
      color: "primary",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type OptionVariants = VariantProps<typeof optionVariants>;
