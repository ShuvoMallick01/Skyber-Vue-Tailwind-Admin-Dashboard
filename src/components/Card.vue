<!-- SCRIPT -->
<script setup>
import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";

const props = defineProps({
  title: String,
  variant: { type: String },
  shape: { type: String },
  shadow: String,
});

// Button Classes
const button = cva(["leading-normal transition-300 "], {
  variants: {
    variant: {},
  },

  shape: {
    rounded: "",
  },

  compoundVariants: [],

  defaultVariants: {
    shape: "rounded",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <div v-bind="$attrs" :class="cn(button({ variant, shape }))">
    <slot name="top-image"></slot>
    <slot name="body"> </slot>
    <slot name="footer"></slot>
    <slot name="bottom-image"></slot>
  </div>
</template>
