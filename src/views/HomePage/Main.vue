<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/pages/Hompage/Header/index.vue";
import Plan from "@/components/pages/Hompage/Plan/index.vue";
import AboutCompany from "@/components/pages/Hompage/AboutCompany/index.vue";
import Booking from "@/components/pages/Hompage/Booking/index.vue";
import Rental from "@/components/pages/Hompage/Rental/index.vue";
import Blogs from "@/components/pages/Hompage/Blogs/index.vue";
import ClientsTestimonials from "@/components/pages/Hompage/ClientsTestimonials/index.vue";
import FAQ from "@/components/pages/Hompage/FAQ/index.vue";
</script>
<template>
  <section class="HomePage">
    <NavBar></NavBar>
    <Header></Header>
    <Plan></Plan>
    <AboutCompany></AboutCompany>
    <Booking></Booking>
    <Rental></Rental>
    <Blogs></Blogs>
    <ClientsTestimonials></ClientsTestimonials>
    <FAQ></FAQ>
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
