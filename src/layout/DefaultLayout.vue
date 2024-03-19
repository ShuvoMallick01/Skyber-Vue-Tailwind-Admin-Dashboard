<script setup lang="ts">
import HeaderArea from "@/components/Header/HeaderArea.vue";
import SidebarArea from "@/components/Sidebar/SidebarArea.vue";
</script>

<template>
  <!-- Page Wrapper -->
  <div class="flex">
    <!-- Sidebar -->
    <SidebarArea />

    <!-- Header & Content Area -->
    <div class="relative">
      <!-- Header -->
      <HeaderArea />

      <!-- Main -->
      <main class="h-screen overflow-hidden overflow-y-auto">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
