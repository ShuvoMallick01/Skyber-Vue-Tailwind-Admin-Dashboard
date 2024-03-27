<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="py-6 px-6 col-span-3 lg:col-span-1 shadow-small">
    <CardTitle class="text-center mb-8 !text-lg font-semibold"
      >Upgrade to <span class="text-primary">PRO</span> for <br />
      more resources</CardTitle
    >

    <CardContent class="">
      <img
        src="@/assets/images/illustration/Illustration-1.svg"
        class="w-full"
      />
    </CardContent>
  </Card>
</template>
