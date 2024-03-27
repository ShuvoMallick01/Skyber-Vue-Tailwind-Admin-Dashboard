<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import Progress from "../progress/Progress.vue";
import { ref, watchEffect } from "vue";

interface DataList {
  id?: number;
  title: string;
  date?: number | string;
  progressPerchantage?: number;
}

const props = defineProps<{
  dataList: DataList;
  class?: HTMLAttributes["class"];
}>();

const progress = ref(13);

// Methods
watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<!-- === TEMPLATE === -->
<template>
  <tbody class="font-12sb text-main dark:text-dark-text200">
    <tr v-for="data in dataList" :key="data.id">
      <td :class="cn('min-w-[90px] py-3 last:!pb-0', props.class)">
        <div class="flex items-baseline gap-2 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <rect width="10" height="10" rx="5" fill="#2499EF" />
          </svg>

          <div>
            <p class="">
              {{ data.title }}
            </p>
            <p v-if="data.date" class="font-10m text-muted300 dark:dark-muted">
              {{ data.date }}
            </p>
          </div>
        </div>
      </td>
      <td class="px-4 w-full">
        <Progress :model-value="data.progressPerchantage" class="h-2 w-full" />
      </td>
      <td class="">
        <p class="">{{ data.progressPerchantage }}%</p>
      </td>
    </tr>
  </tbody>
</template>
