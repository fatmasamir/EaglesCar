<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import type { Link } from "./interface";
import { useI18n } from "vue-i18n";
import type Forms from "../register/interface/forms";
import { useLang } from "@/stores/lang";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import router from "@/router";
const Language = useLang();
const i18n = useI18n();

// i18n.locale.value = Language.lang;
const profileLinks = ref<Link[]>([
  {
    id: 1,
    name: "Home",
    title: "لوحة التحكم",
    icon: "static",
  },
]);
// i18n
const { t } = useI18n();
const search = ref(false);
const posModal = ref(false);
const isOpen = ref(false);
// profile list
const noti_list = ref(false);
const profile_list = ref(false);
const noti_list_ele = ref(null);
const profile_list_ele = ref(null);
const profile_list_button = ref(null);
const noti_list_button = ref(null);

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
  <nav id="navbar">
    <section class="container-fluid">
      <section class="content">
        <section class="logo-parent">
          <section class="logo">
            <router-link to="/login"> {{ t("Register") }} </router-link>
          </section>
        </section>

        <!-- navbar mobile -->
        <section class="navbar-mobile">
          <button class="nav-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
            >
              <g id="fi-rr-menu-burger" transform="translate(0 -4)">
                <rect
                  id="Rectangle_1712"
                  data-name="Rectangle 1712"
                  width="24"
                  height="2"
                  rx="1"
                  transform="translate(0 11)"
                  fill="#4a4a4a"
                />
                <rect
                  id="Rectangle_1713"
                  data-name="Rectangle 1713"
                  width="24"
                  height="2"
                  rx="1"
                  transform="translate(0 4)"
                  fill="#4a4a4a"
                />
                <rect
                  id="Rectangle_1714"
                  data-name="Rectangle 1714"
                  width="24"
                  height="2"
                  rx="1"
                  transform="translate(0 18)"
                  fill="#4a4a4a"
                />
              </g>
            </svg>
          </button>
        </section>
        <!-- all links -->
        <section class="all-links">
          <section class="links">
            <ul>
              <!-- en -->
              <li>
                <button v-if="lang == 'ar'" @click="changeLang('en')">
                  en
                </button>
                <button v-else @click="changeLang('ar')">ar</button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  </nav>
</template>
