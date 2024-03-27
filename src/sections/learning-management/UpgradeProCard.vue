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
  <Card class="col-span-3 xl:col-span-1 px-3 shadow-small py-2 gradient-bg-2">
    <div class="flex justify-between items-center">
      <div>
        <h3 class="title-3 text-main mb-3">
          Upgrade to <span class="text-primary">PRO</span> for more resources
        </h3>
        <Button class="w-[135px] h-[38px] gradient-bg-1 font-12sb"
          >Upgrade Now</Button
        >
      </div>
      <img src="@/assets/images/illustration/Frame-1.png" class="" />
    </div>
  </Card>
</template>
