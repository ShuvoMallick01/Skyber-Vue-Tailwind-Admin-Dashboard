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
const button = cva(["leading-normal transition-300 group px-6 py-4"], {
  variants: {
    variant: {
      normal: "text-white bg-black text-center focus:outline-none outline-none",
      action:
        "text-black text-center border outline-none focus:outline-none border-black dark:text-white dark:border-white",
      outline: "",
      filled: "",
    },
    color: {
      primary: "filled-primary",
      secondary: "filled-secondary",
      info: "filled-info",
      success: "filled-success",
      warning: "filled-warning",
      error: "filled-error",
    },
    shape: {
      rounded: "shape-rounded-btn",
      pill: "rounded-full",
    },
    size: {
      medium: "px-14 py-10",
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      color: "primary",
      class: "outline-primary",
    },
    {
      variant: "outline",
      color: "secondary",
      class: "outline-secondary",
    },
    {
      variant: "outline",
      color: "info",
      class: "outline-info",
    },
    {
      variant: "outline",
      color: "success",
      class: "outline-success",
    },
    {
      variant: "outline",
      color: "warning",
      class: "outline-warning",
    },
    {
      variant: "outline",
      color: "error",
      class: "outline-error",
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
    shape: "rounded",
    size: "large",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <div v-bind="$attrs" :class="cn(button({ variant, color, shape, size }))">
    <div class="flex gap-3 items-center justify-between">
      <div class="flex gap-3 items-center">
        <i class="icon-Dot"></i>
        <p>This is an primary alert — check it out!</p>
      </div>
      <i class="icon-Dot"></i>
    </div>
    <slot name="description">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta
        laboriosam odio quia inventore illo possimus deserunt, nam a accusamus
        est optio quam voluptatibus hic eveniet ad fugiat nisi numquam.
      </p>
    </slot>
  </div>
</template>
