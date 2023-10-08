<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";

//i18n
const { t } = useI18n();
//onMounted
onMounted(() => {
  //AOS
  AOS.init();
});
</script>
<template>
  <!--MostFaster-->
  <div class="PrivacyPolicy">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p class="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../../assets/scss/variables";
.PrivacyPolicy {
  overflow-y: hidden;
  margin: 150px 0px;
  .row {
    overflow-y: hidden;
    p {
      width: 80%;
      margin: auto;
      line-height: 2.3;
    }
  }
}
@media screen and (max-width: 992px) {
  .PrivacyPolicy .row p {
    width: 90%;
  }
}
</style>
