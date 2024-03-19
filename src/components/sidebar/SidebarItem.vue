<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useSidebar } from "@/stores/sidebar";
import SidebarDropdown from "./SidebarDropdown.vue";

const sidebarStore = useSidebar();
const route = useRoute();
interface MyComponentProps {
  item: {
    route: string;
    label: string;
    icon: string;
    children?: { label: string; route: string };
  };
}
const props = defineProps<MyComponentProps>();
</script>

<!-- === TEMPLATE === -->
<template>
  <li>
    <router-link
      :to="item.route"
      @click="sidebarStore.handleDropdownMenu"
      class="group relative flex font-12m text-muted300 items-center gap-3 border-l-[2px] border-l-transparent px-3 rounded-s-[2px] duration-300 ease-in-out py-3.5 rounded hover:font-medium hover:border-l-primary hover:text-primary hover:bg-primary100"
      :class="
        route.path === item.route && !item.children
          ? 'bg-primary100 text-primary  '
          : ''
      "
    >
      <span v-html="item.icon"></span>
      {{ item.label }}

      <svg
        v-if="item.children"
        class="absolute fill-current top-1/2 right-2 -translate-y-1/2"
        :class="sidebarStore.toggle ? 'rotate-180 transition-all' : ''"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
          fill=""
        />
      </svg>
    </router-link>

    <div
      v-if="item.children && sidebarStore.toggle"
      class="shadow-small rounded-b-lg pb-1 mb-3"
    >
      <SidebarDropdown :items="item.children!" />
    </div>
  </li>
</template>
