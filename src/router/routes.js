import HomePage from "../pages/HomePage.vue";
import RetrospectivePage from "../pages/RetrospectivePage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import UserSignIn from "../views/authentication/UserSignIn.vue";
import UserRegistration from "../views/authentication/UserRegistration.vue";

import { getAuth } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/home",
    component: HomePage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/retrospective",
    component: RetrospectivePage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/settings",
    component: SettingsPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/sign-in",
    component: UserSignIn,
  },
  {
    path: "/register",
    component: UserRegistration,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      alert("You have to sign in to visit this component!");
      router.push("/");
    }
  } else {
    next();
  }
});

export default router;
