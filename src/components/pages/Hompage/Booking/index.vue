<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import type Items from "./interface";
import Draggable from "vue3-draggable";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
const { t } = useI18n();
import AOS from "aos";
// const { t } = useI18n();
let items = ref<Items>([
  {
    id: 1,
    name: "car1",
    image: new URL(`./images/car3.svg`, import.meta.url).href,
  },
  {
    id: 2,
    name: "car2",
    image: new URL(`./images/car2.svg`, import.meta.url).href,
  },
  {
    id: 3,
    name: "car3",
    image: new URL(`./images/car1.svg`, import.meta.url).href,
  },
]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="booking">
    <div class="container text-center">
      <h6 class="color-main">{{ t("BookNow") }}</h6>
      <h3>{{ t("RentDream") }}</h3>
      <div class="row">
        <Draggable v-model="items" class="dragsec">
          <template v-slot:item="{ item }"
            ><div class="drag">
              <img :name="item.name" :src="item.image" />
            </div>
          </template>
        </Draggable>
      </div>
      <div
        class="bookingSec"
        data-aos="fade-up-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <div class="row">
          <div class="col-lg-4">
            <h2>{{ t("carName") }}</h2>
            <p>{{ t("bookingparagrah") }}</p>
            <SimpleButton type="send">
              <router-link to="/" type="submit" class="btn">
                {{ t("learn_more") }}
                <img
                  src="../../../../assets/images/global/icons/global/Homepage/arrow.svg" /></router-link
            ></SimpleButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.booking {
  background-size: cover;
  background: url("../../../../assets/images/global/icons/global/Homepage/background_booking.svg")
    no-repeat left center;
  .container {
    h3 {
      font-weight: 700;
      margin-bottom: 50px;
    }
    h2 {
      font-weight: 700;
      margin-bottom: 20px;
    }
    .dragsec {
      display: flex;
      max-width: 70%;
      margin: auto;
      transition: transform 0.2s;
      img {
        width: 100%;
        transition: transform 0.2s;
      }
    }
    .dragsec:nth-child(2) img {
      transform: scale(1.1);
    }
    .bookingSec {
      text-align: left;
      padding-bottom: 100px;
      .simple-button.send .btn {
        background: black;
        margin-top: 10px;
      }
    }
  }
}
/*media" */
</style>
