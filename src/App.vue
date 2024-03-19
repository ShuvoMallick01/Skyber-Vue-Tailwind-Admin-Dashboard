<script setup lang="ts">
import { ref } from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DefaultLayout from "./layout/DefaultLayout.vue";
import { RouterView } from "vue-router";
</script>

<!-- === TEMPLATE === -->
<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>
