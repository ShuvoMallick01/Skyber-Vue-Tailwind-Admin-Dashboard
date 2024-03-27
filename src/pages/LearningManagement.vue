<script setup lang="ts">
import { ref, watchEffect } from "vue";
import IconButton from "@/components/ui/button/IconButton.vue";
import WelcomeCard from "@/sections/learning-management/WelcomeCard.vue";
import UpgradeProCard from "@/sections/learning-management/UpgradeProCard.vue";
import Result from "@/sections/learning-management/Result.vue";
import StudyTimeLastWeek from "@/sections/learning-management/StudyTimeLastWeek.vue";
import UpcomingTask from "@/sections/learning-management/UpcomingTask.vue";
import Widget1 from "@/components/Widget/Widget1.vue";
import CourseStatus from "@/sections/learning-management/CourseStatus.vue";
import YourDownloads from "@/sections/learning-management/YourDownloads.vue";
import Footer1 from "@/components/Footer/Footer1.vue";
</script>

<!-- === TEMPLATE === -->
<template>
  <div class="grid grid-cols-3 gap-7 mb-6">
    <!-- Welcome Card -->
    <WelcomeCard />

    <!-- Upgrade to Pro Card -->
    <UpgradeProCard />

    <!-- Results -->
    <Result />

    <!-- Study Time Last Week -->
    <StudyTimeLastWeek />

    <!-- Upcoming Task -->
    <UpcomingTask />

    <!-- Course Completed -->
    <Widget1
      title="Course Completed"
      number="1450"
      class="col-span-3 lg:col-span-1"
    >
      <IconButton
        variant="translucent"
        color="primary"
        class="fill-primary rounded-full h-[40px] w-[40px] shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill=""
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 5.5V15.5C22 15.7761 21.7761 16 21.5 16H2.5C2.22386 16 2 15.7761 2 15.5V5.5C2 5.22386 2.22386 5 2.5 5H2.88C3.27769 5.00035 3.65897 5.15862 3.94 5.44L7 8.5L11.28 4.22C11.4205 4.07931 11.6112 4.00018 11.81 4H12.19C12.3888 4.00018 12.5795 4.07931 12.72 4.22L17 8.5L20.06 5.44C20.341 5.15862 20.7223 5.00035 21.12 5H21.5C21.7761 5 22 5.22386 22 5.5ZM22 18.5V19.5C22 19.7761 21.7761 20 21.5 20H2.5C2.22386 20 2 19.7761 2 19.5V18.5C2 18.2239 2.22386 18 2.5 18H21.5C21.7761 18 22 18.2239 22 18.5ZM18 10.33L20 8.33V14H4V8.35L6 10.35C6.10227 10.4456 6.24058 10.493 6.38 10.48H7.66C7.79559 10.482 7.92592 10.4277 8.02 10.33L12.02 6.33L16.02 10.33C16.1141 10.4277 16.2444 10.482 16.38 10.48H17.64C17.7756 10.482 17.9059 10.4277 18 10.33Z"
            fill=""
          />
        </svg>
      </IconButton>
    </Widget1>

    <!-- Enrolled Courses -->
    <Widget1
      title="Enrolled Courses"
      number="1450"
      class="col-span-3 lg:col-span-1 text-warning"
    >
      <IconButton
        variant="translucent"
        color="warning"
        size="large"
        class="rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill=""
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.94 2.23C14.85 3.81 19 7.76 19 12.33C18.9959 15.8066 16.4409 18.7533 13 19.25V21.5C13 21.7761 12.7761 22 12.5 22H11.5C11.2239 22 11 21.7761 11 21.5V19.25C7.55907 18.7533 5.00407 15.8066 5 12.33C5 7.76 9.15 3.81 11.06 2.23C11.2399 2.08092 11.4663 1.99955 11.7 2H12.3C12.5337 1.99955 12.7601 2.08092 12.94 2.23ZM13 10.5V17.23C15.3431 16.7518 17.0196 14.6814 17 12.29C17 9 14 5.74 12 4C10 5.78 7 9.06 7 12.33C6.99951 14.7063 8.67167 16.7547 11 17.23V10.5C11 10.2239 11.2239 10 11.5 10H12.5C12.7761 10 13 10.2239 13 10.5Z"
            fill=""
          />
        </svg>
      </IconButton>
    </Widget1>

    <!-- Course Completed -->
    <Widget1
      title="Course Completed"
      number="1450"
      class="col-span-3 lg:col-span-1 text-primary"
    >
      <IconButton
        variant="translucent"
        color="primary"
        size="large"
        class="rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill=""
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 5.5V15.5C22 15.7761 21.7761 16 21.5 16H2.5C2.22386 16 2 15.7761 2 15.5V5.5C2 5.22386 2.22386 5 2.5 5H2.88C3.27769 5.00035 3.65897 5.15862 3.94 5.44L7 8.5L11.28 4.22C11.4205 4.07931 11.6112 4.00018 11.81 4H12.19C12.3888 4.00018 12.5795 4.07931 12.72 4.22L17 8.5L20.06 5.44C20.341 5.15862 20.7223 5.00035 21.12 5H21.5C21.7761 5 22 5.22386 22 5.5ZM22 18.5V19.5C22 19.7761 21.7761 20 21.5 20H2.5C2.22386 20 2 19.7761 2 19.5V18.5C2 18.2239 2.22386 18 2.5 18H21.5C21.7761 18 22 18.2239 22 18.5ZM18 10.33L20 8.33V14H4V8.35L6 10.35C6.10227 10.4456 6.24058 10.493 6.38 10.48H7.66C7.79559 10.482 7.92592 10.4277 8.02 10.33L12.02 6.33L16.02 10.33C16.1141 10.4277 16.2444 10.482 16.38 10.48H17.64C17.7756 10.482 17.9059 10.4277 18 10.33Z"
            fill=""
          />
        </svg>
      </IconButton>
    </Widget1>

    <!-- Course Status -->
    <CourseStatus />

    <!-- Your Downloads -->
    <YourDownloads />

    <!-- Footer -->
    <Footer1 />
  </div>
</template>
