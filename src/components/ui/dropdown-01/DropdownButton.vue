<script setup lang="ts">
import type { HTMLAttributes, HtmlHTMLAttributes } from "vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HtmlHTMLAttributes["class"];
  variant?: ButtonVariants["variant"];
  color?: ButtonVariants["color"];
}>();

const showDropdown = ref(false);

// METHODS
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<template>
  <button
    id="dropdownHoverButton"
    @click="toggleDropdown"
    :class="cn(buttonVariants({ variant, color }), props.class)"
    type="button"
  >
    <slot> </slot>
  </button>
</template>
