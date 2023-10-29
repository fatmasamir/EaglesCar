<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
import Long_term from "./Long_term.vue";
import Short_term from "./Short_term.vue";

//useI18n
const { t } = useI18n();

//Return_point
const Tab_choose = ref("Long");

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="FillterHeader">
    <ul class="tab">
      <li
        @click="Tab_choose = 'Long'"
        :class="Tab_choose == 'Long' ? 'active' : ''"
      >
        {{ t("long_term") }}
      </li>
      <li
        @click="Tab_choose = 'Short'"
        :class="Tab_choose == 'Short' ? 'active' : ''"
      >
        {{ t("short_term") }}
      </li>
    </ul>
    <Long_term v-if="Tab_choose == 'Long'" />
    <Short_term v-if="Tab_choose == 'Short'" />
  </div>
</template>
<style lang="scss" scoped>
@import "./styleing.scss";
.tab {
  margin-bottom: 0px;
  padding: 0px;
  li {
    background: white;
    color: black;
    padding: 15px;
    cursor: pointer;
    display: inline-block;
    &:first-child {
      border-top-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
    }
  }
  .active {
    background-color: #f4a71d !important;
    color: white !important;
  }
}
.is-ar {
  .tab {
    li {
      &:first-child {
        border-top-right-radius: 8px;
        border-top-left-radius: 0px;
      }
      &:last-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 0px;
      }
    }
  }
}
</style>
