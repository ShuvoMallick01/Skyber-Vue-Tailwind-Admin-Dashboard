<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { cn } from "@/lib/utils";
import { ObjectType } from "typescript";

const props = defineProps<{
  tableData: Object;
  class?: HTMLAttributes["class"];
}>();
</script>

<!-- === TEMPLATE === -->
<template>
  <tr v-for="(item, index) in tableData" :key="index">
    <td class="pe-4 py-4">
      <div class="flex gap-2 items-center">
        <img src="@/assets/images/Course/course-thumnail-1.png" />
        <div>
          <p class="font-13m">
            {{ item.courseName }}
          </p>
          <p class="font-12m text-muted300 dark:text-dark-mute">
            {{ item.description }}
          </p>
        </div>
      </div>
    </td>

    <td class="px-4 py-4">
      <div
        class="flex items-center gap-2 shrink-0"
        :class="{
          'text-primary fill-primary': item.category === 'Graphic Template',
          'text-warning fill-warning': item.category === 'Development',
          'text-success fill-success': item.category === 'Music',
          'text-error fill-error': item.category === 'Editing',
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill=""
        >
          <rect width="10" height="10" rx="5" fill="" />
        </svg>
        <p>{{ item.category }}</p>
      </div>
    </td>
    <td class="px-4 py-4">${{ item.earned }}</td>
    <td class="ps-4 py-4">
      {{ item.visitor }}
    </td>
  </tr>
</template>
