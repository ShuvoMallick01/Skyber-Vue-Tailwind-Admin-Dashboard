<!-- SCRIPT -->
<script setup>
import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";

const props = defineProps({
  title: String,
  paginationList: { type: Array, default: [] },
  before: { type: String },
  after: { type: String },
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
      basic:
        " flex justify-center text-gray-500 bg-white border border-gray-300 hover:bg-black hover:text-white hover:border-black dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-white",
    },

    color: {
      primary:
        "   text-muted-300 bg-white border border-gray-300 hover:bg-primary hover:text-white hover:border-primary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-white",
      info: "text-muted-300  hover:text-info border-b-2  border-b-transparent hover:border-b-2  hover:border-b-info dark:text-white dark:hover:text-info dark:border-b-transparent dark:hover:border-b-info",
      success:
        "text-muted-300  hover:text-primary border-b-2  border-b-transparent hover:border-b-2  hover:border-b-primary dark:text-white dark:hover:text-primary dark:border-b-transparent dark:hover:border-b-primary",
      warning:
        "text-muted-300  hover:text-primary border-b-2  border-b-transparent hover:border-b-2  hover:border-b-primary dark:text-white dark:hover:text-primary dark:border-b-transparent dark:hover:border-b-primary",
      error:
        "text-muted-300  hover:text-primary border-b-2  border-b-transparent hover:border-b-2  hover:border-b-primary dark:text-white dark:hover:text-primary dark:border-b-transparent dark:hover:border-b-primary",
    },

    shape: {
      rounded: "rounded-lg",
      circle: "rounded-full",
    },

    size: {
      medium: "leading-tight  font-semibold items-center  w-10 h-10",
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
    variant: "basic",
    color: "primary",
    shape: "circle",
    size: "medium",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <!-- <a href="#" :class="cn(classNames({ variant, color, shape, size }))" -->

  <nav>
    <ul class="flex gap-[11px] items-center">
      <li>
        <a href="#" :class="cn(classNames({ variant, color, shape, size }))">
          <i :class="before" class="text-2xl"></i>
        </a>
      </li>
      <li v-for="num in paginationList">
        <a href="#" :class="cn(classNames({ variant, color, shape, size }))">{{
          num
        }}</a>
      </li>

      <li>
        <a href="#" :class="cn(classNames({ variant, color, shape, size }))">
          <i :class="after" class="text-2xl"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
