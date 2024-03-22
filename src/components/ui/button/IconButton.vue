<script setup lang="ts">
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ref } from "vue";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-base font-semibold ring-0 rounded transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "text-white border border-black bg-black",
        outline:
          "text-black border border-black dark:text-white dark:border-white",
        translucent: "text-gray-400 bg-black/10 text-center ",
        icon: "fill-dark",
      },
      color: {
        primary: "text-white bg-primary border-primary hover:bg-primary-darker",
        secondary:
          "text-text-400 bg-secondary border-secondary hover:bg-secondary-darker hover:border-secondary-darker",
        info: "bg-info border-info hover:bg-info-darker hover:border-info-darker ",
        success:
          "bg-success border-success hover:bg-success-darker hover:border-success-darker",
        warning:
          "bg-warning border-warning hover:bg-warning-darker hover:border-warning-darker",
        error:
          "bg-error border-error hover:bg-error-darker hover:border-error-darker",
      },
      size: {
        large: "h-[40px] w-[40px]",
        medium: "px-2 py-2",
        small: "h-[24px] w-[24px]",
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
          "text-primary fill-primary bg-primary/15 border-primary/15 hover:text-primary-darker hover:bg-primary/40 dark:text-primary",
      },
      {
        variant: "translucent",
        color: "secondary",
        class:
          "text-slate-400 fill-slate-400 bg-secondary border-text-400 hover:text-black hover:bg-text-400/20  dark:text-gray-500 dark:hover:bg-white dark:hover:text-gray-500",
      },
      {
        variant: "translucent",
        color: "info",
        class:
          "text-info fill-info bg-info/15  border-info hover:text-info-darker hover:bg-info/40 dark:hover:text-info",
      },
      {
        variant: "translucent",
        color: "success",
        class:
          "text-success fill-success bg-success/15 border-success hover:text-success-darker hover:bg-success/40 dark:hover:text-success",
      },
      {
        variant: "translucent",
        color: "warning",
        class:
          "text-warning fill-warning bg-warning/15 border-warning hover:text-warning-darker hover:bg-warning/40 dark:hover:text-warning",
      },
      {
        variant: "translucent",
        color: "error",
        class:
          "text-error fill-error bg-error/15 border-error hover:text-error-darker hover:bg-error/40 dark:hover:text-error",
      },

      // Icon
      {
        variant: "icon",
        color: "primary",
        class: "text-primary bg-transparent hover:bg-transparent",
      },
      {
        variant: "icon",
        color: "secondary",
        class:
          "!fill-muted hover:!fill-main bg-transparent hover:bg-transparent",
      },
    ],

    defaultVariants: {
      variant: "filled",
      size: "medium",
      color: "primary",
    },
  }
);

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
  color?: NonNullable<Parameters<typeof buttonVariants>[0]>["color"];
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
  as?: string;
}

// eslint-disable-next-line vue/define-macros-order
withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, color, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
