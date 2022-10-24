import HomePage from "../pages/HomePage.vue";
import RetrospectivePage from "../pages/RetrospectivePage.vue";
import SettingsPage from "../pages/SettingsPage.vue";

export default [
  { path: "/", component: HomePage },
  { path: "/home", component: HomePage },
  { path: "/retrospective", component: RetrospectivePage },
  { path: "/settings", component: SettingsPage },
];
