<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

// interface NotificationProps {
//   image: string;
//   userName: string;
//   message: string;
//   readStatus: boolean;
// }

const props = defineProps<{
  image: string;
  userName: string;
  message: string;
  readStatus: boolean;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('group flex gap-4 items-center py-2 mx-2', props.class)">
    <span
      class="h-[10px] w-[10px] border-2 rounded-full border-muted300 group-hover:border-primary group-hover:!bg-primary transition-all"
    ></span>
    <img src="@/assets/images/avatar/avatar-2.png" class="!h-8 !w-8" lt="" />
    <div>
      <p class="font-13sb text-main text-nowrap !font-semibold dark:text-white">
        {{ userName }}
      </p>
      <p class="font-10m text-muted dark:text-dark-text100">
        {{ message }}
      </p>
    </div>
  </div>
</template>
