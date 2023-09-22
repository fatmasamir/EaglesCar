<script setup lang="ts">
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useLang } from "@/stores/lang";
const Language = useLang();
onMounted(() => {
  Language.changeLayout();
});
</script>
<template>
  <router-view></router-view>
</template>
