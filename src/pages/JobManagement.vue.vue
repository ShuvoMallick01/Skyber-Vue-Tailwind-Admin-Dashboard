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
import { recentJobPostedList } from "@/data/recentJobPosted";
import { acquisitionsList } from "@/data/acquisitionsList";
import Badge from "@/components/ui/badge/Badge.vue";

// State
const progress = ref(13);
const recentJobsPosted = ref([...recentJobPostedList]);
const results = ref([...resultsData]);
const acquisitions = ref([...acquisitionsList]);

// Methods
watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<!-- === TEMPLATE === -->
<template>
  <div class="grid grid-cols-3 gap-7 mb-6">
    <!-- Total Applications -->
    <Card class="py-6 px-6 col-span-3 lg:col-span-1 shadow-small">
      <CardContent class="flex gap-6 items-center justify-between">
        <div>
          <p class="font-14sb text-muted dark:text-dark-text200">
            Total Applications
          </p>
          <p
            class="text-2xl font-semibold text-main mb-[14px] dark:text-dark-text200"
          >
            672
          </p>

          <div class="flex items-center gap-1">
            <Badge
              variant="translucent"
              shape="circle"
              color="primary"
              class="w-[19px] h-[19px] fill-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill=""
                class="absolute"
              >
                <path
                  d="M9.16666 2.29165V4.37498C9.16666 4.49004 9.07338 4.58331 8.95832 4.58331H8.83749C8.781 4.58413 8.72669 4.5615 8.68749 4.52081L8.00416 3.83748L5.77082 6.06665C5.73302 6.10693 5.68023 6.12978 5.62499 6.12978C5.56975 6.12978 5.51696 6.10693 5.47916 6.06665L4.37499 4.96248L1.48332 7.85415C1.4442 7.89359 1.39096 7.91577 1.33541 7.91577C1.27986 7.91577 1.22661 7.89359 1.18749 7.85415L0.895823 7.56248C0.856383 7.52336 0.834198 7.47011 0.834198 7.41456C0.834198 7.35901 0.856383 7.30576 0.895823 7.26665L4.22916 3.93331C4.26696 3.89303 4.31975 3.87018 4.37499 3.87018C4.43023 3.87018 4.48302 3.89303 4.52082 3.93331L5.62499 5.03748L7.41249 3.24581L6.72916 2.56248C6.68847 2.52328 6.66584 2.46897 6.66666 2.41248V2.29165C6.66666 2.17659 6.75993 2.08331 6.87499 2.08331H8.95832C9.07338 2.08331 9.16666 2.17659 9.16666 2.29165Z"
                  fill=""
                />
              </svg>
            </Badge>
            <p class="font-12sb text-primary">+14% Inc</p>
          </div>
        </div>

        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
            class=""
          >
            <ellipse
              cx="41.5793"
              cy="41.5"
              rx="36.5793"
              ry="36.5"
              stroke="#E5F3FD"
              stroke-width="9"
              stroke-linecap="round"
            />
            <path
              d="M5 41.5C5 61.6584 21.3771 78 41.5793 78C61.7815 78 78.1586 61.6584 78.1586 41.5C78.1586 21.3416 61.7815 5 41.5793 5"
              stroke="#2499EF"
              stroke-width="9"
              stroke-linecap="round"
            />
          </svg>
          <p
            class="absolute flex inset-0 items-center justify-center dark:text-dark-text200"
          >
            70%
          </p>
        </div>
      </CardContent>
    </Card>

    <!-- Shortlisted Canditates -->
    <Card class="py-6 px-6 col-span-3 lg:col-span-1 shadow-small">
      <CardContent class="flex gap-6 items-center justify-between">
        <div>
          <p class="font-14sb text-muted dark:text-dark-text200">
            Shortlisted Canditates
          </p>
          <p
            class="text-2xl font-semibold text-main mb-[14px] dark:text-dark-text200"
          >
            4582
          </p>

          <div class="flex items-center gap-1">
            <Badge
              variant="translucent"
              shape="circle"
              color="primary"
              class="w-[19px] h-[19px] fill-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill=""
                class="absolute"
              >
                <path
                  d="M9.16666 2.29165V4.37498C9.16666 4.49004 9.07338 4.58331 8.95832 4.58331H8.83749C8.781 4.58413 8.72669 4.5615 8.68749 4.52081L8.00416 3.83748L5.77082 6.06665C5.73302 6.10693 5.68023 6.12978 5.62499 6.12978C5.56975 6.12978 5.51696 6.10693 5.47916 6.06665L4.37499 4.96248L1.48332 7.85415C1.4442 7.89359 1.39096 7.91577 1.33541 7.91577C1.27986 7.91577 1.22661 7.89359 1.18749 7.85415L0.895823 7.56248C0.856383 7.52336 0.834198 7.47011 0.834198 7.41456C0.834198 7.35901 0.856383 7.30576 0.895823 7.26665L4.22916 3.93331C4.26696 3.89303 4.31975 3.87018 4.37499 3.87018C4.43023 3.87018 4.48302 3.89303 4.52082 3.93331L5.62499 5.03748L7.41249 3.24581L6.72916 2.56248C6.68847 2.52328 6.66584 2.46897 6.66666 2.41248V2.29165C6.66666 2.17659 6.75993 2.08331 6.87499 2.08331H8.95832C9.07338 2.08331 9.16666 2.17659 9.16666 2.29165Z"
                  fill=""
                />
              </svg>
            </Badge>
            <p class="font-12sb text-primary">+06% Inc</p>
          </div>
        </div>

        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
            class=""
          >
            <ellipse
              cx="41.5793"
              cy="41.5"
              rx="36.5793"
              ry="36.5"
              stroke="#E5F3FD"
              stroke-width="9"
              stroke-linecap="round"
            />
            <path
              d="M5 41.5C5 61.6584 21.3771 78 41.5793 78C61.7815 78 78.1586 61.6584 78.1586 41.5C78.1586 21.3416 61.7815 5 41.5793 5"
              stroke="#2499EF"
              stroke-width="9"
              stroke-linecap="round"
            />
          </svg>
          <p
            class="absolute flex inset-0 items-center justify-center dark:text-dark-text200"
          >
            70%
          </p>
        </div>
      </CardContent>
    </Card>

    <!-- Enrolled Courses -->
    <Card class="p-[21px] col-span-3 lg:col-span-1 row-span-2 shadow-small">
      <CardContent class="">
        <div class="flex flex-col items-center gap-1.5">
          <img src="@/assets/images/avatar/avatar-3.png" class="mx-auto" />
          <Badge variant="translucent" class="px-[13px] py-[2px] font-10m"
            >Pro</Badge
          >
          <p class="font-14sb text-main dark:text-dark-text200">
            Neelesh Chaudhary
          </p>
          <p class="font-12m text-muted dark:text-dark-mute">
            UI / UX Designer
          </p>
          <p class="flex items-center gap-1 text-primary fill-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6667 8.33335C16.6667 4.65146 13.6819 1.66669 10 1.66669C6.31814 1.66669 3.33337 4.65146 3.33337 8.33335C3.33337 11.454 4.8588 12.6808 6.27471 13.8194C7.21058 14.5721 8.09861 15.2862 8.46671 16.4834L8.89171 17.7667C9.01087 18.1212 9.35158 18.3528 9.72504 18.3334H10.1917C10.5652 18.3528 10.9059 18.1212 11.025 17.7667L11.45 16.4834C11.8482 15.2953 12.7455 14.583 13.6855 13.8366C15.1259 12.6931 16.6667 11.4698 16.6667 8.33335ZM10 3.33335C7.23862 3.33335 5.00004 5.57193 5.00004 8.33335C5.00004 10.6667 5.98337 11.45 7.35004 12.5C8.49905 13.2765 9.41511 14.351 10 15.6084C10.5878 14.3528 11.5033 13.279 12.65 12.5C14.0167 11.45 15 10.6667 15 8.33335C15 5.57193 12.7615 3.33335 10 3.33335ZM11.6667 8.33335C11.6667 9.25383 10.9205 10 10 10C9.07957 10 8.33337 9.25383 8.33337 8.33335C8.33337 7.41288 9.07957 6.66669 10 6.66669C10.9205 6.66669 11.6667 7.41288 11.6667 8.33335Z"
                fill="#2499EF"
              />
            </svg>
            New York, US
          </p>
        </div>

        <!-- Recent Job -->
        <div class="mt-12">
          <div class="flex items-center justify-between mb-4">
            <h4 class="font-14sb text-main dark:text-dark-text200">
              Recent Job Posted
            </h4>
            <Button variant="text" class="p-0">View all</Button>
          </div>

          <div>
            <div
              class="flex items-center justify-between py-2"
              v-for="(job, index) in recentJobPostedList"
              :key="index"
            >
              <div class="flex items-center gap-[10px]">
                <Badge
                  variant="translucent"
                  class="h-[58px] w-[63px] text-3xl"
                  >{{ job.number }}</Badge
                >
                <div class="">
                  <p class="font-14sb dark:text-dark-text200">
                    {{ job.jobTitle }}
                  </p>
                  <p class="font-12m text-muted300 dark:text-dark-mute">
                    {{ job.description }}
                  </p>
                </div>
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
                <DropdownMenuContent
                  align="start"
                  class="rounded-lg border-0 w-24"
                >
                  <DropdownMenuItem variant="outline">View</DropdownMenuItem>
                  <DropdownMenuItem variant="outline">Edit</DropdownMenuItem>
                  <DropdownMenuItem variant="outline">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div class="flex gap-4 w-full justify-between mt-10">
            <Button variant="outline" class="grow">Message</Button>
            <Button variant="filled" class="grow">Connect</Button>
          </div>
        </div>
      </CardContent>
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

    <!-- Acquisitons -->
    <Card class="py-6 px-5 col-span-3 xl:col-span-1 shadow-small">
      <CardTitle class="mb-4 dark:text-white">Acquisitons</CardTitle>
      <CardContent>
        <table class="w-full">
          <tbody>
            <tr v-for="(data, index) in acquisitions" :key="index">
              <td class="min-w-[90px] py-4 last:!pb-0">
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

                  <p class="text-main dark:text-dark-text200">
                    {{ data.title }}
                  </p>
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

    <!-- Footer -->
    <Card class="col-span-3 shadow-small dark:bg-dark-bgSecondary px-6 py-10">
      <CardContent class="flex items-center gap-4">
        <Button class="px-12 py-[18px] font-12sb">Buy Uko</Button>
        <p class="font-14sb text-muted">UI Lib 2021-2022</p>
      </CardContent>
    </Card>
  </div>
</template>
