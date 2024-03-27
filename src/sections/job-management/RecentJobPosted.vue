<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { recentJobPostedList } from "@/data/recentJobPosted";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardTask from "@/components/ui/card_2/CardTask.vue";
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

import Button from "@/components/ui/button/Button.vue";
import Badge from "@/components/ui/badge/Badge.vue";
import CardJob from "@/components/ui/card_2/CardJob.vue";

const recentJobsPosted = ref([...recentJobPostedList]);
const dropdownMenu = ref(["Delete", "View"]);
</script>

<!-- === TEMPLATE === -->
<template>
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
        <p class="font-12m text-muted dark:text-dark-mute">UI / UX Designer</p>
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

        <CardJob :dataList="recentJobPostedList" :dropDownMenu="dropdownMenu">
        </CardJob>

        <div class="flex gap-4 w-full justify-between mt-10">
          <Button variant="outline" class="grow">Message</Button>
          <Button variant="filled" class="grow">Connect</Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
