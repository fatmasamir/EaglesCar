<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import CardCarsDetalies from "../../global/CardCarsDetalies/index.vue";
import AOS from "aos";
const { t } = useI18n();
const data = ref([
  {
    id: 0,
    image_car: new URL(
      `../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 1,
    image_car: new URL(
      `../../../assets/images/global/icons/global/carRental/car2.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 2,
    image_car: new URL(
      `../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 3,
    image_car: new URL(
      `../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 4,
    image_car: new URL(
      `../../../assets/images/global/icons/global/carRental/car2.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 5,
    image_car: new URL(
      `../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="CarRental">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="info in data" :key="info.id">
          <CardCarsDetalies :data="info"></CardCarsDetalies>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.CarRental {
  margin-top: 150px;
  height: auto;
  .the_block {
    .image_car img {
      width: 100%;
      margin: auto auto 20px;
    }
    .card {
      border: 1px solid #e7e7e7 !important;
      border-top: 0px !important;
      margin-bottom: 100px;
      padding: 20px;
      .title {
        justify-content: space-between;
        align-items: center;
        display: flex;
        h3 {
          font-weight: 700;
        }
        .buttons {
          display: flex;
          align-items: center;
          .rating_number {
            background: black;
            color: white;
            border-radius: 8px;
            padding: 8px 0px;
            margin-right: 10px;
            width: 70px;
            text-align: center;
          }
          button {
            height: 44px;
            padding: 5px 10px;
            background: #44c308;
            border-radius: 8px;
          }
        }
      }
      p {
        color: #818181;
      }
      .list {
        border-radius: 4px;
        > div {
          text-align: center;
          padding: 0px 5px;
          .content {
            background: #fbfbfb;
            img {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
      .BookNow {
        align-items: center;
        justify-content: space-between;
        margin: 20px 0px;
        display: flex;
        h5 {
          font-size: 18px;
        }
        button {
          height: 50px;
        }
      }
      hr {
        margin-top: 30px;
        border: 1px solid;
        height: 0px;
      }
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
}

/*ar version */
.is-ar {
}
</style>
