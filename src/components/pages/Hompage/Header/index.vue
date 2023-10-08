<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <header>
    <div class="container">
      <h1
        data-aos="fade-right"
        data-aos-offset="600"
        data-aos-easing="ease-in-out"
      >
        {{ t("save") }} <span class="color-main">{{ t("time") }}</span>
        {{ t("withOur") }} <br /><span class="color-main">{{
          t("Eagles")
        }}</span>
        {{ t("car_rental") }}
      </h1>
      <div class="card p-3 mt-4">
        <h4>{{ t("Book_car") }}</h4>
        <div class="row flex">
          <div class="col-lg-4">
            <label
              ><img
                src="../../../../assets/images/global/icons/global/Homepage/location.svg"
              />{{ t("Location") }}</label
            >
            <SimpleInput>
              <input
                type="text"
                :placeholder="t('Location')"
                class="form-control"
                name="Location"
            /></SimpleInput>
          </div>
          <div class="col-lg-3">
            <label
              ><img
                src="../../../../assets/images/global/icons/global/date.svg"
              />{{ t("Pick_up") }}</label
            >
            <SimpleInput
              ><input type="date" class="form-control" name="Pick_up"
            /></SimpleInput>
          </div>
          <div class="col-lg-3">
            <label
              ><img
                src="../../../../assets/images/global/icons/global/date.svg"
              />{{ t("Drop_of") }}</label
            >
            <SimpleInput
              ><input type="date" class="form-control"
            /></SimpleInput>
          </div>
          <div class="col-lg-2 mt-3">
            <SimpleButton type="send" class="register_lab">
              <button type="submit">
                {{ t("Search") }}
                <img
                  src="../../../../assets/images/global/icons/global/Homepage/search-normal.svg"
                /></button
            ></SimpleButton>
          </div>
        </div>
      </div>
      <div
        class="carImage"
        data-aos="fade-left"
        data-aos-offset="600"
        data-aos-easing="ease-in-out"
      >
        <img
          src="../../../../assets/images/global/icons/global/Homepage/car.svg"
        />
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "../../../../assets/scss/variables";
header {
  background: url(../../../../assets/images/global/icons/global/Homepage/background_home.svg)
    no-repeat center center;
  background-size: cover;
  height: max-content;
  width: 100%;
  height: 746px;
  position: relative;
  .container {
    overflow-y: hidden;
    h1 {
      color: white;
      padding-top: 16%;
      font-size: 50px;
      line-height: 1.5;
      font-weight: 700;
      padding-bottom: 20px;
    }
    h4 {
      font-weight: 700;
      font-size: 26px;
      margin: 0px 0px 20px;
    }
    .card {
      width: 73%;
      .row.flex {
        align-items: center;
        label {
          vertical-align: middle;
          font-weight: 600;
          margin-bottom: 10px;
          img {
            margin-right: 5px;
            display: inline-block;
            vertical-align: unset;
          }
        }
        input {
          text-align: left;
          border-radius: 0px;
          height: 47px;
        }
        button {
          text-align: center;
          padding: 10px 20px;
          box-shadow: 0px 10px 50px 0px #f4a71e69;
          border-radius: 0px;

          img {
            margin-right: 5px;
            display: inline-block;
            width: 24px;
            height: 24px;
            margin: 0px 10px;
          }
        }
      }
    }
    .carImage {
      position: absolute;
      z-index: 2;
      right: -10px;
      top: 59%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

/****media****/

@media screen and (max-width: 1240px) {
  header {
    .card {
      width: 100%;
    }
    .carImage {
      top: 80%;
    }
  }
}
@media screen and (max-width: 1210px) {
  header {
    .container {
      .card {
        width: 95%;
        margin: auto;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  header {
    padding-bottom: 150px;
    height: auto;
    .container {
      .card {
        width: 95%;
        margin: auto;
      }
      .carImage {
        position: relative;
      }
      h1 {
        padding-top: 25%;
        font-size: 30px;
      }
    }
  }
}

/*ar version */
.is-ar {
  header .row input {
    text-align: right;
  }
  header .card .row.flex label img {
    margin-left: 5px;
    margin-right: 0px;
    vertical-align: middle;
  }
  header .simple-button {
    text-align: center;
  }
  header .carImage {
    left: 10px;
    right: auto;
    img {
      transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
    }
  }
}
</style>
