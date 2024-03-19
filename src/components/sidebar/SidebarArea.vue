<script setup lang="ts">
import { ref } from "vue";
import { menuSidebar } from "@/data/menuSidebar";
import { useSidebar } from "@/stores/sidebar";
import { onClickOutside } from "@vueuse/core";
import SidebarItem from "./SidebarItem.vue";

const sidebarMenu = ref([...menuSidebar]);
const sidebarStore = useSidebar();
const target = ref(null);

onClickOutside(target, (event) => {
  sidebarStore.isSidebarOpen = true;
});
</script>

<template>
  <!-- Sidebar -->

  <aside
    class="overflow-hidden left-0 top-0 z-9999 flex h-screen flex-shrink-0 w-[260px] flex-col bg-white duration-300 ease-linear"
    :class="
      sidebarStore.isSidebarOpen ? '-translate-x-full' : 'md:-translate-x-0'
    "
    ref="target"
  >
    <!-- Sidebar Header -->
    <div class="flex justify-between p-[22px]">
      <router-link to="/">
        <img
          src="@/assets/images/uko-logo.svg"
          class="w-20 cursor-pointer"
          alt="UKO-Logo"
        />
      </router-link>

      <button @click="sidebarStore.handleSidebarToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="8.04545" cy="8.04545" r="6.04545" fill="#2499EF" />
          <circle
            cx="8"
            cy="8"
            r="7.63636"
            stroke="#2499EF"
            stroke-width="0.727273"
          />
        </svg>
      </button>
    </div>

    <!-- Sidebar Menu -->
    <div class="no-scrollbar overflow-y-auto duration-300 ease-linear">
      <nav class="pb-4 space-y-5 mx-5">
        <template v-for="menuGroup in sidebarMenu" :key="menuGroup.name">
          <div>
            <h4 class="font-14m text-primary mt-7">
              {{ menuGroup.name }}
            </h4>
          </div>

          <ul class="">
            <SidebarItem
              v-for="(menuItem, index) in menuGroup.menuItems"
              :item="menuItem"
              :key="index"
            ></SidebarItem>
          </ul>
        </template>
      </nav>
    </div>
  </aside>
</template>
