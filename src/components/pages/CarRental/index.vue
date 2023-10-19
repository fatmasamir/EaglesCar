<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import FillterHeader from "../../global/FillterHeader/index.vue";
import Fillter from "./Fillter/index.vue";
import CardsDetailes from "./CardsDetailes/index.vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="CarRental">
    <div class="container">
      <div class="LookingFor"><FillterHeader /></div>
      <div class="row">
        <div class="col-lg-4"><Fillter /></div>
        <div class="col-lg-8"><CardsDetailes /></div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.CarRental {
  padding-top: 200px;
  position: relative;
  .LookingFor {
    position: absolute;
    top: -120px;
    width: 100%;
  }
}
/*media" */
@media screen and (max-width: 990px) {
  .CarRental {
    padding-top: 500px;
    .LookingFor {
    }
    .row {
      margin: 0px;
      padding: 0px;
    }
  }
}

/*ar version */
.is-ar {
}
</style>
