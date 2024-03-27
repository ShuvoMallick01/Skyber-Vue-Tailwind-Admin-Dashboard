<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { ref, watchEffect } from "vue";
import IconButton from "../button/IconButton.vue";
import ButtonActionDropdown from "@/components/ui/button/ButtonActionDropdown.vue";

interface ObjectType {
  id: number;
  title: string;
  date: number | string;
  progressPerchantage: number;
}

const props = defineProps<{
  dataList: ObjectType;
  class?: HTMLAttributes["class"];
  dropDownMenu?: Array;
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
  <div
    :class="
      cn('flex items-center justify-between py-4 last:!pb-0', props.class)
    "
    v-for="task in dataList"
    :key="task.id"
  >
    <div class="flex items-center">
      <slot></slot>
      <div>
        <p class="font-14m dark:text-dark-text200">
          {{ task.taskTitle || task.jobtitle }}
        </p>
        <p class="font-12m text-muted300 dark:text-dark-mute">
          {{ task.time }}
        </p>
      </div>
    </div>

    <ButtonActionDropdown :menuList="dropDownMenu">
      <IconButton variant="icon" color="secondary" size="small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill=""
          class=""
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 10.5C7.10457 10.5 8 11.3954 8 12.5C8 13.6046 7.10457 14.5 6 14.5C4.89543 14.5 4 13.6046 4 12.5C4 11.3954 4.89543 10.5 6 10.5ZM14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5C13.1046 14.5 14 13.6046 14 12.5ZM18 10.5C19.1046 10.5 20 11.3954 20 12.5C20 13.6046 19.1046 14.5 18 14.5C16.8954 14.5 16 13.6046 16 12.5C16 11.3954 16.8954 10.5 18 10.5Z"
            fill=""
          />
        </svg>
      </IconButton>
    </ButtonActionDropdown>
  </div>
</template>
