<script setup lang="ts">
import { ref } from "vue";
import { menuSidebar } from "@/data/menuSidebar";
import { useSidebar } from "@/stores/sidebar";
import { onClickOutside } from "@vueuse/core";
import SidebarItem from "./SidebarItem.vue";
import { onMounted } from "vue";

// State
const sidebarStore = useSidebar();
const sidebarMenu = ref([...menuSidebar]);
const target = ref(null);

// Methods
// onClickOutside(target, (event) => {
//   if (sidebarStore.isSidebarOpen && window.innerWidth < 1200) {
//     sidebarStore.isSidebarOpen = true;
//   }
// });
</script>

<template>
  <!-- Sidebar -->

  <aside
    v-if="sidebarStore.windowWidth < 768"
    class="h-screen fixed left-0 top-0 bg-white duration-300 ease-linear w-[259px] z-999 dark:bg-dark-bgPrimary"
    :class="
      sidebarStore.isSidebarOpen
        ? '-translate-x-0'
        : '  -translate-x-full' + ` w-[${sidebarStore.sidebarWidth.width}px]`
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
          class="fill-gray-600 hover:fill-primary"
          width="20"
          height="15"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
            fill=""
          />
        </svg>
      </button>
    </div>

    <!-- Sidebar Menu -->
    <perfect-scrollbar>
      <div class="h-screen overflow-y-auto duration-300 ease-linear">
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
    </perfect-scrollbar>
  </aside>

  <!-- 2ND SIDEBAR -->
  <aside
    v-else
    class="h-screen fixed left-0 top-0 bg-white duration-300 ease-linear w-[259px] md:-translate-x-0 -translate-x-full z-999! dark:bg-dark-bgPrimary"
    :class="` w-[${sidebarStore.sidebarWidth.width}px]`"
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

      <button
        class="block lg:hidden"
        v-if="sidebarStore.windowWidth < 768"
        @click="sidebarStore.handleSidebarToggle"
      >
        <svg
          class="fill-current"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
            fill=""
          />
        </svg>
      </button>

      <button v-else>
        <svg
          class=""
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

    <div class="h-screen overflow-y-auto duration-300 ease-linear">
      <perfect-scrollbar>
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
      </perfect-scrollbar>
    </div>
  </aside>
</template>
