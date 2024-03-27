<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { resultsData } from "@/data/resultsData";
import TableRowProgress from "@/components/ui/table_2/TableRowProgress.vue";

// State
const progress = ref(13);
const results = ref([...resultsData]);

// Methods
watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="py-6 px-5 col-span-3 xl:col-span-1 shadow-small">
    <CardTitle class="mb-4 dark:text-white">Result</CardTitle>
    <CardContent>
      <table class="w-full">
        <tbody>
          <TableRowProgress :dataList="resultsData" />
        </tbody>
      </table>
    </CardContent>
  </Card>
</template>
