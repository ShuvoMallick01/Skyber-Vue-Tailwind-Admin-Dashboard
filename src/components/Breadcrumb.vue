<!-- SCRIPT -->
<script setup>
import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  title: String,
  breadcrumbList: { type: Array, default: [], required: true },

  variant: { type: String },
  color: { type: String },
  shape: { type: String },
  size: { type: String },
  shadow: String,
});

const linkAttr = ref(props.breadcrumbList.router ? "to" : "href");

// Button Classes
const classNames = cva(["leading-normal transition-300 "], {
  variants: {
    variant: {
      normal: "border text-black border-black",
    },
    size: {
      medium: "font-body-12m px-4 py-5 w-full",
    },
    color: {
      primary: "text-text-main border-gray-300",
    },
    shape: {
      rounded: "rounded-lg",
    },
  },

  compoundVariants: [],

  defaultVariants: {
    variant: "normal",
    size: "medium",
    color: "primary",
    shape: "rounded",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <nav v-bind="$attrs" :class="cn(classNames({ variant, size, color, shape }))">
    <ol class="inline-flex">
      <li class="" v-for="item in breadcrumbList" :key="item.id">
        <component
          :is="item.router ? 'router-link' : 'a'"
          :[linkAttr]="item.url"
        >
          <i :class="item.icon" class="text-text-200 text-sm"></i
          ><span
            class="cursor-pointer"
            :class="breadcrumbList.length === item.id ? 'text-text-200' : ''"
            >{{ item.title }}</span
          ><span
            class="text-text-200"
            v-html="
              item.id === breadcrumbList.length
                ? ''
                : '&nbsp;&nbsp; / &nbsp;&nbsp;'
            "
          ></span>
        </component>
      </li>
    </ol>
  </nav>
</template>
