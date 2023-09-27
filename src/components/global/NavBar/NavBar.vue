<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import type { Link } from "./interface";
import { useI18n } from "vue-i18n";
import type Forms from "../register/interface/forms";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useLang } from "@/stores/lang";
import router from "@/router";
import Mobile from "./Mobile.vue";
import Website from "./Website.vue";
// i18n
const { t } = useI18n();

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
    name: "Home",
    title: "About_us",
  },
  {
    id: 3,
    name: "ForgetPassword",
    title: "Car_rental",
  },
  {
    id: 4,
    name: "Home",
    title: "Blogs",
  },
  {
    id: 5,
    name: "Home",
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
</script>

<template>
  <!-- Nav -->
  <nav class="navbar navbar-expand-lg py-2">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <h4>Logo</h4>
      </router-link>

      <Website :Links="Links" :lang="lang" @changeLang="changeLang" />
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
      />
    </div>
  </nav>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
</style>
