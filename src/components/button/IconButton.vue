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
    // Filled Buttons
    {
      variant: "filled",
      color: "primary",
      class: "filled-primary",
    },
    {
      variant: "filled",
      color: "secondary",
      class: "filled-secondary",
    },
    {
      variant: "filled",
      color: "info",
      class: "filled-info",
    },
    {
      variant: "filled",
      color: "success",
      class: "filled-success",
    },
    {
      variant: "filled",
      color: "warning",
      class: "filled-warning",
    },
    {
      variant: "filled",
      color: "error",
      class: "filled-error",
    },

    // Outline Buttons
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

<!-- STYLE -->
<style scoped>
.filled-primary {
  @apply text-white bg-primary hover:bg-primary-darker;
}
.filled-secondary {
  @apply text-text-400 bg-secondary hover:bg-secondary-darker;
}
.filled-info {
  @apply bg-info hover:bg-info-darker;
}
.filled-success {
  @apply bg-success hover:bg-success-darker;
}
.filled-warning {
  @apply bg-warning hover:bg-warning-darker;
}
.filled-error {
  @apply bg-error hover:bg-error-darker;
}

/* Outline Button Color */
.outline-primary {
  @apply text-primary bg-transparent border-primary outline-none hover:text-white hover:bg-primary dark:border-primary dark:text-primary dark:hover:text-white dark:hover:border-primary;
}
.outline-secondary {
  @apply text-text-400 bg-transparent border-text-400 outline-none hover:text-white hover:bg-text-400 dark:hover:bg-white dark:hover:text-black;
}
.outline-info {
  @apply text-info bg-transparent border-info outline-none hover:text-white hover:bg-info dark:border-info dark:text-info dark:hover:text-white dark:hover:border-info;
}
.outline-success {
  @apply text-success bg-transparent border-success outline-none hover:text-white hover:bg-success dark:border-success dark:text-success dark:hover:text-white dark:hover:border-success;
}
.outline-warning {
  @apply text-warning bg-transparent border-warning outline-none hover:text-white hover:bg-warning dark:border-warning dark:text-warning dark:hover:text-white dark:hover:border-warning;
}
.outline-error {
  @apply text-error bg-transparent border-error outline-none hover:text-white hover:bg-error dark:border-error dark:text-error dark:hover:text-white dark:hover:border-error;
}

/* Translucent Button Color */
.translucent-primary {
  @apply text-primary bg-primary/15 border-primary hover:text-primary-darker hover:bg-primary/40 dark:text-primary;
}
.translucent-secondary {
  @apply text-slate-400 bg-secondary border-text-400 hover:text-black hover:bg-text-400/20  dark:text-gray-500 dark:hover:bg-white dark:hover:text-gray-500;
}
.translucent-info {
  @apply text-info bg-info/15 border-info hover:text-info-darker hover:bg-info/40 dark:hover:text-info;
}
.translucent-success {
  @apply text-success bg-success/15 border-success hover:text-success-darker hover:bg-success/40 dark:hover:text-success;
}
.translucent-warning {
  @apply text-warning bg-warning/15 border-warning hover:text-warning-darker hover:bg-warning/40 dark:hover:text-warning;
}
.translucent-error {
  @apply text-error bg-error/15 border-error hover:text-error-darker hover:bg-error/40 dark:hover:text-error;
}
</style>
