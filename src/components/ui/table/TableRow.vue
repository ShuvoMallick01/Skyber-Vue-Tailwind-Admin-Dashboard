<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <tr
    :class="
      cn(
        ' transition-colors hover:bg-primary100 data-[state=selected]:bg-muted dark:hover:bg-dark-bgHover',
        props.class
      )
    "
  >
    <slot />
  </tr>
</template>
