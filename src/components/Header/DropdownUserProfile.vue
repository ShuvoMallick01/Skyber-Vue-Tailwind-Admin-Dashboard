<script setup lang="ts">
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
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      class="border-0 p-0 hover:bg-transparent"
      variant="outline"
    >
      <div
        class="flex items-center gap-2 bg-primary100 px-[10px] py-2 rounded-full"
      >
        <p class="font-13sb text-main text-nowrap">Hi. Penni Nojel</p>
        <img src="@/assets/images/avatar/avatar-2.png" alt="" />
      </div>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="start"
      class="border-0 dark:bg-dark-bgSecondary"
    >
      <DropdownMenuItem variant="outline">
        <div class="flex gap-2 items-center py-2">
          <img
            src="@/assets/images/avatar/avatar-2.png"
            class="!h-8 !w-8"
            lt=""
          />
          <div>
            <p
              class="font-13m text-main text-nowrap !font-semibold dark:text-white"
            >
              Hi. Penni Nojel
            </p>
            <p class="font-10m text-muted dark:text-dark-text100">
              shuvo@example.com
            </p>
          </div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="outline">Get Status</DropdownMenuItem>
      <DropdownMenuItem variant="outline">Profile & Account</DropdownMenuItem>
      <DropdownMenuItem variant="outline">Manage Team</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="outline">Sign Out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
