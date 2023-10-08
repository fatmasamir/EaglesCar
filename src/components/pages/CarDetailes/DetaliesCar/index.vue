<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import Description from "./Description/index.vue";
import specificationsCar from "./specificationsCar/index.vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="DetaliesCar">
    <div class="container">
      <div class="row">
        <div class="col-lg-8"><Description /></div>
        <div class="col-lg-4"><specificationsCar /></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.DetaliesCar {
  margin: 100px 0px;
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
