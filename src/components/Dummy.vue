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
const classNames = cva(["leading-normal transition-300 "], {
  variants: {
    variant: {
      primary: "bg-gray-200",
    },
  },

  compoundVariants: [],

  defaultVariants: {
    variant: "primary",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <div v-bind="$attrs" :class="cn(classNames({ variant }))"></div>
</template>
