<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const props = defineProps<{
  title: String;
  number: Number | String;
  class?: HTMLAttributes["class"];
}>();
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="py-7 px-5">
    <CardContent class="flex gap-6 items-center">
      <slot></slot>
      <div>
        <p class="font-14sb dark:text-dark-text200">{{ title }}</p>
        <p :class="cn('font-semibold text-2xl text-primary', props.class)">
          {{ number }}
        </p>
      </div>
    </CardContent>
  </Card>
</template>
