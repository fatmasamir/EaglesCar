import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
//Auth pages
import Auth from "../views/auth/Main.vue";
import ForgetPassword from "../views/auth/ForgetPassword.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";
import RegisterContinue from "../views/auth/RegisterContinue.vue";
import OTP from "../views/auth/OTP.vue";
import OTPRegisterion from "../views/auth/OTPRegisterion.vue";
import Register from "../views/auth/Register.vue";

//Hompage
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
    path: "/forget-password",
    name: "ForgetPassword",
    component: ForgetPassword,
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
    path: "/register-continue",
    name: "RegisterContinue",
    component: RegisterContinue,
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
    path: "/otp-authentication",
    name: "OTP",
    component: OTP,
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
    path: "/otp-registerion",
    name: "OTPRegisterion",
    component: OTPRegisterion,
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
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
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
