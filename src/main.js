import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

const app = createApp(App);
const pinia = createPinia();

// Use
app.use(router);
app.use(pinia);
app.use(PerfectScrollbar);
app.use(VueApexCharts);

// Mount
app.mount("#app");
