import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import routes from "./router/routes";
import store from "./store/store";

createApp(App).use(routes, store).mount("#app");
