<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IconButton from "@/components/ui/button/IconButton.vue";
import ButtonActionDropdown from "@/components/ui/button/ButtonActionDropdown.vue";
import { jobList } from "@/data/jobList";
import Badge from "@/components/ui/badge/Badge.vue";

const jobs = ref([...jobList]);
const actions = ref(["Delete", "View"]);
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="py-6 px-5 col-span-3 xl:col-span-2 shadow-small">
    <CardTitle class="mb-4 dark:text-white">Job List</CardTitle>
    <CardContent>
      <div class="grid grid-cols-5 font-13m text-main py-2.5 border-b">
        <p class="col-span-2">Posts</p>
        <p class="text-center">Posted at</p>
        <p class="text-center">Applications</p>
        <p class="text-end">Actions</p>
      </div>

      <div
        v-for="job in jobs"
        class="grid grid-cols-5 font-13m text-main py-[14px] last:pb-0"
      >
        <div class="col-span-2 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="8" r="8" fill="#E5F3FD" />
            <circle cx="8" cy="8" r="2" fill="#45ABF6" />
          </svg>
          <p>{{ job.jobTitle }}</p>
        </div>
        <p class="text-center">{{ job.postedAt }}</p>
        <div class="text-center mx-auto">
          <div class="flex items-center">
            <img
              src="@/assets/images/profile-img/01.jpeg"
              class="h-[24px] w-[24px] rounded-full object-cover z-30"
            />
            <img
              src="@/assets/images/profile-img/02.jpeg"
              class="h-[24px] w-[24px] rounded-full object-cover -ml-1 z-20"
            />
            <img
              src="@/assets/images/profile-img/03.jpeg"
              class="h-[24px] w-[24px] rounded-full object-cover -ml-1 z-10"
            />
            <Badge
              class="h-[24px] w-[24px] -ml-1"
              variant="translucent"
              shape="circle"
              >5</Badge
            >
          </div>
        </div>
        <div class="text-end">
          <ButtonActionDropdown :menuList="actions">
            <IconButton variant="icon" color="secondary" size="small">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill=""
                class=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 10.5C7.10457 10.5 8 11.3954 8 12.5C8 13.6046 7.10457 14.5 6 14.5C4.89543 14.5 4 13.6046 4 12.5C4 11.3954 4.89543 10.5 6 10.5ZM14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5C13.1046 14.5 14 13.6046 14 12.5ZM18 10.5C19.1046 10.5 20 11.3954 20 12.5C20 13.6046 19.1046 14.5 18 14.5C16.8954 14.5 16 13.6046 16 12.5C16 11.3954 16.8954 10.5 18 10.5Z"
                  fill=""
                />
              </svg> </IconButton
          ></ButtonActionDropdown>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
