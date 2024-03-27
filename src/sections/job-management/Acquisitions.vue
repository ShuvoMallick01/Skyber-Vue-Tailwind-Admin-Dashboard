<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { acquisitionsList } from "@/data/acquisitionsList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TableRowProgress } from "@/components/ui/table_2";
const progress = ref(13);

// State
const acquisitions = ref([...acquisitionsList]);

// Methods
watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="py-6 px-5 col-span-3 xl:col-span-1 shadow-small">
    <CardTitle class="mb-4 dark:text-white">Acquisitons</CardTitle>

    <CardContent>
      <TableRowProgress :dataList="acquisitions" class="py-4 last:!pb-0" />
    </CardContent>
  </Card>
</template>
