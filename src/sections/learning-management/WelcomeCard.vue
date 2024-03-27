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
  <Card class="col-span-3 shadow-small xl:col-span-2 dark:bg-gray400">
    <CardContent
      class="flex items-center justify-between bg-white px-6 py-9 gap-4 rounded dark:bg-dark-bgSecondary"
    >
      <div>
        <h5 class="title-3 text-main mb-2 dark:text-dark-text200">
          Welcome Back! Watson
        </h5>
        <p class="font-13m text-muted300 dark:text-dark-text100">
          You have completed
          <span class="font-14sb text-primary">76%</span>
          of your goal this week!
          <br />
          Start a new goal and improve your result.
        </p>
      </div>

      <div
        class="relative flex flex-wrap bottom-0 top-0 items-end justify-center !-z-[0]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="129"
          height="72"
          viewBox="0 0 129 72"
          fill="none"
        >
          <path
            d="M122 64.5C122 32.7436 96.2564 7 64.5 7C32.7436 7 7 32.7436 7 64.5"
            stroke="#E5F3FD"
            stroke-width="13.3483"
            stroke-linecap="round"
          />
          <path
            d="M7 64.5C7 32.7436 32.7436 7 64.5 7C78.1104 7 90.6163 11.7288 100.464 19.633"
            stroke="#2499EF"
            stroke-width="13.3483"
            stroke-linecap="round"
          />
        </svg>

        <div class="absolute text-center">
          <p class="font-14sb dark:text-dark-text200">76%</p>
          <p class="font-13m text-muted300">Progress</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
