<!-- SCRIPT -->
<script setup lang="ts">
import { ref, onMounted, computed, reactive } from "vue";
// import Button from "./components/ui/button/Button.vue";
import Button from "./components/button/Button.vue";
import {
  useDark,
  useToggle,
  useElementHover,
  onClickOutside,
} from "@vueuse/core";

// State
const isDark = useDark();
// const target = ref(null);
const toggleDark = useToggle(isDark);
const breadcrumbList = ref([
  {
    id: 1,
    title: "Home",
    router: true,
    url: "/",
    icon: "",
    divider: "/",
  },
  {
    id: 2,
    title: "Product Page",
    router: true,
    url: "/",
    icon: "",
    divider: "/",
  },
  {
    id: 3,
    title: "Active",
    router: true,
    url: "/",
    icon: "",
    divider: "/",
  },
]);

const breadcrumbList2 = ref([
  {
    id: 1,
    title: "Home",
    router: true,
    url: "/",
    icon: "icon-home_outlined me-1",
    divider: "/",
  },
  {
    id: 2,
    title: "Product Page",
    router: true,
    url: "/",
    icon: "icon-shopping_cart_outlined_a me-1",
    divider: "/",
  },
  {
    id: 3,
    title: "Active",
    router: true,
    url: "/",
    icon: "icon-tab_key me-1",
    divider: "/",
  },
]);

const dropdownList = ref([
  {
    id: 1,
    title: "New",
    icon: "",
  },
  {
    id: 2,
    title: "Popular",
    icon: "",
  },
  {
    id: 3,
    title: "Price (Low to High)",
    icon: "",
  },
  {
    id: 4,
    title: "Price (High to Low)",
    icon: "",
  },
]);

const tabList1 = ref([
  {
    id: 1,
    title: "Overview",
    prefixIcon: "icon-home_outlined me-1",
    suffixIcon: "",
  },
  {
    id: 2,
    title: "Projects",
    prefixIcon: "icon-home_outlined me-1",
    suffixIcon: "",
  },
  {
    id: 3,
    title: "Documents",
    prefixIcon: "icon-home_outlined me-1",
    suffixIcon: "",
  },
  {
    id: 4,
    title: "Connections",
    prefixIcon: "icon-home_outlined me-1",
    suffixIcon: "",
  },
]);

const tabList2 = ref([
  {
    id: 1,
    title: "Overview",
    prefixIcon: "icon-home_outlined me-1",
    suffixIcon: "icon-down_ui ms-1",
  },
  {
    id: 2,
    title: "Projects",
    prefixIcon: "icon-home_outlined me-1",
    suffixIcon: "icon-down_ui ms-1",
  },
  {
    id: 3,
    title: "Documents",
    prefixIcon: "icon-home_outlined me-1",
    suffixIcon: "icon-down_ui ms-1",
  },
  {
    id: 4,
    title: "Connections",
    prefixIcon: "icon-home_outlined me-1",
    suffixIcon: "icon-down_ui ms-1",
  },
]);

const paginationList1 = ref([1, 2, 3, 4, 5]);

const optionList = ref([
  {
    id: 1,
    title: "Bangladesh",
  },
  {
    id: 2,
    title: "India",
  },
  {
    id: 3,
    title: "USA",
  },
  {
    id: 4,
    title: "UK",
  },
]);

// Methods
// onClickOutside(target, (event) => {
//   navHidden.value = true;
// });
</script>

<!-- TEMPLATE -->
<template>
  <div class="container mx-auto pt-10 flex gap-6 flex-wrap items-center">
    <button @click="toggleDark()" class="mx-2" color="text-primary ">
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
      <i v-if="isDark" class="fa-regular fa-sun text-white"></i>
      <i v-else class="fa-solid fa-moon"></i>
    </button>
  </div>

  <!-- Components -->
  <div class="container mx-auto py-10 space-y-4 px-5">
    <!--  === BUTTON === -->
    <div>
      <h4 class="font-semibold text-primary uppercase tracking-wide mb-4">
        Button
      </h4>
      <div class="flex gap-3 items-center">
        <Button>Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="translucent">Click me</Button>

        <Button><i class="icon-Dot me-2"></i>Click me</Button>
        <Button variant="outline"><i class="icon-Dot me-2"></i>Click me</Button>
        <Button variant="translucent"
          ><i class="icon-Dot me-2"></i>Click me</Button
        >
      </div>
    </div>
  </div>
</template>
