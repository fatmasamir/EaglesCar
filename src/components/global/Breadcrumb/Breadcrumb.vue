<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const props = defineProps(["item"]);
const logo = new URL(`./icons/arrow-chev.svg`, import.meta.url).href;
const { t } = useI18n();
</script>
<template>
  <section class="breadcrumb">
    <span v-for="itm in item.child" :key="itm">
      <img :src="logo" class="arrow" />
      <span v-if="itm.link">
        <router-link :to="itm.link">{{ t(itm.title) }}</router-link></span
      >
      <span v-else>{{ t(itm.title) }}</span>
    </span>
  </section>
</template>
<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0 !important;
  margin-bottom: 0.5rem !important;
  a {
    text-decoration: none;
    color: var(--page-home-dis);
    // pointer-events: none;
  }
  span {
    color: #6a6e83;
  }
  > span:first-child {
    img {
      display: none;
    }
  }
  > span:last-child {
    color: #6a6e83;
    pointer-events: none;
    a {
      color: #6a6e83;
    }
  }
}
</style>
