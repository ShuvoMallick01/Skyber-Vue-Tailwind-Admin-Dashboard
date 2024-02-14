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

// State
const isDark = useDark();
// const target = ref(null);
const toggleDark = useToggle(isDark);

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

  <div class="container mx-auto py-10 space-y-4">
    <!--  === BUTTON === -->
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
      <Button title="Success" variant="outline" shape="pill" color="success" />
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
      <Button title="Error" variant="translucent" size="small" color="error" />
    </div>

    <div class="flex gap-6 flex-wrap items-center">
      <!-- Icon Button -->
      <Button title="Primary" color="primary">
        <template #prefix>
          <i class="icon-Dot me-2"></i>
        </template>
      </Button>

      <Button title="Primary" variant="outline" color="primary" class="group">
        <template #prefix>
          <i class="icon-Dot me-2"></i>
        </template>
      </Button>
    </div>

    <!-- === ICON === -->
    <h5 class="font-extrabold text-primary text-2xl block pb-5 pt-10">ICON</h5>
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

    <!-- === ALERT === -->
    <h5 class="font-extrabold text-primary text-2xl block pb-5 pt-10">ALERT</h5>
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
</template>
