<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import FavouritCar from "@/components/pages/FavouritCar/index.vue";
import Footer from "@/components/global/Footer/index.vue";
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Nissan"></Header>
    <FavouritCar></FavouritCar>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
