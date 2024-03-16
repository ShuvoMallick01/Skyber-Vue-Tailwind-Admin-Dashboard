import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
