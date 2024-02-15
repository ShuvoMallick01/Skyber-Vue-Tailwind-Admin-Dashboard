<!-- SCRIPT -->
<script setup>
import { cn } from "../../utils/cn";
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
const button = cva(["absolute top-0 right-0 "], {
  variants: {
    variant: {
      "with-icon-content": " mt-[-10px] mr-[-10px]",
      "without-icon-content": "mt-[-4px] mr-[-4px]",
    },
  },

  compoundVariants: [],

  defaultVariants: {
    variant: "with-icon-content",
  },
});
</script>

<!-- TEMPLATE -->
<template>
  <div class="relative">
    <slot name="button"></slot>
    <div :class="cn(button({ variant }))">
      <slot name="icon"></slot>
    </div>
  </div>
</template>
