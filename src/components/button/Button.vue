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

  href: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  shadow: String,
});

const buttonComponent = ref(props.href ? "router-link" : "button");
const linkAttr = ref(props.href ? "to" : "");

// Button Classes
const button = cva(["leading-normal transition-300"], {
  variants: {
    variant: {
      filled: "text-white bg-black text-center focus:outline-none outline-none",
      outline:
        "text-black text-center border outline-none focus:outline-none border-black dark:text-white dark:border-white",
      translucent:
        "text-gray-400 bg-black/10 text-center focus:outline-none outline-none",
    },
    color: {
      primary: "bg-primary hover:bg-primary-darker",
      secondary: "text-400 bg-secondary hover:bg-secondary-darker",
      info: "bg-info hover:bg-info-darker",
      success: "bg-success hover:bg-success-darker",
      warning: "bg-warning hover:bg-warning-darker",
      error: "bg-error hover:bg-error-darker",
    },
    shape: {
      rounded: "shape-rounded-btn",
      pill: "rounded-full",
    },
    size: {
      large: "btn-lg",
      medium: "btn-md",
      small: "btn-sm",
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      color: "primary",
      class:
        "text-primary bg-transparent border-primary hover:text-white hover:bg-primary",
    },
    {
      variant: "outline",
      color: "secondary",
      class:
        "text-400 bg-transparent border-text-400 hover:text-white hover:bg-text-400",
    },
    {
      variant: "outline",
      color: "info",
      class:
        "text-info bg-transparent border-info hover:text-white hover:bg-info",
    },
    {
      variant: "outline",
      color: "success",
      class:
        "text-success bg-transparent border-success hover:text-white hover:bg-success",
    },
    {
      variant: "outline",
      color: "warning",
      class:
        "text-warning bg-transparent border-warning hover:text-white hover:bg-warning",
    },
    {
      variant: "outline",
      color: "error",
      class:
        "text-error bg-transparent border-error hover:text-white hover:bg-error",
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

<!-- TEMPLATE -->
<template>
  <component
    :is="buttonComponent"
    :[linkAttr]="href"
    :disabled="buttonComponent === 'button' && disabled"
    v-bind="$attrs"
    :class="cn(button({ variant, color, shape, size }))"
  >
    <slot name="prefix"></slot>
    {{ title }}
    <slot name="suffix"></slot>
  </component>
</template>
