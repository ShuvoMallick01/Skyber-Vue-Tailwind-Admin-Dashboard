<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { ChevronRight } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5 dark:text-gray-300', props.class)"
  >
    <slot>
      <span>/</span>
    </slot>
  </li>
</template>
