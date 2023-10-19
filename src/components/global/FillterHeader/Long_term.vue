<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";

//useI18n
const { t } = useI18n();

//Return_point
const Return_pointLong_term = ref(false);

//onMounted
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div
    class="card p-3"
    :class="Return_pointLong_term ? '' : 'withReturn_point'"
  >
    <h4>{{ t("Book_car") }}</h4>
    <div class="row flex">
      <div class="Location">
        <label
          ><img
            src="@//assets/images/global/icons/global/Homepage/location.svg"
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
      <div v-if="Return_pointLong_term">
        <label
          ><img
            src="@//assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Return_point") }}</label
        >
        <SimpleInput>
          <select
            type="text"
            :placeholder="t('Return_point')"
            class="form-control"
            name="Return_point"
          >
            <option>dsad</option>
          </select></SimpleInput
        >
      </div>
      <div>
        <label
          ><img src="@//assets/images/global/icons/global/date.svg" />{{
            t("Pick_up")
          }}</label
        >
        <SimpleInput
          ><input type="date" class="form-control" name="Pick_up"
        /></SimpleInput>
      </div>
      <div>
        <label
          ><img src="@//assets/images/global/icons/global/date.svg" />{{
            t("Drop_of")
          }}</label
        >
        <SimpleInput><input type="date" class="form-control" /></SimpleInput>
      </div>
      <div class="mt-3 buttons">
        <SimpleButton type="send" class="register_lab">
          <button type="submit">
            {{ t("Search") }}
            <img
              src="@//assets/images/global/icons/global/Homepage/search-normal.svg"
            /></button
        ></SimpleButton>
      </div>
    </div>
    <h6
      class="Return-point"
      @click="Return_pointLong_term = true"
      v-if="!Return_pointLong_term"
    >
      + Return point
    </h6>
  </div>
</template>
<style lang="scss" scoped>
@import "./styleing.scss";
</style>
