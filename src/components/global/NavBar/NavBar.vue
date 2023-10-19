<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import type { Link } from "./interface";
import { useI18n } from "vue-i18n";
import { useLang } from "@/stores/lang";
// import router from "@/router";
import Mobile from "./Mobile.vue";
import Website from "./Website.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

// i18n
const { t } = useI18n();

// auth store
const authStore = useAuthStore();
// router
const router = useRouter();

// Language
const Language = useLang();
const i18n = useI18n();

// showMobileList
const showMobileList = ref<boolean>(false);

// profileLinks
let Links = ref<Link[]>([
  {
    id: 1,
    name: "Home",
    title: "Home",
  },
  {
    id: 2,
    name: "AboutUs",
    title: "About_us",
  },
  {
    id: 3,
    name: "CarRental",
    title: "Car_rental",
  },
  {
    id: 4,
    name: "Blogs",
    title: "Blogs",
  },
  {
    id: 5,
    name: "ContactUs",
    title: "Contact_us",
  },
]);

// handel lang
let lang = ref(
  localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
);
i18n.locale.value = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : "ar";
let changeLang = (lang_targe: string) => {
  localStorage.setItem("lang", lang_targe);
  i18n.locale.value = lang_targe;
  lang.value = lang_targe;
  console.log("  lang.value", lang.value);
  Language.changeLayout();
};
let changeshowMobile = () => {
  console.log("changeshowMobile");
  showMobileList.value = false;
};
//Logout
const Logout = () => {
  authStore.logOut();
  router.push("/login");
};
</script>

<template>
  <!-- Nav -->
  <nav class="navbar navbar-expand-lg py-2">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../../../assets//images//global/icons/global/logo.svg" />
      </router-link>

      <Website
        :Links="Links"
        :lang="lang"
        @changeLang="changeLang"
        @Logout="Logout"
      />
      <button
        class="navbar-toggler"
        type="button"
        @click="showMobileList = !showMobileList"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <Mobile
        :Links="Links"
        :lang="lang"
        @changeLang="changeLang"
        :class="showMobileList ? 'show' : ''"
        @changeshowMobile="changeshowMobile()"
      />
    </div>
  </nav>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
</style>
