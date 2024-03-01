<script setup lang="ts">
import type { HTMLAttributes, HtmlHTMLAttributes, ref } from "vue";
import { type ListVariants, listVariants } from ".";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HtmlHTMLAttributes["class"];
  variant?: ListVariants["variant"];
  color?: ListVariants["color"];
  dropdownList: [];
}>();

const showDropdown = ref(false);

// METHODS
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<template>
  <div
    id="dropdownHover"
    v-if="showDropdown"
    class="z-10 bg-white divide-y divide-gray-100 rounded-lg overflow-hidden shadow w-44 dark:bg-gray-700 absolute top-0 left-0 mt-[46px]"
  >
    <ul aria-labelledby="dropdownHoverButton">
      <li v-for="item in dropdownList" :key="item.id">
        <a
          href="#"
          class="block"
          :class="cn(listVariants({ variant, color }))"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>
