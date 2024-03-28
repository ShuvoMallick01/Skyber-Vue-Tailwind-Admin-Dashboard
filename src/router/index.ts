import { createRouter, createWebHistory } from "vue-router";

import NotFound from "@/pages/NotFound.vue";
import LearningManagement from "@/pages/LearningManagement.vue";
import JobManagementVue from "@/pages/JobManagement.vue.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: LearningManagement,
      alias: "/learning-management",
      meta: {
        title: "Learning Dashboard",
      },
    },
    {
      path: "/job-management",
      name: "job-management",
      component: JobManagementVue,
      meta: {
        title: "Learning Dashboard",
      },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
