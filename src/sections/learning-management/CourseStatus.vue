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
import { courseStatusList } from "@/data/courseStatus";

const courseStatus = ref([...courseStatusList]);
</script>

<!-- === TEMPLATE === -->
<template>
  <Card
    class="col-span-3 shadow-small lg:col-span-2 dark:bg-dark-bgSecondary px-6 pt-9"
  >
    <CardTitle>
      <h5 class="title-3 text-main mb-2 dark:text-dark-text200">
        Course Status
      </h5>
    </CardTitle>

    <CardContent class="">
      <table
        class="table-auto w-full text-left rtl:text-right text-main dark:text-dark-text200"
      >
        <thead class="border-b font-13m border-b-muted/20">
          <tr class="">
            <th class="pe-4 py-4">Name</th>
            <th class="px-4 py-4">Category</th>
            <th class="px-4 py-4">Earned</th>
            <th class="ps-4 py-4">Visitor</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in courseStatus" :key="index">
            <td
              class="pe-4 py-4"
              :class="{
                'pb-3': index + 1 !== courseStatus.length,
              }"
            >
              <div class="flex gap-2 items-center">
                <img src="@/assets/images/Course/course-thumnail-1.png" />
                <div>
                  <p class="font-13m">
                    {{ item.courseName }}
                  </p>
                  <p class="font-12m text-muted300 dark:text-dark-mute">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </td>

            <td class="px-4 py-4">
              <div
                class="flex items-center gap-2 shrink-0"
                :class="{
                  'text-primary fill-primary':
                    item.category === 'Graphic Template',
                  'text-warning fill-warning': item.category === 'Development',
                  'text-success fill-success': item.category === 'Music',
                  'text-error fill-error': item.category === 'Editing',
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill=""
                >
                  <rect width="10" height="10" rx="5" fill="" />
                </svg>
                <p>{{ item.category }}</p>
              </div>
            </td>
            <td class="px-4 py-4">${{ item.earned }}</td>
            <td class="ps-4 py-4">
              {{ item.visitor }}
            </td>
          </tr>
        </tbody>
      </table>
    </CardContent>
  </Card>
</template>
