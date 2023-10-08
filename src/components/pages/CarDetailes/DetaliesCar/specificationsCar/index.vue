<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="specificationsCar">
    <h4 class="mb-4">Chevrolet Camaro 2-door convertible blue</h4>
    <hr />
    <div class="row">
      <div class="col-lg-6">
        <h6><span class="color-main">$40,000</span> (per week)</h6>
        <p>
          <img
            src="../../../../../assets/images/global/icons/global/cardDetailes/star.svg"
          />Add to favorites
        </p>
      </div>
      <div class="col-lg-6">
        <div class="buttons">
          <div class="rating_number">
            <img
              src="../../../../../assets/images/global/icons/global/carRental/star.svg"
            />
            3
          </div>
          <SimpleButton type="send">
            <button to="/" type="submit" class="btn">
              {{ t("Available") }}
            </button></SimpleButton
          >
        </div>
      </div>
    </div>
    <div class="information">
      <div class="row">
        <div class="col-lg-6">Make:</div>
        <div class="col-lg-6">Chevrolet</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Model:</div>
        <div class="col-lg-6">Camaro</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Color:</div>
        <div class="col-lg-6">Blue</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Drive Type:</div>
        <div class="col-lg-6">Front Wheel Drive</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Transmission:</div>
        <div class="col-lg-6">Automatic</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Condition::</div>
        <div class="col-lg-6">New</div>
      </div>
      <div class="row">
        <div class="col-lg-6">New:</div>
        <div class="col-lg-6">2021</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Fuel Type:</div>
        <div class="col-lg-6">Diesel</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Engine Size:</div>
        <div class="col-lg-6">4.8L</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Doors:</div>
        <div class="col-lg-6">2-door</div>
      </div>
      <div class="row">
        <div class="col-lg-6">Cylinders:</div>
        <div class="col-lg-6">6</div>
      </div>
    </div>
    <div class="Send_request">
      <SimpleButton type="send">
        <button class="btn">
          {{ t("Send_request") }}
        </button></SimpleButton
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
.specificationsCar {
  h6 {
    font-size: 14px;
    span {
      font-size: 22px;
      vertical-align: super;
      font-weight: 700;
    }
  }
  p img {
    vertical-align: sub;
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
      color: white;
    }
  }
  .information {
    background: #fafafa;
    padding: 25px 8px 18px 40px;
    border-radius: 8px;
    margin-top: 20px;
    .row {
      margin-bottom: 10px;
      div:first-child {
        font-weight: bold;
      }
    }
  }
  .Send_request {
    width: 100%;
    button {
      width: 100%;
      margin-top: 20px;
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
