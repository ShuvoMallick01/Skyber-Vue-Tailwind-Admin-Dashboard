<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "@/components/ui/button/Button.vue";
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="col-span-3 shadow-small dark:bg-dark-bgSecondary px-6 py-10">
    <CardContent class="flex items-center gap-4">
      <Button class="px-12 py-[18px] font-12sb">Buy Uko</Button>
      <p class="font-14sb text-muted">UI Lib 2021-2022</p>
    </CardContent>
  </Card>
</template>
