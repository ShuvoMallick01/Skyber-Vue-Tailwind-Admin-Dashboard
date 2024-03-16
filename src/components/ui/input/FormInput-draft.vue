<!-- SCRIPT -->
<script setup>
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  labelName: String,
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
const inputClasses = cva(["leading-normal transition-300 "], {
  variants: {
    variant: {
      outline:
        "text-sm  bg-white border border-gray-300 text-gray-900 block  dark:bg-gray-700 dark:text-white ",
      filled:
        "text-sm  bg-text-200 border border-gray-300 text-gray-900  block dark:bg-gray-700 dark:text-white ",
    },
    shape: {
      rounded: "rounded-lg",
    },
    size: {
      medium: "text-sm w-full p-[15px]",
      custom: "",
      "search-medium-prefix": "text-sm w-full py-[15px] ps-[36px] pe-[15px] ",
      "search-medium-suffix": "text-sm w-full py-[15px] ps-[15px] pe-[36px] ",
    },
    custom: {
      default: [props.customInputClass],
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      class: "form-input-outline-gray",
    },
    {
      variant: "filled",
      class: "form-input-filled-gray",
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
      <input
        :required="required"
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="cn(inputClasses({ variant, color, size, shape }))"
        type="text"
      />
      <slot name="suffix"></slot>
    </span>
  </div>
</template>
