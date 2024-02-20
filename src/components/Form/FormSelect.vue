<!-- SCRIPT -->
<script setup>
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";

const props = defineProps({
  labelName: String,
  optionList: { type: Array, required: true, default: [] },
  variant: { type: String },
  color: { type: String },
  shape: { type: String },
  size: { type: String },
  label: { type: String },

  modelValue: true,
  customInputClass: { type: String },
  required: { type: Boolean, default: false },
  shadow: String,
});

// Input Classes
const selectClasses = cva(["leading-normal transition-300"], {
  variants: {
    variant: {
      outline:
        "bg-white border border-gray300 text-gray-900 block dark:bg-gray-700 dark:text-white ",
      filled:
        "bg-text-200 border border-gray300 text-gray-900  block dark:bg-gray-700 dark:text-white ",
    },
    color: {
      gray: "bg-white border border-gray300 text-gray-900 outline-none ring-0  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-500",
    },
    shape: {
      rounded: "rounded-lg",
    },
    size: {
      medium: "text-sm w-full p-[15px]",
      "search-medium-prefix": "text-sm w-full py-[15px] ps-[36px] pe-[15px] ",
      "search-medium-suffix": "text-sm w-full py-[15px] ps-[15px] pe-[36px] ",
    },
    custom: {
      default: [props.customInputClass],
    },
  },

  compoundVariants: [
    {
      variant: "filled",
      class:
        "bg-gray-200 border border-gray-300 text-gray-900 outline-none ring-0 focus:border-gray-400 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-500",
    },
  ],

  defaultVariants: {
    variant: "outline",
    color: "gray",
    shape: "rounded",
    size: "medium",
    custom: "default",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <div class="">
    <label
      v-if="labelName"
      :for="$attrs.id"
      class="block mb-2 font-body-13sb text-text-400 dark:text-white"
      :class="required ? 'required-mark' : ''"
      >{{ labelName }}</label
    >

    <span class="relative">
      <slot name="prefix"></slot>
      <select
        v-bind="$attrs"
        :required="required"
        :class="cn(selectClasses({ variant, color, size, shape }))"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option value="" selected disabled>Select Option</option>
        <option
          v-for="(item, index) in optionList"
          :key="index"
          :value="item.value"
        >
          {{ item.title }}
        </option>
      </select>

      <slot name="suffix"></slot>
    </span>
  </div>
</template>
