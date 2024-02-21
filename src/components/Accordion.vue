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
  <!-- <div
    v-bind="$attrs"
    :class="cn(classNames({ variant, color, size, shape }))"
  ></div> -->

  <div id="accordion-collapse" data-accordion="collapse">
    <h2 id="accordion-collapse-heading-1">
      <button
        type="button"
        class="font-13m flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-0 dark:focus:ring-0 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      >
        <span>What is Flowbite?</span>
        <i class="icon-down_ui font-14sm"></i>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-1"
      class="hidden font-12m"
      aria-labelledby="accordion-collapse-heading-1"
    >
      <div
        class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
      >
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to
          <a
            href="/docs/getting-started/introduction/"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >get started</a
          >
          and start developing websites even faster with components on top of
          Tailwind CSS.
        </p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-2">
      <button
        type="button"
        class="font-13m flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        data-accordion-target="#accordion-collapse-body-2"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-2"
      >
        <span>Is there a Figma file available?</span>
        <i class="icon-down_ui font-14sm"></i>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-2"
      class="hidden"
      aria-labelledby="accordion-collapse-heading-2"
    >
      <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software
          so everything you see in the library has a design equivalent in our
          Figma file.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out the
          <a
            href="https://flowbite.com/figma/"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >Figma design system</a
          >
          based on the utility classes from Tailwind CSS and components from
          Flowbite.
        </p>
      </div>
    </div>
  </div>
</template>
