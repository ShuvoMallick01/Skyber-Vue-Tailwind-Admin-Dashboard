<!-- SCRIPT -->
<script setup lang="ts">
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  variant: { type: String },
  color: { type: String },
  shape: { type: String },
  size: { type: String },

  title: String,
  shadow: String,
});

// Button Classes
const classNames = cva(["leading-normal transition-300 "], {
  variants: {
    variant: {
      outline: "border",
      filled: "bg-black",
    },
    shape: {
      rounded: "rounded-lg",
      pill: "rounded-full",
    },

    size: {
      medium: "p-[6px]",
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      color: "gray",
      class: "border-gray300",
    },
    {
      variant: "filled",
      color: "gray",
      class: "bg-gray200",
    },
  ],

  defaultVariants: {
    variant: "outline",
    color: "gray",
    shape: "rounded",
    size: "medium",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <!-- <div
    v-bind="$attrs"
    :class="cn(classNames({ variant, color, size, shape }))"
  ></div> -->

  <div class="flex" :class="cn(classNames({ variant, color, size, shape }))">
    <slot></slot>
  </div>
</template>
