<script setup lang="ts">
import { useRoute } from "vue-router";

interface MyComponentProps {
  item: string;
  index: number | string;
}

const props = defineProps<MyComponentProps>();
</script>

<template>
  <li>
    <router-link
      :to="item.route"
      class="group py-1 flex font-12m text-muted300 items-center gap-3 border-l-[3.5px] border-l-transparent px-9 rounded-s-[2px] duration-300 ease-in-out hover:border-l-primary hover:text-primary"
    >
      <span v-html="item.icon"></span>
      {{ item.label }}
    </router-link>
  </li>
</template>
