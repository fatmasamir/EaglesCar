<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import Tabs from "@/components/pages/Profile/Tabs/index.vue";
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="profile"> </Header><Tabs></Tabs>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
