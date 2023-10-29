<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import AOS from "aos";
import Form_Detailes from "./Form_Detailes/index.vue";
import Contact_Info from "./Contact_Info/index.vue";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="FormContact">
    <div class="card">
      <h3 class="mt-5 mb-4">{{ t("Keep_touch") }}</h3>
      <div class="row">
        <div class="col-lg-7">
          <Form_Detailes />
        </div>
        <div class="col-lg-5">
          <Contact_Info />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.FormContact {
  background: white;
  margin: 100px;
  .card {
    box-shadow: 0px 15px 50px 0px #0000000d;
    width: 90%;
    margin: auto;
    margin-top: -150px;
    padding: 15px 30px 50px !important;
    h3 {
      font-weight: 700;
    }
  }
}

/****media****/

@media screen and (max-width: 1240px) {
}
@media screen and (max-width: 1210px) {
}
@media screen and (max-width: 992px) {
  .FormContact {
    margin: 100px 0px;
  }
}

/*ar version */
.is-ar {
}
</style>
