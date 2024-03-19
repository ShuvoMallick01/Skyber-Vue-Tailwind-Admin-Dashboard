import { defineStore } from "pinia";
import { ref } from "vue";
// import { onClickOutside } from "@vueuse/core";

export const useSidebar = defineStore("sidebar", () => {
  const toggle = ref(false);
  //   const target = ref(null);
  const isSidebarOpen = ref(false);

  //   METHODS
  //   onClickOutside(target, (event) => {
  //     isSidebarOpen.value = false;
  //     console.log(isSidebarOpen.value);
  //   });

  const handleDropdownMenu = () => {
    toggle.value = !toggle.value;
  };

  const handleSidebarToggle = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
    console.log(isSidebarOpen.value);
  };
  //   RETURN
  return { toggle, handleDropdownMenu, isSidebarOpen, handleSidebarToggle };
});
