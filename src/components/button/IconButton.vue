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
const button = cva(["leading-normal transition-300 flex items-center group"], {
  variants: {
    variant: {
      filled: "text-white bg-black text-center focus:outline-none outline-none",
      outline:
        "text-black text-center border outline-none focus:outline-none border-black dark:text-white dark:border-white",
      translucent:
        "text-gray-400 bg-black/10 text-center focus:outline-none outline-none",
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
      circle: "rounded-full",
    },
    size: {
      large: "icon-btn-lg",
      medium: "icon-btn-md",
      small: "icon-btn-sm",
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
    size: "medium",
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
    <slot name="icon"></slot>
  </component>
</template>
