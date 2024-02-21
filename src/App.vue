<!-- SCRIPT -->
<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import {
  useDark,
  useToggle,
  useElementHover,
  onClickOutside,
} from "@vueuse/core";

import Button from "./components/button/Button.vue";
import IconButton from "./components/button/IconButton.vue";
import Alert from "./components/Alert.vue";
import Badge from "./components/Badge/Badge.vue";
import BadgeIcon from "./components/Badge/BadgeIcon.vue";
import Card from "./components/Card.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Dropdown from "./components/Dropdown.vue";
import Tab from "./components/Tab.vue";
import Pagination from "./components/Pagination.vue";
import FormInput from "./components/Form/FormInput.vue";
import FormSelect from "./components/Form/FormSelect.vue";
import Checkbox from "./components/Form/Checkbox.vue";
import InputSpin from "./components/Advance/InputSpin.vue";
import Accordion from "./components/Accordion.vue";

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
    <div class="space-y-4">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">BUTTON</h5>
      <div class="flex gap-6 flex-wrap items-center">
        <Button title="Primary" color="primary" />
        <Button title="Secondary" color="secondary" />
        <Button title="Info" color="info" />
        <Button title="Success" color="success" />
        <Button title="Warning" color="warning" />
        <Button title="Error" color="error" />
      </div>

      <div class="flex gap-6 flex-wrap items-center">
        <Button title="Primary" size="small" color="primary" />
        <Button title="Secondary" size="small" color="secondary" />
        <Button title="Info" size="small" color="info" />
        <Button title="Success" size="small" color="success" />
        <Button title="Warning" size="small" color="warning" />
        <Button title="Error" size="small" color="error" />
      </div>

      <div class="flex gap-6 flex-wrap items-center">
        <!-- Outline -->
        <Button title="Primary" variant="outline" color="primary" />
        <Button title="Secondary" variant="outline" color="secondary" />
        <Button title="Info" variant="outline" color="info" />
        <Button
          title="Success"
          variant="outline"
          shape="pill"
          color="success"
        />
      </div>

      <div class="flex gap-6 flex-wrap items-center">
        <!-- translucent -->
        <Button title="Primary" variant="translucent" color="primary" />
        <Button title="Secondary" variant="translucent" color="secondary" />
        <Button title="Info" variant="translucent" color="info" />
        <Button
          title="Success"
          variant="translucent"
          shape="pill"
          color="success"
        />
        <Button title="Warning" variant="translucent" color="warning" />
        <Button
          title="Error"
          variant="translucent"
          size="small"
          color="error"
        />

        <div class="flex gap-6 flex-wrap items-center">
          <!-- Icon Button -->
          <Button title="Primary" color="primary">
            <template #prefix>
              <i class="icon-Dot me-2"></i>
            </template>
          </Button>

          <Button
            title="Primary"
            variant="outline"
            color="primary"
            class="group"
          >
            <template #prefix>
              <i class="icon-Dot me-2"></i>
            </template>
          </Button>
        </div>
      </div>
    </div>

    <!-- === ICON === -->
    <div>
      <h5 class="font-extrabold text-primary text-2xl block pb-5 pt-10">
        ICON
      </h5>
      <div class="flex gap-6 flex-wrap items-center">
        <!-- Primary -->
        <IconButton color="primary">
          <template #icon>
            <i class="icon-Dot"></i>
          </template>
        </IconButton>

        <IconButton color="secondary">
          <template #icon>
            <i class="icon-Dot"></i>
          </template>
        </IconButton>

        <IconButton color="info">
          <template #icon>
            <i class="icon-Dot"></i>
          </template>
        </IconButton>

        <!-- Outline -->
        <IconButton variant="outline" color="primary">
          <template #icon>
            <i class="icon-Dot"></i>
          </template>
        </IconButton>

        <IconButton variant="outline" color="info">
          <template #icon>
            <i class="icon-Dot"></i>
          </template>
        </IconButton>

        <!-- Transparent -->
        <IconButton variant="translucent" color="primary">
          <template #icon>
            <i class="icon-Dot"></i>
          </template>
        </IconButton>

        <IconButton variant="translucent" color="info">
          <template #icon>
            <i class="icon-Dot"></i>
          </template>
        </IconButton>
      </div>
    </div>

    <!-- === ALERT === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">ALERT</h5>
      <div class="flex gap-6 flex-wrap items-center">
        <!-- Primary -->
        <Alert color="primary" title="Regular Primary">
          <template #icon>
            <i class="icon-info text-xl leading-none"></i>
          </template>

          <template #description>
            <p class="font-medium text-xs mt-1 ms-7">
              This is an primary alert — check it out!
            </p>
          </template>

          <template #action>
            <i class="fa-solid fa-x cursor-pointer"></i>
          </template>
        </Alert>

        <!-- Info -->
        <Alert color="info" title="Regular Primary">
          <template #icon>
            <i class="icon-info text-xl leading-none"></i>
          </template>

          <template #description>
            <p class="font-medium text-xs mt-1 ms-7">
              This is an primary alert — check it out!
            </p>
          </template>

          <template #action>
            <i class="fa-solid fa-x cursor-pointer"></i>
          </template>
        </Alert>

        <!-- Action -->
        <Alert color="info" title="Regular Primary">
          <template #icon>
            <i class="icon-info text-xl leading-none"></i>
          </template>

          <template #action>
            <div class="flex gap-2">
              <Button
                title="Undo"
                variant="outline"
                color="primary"
                size="small"
              ></Button>

              <Button title="Action" color="primary" size="small"></Button>
            </div>
          </template>
        </Alert>

        <!-- Action -->
        <Alert color="warning" title="Regular Primary">
          <template #icon>
            <i class="icon-info text-xl leading-none"></i>
          </template>

          <template #action>
            <div class="flex gap-2">
              <Button
                title="Undo"
                variant="outline"
                color="warning"
                size="small"
              ></Button>

              <Button title="Action" color="warning" size="small"></Button>
            </div>
          </template>
        </Alert>

        <!-- Fill -->
        <Alert color="primary" variant="filled" title="Regular Primary">
          <template #icon>
            <i class="icon-info text-xl leading-none"></i>
          </template>

          <template #description>
            <p class="font-medium text-xs mt-1 ms-7">
              This is an primary alert — check it out!
            </p>
          </template>

          <template #action>
            <i class="fa-solid fa-x cursor-pointer"></i>
          </template>
        </Alert>

        <Alert color="warning" variant="filled" title="Regular Primary">
          <template #icon>
            <i class="icon-info text-xl leading-none"></i>
          </template>

          <template #description>
            <p class="font-medium text-xs mt-1 ms-7">
              This is an primary alert — check it out!
            </p>
          </template>

          <template #action>
            <i class="fa-solid fa-x cursor-pointer"></i>
          </template>
        </Alert>
      </div>
    </div>

    <!-- === BADGE === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">BADGE</h5>

      <div class="flex gap-6 flex-wrap items-center">
        <Badge title="Primary"></Badge>
        <Badge title="Primary" variant="translucent"></Badge>
        <Badge title="Primary" variant="outline"></Badge>
      </div>
    </div>

    <!-- === BADGE ICON === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">
        BADGE ICON
      </h5>

      <div class="flex gap-6 flex-wrap items-center">
        <Badge title="5" size="small"></Badge>
        <Badge title="5" size="small" shape="pill"></Badge>

        <div class="relative">
          <Button title="Button Badge"></Button>
          <div class="absolute top-0 right-0 mt-[-10px] mr-[-10px]">
            <Badge title="5" size="small" shape="pill" color="error"></Badge>
          </div>
        </div>

        <BadgeIcon variant="icon-without-content">
          <template #button>
            <Button title="Button Badge"></Button>
          </template>

          <template #icon>
            <Badge size="small" shape="pill" color="error"></Badge>
          </template>
        </BadgeIcon>

        <BadgeIcon variant="icon">
          <template #button>
            <i class="icon-email text-4xl leading-none"></i>
          </template>

          <template #icon>
            <Badge size="small" shape="pill" color="error"></Badge>
          </template>
        </BadgeIcon>

        <BadgeIcon>
          <template #button>
            <i class="icon-email text-4xl leading-none"></i>
          </template>

          <template #icon>
            <Badge size="small" title="0" shape="pill" color="error"></Badge>
          </template>
        </BadgeIcon>
      </div>
    </div>

    <!-- === CARD === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">CARD</h5>

      <div class="flex gap-6 flex-wrap items-center">
        <Card class="shadow-md rounded-lg border max-w-96">
          <template #body>
            <div class="card-padding flex justify-between items-center">
              <h5 class="card-title">Card title</h5>
              <Button
                color="secondary"
                title="Action"
                size="small"
                class="text-text-200 bg-red-400"
              ></Button>
            </div>
            <hr />
            <p class="card-description py-4 px-5">
              The vows and named is he seven his origin myself any is
              decision-making. The interface of Jeni’s is simple and clean, with
              the section includes questions that are very specific to their
              customer group.
            </p>
            <hr />
          </template>

          <template #footer>
            <div class="card-padding">
              <h5 class="card-title">Footer</h5>
            </div>
          </template>
        </Card>

        <Card class="shadow-md rounded-lg border max-w-96">
          <template #top-image>
            <img
              src="../src/assets/images/base_1.png"
              class="w-full card-image"
            />
          </template>

          <template #body>
            <div class="mt-4 card-padding flex justify-between items-center">
              <h5 class="card-title">Card title</h5>
            </div>

            <p class="card-description card-padding">
              The vows and named is he seven his origin myself any is
              decision-making. The interface of Jeni’s is simple and clean, with
              the section includes questions that are very specific to their
              customer group.
            </p>
            <hr />
          </template>

          <template #footer>
            <div class="card-padding !py-4">
              <h5 class="card-title">Footer</h5>
            </div>
          </template>
        </Card>

        <Card class="shadow-md rounded-lg border max-w-96 relative">
          <template #top-image>
            <img
              src="../src/assets/images/base_2.png"
              class="w-full card-image"
            />
          </template>

          <template #body>
            <div class="mt-4 card-padding absolute top-0 left-0">
              <h5 class="card-title">Card title</h5>
              <p class="card-description !text-text-main py-3">
                The vows and named is he seven his origin myself any is
                decision-making.
              </p>
            </div>
          </template>
        </Card>

        <Card class="shadow-md rounded-lg border max-w-96">
          <template #body>
            <div class="mt-4 card-padding flex justify-between items-center">
              <h5 class="card-title">Card title</h5>
            </div>

            <p class="card-description card-padding !text-text-main">
              The vows and named is he seven his origin myself any is
              decision-making.
            </p>
          </template>

          <template #bottom-image>
            <img
              src="../src/assets/images/base_3.png"
              class="w-full card-image mt-6"
            />
          </template>
        </Card>

        <Card class="shadow-md rounded-lg border max-w-96">
          <template #top-image>
            <img
              src="../src/assets/images/avatar/avatar-1.png"
              class="w-[46px] h-[46px] mx-auto mt-[77px]"
            />
          </template>

          <template #body>
            <div class="card-padding text-center">
              <h5 class="text-text-main font-body-14sm font-semibold">
                Gabriel Palmer
              </h5>
              <p class="card-description">UI/UX Designer</p>
              <p class="card-description py-4">
                The vows and named is he seven his origin myself any is
                decision-making.
              </p>
            </div>
          </template>

          <template #footer>
            <div class="flex justify-center items-center gap-3 pb-6">
              <i class="icon-facebook_square-1"></i>
              <i class="icon-twitter-1"></i>
              <i class="icon-linkedin_square"></i>
              <i class="icon-Instagram leading-none"></i>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- === BREADCRUMB === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">CARD</h5>
      <!-- Basic Breadcrumb -->
      <p class="mb-4">Basic Breadcrumb</p>
      <div class="flex gap-6 flex-wrap items-center">
        <Breadcrumb :breadcrumbList="breadcrumbList"></Breadcrumb>
      </div>

      <p class="py-4">text with Icon</p>
      <div class="flex gap-6 flex-wrap items-center">
        <Breadcrumb :breadcrumbList="breadcrumbList2"></Breadcrumb>
      </div>
    </div>

    <!-- === DROPDOWN === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">DROPDOWN</h5>
      <div class="flex gap-6 flex-wrap items-center">
        <Dropdown
          :dropdownList="dropdownList"
          title="Sorted By"
          variant="primary"
          color="primary"
        ></Dropdown>

        <Dropdown
          :dropdownList="dropdownList"
          title="Sorted By"
          variant="filled"
          color="info"
        ></Dropdown>

        <Dropdown
          :dropdownList="dropdownList"
          title="Sorted By"
          variant="filled"
          color="success"
        ></Dropdown>

        <Dropdown
          :dropdownList="dropdownList"
          title="Sorted By"
          variant="outline"
          color="primary"
        ></Dropdown>

        <Dropdown
          :dropdownList="dropdownList"
          title="Sorted By"
          variant="outline"
          color="info"
        ></Dropdown>

        <Dropdown
          :dropdownList="dropdownList"
          title="Sorted By"
          variant="outline"
          color="success"
        ></Dropdown>
      </div>
    </div>

    <!-- === TABS === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">TABS</h5>
      <div class="space-y-8">
        <Tab :tabList="tabList1" variant="normal"></Tab>
        <Tab :tabList="tabList2" color="info"></Tab>

        <Tab
          :tabList="tabList1"
          variant="button"
          color="primary"
          size="medium-button"
        ></Tab>
        <Tab
          :tabList="tabList2"
          color="primary"
          variant="button"
          size="medium-button"
        ></Tab>
      </div>
    </div>

    <!-- === PAGINATION === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">
        PAGINATION
      </h5>
      <div class="flex gap-6 flex-wrap items-center">
        <Pagination
          :paginationList="paginationList1"
          before="icon-chevron_left"
          after="icon-chevron_right"
        ></Pagination>

        <Pagination
          :paginationList="paginationList1"
          before="icon-chevron_left"
          after="icon-chevron_right"
          shape="rounded"
        ></Pagination>

        <Pagination
          :paginationList="paginationList1"
          before="icon-chevron_left"
          after="icon-chevron_right"
          color="secondary"
        ></Pagination>
      </div>
    </div>

    <!-- ==== THEME ==== -->
    <div class="container mx-auto pt-10 flex gap-6 flex-wrap items-center">
      <button @click="toggleDark()" class="mx-2" color="text-primary ">
        <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
        <i v-if="isDark" class="fa-regular fa-sun text-white"></i>
        <i v-else class="fa-solid fa-moon"></i>
      </button>
    </div>

    <!-- === FORMS === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">FORMS</h5>

      <!-- Input Field -->
      <div class="space-y-5">
        <h5>Input Field</h5>
        <FormInput
          labelName="Basic Input"
          required
          id="basicName"
          placeholder="Text Input"
        />

        <FormInput
          labelName="Label Name"
          required
          id="labelName"
          placeholder="Text Input"
          size="search-medium-prefix"
        >
          <template #prefix>
            <i class="icon-Dot text-muted-300 top-0 input-icon-position"></i>
          </template>
        </FormInput>

        <FormInput
          labelName="Label Name"
          required
          id="labelName"
          placeholder="Text Input"
          size="search-medium-suffix"
        >
          <template #suffix>
            <i
              class="icon-Dot text-muted-300 absolute top-0 end-0 input-icon-position"
            ></i>
          </template>
        </FormInput>

        <!-- 2ND VERSION -->
        <FormInput
          variant="filled"
          labelName="Basic Input"
          required
          id="basicName"
          placeholder="Text Input"
        />

        <FormInput
          variant="filled"
          labelName="Label Name"
          required
          id="labelName"
          placeholder="Text Input"
          size="search-medium-prefix"
        >
          <template #prefix>
            <i class="icon-Dot text-muted-300 top-0 input-icon-position"></i>
          </template>
        </FormInput>
      </div>

      <!-- Input Field -->
      <div class="space-y-5 pt-10">
        <h5>Select Field</h5>
        <FormSelect
          :optionList="optionList"
          labelName="Basic Input"
          required
          id="basicName"
          placeholder="Text Input"
        />
      </div>
    </div>

    <!-- === ADVANCED ELEMENT === -->
    <!-- ==== THEME ==== -->
    <div class="container mx-auto pt-10 flex gap-6 flex-wrap items-center">
      <button @click="toggleDark()" class="mx-2" color="text-primary ">
        <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
        <i v-if="isDark" class="fa-regular fa-sun text-white"></i>
        <i v-else class="fa-solid fa-moon"></i>
      </button>
    </div>

    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">
        ADVANCED ELEMENT
      </h5>

      <div class="items-center space-y-6">
        <FormSelect
          :optionList="optionList"
          labelName="Basic Input"
          required
          id="basicName"
          placeholder="Text Input"
          customInputClass="!px-20 "
          class="!border-gray200 w-full"
          size="custom"
        >
          <template #prefix>
            <span class="input-icon-position bg-gray200">
              <div class="flex gap-1 items-center text-slate-400 font-13m">
                <i class="icon-flag"></i>
                <span>+44</span>
              </div>
            </span>
          </template>
        </FormSelect>

        <div class="text-start flex gap-8">
          <Checkbox labelName="Checkbox"></Checkbox>
          <Checkbox labelName="Checkbox" shape="circle"></Checkbox>
        </div>

        <div class="text-start flex gap-8">
          <Checkbox
            labelName="Checkbox"
            variant="outline"
            color="primary"
          ></Checkbox>
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
    </div>

    <!-- === ACCORDION === -->
    <div class="pt-10">
      <h5 class="font-extrabold text-primary text-2xl block pb-5">ACCORDION</h5>

      <!-- Input Field -->
      <div class="space-y-5">
        <Accordion />
      </div>
    </div>
  </div>
</template>
