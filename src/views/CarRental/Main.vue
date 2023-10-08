<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import CarRental from "@/components/pages/CarRental/index.vue";
import Footer from "@/components/global/Footer/index.vue";
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Car_rental"> </Header>
    <CarRental></CarRental>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
