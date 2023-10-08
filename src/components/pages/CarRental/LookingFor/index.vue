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
  <div class="card p-3 mt-4">
    <h4>{{ t("What_looking") }}</h4>
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
        <SimpleInput><input type="date" class="form-control" /></SimpleInput>
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
</template>
<style lang="scss" scoped>
@import "../../../../assets/scss/variables";

.card {
  width: 80%;
  margin: auto;
  background: white;
  h4 {
    font-weight: 700;
    font-size: 20px;
    margin: 0px 0px 20px;
  }
  .row {
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

/****media****/

@media screen and (max-width: 1240px) {
  header {
    .card {
      width: 100%;
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
    }
  }
}

/*ar version */
.is-ar {
  header .card .row.flex label img {
    margin-left: 5px;
    margin-right: 0px;
    vertical-align: middle;
  }
  header .simple-button {
    text-align: center;
  }
}
</style>
