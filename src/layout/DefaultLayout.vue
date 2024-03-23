<script setup lang="ts">
import { useSidebar } from "@/stores/sidebar";
import SidebarArea from "@/components/Sidebar/SidebarArea.vue";
import HeaderArea from "@/components/Header/HeaderArea.vue";

const sidebarStore = useSidebar();
</script>

<template>
  <!-- Page Wrapper -->
  <div class="">
    <!-- Sidebar -->
    <SidebarArea />

    <!-- Header & Content Area -->
    <div
      class="relative md:ml-[260px]"
      :class="`ml-[${sidebarStore.sidebarWidth.width}px]`"
    >
      <!-- Header -->
      <HeaderArea />

      <!-- Main -->
      <main class="h-screen overflow-hidden overflow-y-auto px-7 2xl:px-20">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
