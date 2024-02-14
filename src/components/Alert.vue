<!-- SCRIPT -->
<script setup>
import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";

const props = defineProps({
  title: String,

  variant: { type: String },
  color: { type: String },
  shape: { type: String },
  size: { type: String },

  shadow: String,
});

// Button Classes
const button = cva(["leading-normal transition-300 group px-6 py-4 w-1/2 "], {
  variants: {
    variant: {
      normal: "text-black bg-black/15 text-start border border-black",
      filled: "text-white bg-black",
      outline: "text-black bg-white border-black outline-none",
    },
    color: {
      primary:
        "bg-primary/15 text-primary font-semibold text-sm border-.6 border-primary ",
      info: "bg-info/15 text-info font-semibold text-sm border-.6 border-info",
      success:
        "bg-success/15 text-success font-semibold text-sm border-.6 border-success",
      warning:
        "bg-warning/15 text-warning font-semibold text-sm border-.6 border-warning",
      error:
        "bg-error/15 text-error font-semibold text-sm border-.6 border-error",
    },
    shape: {
      rounded: "shape-rounded-btn",
      pill: "rounded-full",
    },
    size: {
      medium: "px-4 py-3",
    },
  },

  compoundVariants: [
    {
      variant: "filled",
      color: "primary",
      class: "text-white bg-primary",
    },
    {
      variant: "filled",
      color: "info",
      class: "text-white bg-info",
    },
    {
      variant: "filled",
      color: "success",
      class: "text-white bg-success",
    },
    {
      variant: "filled",
      color: "warning",
      class: "text-white bg-warning",
    },
    {
      variant: "filled",
      color: "error",
      class: "text-white bg-error",
    },

    // Translucent Buttons
    {
      variant: "outline",
      color: "primary",
      class: "text-primary bg-white border-primary outline-none ",
    },
    {
      variant: "outline",
      color: "info",
      class: "text-info bg-white border-info outline-none",
    },
    {
      variant: "outline",
      color: "success",
      class: "text-success bg-white border-success outline-none",
    },
    {
      variant: "outline",
      color: "warning",
      class: "text-warning bg-white border-warning outline-none",
    },
    {
      variant: "outline",
      color: "error",
      class: "text-error bg-white border-error outline-none",
    },
  ],

  defaultVariants: {
    variant: "normal",
    color: "primary",
    shape: "rounded",
    size: "medium",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <div v-bind="$attrs" :class="cn(button({ variant, color, shape, size }))">
    <div class="flex gap-3 text-start items-center justify-between">
      <div class="flex gap-2 items-center">
        <slot name="icon"> </slot>
        <p class="leading-none">{{ title }}</p>
      </div>

      <!-- Action -->
      <slot name="action"> </slot>
    </div>
    <slot name="description"> </slot>
  </div>
</template>
