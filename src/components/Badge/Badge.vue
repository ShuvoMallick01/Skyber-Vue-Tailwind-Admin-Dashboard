<!-- SCRIPT -->
<script setup>
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

const props = defineProps({
  title: String,

  variant: { type: String },
  color: { type: String },
  shape: { type: String },
  size: { type: String },

  shadow: String,
});

// Button Classes
const button = cva(["leading-normal transition-300 flex items-center group"], {
  variants: {
    variant: {
      filled:
        "text-white font-semibold bg-black text-center focus:outline-none outline-none",
      outline:
        "text-black font-semibold text-center border outline-none focus:outline-none border-black dark:text-white dark:border-white",
      translucent:
        "font-semibold text-gray-400  bg-black/10 text-center focus:outline-none outline-none",
    },

    color: {
      primary: "text-white bg-primary ",
      secondary: "text-text-400 bg-secondary ",
      info: "bg-info ",
      success: "bg-success ",
      warning: "bg-warning ",
      error: "bg-error ",
    },

    shape: {
      rounded: "shape-rounded-btn",
      pill: "rounded-full",
    },

    size: {
      medium: "badge-md",
      small: `${props.title ? "badge-sm" : "badge-sm-withouttext"}`,
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      color: "primary",
      class:
        "text-primary bg-transparent border-primary outline-none dark:border-primary dark:text-primary ",
    },
    {
      variant: "outline",
      color: "secondary",
      class: "text-text-400 bg-transparent border-text-400 outline-none ",
    },
    {
      variant: "outline",
      color: "info",
      class:
        "text-info bg-transparent border-info outline-none  dark:border-info dark:text-info ",
    },
    {
      variant: "outline",
      color: "success",
      class:
        "text-success bg-transparent border-success outline-none dark:border-success dark:text-success",
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
        "text-error bg-transparent border-error outline-none dark:border-error dark:text-error ",
    },

    // Translucent Buttons
    {
      variant: "translucent",
      color: "primary",
      class: "text-primary bg-primary/15 border-primary dark:text-primary",
    },
    {
      variant: "translucent",
      color: "secondary",
      class: "text-slate-400 bg-secondary border-text-400  dark:text-gray-500",
    },
    {
      variant: "translucent",
      color: "info",
      class: "text-info bg-info/15 border-info ",
    },
    {
      variant: "translucent",
      color: "success",
      class: "text-success bg-success/15 border-success ",
    },
    {
      variant: "translucent",
      color: "warning",
      class: "text-warning bg-warning/15 border-warning  ",
    },
    {
      variant: "translucent",
      color: "error",
      class: "text-error bg-error/15 border-error ",
    },
  ],

  defaultVariants: {
    variant: "filled",
    color: "primary",
    shape: "rounded",
    size: "medium",
  },
});
</script>

<!-- TEMPLATE -->
<template>
  <span v-bind="$attrs" :class="cn(button({ variant, color, shape, size }))">
    <slot name="prefix"></slot>
    {{ title }}
    <slot name="suffix"></slot>
  </span>
</template>
