<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, reactive, ref } from "vue";
import AOS from "aos";
import { data } from "../../CardsDetailes/data";
import { defineProps } from "vue";

// useI18n
const { t } = useI18n();

// defineProps
let props = defineProps(["Car"]);

//showNumberCar
let showNumberCar = ref(1);

//showImageSrc
let showImageSrc = ref(
  new URL(
    `../../../../../assets/images/global/icons/global/cardDetailes/carSlider1.svg`,
    import.meta.url
  ).href
);

//items
const items = reactive([
  {
    id: 0,
    image_car: new URL(
      `../../../../../assets/images/global/icons/global/cardDetailes/carSlider1.svg`,
      import.meta.url
    ).href,
  },
  {
    id: 1,
    image_car: new URL(
      `../../../../../assets/images/global/icons/global/cardDetailes/carSlider2.svg`,
      import.meta.url
    ).href,
  },
  {
    id: 2,
    image_car: new URL(
      `../../../../../assets/images/global/icons/global/cardDetailes/carSlider3.svg`,
      import.meta.url
    ).href,
  },
  {
    id: 3,
    image_car: new URL(
      `../../../../../assets/images/global/icons/global/cardDetailes/carSlider4.svg`,
      import.meta.url
    ).href,
  },
  {
    id: 4,
    image_car: new URL(
      `../../../../../assets/images/global/icons/global/cardDetailes/carSlider5.svg`,
      import.meta.url
    ).href,
  },
]);

//showImage
const showImage = (id) => {
  for (let key in items) {
    if (key == id) {
      console.log(items[key]);
      showImageSrc.value = items[key].image_car;
      showNumberCar.value = id + 1;
    }
  }
};
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="Description">
    <div class="ImageShow">
      <img :src="showImageSrc" />
    </div>
    <p class="showNumberCar text-end">
      <img
        src="../../../../../assets/images/global/icons/global/cardDetailes/images-icon.svg"
      />
      {{ showNumberCar }}/{{ items.length }}
    </p>
    <ul class="ListCars" v-if="items.length != 0">
      <li class="" v-for="item in items" :key="item.id">
        <img :src="item.image_car" @click="showImage(item.id)" />
      </li>
    </ul>
    <h5>Description</h5>
    <p>
      {{ props.Car.description }}
    </p>
    <router-link to="/" class="color-main">{{ t("Show_more") }}</router-link>
    <h5>Features</h5>
    <ul class="Features">
      <li><span></span>Blind spot alert</li>
      <li><span></span>Bluetooth</li>
      <li><span></span>Heated seats</li>
      <li><span></span>Leather seats</li>
      <li><span></span>Navigation System</li>
      <li><span></span>Side airbags</li>
    </ul>
    <div v-if="props.Car && props.Car.documents.length != 0">
      <h5>Attachments</h5>
      <div class="Attachments">
        <div>
          <router-link to="/" class="color-main">
            <img
              src="../../../../../assets/images/global/icons/global/cardDetailes/pdf.svg"
            />
            Sample PDF File
          </router-link>
        </div>
        <div>
          <router-link to="/" class="color-main">
            <img
              src="../../../../../assets/images/global/icons/global/cardDetailes/zip.svg"
            />
            Notes and some related files
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../../../../assets/scss/variables";
.DetaliesCar {
  margin: 100px 0px;
  .ImageShow {
    width: 100%;
    height: 450px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ListCars {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    li {
      cursor: pointer;
      padding: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }
  h5 {
    font-weight: bold;
    margin-top: 50px;
  }
  .Features {
    padding: 10px 0px 0px;
    li {
      display: inline-block;
      width: 33%;
      margin-bottom: 15px;
      span {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: var(--orange-text-color);
        border-radius: 100%;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
  .Attachments {
    > div {
      margin-bottom: 15px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
  .DetaliesCar {
    .ImageShow {
      height: auto;
      margin-bottom: 30px;
    }
    .ListCars li {
      padding: 5px;
    }
    .Features li {
      width: 100%;
    }
  }
}

/*ar version */
.is-ar {
}
</style>
