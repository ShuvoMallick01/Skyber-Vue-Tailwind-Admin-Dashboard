<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useSidebar } from "@/stores/sidebar";

// State
const sidebarStore = useSidebar();
const route = useRoute();
interface MyComponentProps {
  items: {
    label: string;
    route?: any;
  };
}
const props = defineProps<MyComponentProps>();
</script>

<!-- === TEMPLATE === -->
<template>
  <template v-for="(childItem, index) in items!">
    <li>
      <router-link
        :to="childItem.route"
        class="group relative flex font-12m text-muted300 items-center gap-3 border-l-[2px] border-l-transparent px-3 rounded-s-[2px] duration-300 ease-in-out py-3.5 rounded-e hover:font-medium hover:border-l-primary hover:text-primary hover:bg-primary100"
        :class="
          route.path === childItem.route ? 'bg-primary100 text-primary  ' : ''
        "
      >
        <span
          class="h-[10px] w-[10px] border-2 rounded-full border-muted300 group-hover:border-primary group-hover:bg-primary transition-all"
        ></span>
        {{ childItem.label }}
      </router-link>
    </li>
  </template>
</template>
