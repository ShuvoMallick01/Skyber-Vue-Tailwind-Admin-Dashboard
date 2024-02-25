<!-- SCRIPT -->
<script setup>
import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";

const props = defineProps({
  title: String,
  tabList: { type: Array, default: [] },
  variant: { type: String },
  color: { type: String },
  shape: { type: String },
  size: { type: String },
  shadow: String,
});

// Button Classes
const classNames = cva(["leading-normal transition-300 inline-block"], {
  variants: {
    variant: {
      normal:
        "text-muted-300  border-b-2 border-b-transparent hover:border-b hover:border-b-2 hover:border-b-gray-500 dark:text-white dark:border-b-transparent dark:hover:border-b-white",
      button:
        "text-muted-300 border-transparent hover:bg-dark/15 hover:text-black dark:text-white dark:hover:text-primary dark:hover:bg-dark/15",
    },

    color: {
      primary:
        "text-muted-300  hover:text-primary border-b-2  border-b-transparent hover:border-b-2  hover:border-b-primary dark:text-white dark:hover:text-primary dark:border-b-transparent dark:hover:border-b-primary",
      info: "text-muted-300  hover:text-info border-b-2  border-b-transparent hover:border-b-2  hover:border-b-info dark:text-white dark:hover:text-info dark:border-b-transparent dark:hover:border-b-info",
      success:
        "text-muted-300  hover:text-primary border-b-2  border-b-transparent hover:border-b-2  hover:border-b-primary dark:text-white dark:hover:text-primary dark:border-b-transparent dark:hover:border-b-primary",
      warning:
        "text-muted-300  hover:text-primary border-b-2  border-b-transparent hover:border-b-2  hover:border-b-primary dark:text-white dark:hover:text-primary dark:border-b-transparent dark:hover:border-b-primary",
      error:
        "text-muted-300  hover:text-primary border-b-2  border-b-transparent hover:border-b-2  hover:border-b-primary dark:text-white dark:hover:text-primary dark:border-b-transparent dark:hover:border-b-primary",
    },

    shape: {
      rounded: "rounded-t-lg",
      pill: "rounded-t-full",
    },

    size: {
      "medium-normal": "py-3 text-sm font-medium text-muted-300 ",
      "medium-button": "py-3 px-3 text-sm font-medium text-muted-300 ",
    },
  },

  compoundVariants: [
    {
      variant: "button",
      color: "primary",
      class:
        "text-muted-300 border-b-transparent hover:bg-primary/15 hover:text-primary dark:text-white dark:hover:text-primary dark:hover:bg-primary/15 ",
    },
  ],

  defaultVariants: {
    variant: "normal",
    color: "primary",
    shape: "rounded",
    size: "medium-normal",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <ul
    class="inline-flex flex-wrap text-center border-b border-b-gray-200 dark:border-gray-700"
    :class="props.variant === 'button' ? 'gap-5' : 'gap-12'"
  >
    <li v-for="item in tabList">
      <a href="#" :class="cn(classNames({ variant, color, shape, size }))"
        ><i :class="item.prefixIcon"></i>{{ item.title
        }}<i :class="item.suffixIcon"></i
      ></a>
    </li>
  </ul>
</template>
