<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <li
    :class="
      cn(
        'inline-flex items-center gap-1.5 font-12m text-main dark:text-gray-300',
        props.class
      )
    "
  >
    <slot />
  </li>
</template>
