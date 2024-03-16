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
import Button from "@/components/ui/button/Button.vue";
import DefaultLayout from "./layout/DefaultLayout.vue";
</script>

<!-- === TEMPLATE === -->
<template>
  <DefaultLayout>
    <main>
      <div class="grid grid-cols-3 gap-7">
        <!-- Welcome Card -->
        <div class="col-span-3 lg:col-span-2">
          <div
            class="flex items-center justify-between bg-white px-6 py-9 gap-4 rounded"
          >
            <div>
              <h5 class="title-3 text-main mb-2">Welcome Back! Watson</h5>
              <p class="font-13m text-muted300">
                You have completed
                <span class="font-14sb text-primary">76%</span> of your goal
                this week!
                <br />
                Start a new goal and improve your result.
              </p>
            </div>

            <div
              class="relative flex flex-wrap bottom-0 top-0 items-end justify-center"
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
                <p class="font-14sb">76%</p>
                <p class="font-13m text-muted300">Progress</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Upgrade to Pro Card -->
        <Card class="col-span-3 lg:col-span-1 px-3 py-2 gradient-bg-2">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="title-3 text-main mb-3">
                Upgrade to <span class="text-primary">PRO</span> for more
                resources
              </h3>
              <Button class="w-[135px] h-[38px] gradient-bg-1 font-12sb"
                >Upgrade Now</Button
              >
            </div>
            <img src="@/assets/images/illustration/Frame-1.png" />
          </div>
        </Card>
      </div>
    </main>
  </DefaultLayout>
</template>
