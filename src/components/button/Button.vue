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
        "text-primary bg-transparent border-primary hover:text-white hover:bg-primary dark:border-primary dark:text-primary dark:hover:text-white dark:hover:border-primary",
    },
    {
      variant: "outline",
      color: "secondary",
      class:
        "text-400 bg-transparent border-text-400 hover:text-white hover:bg-text-400 dark:hover:bg-white dark:hover:text-black",
    },
    {
      variant: "outline",
      color: "info",
      class:
        "text-info bg-transparent border-info hover:text-white hover:bg-info dark:border-info dark:text-info dark:hover:text-white dark:hover:border-info",
    },
    {
      variant: "outline",
      color: "success",
      class:
        "text-success bg-transparent border-success hover:text-white hover:bg-success dark:border-success dark:text-success dark:hover:text-white dark:hover:border-success",
    },
    {
      variant: "outline",
      color: "warning",
      class:
        "text-warning bg-transparent border-warning hover:text-white hover:bg-warning dark:border-warning dark:text-warning dark:hover:text-white dark:hover:border-warning",
    },
    {
      variant: "outline",
      color: "error",
      class:
        "text-error bg-transparent border-error hover:text-white hover:bg-error dark:border-error dark:text-error dark:hover:text-white dark:hover:border-error",
    },

    {
      variant: "translucent",
      color: "primary",
      class:
        "text-primary bg-primary/15 border-primary hover:text-primary-darker hover:bg-primary/40 dark:text-primary",
    },
    {
      variant: "translucent",
      color: "secondary",
      class:
        "text-slate-400 bg-secondary border-text-400 hover:text-black hover:bg-text-400/20  dark:text-gray-500 dark:hover:bg-white dark:hover:text-gray-500",
    },
    {
      variant: "translucent",
      color: "info",
      class:
        "text-info bg-info/15 border-info hover:text-info-darker hover:bg-info/40 dark:hover:text-info",
    },
    {
      variant: "translucent",
      color: "success",
      class:
        "text-success bg-success/15 border-success hover:text-success-darker hover:bg-success/40 dark:hover:text-success",
    },
    {
      variant: "translucent",
      color: "warning",
      class:
        "text-warning bg-warning/15 border-warning hover:text-warning-darker hover:bg-warning/40 dark:hover:text-warning",
    },
    {
      variant: "translucent",
      color: "error",
      class:
        "text-error bg-error/15 border-error hover:text-error-darker hover:bg-error/40 dark:hover:text-error",
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
