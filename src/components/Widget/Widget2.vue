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

// State
const props = defineProps<{
  title: String;
  number: Number | String;
  class?: HTMLAttributes["class"];
}>();
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="py-6 px-6">
    <CardContent class="flex gap-6 items-center justify-between">
      <div>
        <p class="font-14sb text-muted dark:text-dark-text200">
          {{ title ? title : "Title" }}
        </p>
        <p
          class="text-2xl font-semibold text-main mb-[14px] dark:text-dark-text200"
        >
          {{ number ? number : "672" }}
        </p>

        <slot name="increment"></slot>
      </div>

      <slot name="progressBar"> </slot>
    </CardContent>
  </Card>
</template>
