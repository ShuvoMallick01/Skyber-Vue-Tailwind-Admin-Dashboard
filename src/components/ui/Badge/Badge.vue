<script setup lang="ts">
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex  font-semibold items-center justify-center border text-xs  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        filled: "text-white bg-black leading-none  ",
        outline:
          "text-black border border-black dark:text-white dark:border-white",
        translucent: "text-gray-400 bg-black/10 text-center ",
      },

      color: {
        primary: "text-white border-transparent bg-primary",
        secondary: "text-text-400 border-transparent border-secondary ",
        info: "bg-info border-transparent",
        success: "bg-success border-transparent",
        warning: "bg-warning border-transparent",
        error: "bg-error border-transparent",
      },

      shape: {
        rounded: "rounded",
        circle: "rounded-full relative flex items-center justify-center",
      },

      size: {
        medium: "py-[6px] px-[8px]",
        small: "py-[4px] px-[8px]",
        xsmall: "h-[16px] w-[16px] text-[10px]",
        nxsmall: "h-[8px] w-[8px]",
      },
    },

    compoundVariants: [
      // Outline Buttons
      {
        variant: "outline",
        color: "primary",
        class:
          "text-primary bg-transparent border-primary outline-none dark:border-primary dark:text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        class:
          "text-text-400 bg-transparent border-text-400 outline-none  hover:bg-text-400 ",
      },
      {
        variant: "outline",
        color: "info",
        class:
          "text-info bg-transparent border-info outline-none  dark:border-info dark:text-info",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "text-success bg-transparent border-success outline-none  dark:border-success dark:text-success ",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "text-warning bg-transparent border-warning outline-none dark:border-warning dark:text-warning ",
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
          "text-primary bg-primary/15 border-transparent dark:text-primary",
      },
      {
        variant: "translucent",
        color: "secondary",
        class:
          "text-slate-400 bg-secondary border-transparent   dark:text-gray-500",
      },
      {
        variant: "translucent",
        color: "info",
        class: "text-info bg-info/15 border-transparent ",
      },
      {
        variant: "translucent",
        color: "success",
        class: "text-success bg-success/15 border-transparent ",
      },
      {
        variant: "translucent",
        color: "warning",
        class: "text-warning bg-warning/15 border-transparent ",
      },
      {
        variant: "translucent",
        color: "error",
        class: "text-error bg-error/15 border-transparent ",
      },
    ],

    defaultVariants: {
      variant: "filled",
      color: "primary",
      shape: "rounded",
      size: "medium",
    },
  }
);

interface BadgeVariantProps extends VariantProps<typeof badgeVariants> {}

interface Props {
  variant?: BadgeVariantProps["variant"];
  color?: BadgeVariantProps["color"];
  size?: BadgeVariantProps["size"];
  shape?: BadgeVariantProps["shape"];
}

defineProps<Props>();
</script>

<template>
  <div
    :class="
      cn(badgeVariants({ variant, color, shape, size }), $attrs.class ?? '')
    "
  >
    <slot />
  </div>
</template>
