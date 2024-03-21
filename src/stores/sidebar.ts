import { useMounted } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useWindowSize } from "@vueuse/core";
// import { onClickOutside } from "@vueuse/core";

export const useSidebar = defineStore("sidebar", () => {
  const dropdownToggle = ref(false);
  const isSidebarOpen = ref(false);
  const sidebarWidth = ref({
    width: 300,
  });
  const { width, height } = useWindowSize();
  const windowWidth = ref(768);

  //   METHODS
  const handleDropdownMenu = () => {
    dropdownToggle.value = !dropdownToggle.value;
  };

  const handleSidebarToggle = () => {
    windowWidth.value = width.value;

    if (windowWidth.value < 768) {
      isSidebarOpen.value = !isSidebarOpen.value;
    }

    // console.log(isSidebarOpen.value, windowWidth.value);
  };

  //   RETURN
  return {
    dropdownToggle,
    handleDropdownMenu,
    isSidebarOpen,
    handleSidebarToggle,
    sidebarWidth,
    windowWidth,
  };
});
