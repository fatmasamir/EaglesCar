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

//Blogs page
import Blogs from "../views/Blogs/Main.vue";

//AboutUs page
import AboutUs from "../views/AboutUs/Main.vue";

//ContactUs page
import ContactUs from "../views/ContactUs/Main.vue";

//PrivacyPolicy page
import PrivacyPolicy from "../views/PrivacyPolicy/Main.vue";

//MostFaster page
import MostFaster from "../views/MostFaster/Main.vue";

//Support page
import Support from "../views/Support/Main.vue";

//Terms_conditions page
import Terms_conditions from "../views/Terms_conditions/Main.vue";

//HowItWorks page
import HowItWorks from "../views/HowItWorks/Main.vue";

//FavouritCar page
import FavouritCar from "../views/FavouritCar/Main.vue";

//CarRental page
import CarRental from "../views/CarRental/Main.vue";

//CarDetailes page
import CarDetailes from "../views/CarDetailes/Main.vue";
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
    //Blogs
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    //AboutUs
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    //AboutUs
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    //MostFaster
    path: "/most-faster",
    name: "MostFaster",
    component: MostFaster,
  },
  {
    //PrivacyPolicy
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    //Terms_conditions
    path: "/terms_conditions",
    name: "Terms_conditions",
    component: Terms_conditions,
  },
  {
    //Support
    path: "/support",
    name: "Support",
    component: Support,
  },
  {
    //HowItWorks
    path: "/how-it-works",
    name: "HowItWorks",
    component: HowItWorks,
  },
  {
    //FavouritCar
    path: "/favourit-car",
    name: "FavouritCar",
    component: FavouritCar,
  },
  {
    //CarRental
    path: "/car-rental",
    name: "CarRental",
    component: CarRental,
  },
  {
    //CardsDetailes
    path: "/car-detalies",
    name: "CarDetailes",
    component: CarDetailes,
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
