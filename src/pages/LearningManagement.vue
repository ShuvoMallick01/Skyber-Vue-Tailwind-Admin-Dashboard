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
import Button from "@/components/ui/button/Button.vue";
import AllComponents from "@/pages/All-Components.vue";
import { Progress } from "@/components/ui/progress";
import { resultsData } from "@/data/resultsData";
import IconButton from "@/components/ui/button/IconButton.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { upcomingTaskList } from "@/data/upcomingTask";

// State
const progress = ref(13);
const results = ref([...resultsData]);
const upcomingTasks = ref([...upcomingTaskList]);

// Methods
watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<!-- === TEMPLATE === -->
<template>
  <div class="grid grid-cols-3 gap-7 mb-40">
    <!-- Welcome Card -->
    <Card class="col-span-3 shadow-small lg:col-span-2 dark:bg-gray400">
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

    <!-- Upgrade to Pro Card -->
    <Card class="col-span-3 lg:col-span-1 px-3 shadow-small py-2 gradient-bg-2">
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

    <!-- Results -->
    <Card class="py-6 px-5 col-span-3 lg:col-span-2 xl:col-span-1 shadow-small">
      <CardTitle class="mb-4 dark:text-white">Result</CardTitle>
      <CardContent>
        <table class="w-full">
          <tbody>
            <tr v-for="(data, index) in results" :key="index">
              <td class="min-w-[90px] py-3 last:!pb-0">
                <div class="flex items-baseline gap-2 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <rect width="10" height="10" rx="5" fill="#2499EF" />
                  </svg>

                  <div>
                    <p class="text-main dark:text-dark-text200">
                      {{ data.title }}
                    </p>
                    <p class="font-10m text-muted300 dark:dark-muted">
                      20 march
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-4 w-full">
                <Progress
                  :model-value="data.progressPerchantage"
                  class="h-2 w-full"
                />
              </td>
              <td class="">
                <p class="font-12sb dark:text-dark-text200">
                  {{ data.progressPerchantage }}%
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>

    <!-- Study Time Last Week -->
    <Card class="py-6 px-5 col-span-3 lg:col-span-2 xl:col-span-1 shadow-small">
      <CardTitle class="mb-4 dark:text-white">Study Time Last Week</CardTitle>
      <CardContent>
        <table class="w-full">
          <tbody>
            <tr v-for="(data, index) in results" :key="index">
              <td class="min-w-[90px] py-3 last:!pb-0">
                <div class="flex items-baseline gap-2 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <rect width="10" height="10" rx="5" fill="#2499EF" />
                  </svg>

                  <div>
                    <p class="text-main dark:text-dark-text200">
                      {{ data.title }}
                    </p>
                    <p class="font-10m text-muted300 dark:dark-muted">
                      20 march
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-4 w-full">
                <Progress
                  :model-value="data.progressPerchantage"
                  class="h-2 w-full"
                />
              </td>
              <td class="">
                <p class="font-12sb dark:text-dark-text200">
                  {{ data.progressPerchantage }}%
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>

    <!-- Upcoming Task -->
    <Card class="py-6 px-5 col-span-3 lg:col-span-2 xl:col-span-1 shadow-small">
      <CardTitle class="mb-4"
        ><div class="flex items-center justify-between">
          <p class="dark:text-white">Upcoming Task</p>
          <Button variant="link" color="primary" size="none"
            >View all Tasks</Button
          >
        </div></CardTitle
      >

      <CardContent>
        <div
          class="flex items-center justify-between py-4 last:!pb-0"
          v-for="(task, index) in upcomingTasks"
          :key="index"
        >
          <div class="border-l-4 border-l-primary pl-3">
            <p class="font-14m dark:text-dark-text200">{{ task.taskTitle }}</p>
            <p class="font-12m text-muted300 dark:text-dark-mute">
              {{ task.time }}
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              class="border-0 p-0 hover:bg-transparent"
              variant="outline"
              color="primary"
            >
              <IconButton variant="icon" color="secondary" size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill=""
                  class=""
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 10.5C7.10457 10.5 8 11.3954 8 12.5C8 13.6046 7.10457 14.5 6 14.5C4.89543 14.5 4 13.6046 4 12.5C4 11.3954 4.89543 10.5 6 10.5ZM14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5C13.1046 14.5 14 13.6046 14 12.5ZM18 10.5C19.1046 10.5 20 11.3954 20 12.5C20 13.6046 19.1046 14.5 18 14.5C16.8954 14.5 16 13.6046 16 12.5C16 11.3954 16.8954 10.5 18 10.5Z"
                    fill=""
                  />
                </svg>
              </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" class="rounded-lg border-0 w-24">
              <DropdownMenuItem variant="outline">View</DropdownMenuItem>
              <DropdownMenuItem variant="outline">Edit</DropdownMenuItem>
              <DropdownMenuItem variant="outline">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>

    <!-- Course Completed -->
    <Card class="py-7 px-5 col-span-3 xl:col-span-1 shadow-small">
      <CardContent class="flex gap-6 items-center">
        <IconButton
          variant="translucent"
          color="primary"
          class="fill-primary rounded-full h-[40px] w-[40px] shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 5.5V15.5C22 15.7761 21.7761 16 21.5 16H2.5C2.22386 16 2 15.7761 2 15.5V5.5C2 5.22386 2.22386 5 2.5 5H2.88C3.27769 5.00035 3.65897 5.15862 3.94 5.44L7 8.5L11.28 4.22C11.4205 4.07931 11.6112 4.00018 11.81 4H12.19C12.3888 4.00018 12.5795 4.07931 12.72 4.22L17 8.5L20.06 5.44C20.341 5.15862 20.7223 5.00035 21.12 5H21.5C21.7761 5 22 5.22386 22 5.5ZM22 18.5V19.5C22 19.7761 21.7761 20 21.5 20H2.5C2.22386 20 2 19.7761 2 19.5V18.5C2 18.2239 2.22386 18 2.5 18H21.5C21.7761 18 22 18.2239 22 18.5ZM18 10.33L20 8.33V14H4V8.35L6 10.35C6.10227 10.4456 6.24058 10.493 6.38 10.48H7.66C7.79559 10.482 7.92592 10.4277 8.02 10.33L12.02 6.33L16.02 10.33C16.1141 10.4277 16.2444 10.482 16.38 10.48H17.64C17.7756 10.482 17.9059 10.4277 18 10.33Z"
              fill=""
            />
          </svg>
        </IconButton>
        <div>
          <p class="font-14sb dark:text-dark-text200">Course Completed</p>
          <p class="font-semibold text-2xl text-primary">1450</p>
        </div>
      </CardContent>
    </Card>

    <!-- Enrolled Courses -->
    <Card class="py-7 px-5 col-span-3 xl:col-span-1 shadow-small">
      <CardContent class="flex gap-6 items-center">
        <IconButton
          variant="translucent"
          color="warning"
          size="large"
          class="rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.94 2.23C14.85 3.81 19 7.76 19 12.33C18.9959 15.8066 16.4409 18.7533 13 19.25V21.5C13 21.7761 12.7761 22 12.5 22H11.5C11.2239 22 11 21.7761 11 21.5V19.25C7.55907 18.7533 5.00407 15.8066 5 12.33C5 7.76 9.15 3.81 11.06 2.23C11.2399 2.08092 11.4663 1.99955 11.7 2H12.3C12.5337 1.99955 12.7601 2.08092 12.94 2.23ZM13 10.5V17.23C15.3431 16.7518 17.0196 14.6814 17 12.29C17 9 14 5.74 12 4C10 5.78 7 9.06 7 12.33C6.99951 14.7063 8.67167 16.7547 11 17.23V10.5C11 10.2239 11.2239 10 11.5 10H12.5C12.7761 10 13 10.2239 13 10.5Z"
              fill=""
            />
          </svg>
        </IconButton>
        <div>
          <p class="font-14sb dark:text-dark-text200">Enrolled Courses</p>
          <p class="font-semibold text-2xl text-warning">1250</p>
        </div>
      </CardContent>
    </Card>

    <!-- Course Completed -->
    <Card class="py-7 px-5 col-span-3 xl:col-span-1 shadow-small">
      <CardContent class="flex gap-6 items-center">
        <IconButton
          variant="translucent"
          color="primary"
          size="large"
          class="rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 5.5V15.5C22 15.7761 21.7761 16 21.5 16H2.5C2.22386 16 2 15.7761 2 15.5V5.5C2 5.22386 2.22386 5 2.5 5H2.88C3.27769 5.00035 3.65897 5.15862 3.94 5.44L7 8.5L11.28 4.22C11.4205 4.07931 11.6112 4.00018 11.81 4H12.19C12.3888 4.00018 12.5795 4.07931 12.72 4.22L17 8.5L20.06 5.44C20.341 5.15862 20.7223 5.00035 21.12 5H21.5C21.7761 5 22 5.22386 22 5.5ZM22 18.5V19.5C22 19.7761 21.7761 20 21.5 20H2.5C2.22386 20 2 19.7761 2 19.5V18.5C2 18.2239 2.22386 18 2.5 18H21.5C21.7761 18 22 18.2239 22 18.5ZM18 10.33L20 8.33V14H4V8.35L6 10.35C6.10227 10.4456 6.24058 10.493 6.38 10.48H7.66C7.79559 10.482 7.92592 10.4277 8.02 10.33L12.02 6.33L16.02 10.33C16.1141 10.4277 16.2444 10.482 16.38 10.48H17.64C17.7756 10.482 17.9059 10.4277 18 10.33Z"
              fill=""
            />
          </svg>
        </IconButton>
        <div>
          <p class="font-14sb dark:text-dark-text200">Course Completed</p>
          <p class="font-semibold text-2xl text-primary">1450</p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
