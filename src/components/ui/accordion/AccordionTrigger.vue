<script setup lang="ts">
import { type HTMLAttributes, computed, ref } from "vue";
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "radix-vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

// const collapse = ref(`aria-expanded?"bg-[#F1F8FE] text-primary":""`);
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between p-[24px] font-13m text-main  transition-all hover:bg-[#F1F8FE] hover:text-primary focus-within:bg-[#F1F8FE] focus-within:text-primary focus-visible:[#F1F8FE] [&[data-state=open]>svg]:rotate-180 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus-within:bg-gray-700'
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="h-4 w-4 shrink-0 text-primary transition-transform duration-200"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
