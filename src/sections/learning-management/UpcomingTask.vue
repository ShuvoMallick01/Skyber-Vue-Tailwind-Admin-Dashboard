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
import { upcomingTaskList } from "@/data/upcomingTask";
import Button from "@/components/ui/button/Button.vue";
import CardTask from "@/components/ui/card_2/CardTask.vue";

// State
const upcomingTasks = ref([...upcomingTaskList]);
const dropDownMenu = ref(["Delete", "View"]);
</script>

<!-- === TEMPLATE === -->
<template>
  <Card class="py-6 px-5 col-span-3 xl:col-span-1 shadow-small">
    <CardTitle class="mb-4"
      ><div class="flex items-center justify-between">
        <p class="dark:text-white">Upcoming Task</p>
        <Button variant="link" color="primary" size="none"
          >View all Tasks</Button
        >
      </div></CardTitle
    >

    <CardContent>
      <CardTask :dataList="upcomingTasks" :dropDownMenu="dropDownMenu">
        <div>
          <span class="border-l-4 border-l-primary pl-3 py-1.5"></span>
        </div>
      </CardTask>
    </CardContent>
  </Card>
</template>
