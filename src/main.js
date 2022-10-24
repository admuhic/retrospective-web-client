import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import routes from "./router/routes";
import store from "./store/store";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router, store).mount("#app");
