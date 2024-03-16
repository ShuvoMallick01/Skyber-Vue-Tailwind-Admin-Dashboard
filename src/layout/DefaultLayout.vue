<script setup lang="ts">
import HeaderArea from "@/components/Header/HeaderArea.vue";
import SidebarArea from "@/components/Sidebar/SidebarArea.vue";
</script>

<template>
  <!-- Page Wrapper -->
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <SidebarArea />

    <!-- Contents -->
    <div class="w-full px-7">
      <!-- Header -->
      <HeaderArea />

      <!-- Main -->
      <main>
        <div>
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>
