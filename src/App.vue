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
// import Button from "./components/button/Button.vue";
import Button from "./components/ui/button/Button.vue";
import IconButton from "./components/ui/button/IconButton.vue";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Badge from "./components/ui/Badge/Badge.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import Breadcrumb from "./components/Breadcrumb.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import Dropdown from "./components/Dropdown/Dropdown.vue";
// import DropdownButton from "./components/Dropdown/DropdownButton.vue";
// import DropdownList from "./components/Dropdown/DropdownList.vue";
import Tab from "./components/Tab.vue";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import InputSpin from "./components/Advance/InputSpin.vue";

// import {
//   Dropdown,
//   DropdownButton,
//   DropdownList,
// } from "@/components/ui/dropdown";

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

  <!-- COMPONENTS -->
  <div class="container mx-auto py-10 space-y-4 px-5 mb-32">
    <!--  === Button === -->
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

    <!--  === Icon Button === -->
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
          class="font-semibold text-gray-600 uppercase tracking-wide my-4 mt-10 dark:text-gray-300"
        >
          Basic
        </h6>

        <Accordion
          type="single"
          class="w-full border"
          collapsible
          :default-value="defaultValue"
        >
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
          >
            <AccordionTrigger class="">{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div class="mb-10">
        <h6
          class="font-semibold text-gray-600 uppercase tracking-wide my-4 mt-10 dark:text-gray-300"
        >
          Outline
        </h6>

        <Accordion
          type="single"
          class="w-full space-y-2 border-0"
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
          class="font-semibold text-gray-600 uppercase tracking-wide my-4 mt-10 dark:text-gray-300"
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

    <!--  === Badge === -->
    <div>
      <h4 class="font-semibold text-primary uppercase tracking-wide mb-4">
        BADGE
      </h4>
      <div class="flex gap-3 items-center flex-wrap">
        <Badge>BADGE</Badge>
        <Badge variant="outline">BADGE</Badge>
        <Badge variant="translucent">BADGE</Badge>
        <Badge size="small">8</Badge>
        <Badge size="xsmall" shape="circle">8</Badge>
        <Badge size="xsmall">5</Badge>
        <Badge size="nxsmall" shape="circle"></Badge>
        <Badge>BADGE</Badge>
      </div>
    </div>

    <!--  === Card === -->
    <div class="">
      <h4 class="font-semibold text-primary uppercase tracking-wide mb-4 pt-5">
        CARD
      </h4>

      <div class="flex gap-8 flex-wrap items-start">
        <Card class="max-w-80">
          <CardHeader>
            <div
              class="flex justify-between px-[16px] py-[10px] items-center border-b border-gray200 dark:border-b-gray-700"
            >
              <CardTitle class="dark:text-gray-200"
                ><p class="">Title</p></CardTitle
              >
              <Button color="secondary" size="xsmall" class="font-10m"
                >Action</Button
              >
            </div>

            <CardDescription
              class="py-6 border-b border-gray200 dark:border-b-gray-700"
              ><p class="px-[16px]">
                The vows and named is he seven his origin myself any is
                decision-making. The interface of Jeni’s is simple and clean,
                with the section includes questions that are very specific to
                their customer group.
              </p>
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <h6 class="px-[16px] py-[10px] dark:text-gray-200">Footer</h6>
          </CardFooter>
        </Card>

        <Card class="max-w-80">
          <img src="../src/assets/images/base_1.png" class="w-full" alt="" />

          <CardHeader>
            <CardTitle class="px-[16px] pt-[28px] dark:text-gray-200"
              ><p class="">Title</p></CardTitle
            >

            <CardDescription
              class="px-[16px] pt-[16px] pb-6 border-b border-gray200 dark:border-b-gray-700"
              ><p>
                The vows and named is he seven his origin myself any is
                decision-making. The interface of Jeni’s is simple and clean,
                with the section includes questions that are very specific to
                their customer group.
              </p>
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <h6 class="font-14s px-[16px] py-[10px] dark:text-gray-200">
              Footer
            </h6>
          </CardFooter>
        </Card>

        <Card class="relative max-w-80">
          <img
            src="../src/assets/images/base_2.png"
            class="w-full h-full"
            alt=""
          />

          <CardHeader class="absolute top-0 px-[24px]">
            <CardTitle class="pt-[28px]"><p class="">Title</p></CardTitle>

            <CardDescription class="pt-[16px] text-gray400"
              ><p>
                The vows and named is he seven his origin myself any is
                decision-making.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>

    <!-- THEME -->
    <div class="container mx-auto pt-10 flex gap-6 flex-wrap items-center">
      <button @click="toggleDark()" class="mx-2" color="text-primary ">
        <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
        <i v-if="isDark" class="fa-regular fa-sun text-white"></i>
        <i v-else class="fa-solid fa-moon"></i>
      </button>
    </div>

    <!-- === Breadcum === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">
        BREADCRUMB
      </h5>

      <!-- Basic Breadcrumb -->
      <p class="mb-4 dark:text-gray-300">Basic Breadcrumb</p>
      <Breadcrumb class="border border-gray-300 px-5 py-6 rounded-lg">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/"> Home </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/product-page"> Product Page </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <p class="py-4 dark:text-gray-300">text with Icon</p>
      <Breadcrumb class="border border-gray-300 px-5 py-6 rounded-lg">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <i class="icon-Dot me-2"></i>Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/product-page"> Product Page </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <!-- === DROPDOWN === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">DROPDOWN</h5>

      <div class="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-1">
            Sorted By
            <i class="icon-down_ui ps-3"></i>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" class="rounded-lg border-0">
            <DropdownMenuItem>New</DropdownMenuItem>
            <DropdownMenuItem>Popular</DropdownMenuItem>
            <DropdownMenuItem>Price</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger
            class="flex items-center gap-1"
            variant="outline"
            color="primary"
          >
            Sorted By
            <i class="icon-down_ui ps-3"></i>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" class="rounded-lg border-0">
            <DropdownMenuItem variant="outline">New</DropdownMenuItem>
            <DropdownMenuItem variant="outline">Popular</DropdownMenuItem>
            <DropdownMenuItem variant="outline">Price</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>

    <!-- === TAB === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">TAB</h5>

      <div class="space-y-10 flex flex-col">
        <Tab :tabList="tabList1"></Tab>
        <Tab :tabList="tabList1" variant="button"></Tab>
        <Tab :tabList="tabList1" color="success"></Tab>
        <Tab :tabList="tabList1" variant="button" color="success"></Tab>
      </div>
    </div>

    <!-- === PAGINATION === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">
        PAGINATION
      </h5>

      <div class="space-y-10 flex flex-col">
        <Pagination
          v-slot="{ page }"
          :total="100"
          :sibling-count="1"
          show-edges
          :default-page="2"
        >
          <PaginationList
            v-slot="{ items }"
            class="flex items-center gap-[10px]"
          >
            <PaginationPrev class="rounded-full text-muted300" />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="w-10 h-10 p-0 rounded-full text-muted300 border-gray300"
                  variant="outline"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
            </template>

            <PaginationNext class="rounded-full text-muted300" />
          </PaginationList>
        </Pagination>

        <Pagination
          v-slot="{ page }"
          :total="100"
          :sibling-count="1"
          show-edges
          :default-page="2"
        >
          <PaginationList
            v-slot="{ items }"
            class="flex items-center gap-[10px]"
          >
            <PaginationPrev class="text-muted300" />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="w-10 h-10 p-0 text-muted300 border-gray300"
                  variant="outline"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
            </template>

            <PaginationNext class="text-muted300" />
          </PaginationList>
        </Pagination>

        <Pagination
          v-slot="{ page }"
          :total="100"
          :sibling-count="1"
          show-edges
          :default-page="2"
        >
          <PaginationList
            v-slot="{ items }"
            class="flex items-center gap-[10px]"
          >
            <PaginationPrev
              class="text-muted300 bg-gray200 border-transparent"
            />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="w-10 h-10 p-0 text-muted300 border-gray300"
                  variant="outline"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis
                v-else
                :key="item.type"
                :index="index"
                class="border text-muted300 w-10 h-10 rounded"
              />
            </template>

            <PaginationNext
              class="text-muted300 bg-gray200 border-transparent"
            />
          </PaginationList>
        </Pagination>
      </div>
    </div>

    <!-- === FORM === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">FORMS</h5>

      <div class="space-y-10 flex flex-col">
        <div class="grid w-full max-w-sm items-center gap-[10px]">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>

        <div class="grid w-full max-w-sm items-center gap-[10px]">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            class="bg-gray200"
          />
        </div>

        <div class="grid w-full max-w-sm items-center gap-[10px]">
          <Label for="email">Email</Label>
          <div class="relative">
            <Input id="email" type="email" placeholder="Email" class="pl-8" />
            <span
              class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
            >
              <i class="icon-Dot text-muted300"></i>
            </span>
          </div>
        </div>

        <!-- Checkbox -->
        <div class="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            for="terms"
            class="font-13sb text-muted300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Checked
          </label>
        </div>

        <!-- Checkbox -->
        <div class="flex items-center space-x-2">
          <Checkbox id="terms" class="rounded-full" />
          <label
            for="terms"
            class="font-13sb text-muted300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Checked
          </label>
        </div>
      </div>
    </div>

    <!-- Input Spin -->
    <div class="text-start flex gap-8">
      <InputSpin>
        <Button
          color="secondary"
          class="!text-base !text-muted-300 h-[36px] w-[36px] inline-flex justify-center"
          size="small"
        >
          <template #prefix>
            <i class="icon-minus"></i>
          </template>
        </Button>

        <FormInput
          size="custom"
          class="!border-0 px-1 h-[36px] w-[25px] z-10 inline-flex justify-center text-center !font-12m"
          value="0"
        >
        </FormInput>

        <Button
          color="secondary"
          class="!text-base !text-muted-300 h-[36px] w-[36px] z-10 inline-flex justify-center"
        >
          <template #suffix>
            <i class="icon-plus"></i>
          </template>
        </Button>
      </InputSpin>

      <InputSpin variant="filled">
        <Button
          color="secondary"
          class="!text-base !bg-white !text-muted-300 h-[36px] w-[36px] inline-flex justify-center"
          size="small"
        >
          <template #prefix>
            <i class="icon-minus"></i>
          </template>
        </Button>

        <FormInput
          size="custom"
          class="!border-0 px-1 !bg-transparent h-[36px] w-[25px] z-10 inline-flex justify-center text-center !font-12m"
          value="0"
        >
        </FormInput>

        <Button
          color="secondary"
          class="!text-base !bg-white !text-muted-300 h-[36px] w-[36px] z-10 inline-flex justify-center"
        >
          <template #suffix>
            <i class="icon-plus"></i>
          </template>
        </Button>
      </InputSpin>

      <InputSpin shape="pill">
        <Button
          color="secondary"
          shape="pill"
          class="!text-base !text-muted-300 h-[36px] w-[36px] inline-flex justify-center"
          size="small"
        >
          <template #prefix>
            <i class="icon-minus"></i>
          </template>
        </Button>

        <FormInput
          size="custom"
          class="!border-0 px-1 h-[36px] w-[25px] z-10 inline-flex justify-center text-center !font-12m"
          value="0"
        >
        </FormInput>

        <Button
          shape="pill"
          color="secondary"
          class="!text-base !text-muted-300 h-[36px] w-[36px] z-10 inline-flex justify-center"
        >
          <template #suffix>
            <i class="icon-plus"></i>
          </template>
        </Button>
      </InputSpin>
    </div>
  </div>
</template>
