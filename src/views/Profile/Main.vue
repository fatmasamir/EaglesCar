<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import Tabs from "@/components/pages/Profile/Tabs/index.vue";
import MyAccount from "@/components/pages/Profile/MyAccount/index.vue";
import MyCars from "@/components/pages/Profile/MyCars/index.vue";
import MyRequests from "@/components/pages/Profile/MyRequests/index.vue";
import MyBorrowings from "@/components/pages/Profile/MyBorrowings/index.vue";
import MyPayement from "@/components/pages/Profile/MyPayement/index.vue";
import { ref } from "vue";
const itemChoose = ref<String>("My account");
const ChooseTab = (nameTab: String) => {
  console.log("ChooseTab", nameTab);
  itemChoose.value = nameTab;
};
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="profile"> </Header>
    <div class="container px-0">
      <Tabs @ChooseTab="ChooseTab"></Tabs>
      <!--MyAccount-->
      <MyAccount v-if="itemChoose == 'My account'" />
      <!--MyCars-->
      <MyCars v-if="itemChoose == 'My cars'" />
      <!--MyRequests-->
      <MyRequests v-if="itemChoose == 'My requests'" />
      <!--MyBorrowings-->
      <MyBorrowings v-if="itemChoose == 'My borrowings'" />
      <!--MyBorrowings-->
      <MyPayement v-if="itemChoose == 'Payement'" />
    </div>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
