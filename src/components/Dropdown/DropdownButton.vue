<!-- SCRIPT -->
<script setup lang="ts">
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";
import { ref } from "vue";

const props = defineProps({
  dropdownList: { type: Array, default: [] },
  variant: { type: String },
  color: { type: String },
});
const showDropdown = ref(false);
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Button Class
const buttonVariants = cva(
  [
    " py-[10px] px-[24px] leading-normal rounded text-sm font-semibold transition-300 ",
  ],
  {
    variants: {
      variant: {
        filled:
          "text-white  bg-black text-center focus:outline-none outline-none",
        outline:
          "text-black bg-transparent   text-center border outline-none focus:outline-none border-black dark:text-white dark:border-white",
        translucent:
          " text-gray-400  bg-black/10 text-center focus:outline-none outline-none",
      },

      color: {
        primary: "text-white bg-primary hover:bg-primary-darker ",
        secondary: "text-text-400 bg-secondary hover:bg-secondary-darker",
        info: "bg-info hover:bg-info-darker",
        success: "bg-success hover:bg-success-darker",
        warning: "bg-warning hover:bg-warning-darker",
        error: "bg-error hover:bg-error-darker",
      },
    },

    compoundVariants: [
      {
        variant: "outline",
        color: "primary",
        class:
          "text-primary bg-transparent border-primary outline-none hover:bg-gray-100 dark:border-primary dark:text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        class:
          "text-text-400 bg-transparent border-text-400 outline-none hover:text-white hover:bg-text-400 dark:hover:bg-white dark:hover:text-black",
      },
      {
        variant: "outline",
        color: "info",
        class:
          "text-info bg-transparent border-info outline-none hover:text-white hover:bg-info dark:border-info dark:text-info dark:hover:text-white dark:hover:border-info",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "text-success bg-transparent border-success outline-none hover:text-white hover:bg-success dark:border-success dark:text-success dark:hover:text-white dark:hover:border-success",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "text-warning bg-transparent border-warning outline-none hover:text-white hover:bg-warning dark:border-warning dark:text-warning dark:hover:text-white dark:hover:border-warning",
      },
      {
        variant: "outline",
        color: "error",
        class:
          "text-error bg-transparent border-error outline-none hover:text-white hover:bg-error dark:border-error dark:text-error dark:hover:text-white dark:hover:border-error",
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
      variant: "outline",
      color: "primary",
    },
  }
);
</script>

<!-- TEMPLATE -->
<template>
  <button
    id="dropdownHoverButton"
    @click="toggleDropdown"
    :class="cn(buttonVariants({ variant, color }))"
    type="button"
  >
    <slot> </slot>
  </button>
</template>
