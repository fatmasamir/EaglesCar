<script setup lang="ts">
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useLang } from "@/stores/lang";
import { useLight } from "@/stores/light";

//Language
const Language = useLang();

//Language
const Light = useLight();

//loading
const loading = ref(true);

//onMounted
onMounted(() => {
  //onMounted
  Language.changeLayout();

  //Light
  Light.changeLight();

  //setTimeout
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
