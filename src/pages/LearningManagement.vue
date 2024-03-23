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
import { courseStatusList } from "@/data/courseStatus";
import { downloadList } from "@/data/downloadList";

// State
const progress = ref(13);
const results = ref([...resultsData]);
const upcomingTasks = ref([...upcomingTaskList]);
const courseStatus = ref([...courseStatusList]);
const downloads = ref([...downloadList]);

// Methods
watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<!-- === TEMPLATE === -->
<template>
  <div class="grid grid-cols-3 gap-7 mb-6">
    <!-- Welcome Card -->
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

    <!-- Upgrade to Pro Card -->
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

    <!-- Results -->
    <Card class="py-6 px-5 col-span-3 xl:col-span-1 shadow-small">
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
    <Card class="py-6 px-5 col-span-3 xl:col-span-1 shadow-small">
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
    <Card class="py-6 px-5 col-span-3 xl:col-span-1 shadow-small">
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
    <Card class="py-7 px-5 col-span-3 lg:col-span-1 shadow-small">
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
    <Card class="py-7 px-5 col-span-3 lg:col-span-1 shadow-small">
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
    <Card class="py-7 px-5 col-span-3 lg:col-span-1 shadow-small">
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

    <!-- Course Status -->
    <Card
      class="col-span-3 shadow-small lg:col-span-2 dark:bg-dark-bgSecondary px-6 py-9"
    >
      <CardTitle>
        <h5 class="title-3 text-main mb-2 dark:text-dark-text200">
          Course Status
        </h5>
      </CardTitle>

      <CardContent class="">
        <table class="table-auto w-full">
          <thead class="border-b border-b-muted/20">
            <tr class="">
              <th
                class="py-4 font-13m text-start text-main dark:text-dark-text200"
              >
                Name
              </th>
              <th
                class="font-13m text-main text-start px-3 dark:text-dark-text200"
              >
                Category
              </th>
              <th class="font-13m text-main px-3 dark:text-dark-text200">
                Earned
              </th>
              <th class="font-13m text-main dark:text-dark-text200">Visitor</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in courseStatus" :key="index">
              <td
                class="pt-3"
                :class="{
                  'pb-3': index + 1 !== courseStatus.length,
                }"
              >
                <div class="flex gap-2 items-center">
                  <img src="@/assets/images/Course/course-thumnail-1.png" />
                  <div>
                    <p class="font-13m dark:text-dark-text200">
                      {{ item.courseName }}
                    </p>
                    <p class="font-12m text-muted300 dark:text-dark-mute">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-3">
                <div
                  class="flex items-center gap-2 shrink-0"
                  :class="{
                    'text-primary fill-primary':
                      item.category === 'Graphic Template',
                    'text-warning fill-warning':
                      item.category === 'Development',
                    'text-success fill-success': item.category === 'Music',
                    'text-error fill-error': item.category === 'Editing',
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill=""
                  >
                    <rect width="10" height="10" rx="5" fill="" />
                  </svg>
                  <p>{{ item.category }}</p>
                </div>
              </td>
              <td class="text-center px-3 xl:px-10 dark:text-dark-text200">
                ${{ item.earned }}
              </td>
              <td class="text-center dark:text-dark-text200">
                {{ item.visitor }}
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>

    <!-- Your Downloads -->
    <Card
      class="col-span-3 shadow-small lg:col-span-1 dark:bg-dark-bgSecondary px-6 py-9"
    >
      <CardTitle>
        <h5 class="text-main mb-4 dark:text-dark-text200">Your Downloads</h5>
      </CardTitle>

      <CardContent class="">
        <!-- Uploading Stage -->
        <div class="flex items-start justify-between py-3">
          <div class="flex gap-2 items-start">
            <svg
              width="33"
              height="43"
              viewBox="0 0 21 28"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
              class="fill-primary"
            >
              <path
                d="M3.5 0H12.7628C13.2268 9.91155e-05 13.6719 0.184539 14 0.51275L20.4872 7C20.8155 7.32811 20.9999 7.77316 21 8.23725V24.5C21 25.4283 20.6313 26.3185 19.9749 26.9749C19.3185 27.6313 18.4283 28 17.5 28H3.5C2.57174 28 1.6815 27.6313 1.02513 26.9749C0.368749 26.3185 0 25.4283 0 24.5V3.5C0 2.57174 0.368749 1.6815 1.02513 1.02513C1.6815 0.368749 2.57174 0 3.5 0V0ZM13.125 2.625V6.125C13.125 6.58913 13.3094 7.03425 13.6376 7.36244C13.9658 7.69063 14.4109 7.875 14.875 7.875H18.375L13.125 2.625Z"
                fill=""
              />
              <path
                d="M4.91872 20.2153C4.76692 20.2153 4.6421 20.1714 4.54428 20.0837C4.44982 19.9926 4.4026 19.8813 4.4026 19.7498C4.4026 19.6148 4.44982 19.5018 4.54428 19.4107C4.6421 19.3197 4.76692 19.2741 4.91872 19.2741C5.06714 19.2741 5.18858 19.3197 5.28304 19.4107C5.38086 19.5018 5.42978 19.6148 5.42978 19.7498C5.42978 19.8813 5.38086 19.9926 5.28304 20.0837C5.18858 20.1714 5.06714 20.2153 4.91872 20.2153ZM9.05221 17.7662C9.05221 17.972 9.00498 18.1609 8.91053 18.333C8.81607 18.5016 8.67102 18.6383 8.47537 18.7428C8.27971 18.8474 8.03683 18.8997 7.74673 18.8997H7.21037V20.1748H6.34511V16.6227H7.74673C8.03009 16.6227 8.26959 16.6716 8.46525 16.7694C8.6609 16.8673 8.80764 17.0022 8.90547 17.1742C9.00329 17.3463 9.05221 17.5436 9.05221 17.7662ZM7.68095 18.2115C7.84624 18.2115 7.96937 18.1727 8.05033 18.0951C8.13129 18.0176 8.17177 17.9079 8.17177 17.7662C8.17177 17.6246 8.13129 17.5149 8.05033 17.4373C7.96937 17.3598 7.84624 17.321 7.68095 17.321H7.21037V18.2115H7.68095ZM11.2366 16.6227C11.611 16.6227 11.9382 16.6969 12.2182 16.8453C12.4982 16.9938 12.7141 17.2029 12.8659 17.4728C13.0211 17.7393 13.0987 18.0479 13.0987 18.3987C13.0987 18.7462 13.0211 19.0549 12.8659 19.3247C12.7141 19.5946 12.4965 19.8037 12.2132 19.9522C11.9332 20.1006 11.6076 20.1748 11.2366 20.1748H9.90579V16.6227H11.2366ZM11.1809 19.4259C11.5081 19.4259 11.7628 19.3365 11.945 19.1577C12.1271 18.979 12.2182 18.726 12.2182 18.3987C12.2182 18.0715 12.1271 17.8168 11.945 17.6347C11.7628 17.4525 11.5081 17.3614 11.1809 17.3614H10.7711V19.4259H11.1809ZM16.2977 16.6227V17.3159H14.8506V18.0648H15.9334V18.7378H14.8506V20.1748H13.9853V16.6227H16.2977Z"
                fill="white"
              />
            </svg>

            <div class="">
              <p class="-mt-1 dark:text-dark-text200">
                ReactJS-for-beginner.pdf
              </p>
              <p class="font-12m text-muted300 mb-1">4.5 MB</p>
              <Progress :model-value="50" class="h-[7px]" />
            </div>
          </div>

          <div class="flex flex-col items-end justify-between">
            <Button
              class="font-10m mb-3"
              color="secondary"
              variant="text"
              size="none"
              >Cancel</Button
            >
            <p class="font-12sb text-primary">50%</p>
          </div>
        </div>

        <!-- Uploaded -->
        <div
          v-for="(item, index) in downloads"
          :key="index"
          class="flex items-center justify-between py-3 last:pb-0"
        >
          <div class="flex gap-2 items-start">
            <svg
              width="33"
              height="43"
              viewBox="0 0 21 28"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
              class="fill-muted"
            >
              <path
                d="M3.5 0H12.7628C13.2268 9.91155e-05 13.6719 0.184539 14 0.51275L20.4872 7C20.8155 7.32811 20.9999 7.77316 21 8.23725V24.5C21 25.4283 20.6313 26.3185 19.9749 26.9749C19.3185 27.6313 18.4283 28 17.5 28H3.5C2.57174 28 1.6815 27.6313 1.02513 26.9749C0.368749 26.3185 0 25.4283 0 24.5V3.5C0 2.57174 0.368749 1.6815 1.02513 1.02513C1.6815 0.368749 2.57174 0 3.5 0V0ZM13.125 2.625V6.125C13.125 6.58913 13.3094 7.03425 13.6376 7.36244C13.9658 7.69063 14.4109 7.875 14.875 7.875H18.375L13.125 2.625Z"
                fill=""
              />
              <path
                d="M4.91872 20.2153C4.76692 20.2153 4.6421 20.1714 4.54428 20.0837C4.44982 19.9926 4.4026 19.8813 4.4026 19.7498C4.4026 19.6148 4.44982 19.5018 4.54428 19.4107C4.6421 19.3197 4.76692 19.2741 4.91872 19.2741C5.06714 19.2741 5.18858 19.3197 5.28304 19.4107C5.38086 19.5018 5.42978 19.6148 5.42978 19.7498C5.42978 19.8813 5.38086 19.9926 5.28304 20.0837C5.18858 20.1714 5.06714 20.2153 4.91872 20.2153ZM9.05221 17.7662C9.05221 17.972 9.00498 18.1609 8.91053 18.333C8.81607 18.5016 8.67102 18.6383 8.47537 18.7428C8.27971 18.8474 8.03683 18.8997 7.74673 18.8997H7.21037V20.1748H6.34511V16.6227H7.74673C8.03009 16.6227 8.26959 16.6716 8.46525 16.7694C8.6609 16.8673 8.80764 17.0022 8.90547 17.1742C9.00329 17.3463 9.05221 17.5436 9.05221 17.7662ZM7.68095 18.2115C7.84624 18.2115 7.96937 18.1727 8.05033 18.0951C8.13129 18.0176 8.17177 17.9079 8.17177 17.7662C8.17177 17.6246 8.13129 17.5149 8.05033 17.4373C7.96937 17.3598 7.84624 17.321 7.68095 17.321H7.21037V18.2115H7.68095ZM11.2366 16.6227C11.611 16.6227 11.9382 16.6969 12.2182 16.8453C12.4982 16.9938 12.7141 17.2029 12.8659 17.4728C13.0211 17.7393 13.0987 18.0479 13.0987 18.3987C13.0987 18.7462 13.0211 19.0549 12.8659 19.3247C12.7141 19.5946 12.4965 19.8037 12.2132 19.9522C11.9332 20.1006 11.6076 20.1748 11.2366 20.1748H9.90579V16.6227H11.2366ZM11.1809 19.4259C11.5081 19.4259 11.7628 19.3365 11.945 19.1577C12.1271 18.979 12.2182 18.726 12.2182 18.3987C12.2182 18.0715 12.1271 17.8168 11.945 17.6347C11.7628 17.4525 11.5081 17.3614 11.1809 17.3614H10.7711V19.4259H11.1809ZM16.2977 16.6227V17.3159H14.8506V18.0648H15.9334V18.7378H14.8506V20.1748H13.9853V16.6227H16.2977Z"
                fill="white"
              />
            </svg>

            <div class="">
              <p class="dark:text-dark-text200">{{ item.fileTitle }}</p>
              <p class="font-12m text-muted300">{{ item.size }}</p>
            </div>
          </div>

          <Button class="font-12sb" color="secondary" variant="text" size="none"
            >Download</Button
          >
        </div>
      </CardContent>
    </Card>

    <!-- Footer -->
    <Card class="col-span-3 shadow-small dark:bg-dark-bgSecondary px-6 py-10">
      <CardContent class="flex items-center gap-4">
        <Button class="px-12 py-[18px] font-12sb">Buy Uko</Button>
        <p class="font-14sb text-muted">UI Lib 2021-2022</p>
      </CardContent>
    </Card>
  </div>
</template>
