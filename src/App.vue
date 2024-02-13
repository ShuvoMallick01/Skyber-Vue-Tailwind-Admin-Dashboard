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

  <div class="container mx-auto py-10">
    <!--  === BUTTON === -->
    <h5 class="font-extrabold text-primary text-2xl block pb-5">BUTTON</h5>
    <div class="flex gap-6 flex-wrap items-center">
      <Button title="Primary" color="primary" />
      <Button title="Secondary" color="secondary" />
      <Button title="Info" color="info" />
      <Button title="Success" color="success" />
      <Button title="Warning" color="warning" />
      <Button title="Error" color="error" />

      <Button title="Primary" size="small" color="primary" />
      <Button title="Secondary" size="small" color="secondary" />
      <Button title="Info" size="small" color="info" />
      <Button title="Success" size="small" color="success" />
      <Button title="Warning" size="small" color="warning" />
      <Button title="Error" size="small" color="error" />

      <Button title="Primary" color="primary" shape="pill" />
      <Button title="Secondary" color="secondary" shape="pill" />
      <Button title="Info" color="info" shape="pill" />
      <Button title="Success" color="success" shape="pill" />
      <Button title="Warning" color="warning" shape="pill" />
      <Button title="Error" color="error" shape="pill" />

      <!-- Outline -->
      <Button title="Primary" variant="outline" color="primary" />
      <Button title="Secondary" variant="outline" color="secondary" />
      <Button title="Info" variant="outline" color="info" />
      <Button title="Success" variant="outline" shape="pill" color="success" />
      <Button title="Warning" variant="outline" size="medium" color="warning" />
      <Button title="Error" variant="outline" size="small" color="error" />

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
      <Button
        title="Warning"
        variant="translucent"
        size="medium"
        color="warning"
      />
      <Button title="Error" variant="translucent" size="small" color="error" />

      <!-- Icon Button -->
      <Button title="Primary" class="" color="primary">
        <template #prefix>
          <svg
            width="15"
            height="15"
            viewBox="0 0 30 30"
            fill="none"
            class="me-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              fill="#FFFFFF"
            />
          </svg>
        </template>
      </Button>

      <Button title="Primary" variant="outline" color="primary" class="group">
        <template #prefix>
          <span class="">
            <svg
              width="15"
              height="15"
              viewBox="0 0 30 30"
              fill="none"
              class="me-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
                class="fill-primary group-hover:fill-white transition-300"
              />
            </svg>
          </span>
        </template>
      </Button>

      <Button title="Secondary" variant="outline" color="secondary" class="">
        <template #prefix>
          <span class="">
            <svg
              width="15"
              height="15"
              viewBox="0 0 30 30"
              fill="none"
              class="me-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
                class="fill-text-400 group-hover:fill-white transition-300"
              />
            </svg>
          </span>
        </template>
      </Button>
    </div>

    <!-- === ICON === -->
    <h5 class="font-extrabold text-primary text-2xl block pb-5 pt-10">ICON</h5>
    <div class="flex gap-6 flex-wrap items-center">
      <!-- Primary -->
      <IconButton color="primary">
        <template #icon>
          <svg
            width="26"
            height="26"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-white group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton color="primary">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-white group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton color="primary">
        <template #icon>
          <svg
            width="14"
            height="14"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-white group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton color="secondary">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-text-muted group-hover:fill-text-400 transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton color="info">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-white group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <!-- Outline -->
      <IconButton variant="outline" color="primary">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-primary group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton variant="outline" color="secondary">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-text-muted group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton variant="outline" color="info">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-info group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <!-- Transparent -->
      <IconButton variant="translucent" color="primary">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-primary group-hover:fill-primary-darker transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton variant="translucent" color="secondary">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-text-muted group-hover:fill-text-400 transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton variant="translucent" color="info">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-info group-hover:fill-info-darker transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <!-- Circle -->
      <IconButton color="primary" shape="circle">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-white group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>

      <IconButton color="primary" variant="outline" shape="circle">
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 15C28 17.3585 27.4188 19.5336 26.2565 21.5254C25.0942 23.5171 23.5171 25.0942 21.5254 26.2565C19.5336 27.4188 17.3585 28 15 28C12.6415 28 10.4664 27.4188 8.47461 26.2565C6.48286 25.0942 4.90582 23.5171 3.74349 21.5254C2.58116 19.5336 2 17.3585 2 15C2 12.6415 2.58116 10.4664 3.74349 8.47461C4.90582 6.48286 6.48286 4.90582 8.47461 3.74349C10.4664 2.58116 12.6415 2 15 2C17.3585 2 19.5336 2.58116 21.5254 3.74349C23.5171 4.90582 25.0942 6.48286 26.2565 8.47461C27.4188 10.4664 28 12.6415 28 15Z"
              class="fill-primary group-hover:fill-white transition-300"
            />
          </svg>
        </template>
      </IconButton>
    </div>

    <!-- === ALERT === -->
    <h5 class="font-extrabold text-primary text-2xl block pb-5 pt-10">ALERT</h5>
    <div class="flex gap-6 flex-wrap items-center">
      <!-- Primary -->
      <Alert color="primary" title="Regular Primary">
        <template #icon>
          <i class="fa-solid fa-circle-exclamation"></i>
        </template>

        <template #description>
          <p class="font-medium text-xs mt-2">
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
          <i class="fa-solid fa-circle-exclamation"></i>
        </template>

        <template #description>
          <p class="font-medium text-xs mt-2">
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
          <i class="fa-solid fa-circle-exclamation"></i>
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
          <i class="fa-solid fa-circle-exclamation"></i>
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
          <i class="fa-solid fa-circle-exclamation"></i>
        </template>

        <template #description>
          <p class="font-medium text-xs mt-2">
            This is an primary alert — check it out!
          </p>
        </template>

        <template #action>
          <i class="fa-solid fa-x cursor-pointer"></i>
        </template>
      </Alert>

      <Alert color="warning" variant="filled" title="Regular Primary">
        <template #icon>
          <i class="fa-solid fa-circle-exclamation"></i>
        </template>

        <template #description>
          <p class="font-medium text-xs mt-2">
            This is an primary alert — check it out!
          </p>
        </template>

        <template #action>
          <i class="fa-solid fa-x cursor-pointer"></i>
        </template>
      </Alert>

      <!-- Outline -->
      <Alert color="primary" variant="outline" title="Outline Primary">
        <template #icon>
          <i class="fa-solid fa-circle-exclamation"></i>
        </template>

        <template #description>
          <p class="font-medium text-xs mt-2">
            This is an primary alert — check it out!
          </p>
        </template>

        <template #action>
          <i class="fa-solid fa-x cursor-pointer"></i>
        </template>
      </Alert>

      <Alert color="warning" variant="outline" title="Outline Primary">
        <template #icon>
          <i class="fa-solid fa-circle-exclamation"></i>
        </template>

        <template #description>
          <p class="font-medium text-xs mt-2">
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
