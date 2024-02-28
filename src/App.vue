<!-- SCRIPT -->
<script setup lang="ts">
import { ref, onMounted, computed, reactive } from "vue";
import { Loader2 } from "lucide-vue-next";
import {
  useDark,
  useToggle,
  useElementHover,
  onClickOutside,
} from "@vueuse/core";
import Button from "./components/button/Button.vue";
import IconButton from "@/components/button/IconButton.vue";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// State
const isDark = useDark();
const toggleDark = useToggle(isDark);
const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content:
      "The vows and named is he seven his origin myself any is decision-making. The interface of Jeni’s is simple and clean, with the section includes questions that are very specific to their customer group. First thing first, you need to sort out what explicit. The advice is to see mails and phone call data, then make a rundown of the top questions that show up continually..",
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Yes! You can use the transition prop to configure the animation.",
  },
];

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
      <div class="flex gap-3 items-center flex-wrap">
        <Button>Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="translucent">Click me</Button>

        <Button><i class="icon-Dot me-2"></i>Click me</Button>
        <Button variant="outline"><i class="icon-Dot me-2"></i>Click me</Button>
        <Button variant="translucent"
          ><i class="icon-Dot me-2"></i>Click me</Button
        >

        <Button disabled>
          <Loader2 class="w-4 h-4 mr-2 animate-spin" />Click me</Button
        >

        <Button>
          <a href="/login"> Login </a>
        </Button>
      </div>
    </div>

    <!--  === ICON BUTTON === -->
    <div>
      <h4 class="font-semibold text-primary uppercase tracking-wide my-4 mt-10">
        icon Button
      </h4>
      <div class="flex gap-3 items-center flex-wrap">
        <IconButton><i class="icon-Dot"></i></IconButton>
        <IconButton variant="outline"><i class="icon-Dot"></i></IconButton>
        <IconButton variant="translucent"><i class="icon-Dot"></i></IconButton>
      </div>
    </div>

    <!--  === Alert === -->
    <div>
      <h4 class="font-semibold text-primary uppercase tracking-wide my-4 mt-10">
        ALERT
      </h4>
      <div class="flex gap-3 items-center flex-wrap">
        <Alert class="inline-flex">
          <i class="icon-checkmark_circle me-2"></i>
          <div>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </div>
        </Alert>

        <Alert class="flex justify-between" variant="outline">
          <div class="inline-flex">
            <i class="icon-checkmark_circle me-2"></i>
            <div>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </div>
          </div>
          <div>
            <i class="icon-close"></i>
          </div>
        </Alert>

        <Alert class="inline-flex" variant="filled">
          <i class="icon-checkmark_circle me-2"></i>
          <div>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </div>
        </Alert>

        <Alert class="inline-flex">
          <i class="icon-checkmark_circle me-2"></i>
          <div>
            <AlertTitle>Heads up!</AlertTitle>
          </div>
        </Alert>
      </div>
    </div>

    <!--  === Accordion === -->
    <div>
      <h4 class="font-semibold text-primary uppercase tracking-wide my-4 mt-10">
        Accordion
      </h4>

      <div class="mb-10">
        <h6
          class="font-semibold text-gray-600 uppercase tracking-wide my-4 mt-10"
        >
          Basic
        </h6>
        <Accordion
          type="single"
          class="w-full border rounded-lg border-gray200"
          collapsible
          :default-value="defaultValue"
        >
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
          >
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div class="mb-10">
        <h6
          class="font-semibold text-gray-600 uppercase tracking-wide my-4 mt-10"
        >
          Outline
        </h6>

        <Accordion
          type="single"
          class="w-full space-y-2"
          collapsible
          :default-value="defaultValue"
        >
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
            class="border rounded-lg"
          >
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div class="mb-10">
        <h6
          class="font-semibold text-gray-600 uppercase tracking-wide my-4 mt-10"
        >
          Colored Outline
        </h6>

        <Accordion
          type="single"
          class="w-full space-y-2"
          collapsible
          :default-value="defaultValue"
        >
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
            class="border border-primary border-s-[3px] rounded-lg overflow-hidden"
          >
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>
