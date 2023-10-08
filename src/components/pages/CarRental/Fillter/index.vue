<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";

import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="Fillter">
    <h4>{{ t("Search_filter") }}</h4>
    <div class="row">
      <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Car_type") }}</label
        >
        <SimpleInput>
          <select class="form-control">
            <option></option>
            sdsaasd
          </select></SimpleInput
        >
      </div>
      <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Car_model") }}</label
        >
        <SimpleInput>
          <select class="form-control">
            <option>asdasd</option>
          </select></SimpleInput
        >
      </div>
      <div class="col-lg-12 range">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Year_model") }}</label
        >
        <SimpleInput>
          <input type="range" class="form-range" id="disabledRange"
        /></SimpleInput>
        <div class="info"><span>2018</span><span>2023</span></div>
      </div>
      <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Number_seat") }}</label
        >
        <SimpleInput>
          <select class="form-control">
            <option>asdasd</option>
          </select></SimpleInput
        >
      </div>
      <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Price_range") }}</label
        >
        <div class="row p-0 m-0">
          <div class="col-lg-6 p-0 m-0">
            <NiceInput
              ><select class="form-control">
                <option></option></select
            ></NiceInput>
          </div>
          <div class="col-lg-6 px-1 m-0">
            <NiceInput
              ><select class="form-control">
                <option></option></select
            ></NiceInput>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Rating") }}</label
        >
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="5">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="4">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="3">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="2">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="1">1 star</label>
        </div>
      </div>
      <div class="col-lg-12">
        <SimpleButton type="send" class="register_lab">
          <button type="submit">
            {{ t("Apply") }}
            <img
              src="../../../../assets/images/global/icons/global/Homepage/location.svg"
            /></button
        ></SimpleButton>
      </div>
      <div class="col-lg-12 Reset">
        <router-link to="/" class="color-main">{{
          t("Reset_all")
        }}</router-link>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.Fillter {
  border: 1px solid #e7e7e7;
  width: 90%;
  margin: auto auto 100px;
  padding: 20px 10px;
  h4 {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    margin: 0px 0px 20px;
  }
  .row {
    margin: auto;
    /* Rate */
    .rate {
      width: 100%;
      /* float: left; */
      height: 46px;
      display: flex;
      padding: 0 10px;
    }
    .rate:not(:checked) > input {
      position: absolute;
      top: -9999px;
    }
    .rate:not(:checked) > label {
      float: right;
      width: 1em;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: 30px;
      color: #ccc;
    }
    .rate:not(:checked) > label:before {
      content: "★ ";
    }
    .rate > input:checked ~ label {
      color: #ffc700;
    }
    .rate:not(:checked) > label:hover,
    .rate:not(:checked) > label:hover ~ label {
      color: #deb217;
    }
    .rate > input:checked + label:hover,
    .rate > input:checked + label:hover ~ label,
    .rate > input:checked ~ label:hover,
    .rate > input:checked ~ label:hover ~ label,
    .rate > label:hover ~ input:checked ~ label {
      color: #c59b08;
    }
    label {
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 600;
      img {
        width: 20px;
        height: 20px;
        vertical-align: sub;
        margin-right: 2px;
      }
    }
    .range {
      .simple-input input {
        border: 0px;
      }
      .info {
        justify-content: space-between;
        display: flex;
        margin-top: -15px;
        margin-bottom: 15px;
      }
    }
    .simple-button button {
      border: 0px;
      width: 100%;
      margin-top: 10px;
    }
    .Reset {
      a {
        display: block;
        margin: auto;
        width: 100%;
        text-align: center;
      }
      margin: 10px auto;
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
