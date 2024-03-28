<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div class="relative w-full overflow-auto">
    <table
      :class="
        cn(
          'w-full caption-bottom font-13m text-main dark:text-dark-text200',
          props.class
        )
      "
    >
      <slot />
    </table>
  </div>
</template>
