<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";
import loading from "@/components/global/Loading/index.vue";
let props = defineProps(["termsConditions"]);
//i18n
const { t } = useI18n();
const i18n = useI18n();
//onMounted
onMounted(() => {
  //AOS
  AOS.init();
});
</script>
<template>
  <!--MostFaster-->
  <div class="Terms_conditions">
    <div class="container">
      <div class="row" v-if="props.termsConditions">
        <div class="col-lg-12" v-if="i18n.locale.value == 'en'">
          <h5>
            {{
              props.termsConditions &&
              props.termsConditions.title &&
              props.termsConditions.title.en
                ? props.termsConditions.title.en
                : ""
            }}
          </h5>
          <p>
            {{
              props.termsConditions &&
              props.termsConditions.description &&
              props.termsConditions.description.en
                ? props.termsConditions.description.en
                : ""
            }}
          </p>
        </div>
        <div class="col-lg-12 text-start" v-else>
          <h5>
            {{
              props.termsConditions &&
              props.termsConditions.title &&
              props.termsConditions.title.ar
                ? props.termsConditions.title.ar
                : ""
            }}
          </h5>
          <p class="text-start">
            {{
              props.termsConditions &&
              props.termsConditions.description &&
              props.termsConditions.description.ar
                ? props.termsConditions.description.ar
                : ""
            }}
          </p>
        </div>
      </div>
      <loading v-else></loading>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../../assets/scss/variables";
.Terms_conditions {
  overflow-y: hidden;
  margin: 150px 0px;
  .row {
    overflow-y: hidden;
    p {
      width: 80%;
      margin: 5px;
      line-height: 2.3;
      text-align: left;
    }
    h6 {
      color: var(--orange-text-color);
      margin-top: 20px;
    }
    ul {
      margin-bottom: 30px;
      li {
        margin-bottom: 15px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .Terms_conditions .row p {
    width: 90%;
  }
}
</style>
