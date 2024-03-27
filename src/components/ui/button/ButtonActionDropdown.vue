<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface Props {
  menuList: string[];
}
defineProps<Props>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      class="border-0 p-0 hover:bg-transparent"
      variant="outline"
      color="primary"
    >
      <slot></slot>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" class="rounded-lg border-0 w-24">
      <DropdownMenuItem variant="outline" v-for="item of menuList">{{
        item
      }}</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
