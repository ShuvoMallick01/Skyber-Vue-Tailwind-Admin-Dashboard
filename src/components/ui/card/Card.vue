<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded border border-gray200 bg-white text-card-foreground shadow-sm dark:bg-gray-800 dark:border-gray-700',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
