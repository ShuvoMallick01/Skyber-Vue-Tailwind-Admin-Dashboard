import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import LearningManagement from "@/pages/LearningManagement.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: LearningManagement,
      alias: "/analytics",
      meta: {
        title: "Learning Dashboard",
      },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
