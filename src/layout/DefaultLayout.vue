<script setup lang="ts">
import HeaderArea from "@/components/Header/HeaderArea.vue";
import SidebarArea from "@/components/Sidebar/SidebarArea.vue";
import { useSidebar } from "@/stores/sidebar";

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
      <main class="h-screen overflow-hidden overflow-y-auto px-7 max-xl:px-8">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
