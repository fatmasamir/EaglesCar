<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { defineProps, defineEmits } from "vue";

// props
let props = defineProps(["Links", "lang"]);

// emit
let emit = defineEmits(["changeLang", "changeshowMobile"]);
// i18n
const { t } = useI18n();

const changeLangEmit = (lang_targe: String) => {
  emit("changeLang", lang_targe);
};
const showMobile = () => {
  emit("changeshowMobile");
};
</script>

<template>
  <div class="mobile pb-5">
    <div class="mobile_sec">
      <div class="close">
        <button class="navbar-toggler" type="button" @click="showMobile()">
          X
        </button>
      </div>
      <div>
        <div class="navbar-nav">
          <ul class="list_links">
            <li v-for="link in props.Links" :key="link.id">
              <router-link
                :to="{ name: link.name }"
                class="nav-link active"
                href="#aboutUs"
              >
                {{ t(link.title) }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-btns">
        <SimpleButton type="send">
          <router-link to="/register" class="btn">
            {{ t("Signup") }}
          </router-link></SimpleButton
        >
        <router-link to="/login" class="btn btn-main">{{
          t("Login")
        }}</router-link>
        <!-- lang -->
        <div class="lang">
          <button v-if="props.lang == 'ar'" @click="changeLangEmit('en')">
            <img src="@/assets//images/global/icons/global/flag-eng.svg" />
          </button>
          <button v-else @click="changeLangEmit('ar')">
            <img src="@/assets//images/global/icons/global/flag-eng.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
</style>
