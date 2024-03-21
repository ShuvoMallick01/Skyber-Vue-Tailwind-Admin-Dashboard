<script setup lang="ts">
import { ref } from "vue";
import { notificationList } from "@/data/notificationList";
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
} from "../../components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import CardNotification from "../ui/card/CardNotification.vue";

const notifications = ref([...notificationList]);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      class="border-0 p-0 m-0 hover:bg-transparent"
      variant="outline"
    >
      <button>
        <svg
          class="mt-1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.853 14.88L19.6818 15.71C19.8663 15.8963 19.9703 16.1477 19.9714 16.41V17C19.9714 17.5523 19.5243 18 18.9728 18H4.99295C4.44146 18 3.99438 17.5523 3.99438 17V16.41C3.99549 16.1477 4.09949 15.8963 4.28397 15.71L5.11278 14.88C5.67474 14.3179 5.99081 13.5554 5.99151 12.76V10C5.99151 8.70178 6.41197 7.43858 7.18979 6.4L8.08849 5.2C8.65424 4.44458 9.54213 4 10.485 4H10.9843V2.5C10.9843 2.22386 11.2079 2 11.4836 2H12.4822C12.7579 2 12.9815 2.22386 12.9815 2.5V4H13.4807C14.4236 4 15.3115 4.44458 15.8773 5.2L16.776 6.4C17.5538 7.43858 17.9743 8.70178 17.9743 10V12.76C17.975 13.5554 18.291 14.3179 18.853 14.88ZM11.9829 22C13.0859 22 13.98 21.1046 13.98 20H9.98576C9.98576 21.1046 10.8799 22 11.9829 22Z"
            fill="#2499EF"
          />
        </svg>
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="start"
      class="border-0 dark:bg-dark-bgSecondary w-[376px] mx-4"
    >
      <DropdownMenuItem
        variant="outline"
        class="hover:!bg-transparent hover:text-current"
      >
        <p class="py-2 text-base font-semibold mt-2 mx-2">Notification</p>
      </DropdownMenuItem>
      <!-- <DropdownMenuSeparator class="my-0" /> -->
      <DropdownMenuItem
        variant="outline"
        v-for="(item, index) in notifications"
        class="border-t border-t-gray-200"
      >
        <CardNotification
          :image="item.image"
          :userName="item.userName"
          :message="item.message"
          :readStatus="item.readStatus"
        />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
