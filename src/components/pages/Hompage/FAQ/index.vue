<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="FAQ">
    <div class="row">
      <div class="col-lg-4 img_faq">
        <img
          src="../../../../assets/images/global/icons/global/Homepage/background_fqu.svg"
        />
      </div>
      <div class="col-lg-8">
        <div class="fquestion">
          <h6 class="color-main p-0">{{ t("FAQ") }}</h6>
          <h3 class="header_title mb-4">{{ t("Frequently_Questions") }}</h3>
          <p class="mb-5">{{ t("FQUMessage") }}</p>
          <div
            class="accordion"
            id="accordionExample"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is special about comparing rental car deals?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How do I find the best car rental deals?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do I find such low rental car prices?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
/****media****/
.FAQ {
  margin-top: 150px;
  text-align: center;
  .fquestion {
    width: 70%;
    margin: auto;
    margin-left: 10%;
    .accordion-item {
      margin-bottom: 20px;
      border: 0px;
      box-shadow: 0px 3px 6px 0px #0000000d;
    }
    .accordion-button:not(.collapsed) {
      color: white;
      background: #f4a71d;
    }
    .accordion-button:not(.collapsed)::after {
      background-image: url("../../../../assets/images/global/icons/global/Homepage/arrow_top.svg");
      width: 20px;
      height: 20px;
    }
  }
  .img_faq img {
    width: 100%;
  }
}
/*media" */
@media screen and (min-width: 1240px) {
  /*ar version */
  .is-ar {
  }
}
@media screen and (max-width: 992px) {
  .FAQ {
    .fquestion {
      width: 100%;
      .accordion {
        width: 90%;
      }
    }
    .img_faq img {
      width: 80%;
    }
  }
}

/*ar version */
.is-ar {
}
</style>
