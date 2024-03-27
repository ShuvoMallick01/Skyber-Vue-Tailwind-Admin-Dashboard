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
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="py-6 px-6 col-span-3 lg:col-span-1 shadow-small">
    <CardTitle class="text-center mb-8">Candidates by Gender</CardTitle>

    <CardContent class="">
      <div class="relative mx-auto flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="179"
          height="179"
          viewBox="0 0 179 179"
          fill="none"
        >
          <ellipse
            cx="89.677"
            cy="89.5"
            rx="81.677"
            ry="81.5"
            stroke="#E5F3FD"
            stroke-width="14.7345"
            stroke-linecap="round"
          />
          <path
            d="M8 89.5C8 134.511 44.5681 171 89.677 171C134.786 171 171.354 134.511 171.354 89.5C171.354 44.4888 134.786 8 89.677 8"
            stroke="#2499EF"
            stroke-width="14.7345"
            stroke-linecap="round"
          />
        </svg>
        <p
          class="absolute flex text-3xl font-semibold text-primary inset-0 items-center justify-center dark:text-dark-text200"
        >
          70%
        </p>
      </div>
    </CardContent>

    <div class="gap-6 flex justify-center mt-8">
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <rect width="10" height="10" rx="5" fill="#2499EF" />
        </svg>
        <p>Male</p>
      </div>

      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <rect width="10" height="10" rx="5" fill="#E5F3FD" />
        </svg>
        <p>Female</p>
      </div>
    </div>
  </Card>
</template>
