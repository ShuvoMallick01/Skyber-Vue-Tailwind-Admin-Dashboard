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

const accordionCollapse = ref(true);

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

const accordionControl = () => {
  return (accordionCollapse.value = !accordionCollapse.value);
};
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
        @click="accordionControl()"
        type="button"
        class="font-13m flex items-center justify-between w-full p-6 font-medium rtl:text-right text-text-main border border-b-0 border-gray200 rounded-t-xl focus:ring-0 dark:focus:ring-0 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      >
        Accordion item 1
        <i class="icon-down_ui font-14sm"></i>
      </button>
    </h2>

    <div
      id="accordion-collapse-body-1"
      class="font-12m"
      :class="accordionCollapse ? 'hidden' : ''"
    >
      <div
        class="p-5 border border-b-0 border-gray200 dark:border-gray-700 dark:bg-gray-900"
      >
        <p class="mb-2 text-muted-300 dark:text-gray-400">
          The vows and named is he seven his origin myself any is
          decision-making. The interface of Jeni’s is simple and clean, with the
          section includes questions that are very specific to their customer
          group. First thing first, you need to sort out what explicit. The
          advice is to see mails and phone call data, then make a rundown of the
          top questions that show up continually.
        </p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-1">
      <button
        @click="accordionControl()"
        type="button"
        class="font-13m flex items-center justify-between w-full p-6 font-medium rtl:text-right text-text-main border border-gray200 rounded-b-xl focus:ring-0 dark:focus:ring-0 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      >
        Accordion item 2
        <i class="icon-down_ui font-14sm"></i>
      </button>
    </h2>

    <div
      id="accordion-collapse-body-1"
      class="font-12m"
      :class="accordionCollapse ? 'hidden' : ''"
    >
      <div
        class="p-5 border border-b-0 border-gray200 dark:border-gray-700 dark:bg-gray-900"
      >
        <p class="mb-2 text-muted-300 dark:text-gray-400">
          The vows and named is he seven his origin myself any is
          decision-making. The interface of Jeni’s is simple and clean, with the
          section includes questions that are very specific to their customer
          group. First thing first, you need to sort out what explicit. The
          advice is to see mails and phone call data, then make a rundown of the
          top questions that show up continually.
        </p>
      </div>
    </div>
  </div>
</template>
