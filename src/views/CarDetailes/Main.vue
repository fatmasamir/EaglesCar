<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import DetaliesCar from "@/components/pages/CarDetailes/DetaliesCar/index.vue";
import ClientsTestimonials from "@/components/pages/Hompage/ClientsTestimonials/index.vue";
import CardsDetailes from "@/components/pages/CarDetailes/CardsDetailes/index.vue";
import Footer from "@/components/global/Footer/index.vue";
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Car_details"></Header>
    <DetaliesCar></DetaliesCar>
    <ClientsTestimonials></ClientsTestimonials>
    <CardsDetailes></CardsDetailes>
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
