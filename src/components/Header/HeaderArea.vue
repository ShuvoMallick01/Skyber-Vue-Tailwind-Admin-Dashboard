<script setup lang="ts">
import { useSidebar } from "@/stores/sidebar";
import { useWindowScroll } from "@vueuse/core";
import Input from "../ui/input/Input.vue";
import Button from "../ui/button/Button.vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-vue-next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import DropdownNotification from "../Header/DropdownNotification.vue";
import DropdownUserProfile from "./DropdownUserProfile.vue";
import DropdownLanguage from "./DropdownLanguage.vue";

// State
const isDark = useDark();
const toggleDark = useToggle(isDark);
const sidebarStore = useSidebar();
const { x, y } = useWindowScroll({ behavior: "smooth" });
const onSearchbox = ref(false);
const target = ref(null);
const languageDropdown = ref([
  {
    id: 1,
    title: "English",
    icon: "",
  },
  {
    id: 2,
    title: "Spanish",
    icon: "",
  },
  {
    id: 3,
    title: "Bengali",
    icon: "",
  },
]);

// Methods
import { useDark, useToggle, useElementHover } from "@vueuse/core";

onClickOutside(target, (event) => {
  onSearchbox.value = !onSearchbox.value;
});
</script>

<!-- TEMPLATE -->
<template>
  <header
    class="sticky top-0 z-[1001] 9 px-7 2xl:px-20 w-full flex items-center justify-between py-5 mx-auto transition-all"
    :class="{
      'bg-white/10 backdrop-blur-sm shadow-sm py-4 dark:bg-dark-bgPrimary dark:border-l-gray-700':
        y > 0,
    }"
  >
    <!-- Toggle  -->
    <button @click="sidebarStore.handleSidebarToggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.5076 7H3.50128C3.22504 7 3.0011 6.77614 3.0011 6.5V5.5C3.0011 5.22386 3.22504 5 3.50128 5H20.5076C20.7838 5 21.0078 5.22386 21.0078 5.5V6.5C21.0078 6.77614 20.7838 7 20.5076 7ZM15.0055 12.5V11.5C15.0055 11.2239 14.7816 11 14.5054 11H3.50128C3.22504 11 3.0011 11.2239 3.0011 11.5V12.5C3.0011 12.7761 3.22504 13 3.50128 13H14.5054C14.7816 13 15.0055 12.7761 15.0055 12.5ZM9.00332 17.5V18.5C9.00332 18.7761 8.77938 19 8.50314 19H3.50128C3.22504 19 3.0011 18.7761 3.0011 18.5V17.5C3.0011 17.2239 3.22504 17 3.50128 17H8.50314C8.77938 17 9.00332 17.2239 9.00332 17.5Z"
          fill="#2499EF"
        />
      </svg>
    </button>

    <!-- Right  -->
    <div class="flex items-center gap-[16px]">
      <!-- Search Button -->
      <button @click="() => (onSearchbox = true)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.8751 15.4554L20.8751 19.4602C21.0538 19.6589 21.045 19.9631 20.8551 20.1511L20.1551 20.8519C20.0612 20.9467 19.9334 21 19.8001 21C19.6668 21 19.539 20.9467 19.4451 20.8519L15.4451 16.8471C15.3345 16.7362 15.2341 16.6156 15.1451 16.4867L14.3951 15.4855C13.1542 16.4776 11.6132 17.0178 10.0251 17.0173C6.75273 17.0287 3.90914 14.7686 3.17785 11.5751C2.44656 8.38161 4.02273 5.10699 6.97322 3.68991C9.92371 2.27284 13.4611 3.09151 15.4911 5.66125C17.5211 8.23099 17.502 11.866 15.4451 14.4142L16.4451 15.105C16.6013 15.2051 16.7455 15.3226 16.8751 15.4554ZM5.0251 10.0089C5.0251 12.7736 7.26368 15.0149 10.0251 15.0149C11.3512 15.0149 12.623 14.4875 13.5606 13.5487C14.4983 12.6099 15.0251 11.3366 15.0251 10.0089C15.0251 7.24412 12.7865 5.00284 10.0251 5.00284C7.26368 5.00284 5.0251 7.24412 5.0251 10.0089Z"
            fill="#96ABC4"
          />
        </svg>
      </button>

      <!-- Search Box -->
      <form
        v-if="onSearchbox"
        ref="target"
        class="w-full absolute top-0 left-0 px-20 transition-all shadow-sm"
      >
        <div class="relative flex items-center">
          <Input
            class="pl-9 my-2 h-14"
            id="search"
            type="search"
            placeholder="Search..."
          >
          </Input>

          <span class="absolute top-1/2 -translate-y-1/2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.8751 15.4554L20.8751 19.4602C21.0538 19.6589 21.045 19.9631 20.8551 20.1511L20.1551 20.8519C20.0612 20.9467 19.9334 21 19.8001 21C19.6668 21 19.539 20.9467 19.4451 20.8519L15.4451 16.8471C15.3345 16.7362 15.2341 16.6156 15.1451 16.4867L14.3951 15.4855C13.1542 16.4776 11.6132 17.0178 10.0251 17.0173C6.75273 17.0287 3.90914 14.7686 3.17785 11.5751C2.44656 8.38161 4.02273 5.10699 6.97322 3.68991C9.92371 2.27284 13.4611 3.09151 15.4911 5.66125C17.5211 8.23099 17.502 11.866 15.4451 14.4142L16.4451 15.105C16.6013 15.2051 16.7455 15.3226 16.8751 15.4554ZM5.0251 10.0089C5.0251 12.7736 7.26368 15.0149 10.0251 15.0149C11.3512 15.0149 12.623 14.4875 13.5606 13.5487C14.4983 12.6099 15.0251 11.3366 15.0251 10.0089C15.0251 7.24412 12.7865 5.00284 10.0251 5.00284C7.26368 5.00284 5.0251 7.24412 5.0251 10.0089Z"
                fill="#96ABC4"
              />
            </svg>
          </span>

          <Button class="absolute end-0 top-1/2 -translate-y-1/2 h-2 mx-2"
            >Search</Button
          >
        </div>
      </form>

      <!-- Dark Mode -->
      <button @click="toggleDark()" color="text-primary ">
        <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
        <svg
          v-if="isDark"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.4837 5H12.4823C12.7581 5 12.9816 4.77614 12.9816 4.5V2.5C12.9816 2.22386 12.7581 2 12.4823 2H11.4837C11.208 2 10.9845 2.22386 10.9845 2.5V4.5C10.9845 4.77614 11.208 5 11.4837 5ZM16.9759 12C16.9759 14.7614 14.7405 17 11.983 17C9.22554 17 6.99017 14.7614 6.99017 12C6.99017 9.23858 9.22554 7 11.983 7C14.7405 7 16.9759 9.23858 16.9759 12ZM10.9845 19.5C10.9845 19.2239 11.208 19 11.4837 19H12.4823C12.7581 19 12.9816 19.2239 12.9816 19.5V21.5C12.9816 21.7761 12.7581 22 12.4823 22H11.4837C11.208 22 10.9845 21.7761 10.9845 21.5V19.5ZM21.4694 11H19.4723C19.1966 11 18.973 11.2239 18.973 11.5V12.5C18.973 12.7761 19.1966 13 19.4723 13H21.4694C21.7452 13 21.9687 12.7761 21.9687 12.5V11.5C21.9687 11.2239 21.7452 11 21.4694 11ZM4.99303 11.5V12.5C4.99303 12.7761 4.76949 13 4.49374 13H2.4966C2.22085 13 1.99731 12.7761 1.99731 12.5V11.5C1.99731 11.2239 2.22085 11 2.4966 11H4.49374C4.76949 11 4.99303 11.2239 4.99303 11.5ZM17.2754 7.4C17.3692 7.49466 17.4968 7.5479 17.6299 7.5479C17.7631 7.5479 17.8907 7.49466 17.9844 7.4L19.3924 6C19.4869 5.90612 19.5401 5.77832 19.5401 5.645C19.5401 5.51168 19.4869 5.38388 19.3924 5.29L18.6934 4.59C18.5997 4.49534 18.4721 4.4421 18.3389 4.4421C18.2058 4.4421 18.0782 4.49534 17.9844 4.59L16.5764 6C16.4819 6.09388 16.4288 6.22168 16.4288 6.355C16.4288 6.48832 16.4819 6.61612 16.5764 6.71L17.2754 7.4ZM6.3361 16.4521C6.46923 16.4521 6.59685 16.5053 6.6906 16.6L7.3896 17.29C7.48412 17.3839 7.53728 17.5117 7.53728 17.645C7.53728 17.7783 7.48412 17.9061 7.3896 18L5.98161 19.41C5.88786 19.5047 5.76025 19.5579 5.62712 19.5579C5.49399 19.5579 5.36638 19.5047 5.27263 19.41L4.57363 18.71C4.47911 18.6161 4.42594 18.4883 4.42594 18.355C4.42594 18.2217 4.47911 18.0939 4.57363 18L5.98161 16.6C6.07536 16.5053 6.20298 16.4521 6.3361 16.4521ZM17.9744 16.6C17.8807 16.5053 17.7531 16.4521 17.62 16.4521C17.4868 16.4521 17.3592 16.5053 17.2655 16.6L16.5665 17.3C16.4719 17.3939 16.4188 17.5217 16.4188 17.655C16.4188 17.7883 16.4719 17.9161 16.5665 18.01L17.9744 19.42C18.0682 19.5147 18.1958 19.5679 18.3289 19.5679C18.4621 19.5679 18.5897 19.5147 18.6834 19.42L19.3824 18.72C19.477 18.6261 19.5301 18.4983 19.5301 18.365C19.5301 18.2317 19.477 18.1039 19.3824 18.01L17.9744 16.6ZM6.34609 7.5479C6.21296 7.5479 6.08535 7.49466 5.9916 7.4L4.58361 5.99C4.48909 5.89612 4.43592 5.76832 4.43592 5.635C4.43592 5.50168 4.48909 5.37388 4.58361 5.28L5.28261 4.58C5.37636 4.48534 5.50398 4.4321 5.6371 4.4321C5.77023 4.4321 5.89785 4.48534 5.9916 4.58L7.3896 6C7.5827 6.19169 7.58713 6.50287 7.39958 6.7L6.70058 7.4C6.60683 7.49466 6.47922 7.5479 6.34609 7.5479Z"
            fill="#FFC675"
          />
        </svg>
        <i v-else class="fa-solid fa-moon"></i>
      </button>

      <!-- Language -->
      <DropdownLanguage />

      <!-- Notification -->
      <DropdownNotification />

      <!-- Profile Info -->
      <DropdownUserProfile />
    </div>
  </header>
</template>
