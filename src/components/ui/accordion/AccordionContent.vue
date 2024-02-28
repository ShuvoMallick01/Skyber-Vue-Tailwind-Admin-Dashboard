<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { AccordionContent, type AccordionContentProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden text-muted300 text-xs transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-gray-400"
  >
    <div :class="cn('pb-[22px] px-[24px] pt-[18px]', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
