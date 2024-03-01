<!-- SCRIPT -->
<script setup lang="ts">
import { cva } from "class-variance-authority";
import { ref } from "vue";

const props = defineProps({
  dropdownList: { type: Array, default: [] },
  variant: { type: String },
  color: { type: String },
  shape: { type: String },
});

const showDropdown = ref(false);
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<!-- TEMPLATE -->
<template>
  <div class="relative">
    <slot></slot>
  </div>
</template>
