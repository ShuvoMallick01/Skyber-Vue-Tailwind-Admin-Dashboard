<!-- SCRIPT -->
<script setup>
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  color: { type: String },
  shape: { type: String },
  size: { type: String },
  label: { type: String },

  labelName: String,
  shadow: String,
});

// Input Classes
const checkClasses = cva(["leading-normal transition-300 "], {
  variants: {
    variant: {
      filled: "bg-white border-2 border-black ",
      outline: "",
    },
    color: {
      primary:
        "bg-white border-2 border-gray-300 text-primary outline-none ring-0 focus:outline-none focus:ring-0 focus:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:outline-none dark:ring-0 dark:outline-none dark:focus:ring-0 dark:text-primary dark:focus:border-gray-500 dark:active:ring-0",
    },

    shape: {
      rounded: "rounded-md",
      circle: "rounded-full",
    },

    size: {
      medium: "h-[21px] w-[21px]",
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      color: "primary",
      class:
        "bg-white border-2 border-gray-300 text-primary outline-none ring-0 focus:outline-none focus:ring-0 focus:border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:outline-none dark:ring-0 dark:outline-none dark:focus:ring-0 dark:text-primary dark:focus:border-gray-500 dark:active:ring-0",
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
  <div class="inline-flex items-center">
    <input
      :class="cn(checkClasses({ color, size, shape }))"
      v-bind="$attrs"
      :required="required"
      type="checkbox"
    />
    <slot v-if="$slots.default"></slot>

    <label
      v-else
      :for="$attrs.id"
      class="ms-2 font-body-13sb text-muted-300 dark:text-white leading-0"
      >{{ labelName }}</label
    >
  </div>
</template>
