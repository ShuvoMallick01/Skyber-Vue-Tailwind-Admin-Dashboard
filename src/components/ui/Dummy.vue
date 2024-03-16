<!-- SCRIPT -->
<script setup>
import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";

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
      filled: "",
      outline: "",
    },

    color: {
      primary: "",
    },

    shape: {
      rounded: "",
      pill: "",
    },

    size: {
      medium: "",
      small: "",
    },
  },

  compoundVariants: [
    {
      variant: "",
      color: "",
      class: "",
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

<!-- === TEMPLATE ===  -->
<template>
  <div
    v-bind="$attrs"
    :class="cn(classNames({ variant, color, size, shape }))"
  ></div>
</template>
