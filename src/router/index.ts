import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Auth from "../views/auth/Main.vue";
import Register from "../views/auth/Register.vue";
import HomePage from "../views/HomePage/Main.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    // beforeEnter(to, from) {
    //   if (localStorage.getItem("lang") == "ar") {
    //     document.title = `الصفحه الرئسية - رؤيه`;
    //   } else {
    //     document.title = "HomePage - Roya";
    //   }
    //   if (localStorage.getItem("access_token")) {
    //     return `/Dashboard`;
    //   }
    // },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    // beforeEnter(to, from) {
    //   if (localStorage.getItem("lang") == "ar") {
    //     document.title = `تسجيل حساب - عرب بيك`;
    //   } else {
    //     document.title = "Sign Up - Arabpik";
    //   }
    //   if (localStorage.getItem("access_token")) {
    //     return `/Dashboard`;
    //   }
    // },
  },
  {
    path: "/login",
    name: "login",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
