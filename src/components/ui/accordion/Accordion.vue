<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits,
} from "radix-vue";

const props = defineProps<AccordionRootProps>();
const emits = defineEmits<AccordionRootEmits>();
const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <AccordionRoot
    v-bind="forwarded"
    class="rounded-lg border-gray200 dark:border-gray-600"
  >
    <slot />
  </AccordionRoot>
</template>
