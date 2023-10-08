<script setup lang="ts">
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useLang } from "@/stores/lang";
const Language = useLang();
const loading = ref(true);
onMounted(() => {
  Language.changeLayout();
  setTimeout(function () {
    loading.value = false;
  }, 1000);
});
</script>
<template>
  <div class="text-center loading" v-if="loading">
    <b-spinner label="Spinning"></b-spinner>
  </div>
  <router-view></router-view>
</template>
<style scoped lang="scss">
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: white;
  padding-top: 20%;
  background: black;
  color: var(--orange-text-color);
  span {
    width: 40px;
    height: 40px;
  }
}
</style>
