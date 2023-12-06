<script setup>
import { ref } from "vue";
import Tabs from "./SubTab/index.vue";
import CarInformation from "./CarInformation/index.vue";
import CarLicense from "./CarLicense/index.vue";
import PhotoPrices from "./PhotoPrices/index.vue";
import ParkingAddress from "./ParkingAddress/index.vue";
const itemChooseAddCar = ref("Car_information");
const ChooseTabAccount = (nameTab) => {
  console.log("ChooseTab==", nameTab);
  itemChooseAddCar.value = nameTab;
};
</script>
<template>
  <Tabs
    @ChooseTabAccount="ChooseTabAccount"
    :itemChooseAddCar="itemChooseAddCar"
  ></Tabs>
  <CarInformation
    v-if="itemChooseAddCar == 'Car_information'"
    @ChooseTabAccount="ChooseTabAccount"
  />
  <CarLicense
    v-if="itemChooseAddCar == 'Car_license'"
    @ChooseTabAccount="ChooseTabAccount"
  />
  <PhotoPrices
    v-if="itemChooseAddCar == 'Photo_and_prices'"
    @ChooseTabAccount="ChooseTabAccount"
  />
  <ParkingAddress
    v-if="itemChooseAddCar == 'Parking_address'"
    @ChooseTabAccount="ChooseTabAccount"
  />
</template>
