<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy/index.vue";
import Footer from "@/components/global/Footer/index.vue";
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="support"></Header>
    <PrivacyPolicy></PrivacyPolicy>
    <Footer></Footer>
  </section>
</template>
<style lang="scss">
@import "../../assets/scss/variables";
.auth {
  width: 100%;
  height: 100%;
  position: relative;
  @media screen and (max-width: map-get($grid, xl)) {
    aside {
      display: none;
    }
  }
}
</style>
