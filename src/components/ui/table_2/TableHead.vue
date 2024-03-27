<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { cn } from "@/lib/utils";
import { ObjectType } from "typescript";

const props = defineProps<{
  tableHeadList: ObjectType[];
  class?: HTMLAttributes["class"];
}>();
</script>

<!-- === TEMPLATE === -->
<template>
  <th
    :class="cn('px-4 py-4', props.class)"
    v-for="(item, index) in tableHeadList"
    :key="index"
  >
    {{ item }}
  </th>
</template>
